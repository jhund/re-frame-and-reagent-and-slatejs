(ns rrs.ui.views
  (:require
   [clojure.string :as string]
   [re-frame.core :as re-frame]
   [rrs.ui.section.views :as ui.section.views]
   [rrs.ui.slatejs.db :as ui.slatejs.db]
   [rrs.ui.slatejs.views :as ui.slatejs.views]))

(defn page-header
  []
  [:div.rrs-header
   [:h2 "Integrating SlateJS into a re-frame (and reagent) app"]
   [:p
    [:a.button.button-outline
     {:href "https://github.com/jhund/re-frame-and-reagent-and-slatejs"}
     "View source at Github"]]
   [:p "Click on a section card to edit it."]])

(defn data-inspector
  "Renders a table with some interesting re-frame app-db data."
  []
  (let [active-marks @(re-frame/subscribe [:rrs.slatejs/sub-active-marks])
        selection-digest @(re-frame/subscribe [:rrs.slatejs/sub-selection-digest])
        current-section-key @(re-frame/subscribe [:rrs.ui/sub-current-section-key])
        c (string/join "\n"
                       [(str "current-section:  " current-section-key)
                        (str "active-marks:     " active-marks)
                        (str "selection-digest: " selection-digest)])]
    [:div.rrs-data-inspector
     [:h3 "Data inspector"]
     [:pre [:code c]]]))

(defn keyboard-shortcuts
  "Renders help for keyboard shortcuts."
  []
  [:div.rrs-keyboard-shortcuts
   [:h3 "Keyboard shortcuts"]
   [:table
    [:thead
     [:tr
      [:th "Function"]
      [:th "macOS"]
      [:th "Windows"]]]
    [:tbody
     [:tr
      [:td "Format bold"]
      [:td [:kbd "⌘ Command"] " + " [:kbd "B"]]
      [:td [:kbd "❖ Windows"] " + " [:kbd "B"]]]
     [:tr
      [:td "Format italic"]
      [:td [:kbd "⌘ Command"] " + " [:kbd "I"]]
      [:td [:kbd "❖ Windows"] " + " [:kbd "I"]]]
    ]]])

(defn toolbar-container
  "Wrapper around the toolbar so that when the subscribed subscription (regularly, on every keystroke)
  change, we don't trigger an expensive re-render of the main-panel."
  []
  (let [current-section-key @(re-frame/subscribe [:rrs.ui/sub-current-section-key])
        active-marks @(re-frame/subscribe [:rrs.slatejs/sub-active-marks])
        selection-digest @(re-frame/subscribe [:rrs.slatejs/sub-selection-digest])
        editor-ref (ui.slatejs.db/db-get-editor-ref)]
    [ui.slatejs.views/toolbar current-section-key editor-ref active-marks selection-digest]))

(defn main-panel []
  "Root level view for this app."
  (let [section-keys @(re-frame/subscribe [:rrs.ui/sub-section-keys])]
    [:div {:style {:margin "2em auto" :maxWidth "50rem"}}
     [page-header]
     [:hr]
     [toolbar-container]
     (doall
          (map
            (fn [section-key]
              ^{:key section-key} [ui.section.views/section section-key])
            section-keys))
     [data-inspector]
     [keyboard-shortcuts]]))
