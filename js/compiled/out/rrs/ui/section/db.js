// Compiled by ClojureScript 1.10.339 {}
goog.provide('rrs.ui.section.db');
goog.require('cljs.core');
/**
 * Returns a path to rrs.ui.section data in app db.
 */
rrs.ui.section.db.data_path = (function rrs$ui$section$db$data_path(var_args){
var G__23206 = arguments.length;
switch (G__23206) {
case 0:
return rrs.ui.section.db.data_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return rrs.ui.section.db.data_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rrs.ui.section.db.data_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sections-data","sections-data",719667415)], null);
});

rrs.ui.section.db.data_path.cljs$core$IFn$_invoke$arity$1 = (function (appendix){
return cljs.core.flatten.call(null,cljs.core.conj.call(null,rrs.ui.section.db.data_path.call(null),appendix));
});

rrs.ui.section.db.data_path.cljs$lang$maxFixedArity = 1;

/**
 * Returns data for section under `section-key`.
 */
rrs.ui.section.db.db_get_data = (function rrs$ui$section$db$db_get_data(db,section_key){
return cljs.core.get_in.call(null,db,rrs.ui.section.db.data_path.call(null,section_key));
});

//# sourceMappingURL=db.js.map?rel=1543803796672
