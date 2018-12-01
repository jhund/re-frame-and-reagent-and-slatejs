(defproject rrs "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.339"]
                 [re-frame "0.10.6"]
                 [reagent "0.8.1"]
                 [re-frame-utils "0.1.0"]
                 [re-pressed "0.2.2"]
                 [secretary "1.2.3"]
                 [venantius/accountant "0.2.4"]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-cljfmt "0.6.2"]] ; lein cljfmt check OR lein cljfmt fix <path>

  :min-lein-version "2.7.1"

  :source-paths ["src/clj"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                    "target"
                                    "test/js"]

  :figwheel {:css-dirs ["resources/public/css"]}

  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.10"]
                                  [day8.re-frame/re-frame-10x "0.3.2"]]
                   :plugins      [[lein-figwheel "0.5.15"]]}}

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :figwheel     {:on-jsload "rrs.core/mount-root"
                                       :websocket-host :js-client-host} ; So that rrs.local works as host (to prevent 414 response error because of too many cookies stored under localhost hostname)
                        :compiler     {:main                 rrs.core
                                       :output-to            "resources/public/js/compiled/app.js"
                                       :output-dir           "resources/public/js/compiled/out"
                                       :asset-path           "js/compiled/out"
                                       :source-map-timestamp true
                                       :preloads             [devtools.preload
                                                              day8.re-frame-10x.preload]
                                       :external-config      {:devtools/config {:features-to-install :all}}
                                       :closure-defines      {"re_frame.trace.trace_enabled_QMARK_" true}
                                       :foreign-libs         [{:file "resources/public/js/bundle.js"
                                                               :provides ["react" "react-dom" "create-react-class" "react-dom/server"],
                                                               :global-exports {react React
                                                                                react-dom ReactDOM
                                                                                create-react-class createReactClass
                                                                                react-dom/server ReactDOMServer}}]}}]})
