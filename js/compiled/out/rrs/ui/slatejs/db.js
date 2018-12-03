// Compiled by ClojureScript 1.10.339 {}
goog.provide('rrs.ui.slatejs.db');
goog.require('cljs.core');
/**
 * Returns a path to rrs.ui.slatejs data in app db.
 */
rrs.ui.slatejs.db.data_path = (function rrs$ui$slatejs$db$data_path(var_args){
var G__23199 = arguments.length;
switch (G__23199) {
case 0:
return rrs.ui.slatejs.db.data_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return rrs.ui.slatejs.db.data_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rrs.ui.slatejs.db.data_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"slatejs","slatejs",132703083)], null);
});

rrs.ui.slatejs.db.data_path.cljs$core$IFn$_invoke$arity$1 = (function (appendix){
return cljs.core.flatten.call(null,cljs.core.conj.call(null,rrs.ui.slatejs.db.data_path.call(null),appendix));
});

rrs.ui.slatejs.db.data_path.cljs$lang$maxFixedArity = 1;

if((typeof rrs !== 'undefined') && (typeof rrs.ui !== 'undefined') && (typeof rrs.ui.slatejs !== 'undefined') && (typeof rrs.ui.slatejs.db !== 'undefined') && (typeof rrs.ui.slatejs.db.editor_ref_atom !== 'undefined')){
} else {
rrs.ui.slatejs.db.editor_ref_atom = cljs.core.atom.call(null,null);
}
if((typeof rrs !== 'undefined') && (typeof rrs.ui !== 'undefined') && (typeof rrs.ui.slatejs !== 'undefined') && (typeof rrs.ui.slatejs.db !== 'undefined') && (typeof rrs.ui.slatejs.db.cached_editor_values_atom !== 'undefined')){
} else {
rrs.ui.slatejs.db.cached_editor_values_atom = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Returns cached editor-value stored under `section-key`.
 */
rrs.ui.slatejs.db.db_get_cached_editor_value = (function rrs$ui$slatejs$db$db_get_cached_editor_value(section_key){
return cljs.core.get.call(null,cljs.core.deref.call(null,rrs.ui.slatejs.db.cached_editor_values_atom),section_key);
});
/**
 * Returns a reference to the current slatejs editor.
 */
rrs.ui.slatejs.db.db_get_editor_ref = (function rrs$ui$slatejs$db$db_get_editor_ref(){
return cljs.core.deref.call(null,rrs.ui.slatejs.db.editor_ref_atom);
});

//# sourceMappingURL=db.js.map?rel=1543803796657
