// Compiled by ClojureScript 1.10.339 {}
goog.provide('rrs.ui.db');
goog.require('cljs.core');
/**
 * Returns a path to rrs.ui data in app db.
 */
rrs.ui.db.data_path = (function rrs$ui$db$data_path(var_args){
var G__23211 = arguments.length;
switch (G__23211) {
case 0:
return rrs.ui.db.data_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return rrs.ui.db.data_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rrs.ui.db.data_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"data","data",-232669377)], null);
});

rrs.ui.db.data_path.cljs$core$IFn$_invoke$arity$1 = (function (appendix){
return cljs.core.flatten.call(null,cljs.core.conj.call(null,rrs.ui.db.data_path.call(null),appendix));
});

rrs.ui.db.data_path.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=db.js.map?rel=1543701277490
