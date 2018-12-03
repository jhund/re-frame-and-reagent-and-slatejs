// Compiled by ClojureScript 1.10.339 {}
goog.provide('rrs.ui.slatejs.views');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('npm.slatejs');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('rrs.ui.slatejs.core');
goog.require('rrs.ui.slatejs.db');
/**
 * Renders an editor instance.
 *   Uses a form3 reagent component to manage React lifecycle methods.
 */
rrs.ui.slatejs.views.editor = (function rrs$ui$slatejs$views$editor(section_key){
var section_data = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rrs.section","sub-data","rrs.section/sub-data",2127141575),section_key], null)));
var this_atom = cljs.core.atom.call(null,null);
var cached_editor_values_atom = rrs.ui.slatejs.db.cached_editor_values_atom;
var editor_ref_atom = rrs.ui.slatejs.db.editor_ref_atom;
var html = new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(section_data);
var initial_ed_val = rrs.ui.slatejs.core.effective_editor_value.call(null,section_key,html);
var _ = cljs.core.swap_BANG_.call(null,cached_editor_values_atom,cljs.core.assoc,section_key,initial_ed_val);
var on_change_fn = ((function (section_data,this_atom,cached_editor_values_atom,editor_ref_atom,html,initial_ed_val,_){
return (function (change_or_editor){
var new_value = change_or_editor.value;
cljs.core.swap_BANG_.call(null,cached_editor_values_atom,cljs.core.assoc,section_key,new_value);

var G__23239_23240 = cljs.core.deref.call(null,this_atom);
if((G__23239_23240 == null)){
} else {
reagent.core.force_update.call(null,G__23239_23240);
}

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rrs.ui.slatejs","evt-editor-value-changed","rrs.ui.slatejs/evt-editor-value-changed",-1352344398),section_key,new_value], null));
});})(section_data,this_atom,cached_editor_values_atom,editor_ref_atom,html,initial_ed_val,_))
;
var update_editor_ref_fn = ((function (section_data,this_atom,cached_editor_values_atom,editor_ref_atom,html,initial_ed_val,_,on_change_fn){
return (function (component){
if(cljs.core.truth_(component)){
return cljs.core.reset_BANG_.call(null,editor_ref_atom,component);
} else {
return null;
}
});})(section_data,this_atom,cached_editor_values_atom,editor_ref_atom,html,initial_ed_val,_,on_change_fn))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"slatejs-editor-inner",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (section_data,this_atom,cached_editor_values_atom,editor_ref_atom,html,initial_ed_val,_,on_change_fn,update_editor_ref_fn){
return (function (this$){
return cljs.core.reset_BANG_.call(null,this_atom,this$);
});})(section_data,this_atom,cached_editor_values_atom,editor_ref_atom,html,initial_ed_val,_,on_change_fn,update_editor_ref_fn))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (section_data,this_atom,cached_editor_values_atom,editor_ref_atom,html,initial_ed_val,_,on_change_fn,update_editor_ref_fn){
return (function (){
return cljs.core.reset_BANG_.call(null,this_atom,null);
});})(section_data,this_atom,cached_editor_values_atom,editor_ref_atom,html,initial_ed_val,_,on_change_fn,update_editor_ref_fn))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (section_data,this_atom,cached_editor_values_atom,editor_ref_atom,html,initial_ed_val,_,on_change_fn,update_editor_ref_fn){
return (function (___$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),npm.slatejs.Editor,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"class-name","class-name",945142584),"rrs-slatejs-editor",new cljs.core.Keyword(null,"id","id",-1388402092),["rrs-slatejs-editor-instance-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(section_key)].join(''),new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change_fn,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),rrs.ui.slatejs.core.on_key_down,new cljs.core.Keyword(null,"ref","ref",1289896967),update_editor_ref_fn,new cljs.core.Keyword(null,"render-mark","render-mark",-1338291690),rrs.ui.slatejs.core.render_mark,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,cached_editor_values_atom),section_key)], null)], null);
});})(section_data,this_atom,cached_editor_values_atom,editor_ref_atom,html,initial_ed_val,_,on_change_fn,update_editor_ref_fn))
], null));
});
/**
 * Renders a toolbar formatting button.
 */
rrs.ui.slatejs.views.toolbar_button = (function rrs$ui$slatejs$views$toolbar_button(editor_ref,mark_type,active_marks,selection_digest,children){
var has_mark = cljs.core.some.call(null,(function (p1__23241_SHARP_){
return cljs.core._EQ_.call(null,mark_type,p1__23241_SHARP_);
}),active_marks);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(has_mark)?null:" button-outline"))].join(''),new cljs.core.Keyword(null,"role","role",-736691072),"button",new cljs.core.Keyword(null,"title","title",636505583),mark_type,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (has_mark){
return (function (event){
if(cljs.core.truth_(editor_ref)){
return rrs.ui.slatejs.core.toggle_mark.call(null,event,mark_type,editor_ref);
} else {
return null;
}
});})(has_mark))
], null),children], null);
});
/**
 * Renders a toolbar.
 *   Re-renders are triggered exclusively via props, not re-frame subscriptions so that
 *   we can have multiple instances of toolbar on the same page.
 *   The `current-section-key` arg is not used for rendering, just to trigger a re-render
 *   when it changes.
 */
rrs.ui.slatejs.views.toolbar = (function rrs$ui$slatejs$views$toolbar(current_section_key,editor_ref,active_marks,selection_digest){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rrs-slatejs-toolbar","div.rrs-slatejs-toolbar",-1655139342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Shared toolbar"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrs.ui.slatejs.views.toolbar_button,editor_ref,"bold",active_marks,selection_digest,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," "], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrs.ui.slatejs.views.toolbar_button,editor_ref,"italic",active_marks,selection_digest,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em","em",707813035),"Italic"], null)], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1543803796777
