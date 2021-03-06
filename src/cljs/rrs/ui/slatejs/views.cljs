(ns rrs.ui.slatejs.views
  (:require
   [clojure.string :as string]
   [npm.slatejs]
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [rrs.ui.slatejs.core :as slatejs.core]
   [rrs.ui.slatejs.db :as slatejs.db]))

(defn editor
  "Renders an editor instance.
  Uses a form3 reagent component to manage React lifecycle methods."
  [section-key]
  (let [section-data @(re-frame/subscribe [:rrs.section/sub-data section-key])
        ;; `this-atom` stores a reference to the editor component. We need it to force an update
        ;; in the on-change-fn via `reagent/force-update`.
        this-atom (atom nil)
        ;; `cached-editor-values-atom` is a map with a key for every edited section. The value under
        ;; the section's key is the cached editor value.
        cached-editor-values-atom slatejs.db/cached-editor-values-atom
        ;; `editor-ref-atom` stores a reference to the SlateJS editor. This is required to implement
        ;; the toolbar separately from the editor. We pass the editor-ref to the toolbar so that
        ;; it can cause a change to the editor's value.
        editor-ref-atom slatejs.db/editor-ref-atom
        ;; The section's html. We use it to initialize the editor value when it is edited for the
        ;; first time. We use the cached editor value thereafter.
        html (:html section-data)
        ;; Here we assign the initial editor value when the section is activated for editing.
        initial-ed-val (slatejs.core/effective-editor-value section-key html)
        ;; We store the initial editor value in the `cached-editor-values-atom` where it will
        ;; get picked up as the `:value` prop for the editor.
        _ (swap! cached-editor-values-atom assoc section-key initial-ed-val)
        ;; Callback when the editor changes, typically because of an edit by the user.
        on-change-fn (fn [change-or-editor]
                       (let [new-value (.-value change-or-editor)]
                         ;; Update the cached editor value for the current section
                         (swap! cached-editor-values-atom assoc section-key new-value)
                         ;; Force an instant update.
                         ;; We could use a reagent/atom for editor ref and let the change to
                         ;; it trigger a re-render via reagent. Resetting it will trigger a
                         ;; re-render because it is de-refed in the props to the editor component.
                         ;; However it would only refresh once per animation frame (that's when
                         ;; reagent triggers a re-render). This results in slightly sluggish
                         ;; appearance of typing, and worse, it can result in garbled output
                         ;; if you type faster than reagent re-renders. The cursor will appear
                         ;; to jump around. So instead we trigger a force-update for instant
                         ;; editor re-renders.
                         (some-> @this-atom reagent/force-update)
                         ;; We dispatch an event to persist the new editor value in re-frame's
                         ;; app-db.
                         (re-frame/dispatch [:rrs.ui.slatejs/evt-editor-value-changed section-key new-value])))
        update-editor-ref-fn (fn [component]
                               ;; Called when component is mounted. Passes Editor component as arg.
                               (when component (reset! editor-ref-atom component)))]
    (reagent/create-class
     {:display-name "slatejs-editor-inner"
      ;; Assign `this-atom` after editor is mounted.
      :component-did-mount (fn [this] (reset! this-atom this))
      ;; Clear `this-atom` when editor is unmounted.
      :component-will-unmount (fn [] (reset! this-atom nil))
      ;; The render function. Normally we would repeat the arguments to the outer function,
      ;; however they are not used here since we don't rely on reagent to re-render the editor,
      ;; but on `reagent/force-update` instead.
      :reagent-render (fn [_]
                        [:> npm.slatejs/Editor
                         {:auto-focus   true
                          :class-name   "rrs-slatejs-editor"
                          :id           (str "rrs-slatejs-editor-instance-" section-key)
                          :on-change    on-change-fn
                          :on-key-down  slatejs.core/on-key-down
                          :ref          update-editor-ref-fn
                          :render-mark  slatejs.core/render-mark
                          ;; When the editor is force-updated it will get its new value
                          ;; from the deref'd `cached-editor-values-atom`.
                          :value        (get @cached-editor-values-atom section-key)}])})))

(defn- toolbar-button
  "Renders a toolbar formatting button."
  [editor-ref mark-type active-marks selection-digest children]
  (let [has-mark (some #(= mark-type %) active-marks)]
    [:a.button {:class (str (when-not has-mark " button-outline"))
                :role "button"
                :title mark-type
                :on-mouse-down (fn [event]
                                 (when editor-ref
                                   (slatejs.core/toggle-mark event mark-type editor-ref)))}
     children]))

(defn toolbar
  "Renders a toolbar.
  Re-renders are triggered exclusively via props, not re-frame subscriptions so that
  we can have multiple instances of toolbar on the same page.
  The `current-section-key` arg is not used for rendering, just to trigger a re-render
  when it changes."
  [current-section-key editor-ref active-marks selection-digest]
  [:div.rrs-slatejs-toolbar
   [:h3 "Shared toolbar"]
   [toolbar-button editor-ref "bold" active-marks selection-digest [:strong "Bold"]]
   [:span " "]
   [toolbar-button editor-ref "italic" active-marks selection-digest [:em "Italic"]]])
