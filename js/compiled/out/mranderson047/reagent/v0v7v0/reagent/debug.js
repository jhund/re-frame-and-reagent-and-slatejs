// Compiled by ClojureScript 1.10.339 {}
goog.provide('mranderson047.reagent.v0v7v0.reagent.debug');
goog.require('cljs.core');
mranderson047.reagent.v0v7v0.reagent.debug.has_console = (typeof console !== 'undefined');
mranderson047.reagent.v0v7v0.reagent.debug.tracking = false;
if((typeof mranderson047 !== 'undefined') && (typeof mranderson047.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v7v0 !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent.debug !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent.debug.warnings !== 'undefined')){
} else {
mranderson047.reagent.v0v7v0.reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof mranderson047 !== 'undefined') && (typeof mranderson047.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v7v0 !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent.debug !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent.debug.track_console !== 'undefined')){
} else {
mranderson047.reagent.v0v7v0.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__28980__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28980 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28981__i = 0, G__28981__a = new Array(arguments.length -  0);
while (G__28981__i < G__28981__a.length) {G__28981__a[G__28981__i] = arguments[G__28981__i + 0]; ++G__28981__i;}
  args = new cljs.core.IndexedSeq(G__28981__a,0,null);
} 
return G__28980__delegate.call(this,args);};
G__28980.cljs$lang$maxFixedArity = 0;
G__28980.cljs$lang$applyTo = (function (arglist__28982){
var args = cljs.core.seq(arglist__28982);
return G__28980__delegate(args);
});
G__28980.cljs$core$IFn$_invoke$arity$variadic = G__28980__delegate;
return G__28980;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__28983__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28983 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28984__i = 0, G__28984__a = new Array(arguments.length -  0);
while (G__28984__i < G__28984__a.length) {G__28984__a[G__28984__i] = arguments[G__28984__i + 0]; ++G__28984__i;}
  args = new cljs.core.IndexedSeq(G__28984__a,0,null);
} 
return G__28983__delegate.call(this,args);};
G__28983.cljs$lang$maxFixedArity = 0;
G__28983.cljs$lang$applyTo = (function (arglist__28985){
var args = cljs.core.seq(arglist__28985);
return G__28983__delegate(args);
});
G__28983.cljs$core$IFn$_invoke$arity$variadic = G__28983__delegate;
return G__28983;
})()
;})(o))
;

return o;
})();
}
mranderson047.reagent.v0v7v0.reagent.debug.track_warnings = (function mranderson047$reagent$v0v7v0$reagent$debug$track_warnings(f){
mranderson047.reagent.v0v7v0.reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.debug.warnings,null);

mranderson047.reagent.v0v7v0.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1543701288601
