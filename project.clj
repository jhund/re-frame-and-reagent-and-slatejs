(defproject rrs "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.339"]
                 [re-frame "0.10.6"]
                 [reagent "0.8.1" :exclusions [cljsjs/react cljsjs/react-dom cljsjs/react-dom-server]]]

  :plugins [[lein-cljsbuild "1.1.7"]]

  :min-lein-version "2.7.1"

  :source-paths ["src/clj"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                    "target"
                                    "test/js"]

  :figwheel {:css-dirs ["resources/public/css"]}

  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.10"]]
                   :plugins      [[lein-figwheel "0.5.15"]]}
             :production {}}

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :figwheel     {:on-jsload "rrs.core/mount-root"
                                       :websocket-host :js-client-host} ; So that rrs.local works as host (to prevent 414 response error because of too many cookies stored under localhost hostname)
                        :compiler     {:main                 rrs.core
                                       :output-to            "resources/public/js/compiled/app.js"
                                       :output-dir           "resources/public/js/compiled/out"
                                       :asset-path           "js/compiled/out"
                                       :source-map-timestamp true
                                       :preloads             [devtools.preload]
                                       :external-config      {:devtools/config {:features-to-install :all}}
                                       :foreign-libs         [{:file "resources/public/js/bundle.js"
                                                               :provides ["react" "react-dom" "react-dom/server"],
                                                               :global-exports {react React
                                                                                react-dom ReactDOM
                                                                                react-dom/server ReactDOMServer}}]}}
                       {:id "min"
                        :source-paths ["src/cljs"]
                        :compiler     {:main            rrs.core
                                       :output-to       "resources/public/js/compiled/app.js"
                                       :optimizations   :simple
                                       :closure-defines {goog.DEBUG false}
                                       :pretty-print    false
                                       :foreign-libs    [{:file "resources/public/js/bundle.js"
                                                          :provides ["react" "react-dom" "react-dom/server"],
                                                          :global-exports {react React
                                                                           react-dom ReactDOM
                                                                           react-dom/server ReactDOMServer}}]}}]})
