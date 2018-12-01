// Compiled by ClojureScript 1.10.339 {}
goog.provide('rrs.ui.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('rrs.ui.db');
goog.require('rrs.ui.section.db');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("rrs.ui","sub-current-section-key","rrs.ui/sub-current-section-key",-1936729677),(function rrs$ui$subs$sub_current_section_key(db,_){
return cljs.core.get_in.call(null,db,rrs.ui.db.data_path.call(null,new cljs.core.Keyword(null,"current-section-key","current-section-key",26306232)));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("rrs.ui","sub-section-keys","rrs.ui/sub-section-keys",1390195709),(function rrs$ui$subs$sub_section_keys(db,_){
return cljs.core.keys.call(null,cljs.core.get_in.call(null,db,rrs.ui.section.db.data_path.call(null)));
}));

//# sourceMappingURL=subs.js.map?rel=1543701277497
