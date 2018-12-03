// Compiled by ClojureScript 1.10.339 {}
goog.provide('rrs.ui.slatejs.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('rrs.ui.db');
goog.require('rrs.ui.section.db');
goog.require('rrs.ui.slatejs.core');
goog.require('rrs.ui.slatejs.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("rrs.ui.slatejs","evt-editor-value-changed","rrs.ui.slatejs/evt-editor-value-changed",-1352344398),(function rrs$ui$slatejs$events$evt_editor_changed_handler(db,p__23256){
var vec__23257 = p__23256;
var _ = cljs.core.nth.call(null,vec__23257,(0),null);
var section_key = cljs.core.nth.call(null,vec__23257,(1),null);
var editor_value = cljs.core.nth.call(null,vec__23257,(2),null);
var editor_value_attrs = rrs.ui.slatejs.core.editor_value_js__GT_clj.call(null,editor_value);
var map__23260 = editor_value_attrs;
var map__23260__$1 = ((((!((map__23260 == null)))?(((((map__23260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23260):map__23260);
var html = cljs.core.get.call(null,map__23260__$1,new cljs.core.Keyword(null,"html","html",-998796897));
var plain_text = cljs.core.get.call(null,map__23260__$1,new cljs.core.Keyword(null,"plain-text","plain-text",369463634));
var active_marks = cljs.core.get.call(null,map__23260__$1,new cljs.core.Keyword(null,"active-marks","active-marks",-994970259));
var selection_digest = cljs.core.get.call(null,map__23260__$1,new cljs.core.Keyword(null,"selection-digest","selection-digest",964829504));
var existing_section_data = rrs.ui.section.db.db_get_data.call(null,db,section_key);
var new_section_data = cljs.core.assoc.call(null,cljs.core.assoc.call(null,existing_section_data,new cljs.core.Keyword(null,"html","html",-998796897),html),new cljs.core.Keyword(null,"plain-text","plain-text",369463634),plain_text);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,rrs.ui.section.db.data_path.call(null,section_key),new_section_data),rrs.ui.slatejs.db.data_path.call(null,new cljs.core.Keyword(null,"active-marks","active-marks",-994970259)),active_marks),rrs.ui.slatejs.db.data_path.call(null,new cljs.core.Keyword(null,"selection-digest","selection-digest",964829504)),selection_digest);
}));

//# sourceMappingURL=events.js.map?rel=1543803796843
