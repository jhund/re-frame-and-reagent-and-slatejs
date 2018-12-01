(ns rrs.ui.slatejs.events
  (:require
   [re-frame.core :as re-frame]
   [rrs.ui.db :as ui.db]
   [rrs.ui.section.db :as ui.section.db]
   [rrs.ui.slatejs.core :as slatejs.core]
   [rrs.ui.slatejs.db :as slatejs.db]))


;; Events


;; Triggered when the slatejs editor value changes.
(re-frame/reg-event-db :rrs.ui.slatejs/evt-editor-value-changed
                       (fn evt-editor-changed-handler
                         [db [_ section-key editor-value]]
                         (let [editor-value-attrs (slatejs.core/editor-value-js->clj editor-value)
                               {html             :html
                                plain-text       :plain-text
                                active-marks     :active-marks
                                selection-digest :selection-digest} editor-value-attrs
                               existing-section-data (ui.section.db/db-get-data db section-key)
                               new-section-data (-> existing-section-data
                                                    (assoc :html html)
                                                    (assoc :plain-text plain-text))]
                           (-> db
                               (assoc-in (ui.section.db/data-path section-key) new-section-data)
                               (assoc-in (slatejs.db/data-path :active-marks) active-marks)
                               (assoc-in (slatejs.db/data-path :selection-digest) selection-digest)))))
