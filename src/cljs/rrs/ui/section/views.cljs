(ns rrs.ui.section.views
  (:require
   [clojure.string :as string]
   [re-frame.core :as re-frame]
   [rrs.ui.slatejs.core :as ui.slatejs.core]
   [rrs.ui.slatejs.db :as ui.slatejs.db]
   [rrs.ui.slatejs.views :as ui.slatejs.views]))

(defn section-static
  "Renders a static (non-editable) section identified by `section-key`."
  [section-key]
  (let [section-data @(re-frame/subscribe [:rrs.section/sub-data section-key])
        html (:html section-data)
        title (:title section-data)]
    [:div.rrs-section.rrs-section--static
     {:on-click #(re-frame/dispatch [:rrs.ui/cmd-select-current-section section-key])}
     [:h3 title]
     [:div.section-content {:dangerouslySetInnerHTML {:__html html}}]]))

(defn section-editable
  "Renders an editable section identified by `section-key`."
  [section-key]
  (let [section-data @(re-frame/subscribe [:rrs.section/sub-data section-key])
        title (:title section-data)]
    [:div.rrs-section.rrs-section--editable
     {:on-click #(re-frame/dispatch [:rrs.ui/cmd-select-current-section section-key])}
     [:h3 title]
     [ui.slatejs.views/editor section-data]]))

(defn section
  "Renders a section identifed by `section-key`."
  [section-key]
  (let [current-section-key @(re-frame/subscribe [:rrs.ui/sub-current-section-key])
        current? (= section-key current-section-key)]
    (if current?
      [section-editable section-key]
      [section-static section-key])))
