(ns rrs.events
  (:require
   [re-frame.core :refer [path reg-cofx reg-event-db reg-event-fx reg-fx]]
   [rrs.db]
   [rrs.ui.events]
   [rrs.ui.slatejs.events]))


;; Commands


(reg-event-db :rrs/cmd-initialize-db
              (fn cmd-initialize-db-handler
                [_ _]
                rrs.db/default-db))
