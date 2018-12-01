// Compiled by ClojureScript 1.10.339 {}
goog.provide('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('cljs.core');
goog.require('goog.async.nextTick');
goog.require('mranderson047.reagent.v0v7v0.reagent.core');
goog.require('mranderson047.reagent.v0v7v0.reagent.ratom');
mranderson047.re_frame.v0v10v2.re_frame.interop.next_tick = goog.async.nextTick;
mranderson047.re_frame.v0v10v2.re_frame.interop.empty_queue = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY);
mranderson047.re_frame.v0v10v2.re_frame.interop.after_render = mranderson047.reagent.v0v7v0.reagent.core.after_render;
/**
 * @define {boolean}
 */
mranderson047.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_ = goog.DEBUG;
mranderson047.re_frame.v0v10v2.re_frame.interop.ratom = (function mranderson047$re_frame$v0v10v2$re_frame$interop$ratom(x){
return mranderson047.reagent.v0v7v0.reagent.core.atom.call(null,x);
});
mranderson047.re_frame.v0v10v2.re_frame.interop.ratom_QMARK_ = (function mranderson047$re_frame$v0v10v2$re_frame$interop$ratom_QMARK_(x){
if(!((x == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.mranderson047$reagent$v0v7v0$reagent$ratom$IReactiveAtom$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,mranderson047.reagent.v0v7v0.reagent.ratom.IReactiveAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,mranderson047.reagent.v0v7v0.reagent.ratom.IReactiveAtom,x);
}
});
mranderson047.re_frame.v0v10v2.re_frame.interop.deref_QMARK_ = (function mranderson047$re_frame$v0v10v2$re_frame$interop$deref_QMARK_(x){
if(!((x == null))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction = (function mranderson047$re_frame$v0v10v2$re_frame$interop$make_reaction(f){
return mranderson047.reagent.v0v7v0.reagent.ratom.make_reaction.call(null,f);
});
mranderson047.re_frame.v0v10v2.re_frame.interop.add_on_dispose_BANG_ = (function mranderson047$re_frame$v0v10v2$re_frame$interop$add_on_dispose_BANG_(a_ratom,f){
return mranderson047.reagent.v0v7v0.reagent.ratom.add_on_dispose_BANG_.call(null,a_ratom,f);
});
mranderson047.re_frame.v0v10v2.re_frame.interop.dispose_BANG_ = (function mranderson047$re_frame$v0v10v2$re_frame$interop$dispose_BANG_(a_ratom){
return mranderson047.reagent.v0v7v0.reagent.ratom.dispose_BANG_.call(null,a_ratom);
});
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_ = (function mranderson047$re_frame$v0v10v2$re_frame$interop$set_timeout_BANG_(f,ms){
return setTimeout(f,ms);
});
mranderson047.re_frame.v0v10v2.re_frame.interop.now = (function mranderson047$re_frame$v0v10v2$re_frame$interop$now(){
if((typeof performance !== 'undefined') && (typeof performance.now !== 'undefined')){
return performance.now();
} else {
return Date.now();
}
});
/**
 * Produces an id for reactive Reagent values
 *   e.g. reactions, ratoms, cursors.
 */
mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id = (function mranderson047$re_frame$v0v10v2$re_frame$interop$reagent_id(reactive_val){
if(((!((reactive_val == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === reactive_val.mranderson047$reagent$v0v7v0$reagent$ratom$IReactiveAtom$))))?true:false):false)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var pred__29349 = cljs.core.instance_QMARK_;
var expr__29350 = reactive_val;
if(cljs.core.truth_(pred__29349.call(null,mranderson047.reagent.v0v7v0.reagent.ratom.RAtom,expr__29350))){
return "ra";
} else {
if(cljs.core.truth_(pred__29349.call(null,mranderson047.reagent.v0v7v0.reagent.ratom.RCursor,expr__29350))){
return "rc";
} else {
if(cljs.core.truth_(pred__29349.call(null,mranderson047.reagent.v0v7v0.reagent.ratom.Reaction,expr__29350))){
return "rx";
} else {
if(cljs.core.truth_(pred__29349.call(null,mranderson047.reagent.v0v7v0.reagent.ratom.Track,expr__29350))){
return "tr";
} else {
return "other";
}
}
}
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,reactive_val))].join('');
} else {
return null;
}
});

//# sourceMappingURL=interop.js.map?rel=1543701289502
