// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_22884 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__22885 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__22886 = null;
var count__22887 = (0);
var i__22888 = (0);
while(true){
if((i__22888 < count__22887)){
var vec__22889 = cljs.core._nth.call(null,chunk__22886,i__22888);
var effect_key = cljs.core.nth.call(null,vec__22889,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22889,(1),null);
var temp__5455__auto___22905 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___22905)){
var effect_fn_22906 = temp__5455__auto___22905;
effect_fn_22906.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22907 = seq__22885;
var G__22908 = chunk__22886;
var G__22909 = count__22887;
var G__22910 = (i__22888 + (1));
seq__22885 = G__22907;
chunk__22886 = G__22908;
count__22887 = G__22909;
i__22888 = G__22910;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22885);
if(temp__5457__auto__){
var seq__22885__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22885__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__22885__$1);
var G__22911 = cljs.core.chunk_rest.call(null,seq__22885__$1);
var G__22912 = c__4351__auto__;
var G__22913 = cljs.core.count.call(null,c__4351__auto__);
var G__22914 = (0);
seq__22885 = G__22911;
chunk__22886 = G__22912;
count__22887 = G__22913;
i__22888 = G__22914;
continue;
} else {
var vec__22892 = cljs.core.first.call(null,seq__22885__$1);
var effect_key = cljs.core.nth.call(null,vec__22892,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22892,(1),null);
var temp__5455__auto___22915 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___22915)){
var effect_fn_22916 = temp__5455__auto___22915;
effect_fn_22916.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22917 = cljs.core.next.call(null,seq__22885__$1);
var G__22918 = null;
var G__22919 = (0);
var G__22920 = (0);
seq__22885 = G__22917;
chunk__22886 = G__22918;
count__22887 = G__22919;
i__22888 = G__22920;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__22724__auto___22921 = re_frame.interop.now.call(null);
var duration__22725__auto___22922 = (end__22724__auto___22921 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22725__auto___22922,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__22724__auto___22921);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_22884;
}} else {
var seq__22895 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__22896 = null;
var count__22897 = (0);
var i__22898 = (0);
while(true){
if((i__22898 < count__22897)){
var vec__22899 = cljs.core._nth.call(null,chunk__22896,i__22898);
var effect_key = cljs.core.nth.call(null,vec__22899,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22899,(1),null);
var temp__5455__auto___22923 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___22923)){
var effect_fn_22924 = temp__5455__auto___22923;
effect_fn_22924.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22925 = seq__22895;
var G__22926 = chunk__22896;
var G__22927 = count__22897;
var G__22928 = (i__22898 + (1));
seq__22895 = G__22925;
chunk__22896 = G__22926;
count__22897 = G__22927;
i__22898 = G__22928;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22895);
if(temp__5457__auto__){
var seq__22895__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22895__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__22895__$1);
var G__22929 = cljs.core.chunk_rest.call(null,seq__22895__$1);
var G__22930 = c__4351__auto__;
var G__22931 = cljs.core.count.call(null,c__4351__auto__);
var G__22932 = (0);
seq__22895 = G__22929;
chunk__22896 = G__22930;
count__22897 = G__22931;
i__22898 = G__22932;
continue;
} else {
var vec__22902 = cljs.core.first.call(null,seq__22895__$1);
var effect_key = cljs.core.nth.call(null,vec__22902,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22902,(1),null);
var temp__5455__auto___22933 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___22933)){
var effect_fn_22934 = temp__5455__auto___22933;
effect_fn_22934.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22935 = cljs.core.next.call(null,seq__22895__$1);
var G__22936 = null;
var G__22937 = (0);
var G__22938 = (0);
seq__22895 = G__22935;
chunk__22896 = G__22936;
count__22897 = G__22937;
i__22898 = G__22938;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__22939 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__22940 = null;
var count__22941 = (0);
var i__22942 = (0);
while(true){
if((i__22942 < count__22941)){
var map__22943 = cljs.core._nth.call(null,chunk__22940,i__22942);
var map__22943__$1 = ((((!((map__22943 == null)))?(((((map__22943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22943):map__22943);
var effect = map__22943__$1;
var ms = cljs.core.get.call(null,map__22943__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__22943__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__22939,chunk__22940,count__22941,i__22942,map__22943,map__22943__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__22939,chunk__22940,count__22941,i__22942,map__22943,map__22943__$1,effect,ms,dispatch))
,ms);
}


var G__22947 = seq__22939;
var G__22948 = chunk__22940;
var G__22949 = count__22941;
var G__22950 = (i__22942 + (1));
seq__22939 = G__22947;
chunk__22940 = G__22948;
count__22941 = G__22949;
i__22942 = G__22950;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22939);
if(temp__5457__auto__){
var seq__22939__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22939__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__22939__$1);
var G__22951 = cljs.core.chunk_rest.call(null,seq__22939__$1);
var G__22952 = c__4351__auto__;
var G__22953 = cljs.core.count.call(null,c__4351__auto__);
var G__22954 = (0);
seq__22939 = G__22951;
chunk__22940 = G__22952;
count__22941 = G__22953;
i__22942 = G__22954;
continue;
} else {
var map__22945 = cljs.core.first.call(null,seq__22939__$1);
var map__22945__$1 = ((((!((map__22945 == null)))?(((((map__22945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22945):map__22945);
var effect = map__22945__$1;
var ms = cljs.core.get.call(null,map__22945__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__22945__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__22939,chunk__22940,count__22941,i__22942,map__22945,map__22945__$1,effect,ms,dispatch,seq__22939__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__22939,chunk__22940,count__22941,i__22942,map__22945,map__22945__$1,effect,ms,dispatch,seq__22939__$1,temp__5457__auto__))
,ms);
}


var G__22955 = cljs.core.next.call(null,seq__22939__$1);
var G__22956 = null;
var G__22957 = (0);
var G__22958 = (0);
seq__22939 = G__22955;
chunk__22940 = G__22956;
count__22941 = G__22957;
i__22942 = G__22958;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__22959 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__22960 = null;
var count__22961 = (0);
var i__22962 = (0);
while(true){
if((i__22962 < count__22961)){
var event = cljs.core._nth.call(null,chunk__22960,i__22962);
re_frame.router.dispatch.call(null,event);


var G__22963 = seq__22959;
var G__22964 = chunk__22960;
var G__22965 = count__22961;
var G__22966 = (i__22962 + (1));
seq__22959 = G__22963;
chunk__22960 = G__22964;
count__22961 = G__22965;
i__22962 = G__22966;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22959);
if(temp__5457__auto__){
var seq__22959__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22959__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__22959__$1);
var G__22967 = cljs.core.chunk_rest.call(null,seq__22959__$1);
var G__22968 = c__4351__auto__;
var G__22969 = cljs.core.count.call(null,c__4351__auto__);
var G__22970 = (0);
seq__22959 = G__22967;
chunk__22960 = G__22968;
count__22961 = G__22969;
i__22962 = G__22970;
continue;
} else {
var event = cljs.core.first.call(null,seq__22959__$1);
re_frame.router.dispatch.call(null,event);


var G__22971 = cljs.core.next.call(null,seq__22959__$1);
var G__22972 = null;
var G__22973 = (0);
var G__22974 = (0);
seq__22959 = G__22971;
chunk__22960 = G__22972;
count__22961 = G__22973;
i__22962 = G__22974;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__22975 = cljs.core.seq.call(null,value);
var chunk__22976 = null;
var count__22977 = (0);
var i__22978 = (0);
while(true){
if((i__22978 < count__22977)){
var event = cljs.core._nth.call(null,chunk__22976,i__22978);
clear_event.call(null,event);


var G__22979 = seq__22975;
var G__22980 = chunk__22976;
var G__22981 = count__22977;
var G__22982 = (i__22978 + (1));
seq__22975 = G__22979;
chunk__22976 = G__22980;
count__22977 = G__22981;
i__22978 = G__22982;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__22975);
if(temp__5457__auto__){
var seq__22975__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22975__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__22975__$1);
var G__22983 = cljs.core.chunk_rest.call(null,seq__22975__$1);
var G__22984 = c__4351__auto__;
var G__22985 = cljs.core.count.call(null,c__4351__auto__);
var G__22986 = (0);
seq__22975 = G__22983;
chunk__22976 = G__22984;
count__22977 = G__22985;
i__22978 = G__22986;
continue;
} else {
var event = cljs.core.first.call(null,seq__22975__$1);
clear_event.call(null,event);


var G__22987 = cljs.core.next.call(null,seq__22975__$1);
var G__22988 = null;
var G__22989 = (0);
var G__22990 = (0);
seq__22975 = G__22987;
chunk__22976 = G__22988;
count__22977 = G__22989;
i__22978 = G__22990;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1543803796159
