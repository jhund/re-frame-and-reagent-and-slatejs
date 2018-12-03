// Compiled by ClojureScript 1.10.339 {}
goog.provide('rrs.ui.slatejs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('npm.slatejs');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('rrs.ui.slatejs.db');
rrs.ui.slatejs.core.is_hotkey_mod_b = npm.slatejs.isHotkey.call(null,"mod+b");
rrs.ui.slatejs.core.is_hotkey_mod_i = npm.slatejs.isHotkey.call(null,"mod+i");
/**
 * Returns a vector with the 6 selection defining params.
 *   Used to trigger re-rendering of toolbar formatting buttons when selection changes.
 */
rrs.ui.slatejs.core.selection_digest = (function rrs$ui$slatejs$core$selection_digest(selection){
var selection_clj = cljs.core.js__GT_clj.call(null,selection.toJS());
var map__23225 = selection_clj;
var map__23225__$1 = ((((!((map__23225 == null)))?(((((map__23225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23225):map__23225);
var map__23226 = cljs.core.get.call(null,map__23225__$1,"anchor");
var map__23226__$1 = ((((!((map__23226 == null)))?(((((map__23226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23226):map__23226);
var anchor_offset = cljs.core.get.call(null,map__23226__$1,"offset");
var anchor_path = cljs.core.get.call(null,map__23226__$1,"path");
var map__23227 = cljs.core.get.call(null,map__23225__$1,"focus");
var map__23227__$1 = ((((!((map__23227 == null)))?(((((map__23227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23227):map__23227);
var focus_offset = cljs.core.get.call(null,map__23227__$1,"offset");
var focus_path = cljs.core.get.call(null,map__23227__$1,"path");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [anchor_path,anchor_offset,focus_path,focus_offset], null);
});
/**
 * Toggles `mark-type` in editor's current selection.
 */
rrs.ui.slatejs.core.toggle_mark = (function rrs$ui$slatejs$core$toggle_mark(event,mark_type,editor){
var props = editor.props;
var on_change = props.onChange;
var updated_editor = editor.toggleMark(mark_type);
event.preventDefault();

return on_change.call(null,updated_editor);
});
/**
 * Renders a slatejs mark to HTML.
 */
rrs.ui.slatejs.core.render_mark = (function rrs$ui$slatejs$core$render_mark(props,editor,next){
var attributes = props.attributes;
var children = props.children;
var mark = props.mark;
var mark_type = mark.type;
var G__23231 = mark_type;
switch (G__23231) {
case "bold":
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.js__GT_clj.call(null,attributes),children], null));

break;
case "italic":
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),cljs.core.js__GT_clj.call(null,attributes),children], null));

break;
default:
return next.call(null);

}
});
/**
 * Event callback for keyDown event.
 */
rrs.ui.slatejs.core.on_key_down = (function rrs$ui$slatejs$core$on_key_down(event,editor,next){
if(cljs.core.truth_(rrs.ui.slatejs.core.is_hotkey_mod_b.call(null,event))){
return rrs.ui.slatejs.core.toggle_mark.call(null,event,"bold",editor);
} else {
if(cljs.core.truth_(rrs.ui.slatejs.core.is_hotkey_mod_i.call(null,event))){
return rrs.ui.slatejs.core.toggle_mark.call(null,event,"italic",editor);
} else {
return next.call(null);

}
}
});
/**
 * Returns a blank editor value.
 */
rrs.ui.slatejs.core.blank_value = (function rrs$ui$slatejs$core$blank_value(){
return npm.slatejs.Value.fromJSON(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"document","document",-1329188687),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"object","object",1474613949),"block",new cljs.core.Keyword(null,"type","type",1174270348),"paragraph",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object","object",1474613949),"text",new cljs.core.Keyword(null,"leaves","leaves",-2143630574),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),""], null)], null)], null)], null)], null)], null)], null)], null)));
});
rrs.ui.slatejs.core.html_serializer_rules = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),(function rrs$ui$slatejs$core$deserialize_all(el,next){
var el_name = el.tagName.toLowerCase();
var child_nodes = el.childNodes;
var deserialized_child_nodes = next.call(null,child_nodes);
var G__23233 = el_name;
switch (G__23233) {
case "em":
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"object","object",1474613949),"mark",new cljs.core.Keyword(null,"type","type",1174270348),"italic",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),deserialized_child_nodes], null));

break;
case "p":
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"object","object",1474613949),"block",new cljs.core.Keyword(null,"type","type",1174270348),"paragraph",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),deserialized_child_nodes], null));

break;
case "strong":
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"object","object",1474613949),"mark",new cljs.core.Keyword(null,"type","type",1174270348),"bold",new cljs.core.Keyword(null,"nodes","nodes",-2099585805),deserialized_child_nodes], null));

break;
default:
return undefined;

}
}),new cljs.core.Keyword(null,"serialize","serialize",-69216574),(function rrs$ui$slatejs$core$serialize_all(object,children){
var slate_object = object.object;
var slate_type = object.type;
var G__23234 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slate_object,slate_type], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["block","paragraph"], null),G__23234)){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.PersistentArrayMap.EMPTY,children], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mark","italic"], null),G__23234)){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),cljs.core.PersistentArrayMap.EMPTY,children], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mark","bold"], null),G__23234)){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.PersistentArrayMap.EMPTY,children], null));
} else {
return undefined;

}
}
}
})], null)], null);
rrs.ui.slatejs.core.html_serializer = (new npm.slatejs.Html(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rules","rules",1198912366),rrs.ui.slatejs.core.html_serializer_rules], null))));
/**
 * Converts `html` to a slatejs Value object.
 */
rrs.ui.slatejs.core.deserialize_html = (function rrs$ui$slatejs$core$deserialize_html(html){
return rrs.ui.slatejs.core.html_serializer.deserialize(html);
});
/**
 * Returns the effective editor value for section-key.
 *   First tries to use a cached editor value, then computes it from existing html.
 *   Finally it uses a blank editor value.
 */
rrs.ui.slatejs.core.effective_editor_value = (function rrs$ui$slatejs$core$effective_editor_value(section_key,section_html){
var cached_editor_value = rrs.ui.slatejs.db.db_get_cached_editor_value.call(null,section_key);
var has_section_html_QMARK_ = !(cljs.core._EQ_.call(null,"",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(section_html)].join('')));
var or__3949__auto__ = cached_editor_value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = (function (){var and__3938__auto__ = has_section_html_QMARK_;
if(and__3938__auto__){
return rrs.ui.slatejs.core.deserialize_html.call(null,section_html);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return rrs.ui.slatejs.core.blank_value.call(null);
}
}
});
/**
 * Derives salient attrs from editor-value as cljs data.
 *   These attrs are used for persistence in app-db, and
 *   to trigger toolbar button re-renders using reagent atoms.
 */
rrs.ui.slatejs.core.editor_value_js__GT_clj = (function rrs$ui$slatejs$core$editor_value_js__GT_clj(editor_value){
var html = rrs.ui.slatejs.core.html_serializer.serialize(editor_value);
var slatejs_document = editor_value.document;
var plain_text = slatejs_document.text;
var active_marks = cljs.core.map.call(null,((function (html,slatejs_document,plain_text){
return (function (p1__23236_SHARP_){
return p1__23236_SHARP_.type;
});})(html,slatejs_document,plain_text))
,editor_value.activeMarks.toJS());
var selection_digest = rrs.ui.slatejs.core.selection_digest.call(null,editor_value.selection);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"html","html",-998796897),html,new cljs.core.Keyword(null,"plain-text","plain-text",369463634),plain_text,new cljs.core.Keyword(null,"active-marks","active-marks",-994970259),active_marks,new cljs.core.Keyword(null,"selection-digest","selection-digest",964829504),selection_digest], null);
});

//# sourceMappingURL=core.js.map?rel=1543803796736
