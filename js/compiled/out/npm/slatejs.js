// Compiled by ClojureScript 1.10.339 {}
goog.provide('npm.slatejs');
goog.require('cljs.core');
goog.require('goog.object');
npm.slatejs.is_hotkey = goog.object.getValueByKeys(window,"deps","is-hotkey");
npm.slatejs.slate = goog.object.getValueByKeys(window,"deps","slate");
npm.slatejs.slate_html_serializer = goog.object.getValueByKeys(window,"deps","slate-html-serializer");
npm.slatejs.slate_react = goog.object.getValueByKeys(window,"deps","slate-react");
npm.slatejs.isHotkey = goog.object.get(npm.slatejs.is_hotkey,"isHotkey");
npm.slatejs.Editor = goog.object.get(npm.slatejs.slate_react,"Editor");
npm.slatejs.Html = goog.object.get(npm.slatejs.slate_html_serializer,"default");
npm.slatejs.Value = goog.object.get(npm.slatejs.slate,"Value");

//# sourceMappingURL=slatejs.js.map?rel=1543701277513
