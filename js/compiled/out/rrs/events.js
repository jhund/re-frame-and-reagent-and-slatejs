// Compiled by ClojureScript 1.10.339 {}
goog.provide('rrs.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('rrs.db');
goog.require('rrs.ui.events');
goog.require('rrs.ui.slatejs.events');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("rrs","cmd-initialize-db","rrs/cmd-initialize-db",619683230),(function rrs$events$cmd_initialize_db_handler(_,___$1){
return rrs.db.default_db;
}));

//# sourceMappingURL=events.js.map?rel=1543701277638
