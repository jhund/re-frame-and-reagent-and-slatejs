(ns rrs.core
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [rrs.config]
   [rrs.db]
   [rrs.events]
   [rrs.subs]
   [rrs.ui.views]))

(defn maybe-dev-setup []
  (when rrs.config/debug?
    (enable-console-print!)
    (println "Loading app in dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [rrs.ui.views/main-panel] (.getElementById js/document "app")))

(defn ^:export init [user-attrs]
  (re-frame/dispatch-sync [:rrs/cmd-initialize-db])
  (re-frame/dispatch [:rrs.ui/cmd-select-current-section :section-two])
  (maybe-dev-setup)
  (mount-root))
