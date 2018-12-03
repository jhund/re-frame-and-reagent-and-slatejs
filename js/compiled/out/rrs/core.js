// Compiled by ClojureScript 1.10.339 {}
goog.provide('rrs.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('rrs.config');
goog.require('rrs.db');
goog.require('rrs.events');
goog.require('rrs.subs');
goog.require('rrs.ui.views');
rrs.core.maybe_dev_setup = (function rrs$core$maybe_dev_setup(){
if(rrs.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"Loading app in dev mode");
} else {
return null;
}
});
rrs.core.mount_root = (function rrs$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrs.ui.views.main_panel], null),document.getElementById("app"));
});
rrs.core.init = (function rrs$core$init(user_attrs){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rrs","cmd-initialize-db","rrs/cmd-initialize-db",619683230)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rrs.ui","cmd-select-current-section","rrs.ui/cmd-select-current-section",-2130125635),new cljs.core.Keyword(null,"section-two","section-two",2014896122)], null));

rrs.core.maybe_dev_setup.call(null);

return rrs.core.mount_root.call(null);
});
goog.exportSymbol('rrs.core.init', rrs.core.init);

//# sourceMappingURL=core.js.map?rel=1543803796864
