(ns rrs.ui.events
  (:require
   [re-frame.core :as re-frame]
   [rrs.ui.db :as ui.db]
   [rrs.ui.section.db :as ui.section.db]
   [rrs.ui.slatejs.core :as ui.slatejs.core]
   [rrs.ui.slatejs.db :as ui.slatejs.db]))


;; Commands


;; Selects a new current section to be edited.
(re-frame/reg-event-db :rrs.ui/cmd-select-current-section
                       (fn cmd-select-current-section-handler
                         [db [_ section-key]]
                         (let [section-data (ui.section.db/db-get-data db section-key)
                               section-html (:html section-data)
                               ed-val (ui.slatejs.core/effective-editor-value section-key section-html)]
                           ;; NOTE: Modifying a regular Clojure atom is not exactly idiomatic re-frame,
                           ;; however we need to assign current section's editor value.
                           (swap! ui.slatejs.db/cached-editor-values-atom assoc section-key ed-val))
                         (-> db
                             (assoc-in (ui.db/data-path :current-section-key) section-key))))
