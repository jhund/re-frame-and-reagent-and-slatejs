// Compiled by ClojureScript 1.10.339 {}
goog.provide('rrs.ui.section.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('rrs.ui.section.db');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("rrs.section","sub-data","rrs.section/sub-data",2127141575),(function rrs$ui$section$subs$sub_data(db,p__23217){
var vec__23218 = p__23217;
var _ = cljs.core.nth.call(null,vec__23218,(0),null);
var section_key = cljs.core.nth.call(null,vec__23218,(1),null);
return cljs.core.get_in.call(null,db,rrs.ui.section.db.data_path.call(null,section_key));
}));

//# sourceMappingURL=subs.js.map?rel=1543803796694
