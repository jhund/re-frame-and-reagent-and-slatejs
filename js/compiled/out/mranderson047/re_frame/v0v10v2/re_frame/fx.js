// Compiled by ClojureScript 1.10.339 {}
goog.provide('mranderson047.re_frame.v0v10v2.re_frame.fx');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.router');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
mranderson047.re_frame.v0v10v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (mranderson047.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx = (function mranderson047$re_frame$v0v10v2$re_frame$fx$reg_fx(id,handler){
return mranderson047.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
mranderson047.re_frame.v0v10v2.re_frame.fx.do_fx = mranderson047.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson047$re_frame$v0v10v2$re_frame$fx$do_fx_after(context){
var seq__29656 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__29657 = null;
var count__29658 = (0);
var i__29659 = (0);
while(true){
if((i__29659 < count__29658)){
var vec__29660 = cljs.core._nth.call(null,chunk__29657,i__29659);
var effect_key = cljs.core.nth.call(null,vec__29660,(0),null);
var effect_value = cljs.core.nth.call(null,vec__29660,(1),null);
var temp__5455__auto___29666 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___29666)){
var effect_fn_29667 = temp__5455__auto___29666;
effect_fn_29667.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__29668 = seq__29656;
var G__29669 = chunk__29657;
var G__29670 = count__29658;
var G__29671 = (i__29659 + (1));
seq__29656 = G__29668;
chunk__29657 = G__29669;
count__29658 = G__29670;
i__29659 = G__29671;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29656);
if(temp__5457__auto__){
var seq__29656__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29656__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__29656__$1);
var G__29672 = cljs.core.chunk_rest.call(null,seq__29656__$1);
var G__29673 = c__4351__auto__;
var G__29674 = cljs.core.count.call(null,c__4351__auto__);
var G__29675 = (0);
seq__29656 = G__29672;
chunk__29657 = G__29673;
count__29658 = G__29674;
i__29659 = G__29675;
continue;
} else {
var vec__29663 = cljs.core.first.call(null,seq__29656__$1);
var effect_key = cljs.core.nth.call(null,vec__29663,(0),null);
var effect_value = cljs.core.nth.call(null,vec__29663,(1),null);
var temp__5455__auto___29676 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___29676)){
var effect_fn_29677 = temp__5455__auto___29676;
effect_fn_29677.call(null,effect_value);
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__29678 = cljs.core.next.call(null,seq__29656__$1);
var G__29679 = null;
var G__29680 = (0);
var G__29681 = (0);
seq__29656 = G__29678;
chunk__29657 = G__29679;
count__29658 = G__29680;
i__29659 = G__29681;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__29682 = cljs.core.seq.call(null,value);
var chunk__29683 = null;
var count__29684 = (0);
var i__29685 = (0);
while(true){
if((i__29685 < count__29684)){
var map__29686 = cljs.core._nth.call(null,chunk__29683,i__29685);
var map__29686__$1 = ((((!((map__29686 == null)))?(((((map__29686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29686):map__29686);
var effect = map__29686__$1;
var ms = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__29682,chunk__29683,count__29684,i__29685,map__29686,map__29686__$1,effect,ms,dispatch){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__29682,chunk__29683,count__29684,i__29685,map__29686,map__29686__$1,effect,ms,dispatch))
,ms);
}


var G__29690 = seq__29682;
var G__29691 = chunk__29683;
var G__29692 = count__29684;
var G__29693 = (i__29685 + (1));
seq__29682 = G__29690;
chunk__29683 = G__29691;
count__29684 = G__29692;
i__29685 = G__29693;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29682);
if(temp__5457__auto__){
var seq__29682__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29682__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__29682__$1);
var G__29694 = cljs.core.chunk_rest.call(null,seq__29682__$1);
var G__29695 = c__4351__auto__;
var G__29696 = cljs.core.count.call(null,c__4351__auto__);
var G__29697 = (0);
seq__29682 = G__29694;
chunk__29683 = G__29695;
count__29684 = G__29696;
i__29685 = G__29697;
continue;
} else {
var map__29688 = cljs.core.first.call(null,seq__29682__$1);
var map__29688__$1 = ((((!((map__29688 == null)))?(((((map__29688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29688):map__29688);
var effect = map__29688__$1;
var ms = cljs.core.get.call(null,map__29688__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__29688__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__29682,chunk__29683,count__29684,i__29685,map__29688,map__29688__$1,effect,ms,dispatch,seq__29682__$1,temp__5457__auto__){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__29682,chunk__29683,count__29684,i__29685,map__29688,map__29688__$1,effect,ms,dispatch,seq__29682__$1,temp__5457__auto__))
,ms);
}


var G__29698 = cljs.core.next.call(null,seq__29682__$1);
var G__29699 = null;
var G__29700 = (0);
var G__29701 = (0);
seq__29682 = G__29698;
chunk__29683 = G__29699;
count__29684 = G__29700;
i__29685 = G__29701;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,value);
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__29702 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__29703 = null;
var count__29704 = (0);
var i__29705 = (0);
while(true){
if((i__29705 < count__29704)){
var event = cljs.core._nth.call(null,chunk__29703,i__29705);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__29706 = seq__29702;
var G__29707 = chunk__29703;
var G__29708 = count__29704;
var G__29709 = (i__29705 + (1));
seq__29702 = G__29706;
chunk__29703 = G__29707;
count__29704 = G__29708;
i__29705 = G__29709;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29702);
if(temp__5457__auto__){
var seq__29702__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29702__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__29702__$1);
var G__29710 = cljs.core.chunk_rest.call(null,seq__29702__$1);
var G__29711 = c__4351__auto__;
var G__29712 = cljs.core.count.call(null,c__4351__auto__);
var G__29713 = (0);
seq__29702 = G__29710;
chunk__29703 = G__29711;
count__29704 = G__29712;
i__29705 = G__29713;
continue;
} else {
var event = cljs.core.first.call(null,seq__29702__$1);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__29714 = cljs.core.next.call(null,seq__29702__$1);
var G__29715 = null;
var G__29716 = (0);
var G__29717 = (0);
seq__29702 = G__29714;
chunk__29703 = G__29715;
count__29704 = G__29716;
i__29705 = G__29717;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson047.re_frame.v0v10v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__29718 = cljs.core.seq.call(null,value);
var chunk__29719 = null;
var count__29720 = (0);
var i__29721 = (0);
while(true){
if((i__29721 < count__29720)){
var event = cljs.core._nth.call(null,chunk__29719,i__29721);
clear_event.call(null,event);


var G__29722 = seq__29718;
var G__29723 = chunk__29719;
var G__29724 = count__29720;
var G__29725 = (i__29721 + (1));
seq__29718 = G__29722;
chunk__29719 = G__29723;
count__29720 = G__29724;
i__29721 = G__29725;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29718);
if(temp__5457__auto__){
var seq__29718__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29718__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__29718__$1);
var G__29726 = cljs.core.chunk_rest.call(null,seq__29718__$1);
var G__29727 = c__4351__auto__;
var G__29728 = cljs.core.count.call(null,c__4351__auto__);
var G__29729 = (0);
seq__29718 = G__29726;
chunk__29719 = G__29727;
count__29720 = G__29728;
i__29721 = G__29729;
continue;
} else {
var event = cljs.core.first.call(null,seq__29718__$1);
clear_event.call(null,event);


var G__29730 = cljs.core.next.call(null,seq__29718__$1);
var G__29731 = null;
var G__29732 = (0);
var G__29733 = (0);
seq__29718 = G__29730;
chunk__29719 = G__29731;
count__29720 = G__29732;
i__29721 = G__29733;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1543701289989
