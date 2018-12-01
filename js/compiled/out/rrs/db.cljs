(ns rrs.db)

;; NOTE: No JS objects are allowed inside app-db!
;; They kill performance since checking for equality is very expensive.

(def default-db
  {:sections-data {:section-one   {:html "<p>This is section <strong>one</strong>.</p>"
                                   :plain-text nil
                                   :section-key :section-one
                                   :title "Section one"}
                   :section-two   {:html "<p>This is section <em>two</em>.</p>"
                                   :plain-text nil
                                   :section-key :section-two
                                   :title "Section two"}
                   :section-three {:html "<p>This is section <strong><em>three</em></strong>.</p>"
                                   :plain-text nil
                                   :section-key :section-three
                                   :title "Section three"}}
   :ui {:children {:slatejs {:active-marks []
                             :selection-digest []}}
        :data     {:current-section-key nil}}})
