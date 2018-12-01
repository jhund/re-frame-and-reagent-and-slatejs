(ns rrs.ui.subs
  (:require
   [re-frame.core :refer [reg-sub subscribe]]
   [rrs.ui.db :as ui.db]
   [rrs.ui.section.db :as ui.section.db]))

;; Level 2 subs, cheap

;; Returns section-key for currently edited section.
(reg-sub :rrs.ui/sub-current-section-key
         (fn sub-current-section-key
           [db _]
           (get-in db (ui.db/data-path :current-section-key))))

;; Returns all section keys.
(reg-sub :rrs.ui/sub-section-keys
         (fn sub-section-keys
           [db _]
           (keys (get-in db (ui.section.db/data-path)))))
