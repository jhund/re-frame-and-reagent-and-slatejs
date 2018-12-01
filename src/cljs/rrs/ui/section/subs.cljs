(ns rrs.ui.section.subs
  (:require
   [re-frame.core :refer [reg-sub subscribe]]
   [rrs.ui.section.db :as section.db]))

;; Returns data for section under `section-key`.
(reg-sub :rrs.section/sub-data
         (fn sub-data
           [db [_ section-key]]
           (get-in db (section.db/data-path section-key))))
