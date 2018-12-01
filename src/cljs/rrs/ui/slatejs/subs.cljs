(ns rrs.ui.slatejs.subs
  (:require
   [re-frame.core :refer [reg-sub subscribe]]
   [rrs.ui.slatejs.db :as slatejs.db]))

;; Level 2 subs, cheap

;; Returns active-marks in current slatejs editor's selection.
(reg-sub :rrs.slatejs/sub-active-marks
         (fn sub-active-marks
           [db _]
           (get-in db (slatejs.db/data-path :active-marks))))

;; Returns selection-digest for current slatejs editor.
(reg-sub :rrs.slatejs/sub-selection-digest
         (fn sub-selection-digest
           [db _]
           (get-in db (slatejs.db/data-path :selection-digest))))
