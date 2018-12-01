(ns npm.slatejs
  (:require [goog.object :as gobj]))

;; Expects these packages to be present, via separate webpack bundle
(def is-hotkey (gobj/getValueByKeys js/window "deps" "is-hotkey"))
(def slate (gobj/getValueByKeys js/window "deps" "slate"))
(def slate-html-serializer (gobj/getValueByKeys js/window "deps" "slate-html-serializer"))
(def slate-react (gobj/getValueByKeys js/window "deps" "slate-react"))

;; Makes features available to cljs:
(def isHotkey (gobj/get is-hotkey "isHotkey"))
(def Editor (gobj/get slate-react "Editor"))
(def Html (gobj/get slate-html-serializer "default"))
(def Value (gobj/get slate "Value"))
