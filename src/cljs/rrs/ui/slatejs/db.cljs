(ns rrs.ui.slatejs.db)

(defn data-path
  "Returns a path to rrs.ui.slatejs data in app db."
  ([]         [:ui :children :slatejs])
  ([appendix] (flatten (conj (data-path) appendix))))

;; NOTE: We store JS objects in regular atoms (not reagent/atoms!) to avoid performance hit.
;; Changes to these atoms should never trigger a re-render.

;; Stores reference to current slatejs editor. This is used to affect changes to
;; the editor programmatically, e.g., via toolbar buttons outside of the editor.
(defonce editor-ref-atom (atom nil))

;; Caches editor values for all slatejs instances (current and non-current).
;; Caching editor values here eliminates the need to re-construct editor values
;; from HTML each time an editor instance is activated.
(defonce cached-editor-values-atom (atom {}))

(defn db-get-cached-editor-value
  "Returns cached editor-value stored under `section-key`."
  [section-key]
  (get @cached-editor-values-atom section-key))

(defn db-get-editor-ref
  "Returns a reference to the current slatejs editor."
  []
  @editor-ref-atom)
