// Compiled by ClojureScript 1.10.339 {}
goog.provide('rrs.ui.slatejs.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('rrs.ui.slatejs.db');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("rrs.slatejs","sub-active-marks","rrs.slatejs/sub-active-marks",-742551013),(function rrs$ui$slatejs$subs$sub_active_marks(db,_){
return cljs.core.get_in.call(null,db,rrs.ui.slatejs.db.data_path.call(null,new cljs.core.Keyword(null,"active-marks","active-marks",-994970259)));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("rrs.slatejs","sub-selection-digest","rrs.slatejs/sub-selection-digest",-984112903),(function rrs$ui$slatejs$subs$sub_selection_digest(db,_){
return cljs.core.get_in.call(null,db,rrs.ui.slatejs.db.data_path.call(null,new cljs.core.Keyword(null,"selection-digest","selection-digest",964829504)));
}));

//# sourceMappingURL=subs.js.map?rel=1543701277476
