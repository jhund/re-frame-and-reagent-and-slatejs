// Compiled by ClojureScript 1.10.339 {}
goog.provide('rrs.ui.section.views');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('re_frame.core');
goog.require('rrs.ui.slatejs.core');
goog.require('rrs.ui.slatejs.db');
goog.require('rrs.ui.slatejs.views');
/**
 * Renders a static (non-editable) section identified by `section-key`.
 */
rrs.ui.section.views.section_static = (function rrs$ui$section$views$section_static(section_key){
var section_data = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rrs.section","sub-data","rrs.section/sub-data",2127141575),section_key], null)));
var html = new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(section_data);
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section_data);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rrs-section.rrs-section--static","div.rrs-section.rrs-section--static",452398649),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (section_data,html,title){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rrs.ui","cmd-select-current-section","rrs.ui/cmd-select-current-section",-2130125635),section_key], null));
});})(section_data,html,title))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section-content","div.section-content",-392846218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),html], null)], null)], null)], null);
});
/**
 * Renders an editable section identified by `section-key`.
 */
rrs.ui.section.views.section_editable = (function rrs$ui$section$views$section_editable(section_key){
var section_data = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rrs.section","sub-data","rrs.section/sub-data",2127141575),section_key], null)));
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(section_data);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.rrs-section.rrs-section--editable","div.rrs-section.rrs-section--editable",1818374813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (section_data,title){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rrs.ui","cmd-select-current-section","rrs.ui/cmd-select-current-section",-2130125635),section_key], null));
});})(section_data,title))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrs.ui.slatejs.views.editor,section_key], null)], null);
});
/**
 * Renders a section identifed by `section-key`.
 */
rrs.ui.section.views.section = (function rrs$ui$section$views$section(section_key){
var current_section_key = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rrs.ui","sub-current-section-key","rrs.ui/sub-current-section-key",-1936729677)], null)));
var current_QMARK_ = cljs.core._EQ_.call(null,section_key,current_section_key);
if(current_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrs.ui.section.views.section_editable,section_key], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rrs.ui.section.views.section_static,section_key], null);
}
});

//# sourceMappingURL=views.js.map?rel=1543803796794
