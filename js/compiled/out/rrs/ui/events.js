// Compiled by ClojureScript 1.10.339 {}
goog.provide('rrs.ui.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('rrs.ui.db');
goog.require('rrs.ui.section.db');
goog.require('rrs.ui.slatejs.core');
goog.require('rrs.ui.slatejs.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("rrs.ui","cmd-select-current-section","rrs.ui/cmd-select-current-section",-2130125635),(function rrs$ui$events$cmd_select_current_section_handler(db,p__23248){
var vec__23249 = p__23248;
var _ = cljs.core.nth.call(null,vec__23249,(0),null);
var section_key = cljs.core.nth.call(null,vec__23249,(1),null);
return cljs.core.assoc_in.call(null,db,rrs.ui.db.data_path.call(null,new cljs.core.Keyword(null,"current-section-key","current-section-key",26306232)),section_key);
}));

//# sourceMappingURL=events.js.map?rel=1543803796822
