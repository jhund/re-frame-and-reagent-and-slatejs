(ns rrs.ui.slatejs.core
  (:require
   [clojure.string :as string]
   [npm.slatejs]
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [rrs.ui.slatejs.db :as slatejs.db]))

;; Cache hotkey shortcuts
(def is-hotkey-mod-b (npm.slatejs/isHotkey "mod+b"))
(def is-hotkey-mod-i (npm.slatejs/isHotkey "mod+i"))

(defn selection-digest
  "Returns a vector with the 6 selection defining params.
  Used to trigger re-rendering of toolbar formatting buttons when selection changes."
  [selection]
  (let [selection-clj (js->clj (.toJS selection))
        {{anchor-offset "offset"
          anchor-path   "path"} "anchor"
         {focus-offset  "offset"
          focus-path    "path"} "focus"} selection-clj]
    [anchor-path anchor-offset focus-path focus-offset]))

(defn toggle-mark
  "Toggles `mark-type` in editor's current selection."
  [event mark-type editor]
  (let [props (.-props editor)
        on-change (.-onChange props)
        updated-editor (.toggleMark editor mark-type)]
    (.preventDefault event)
    ;; Call editor's on-change callback to make the change effective.
    (on-change updated-editor)))

(defn render-mark
  "Renders a slatejs mark to HTML."
  [props editor next]
  (let [attributes (.-attributes props)
        children (.-children props)
        mark (.-mark props)
        mark-type (.-type mark)]
    (case mark-type
      "bold"   (reagent/as-element [:strong (js->clj attributes) children])
      "italic" (reagent/as-element [:em (js->clj attributes) children])
      ;; Else: call next to continue with slatejs' plugin stack.
      (next))))

(defn on-key-down
  "Event callback for keyDown event."
  [event editor next]
  (cond
    (is-hotkey-mod-b event) (toggle-mark event "bold" editor)
    (is-hotkey-mod-i event) (toggle-mark event "italic" editor)
    ;; Else: call next to continue with slatejs' plugin stack.
    :else (next)))

(defn blank-value
  "Returns a blank editor value."
  []
  (.fromJSON npm.slatejs/Value
             (clj->js {:document {:nodes [{:object "block"
                                           :type "paragraph"
                                           :nodes [{:object "text"
                                                    :leaves [{:text ""}]}]}]}})))

;; HTML Serializer
;; This serializer is used for the following purposes:
;; * serialize slatejs document to HTML string for display and persistence in app-db.
;; * deserialize HTML string to slatejs document to import existing html into editor.
(def html-serializer-rules
  [{:deserialize (fn deserialize-all
                   [el next]
                   (let [el-name (.toLowerCase (.-tagName el))
                         child-nodes (.-childNodes el)
                         deserialized-child-nodes (next child-nodes)]
                     (case el-name
                       "em"
                       (clj->js {:object "mark"
                                 :type "italic"
                                 :nodes deserialized-child-nodes})
                       "p"
                       (clj->js {:object "block"
                                 :type "paragraph"
                                 :nodes deserialized-child-nodes})
                       "strong"
                       (clj->js {:object "mark"
                                 :type "bold"
                                 :nodes deserialized-child-nodes})
                       ; Else: Return void if no HTML tag matches
                       js/undefined)))
    :serialize (fn serialize-all
                 [object children]
                 (let [slate-object (.-object object)
                       slate-type (.-type object)]
                   ;; NOTE: The serializers below need to be kept in sync with render-node and
                   ;; render-mark functions!
                   ;; TODO: Can we find a way to share the code between these renderers/serializers?
                   (case [slate-object slate-type]
                     ["block"  "paragraph"] (reagent/as-element [:p {} children])
                     ["mark" "italic"] (reagent/as-element [:em {} children])
                     ["mark" "bold"] (reagent/as-element [:strong {} children])
                     js/undefined)))}])

(def html-serializer (npm.slatejs/Html. (clj->js {:rules html-serializer-rules})))

(defn deserialize-html
  "Converts `html` to a slatejs Value object."
  [html]
  (.deserialize html-serializer html))

(defn effective-editor-value
  "Returns the effective editor value for section-key.
  First tries to use a cached editor value, then computes it from existing html.
  Finally it uses a blank editor value."
  [section-key section-html]
  (let [cached-editor-value (slatejs.db/db-get-cached-editor-value section-key)
        has-section-html? (not (= "" (str section-html)))]
    (or cached-editor-value
        (and has-section-html? (deserialize-html section-html))
        (blank-value))))

(defn editor-value-js->clj
  "Derives salient attrs from editor-value as cljs data.
  These attrs are used for persistence in app-db, and
  to trigger toolbar button re-renders using reagent atoms."
  [editor-value]
  (let [html (.serialize html-serializer editor-value)
        slatejs-document (.-document editor-value)
        plain-text (.-text slatejs-document)
        active-marks (map #(.-type %) (.toJS (.-activeMarks editor-value)))
        selection-digest (selection-digest (.-selection editor-value))]
    {:html              html
     :plain-text        plain-text
     :active-marks      active-marks
     :selection-digest  selection-digest}))
