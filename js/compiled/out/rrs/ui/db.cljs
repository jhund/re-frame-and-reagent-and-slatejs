(ns rrs.ui.db)

(defn data-path
  "Returns a path to rrs.ui data in app db."
  ([]         [:ui :data])
  ([appendix] (flatten (conj (data-path) appendix))))
