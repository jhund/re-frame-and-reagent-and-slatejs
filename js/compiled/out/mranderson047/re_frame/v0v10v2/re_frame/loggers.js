// Compiled by ClojureScript 1.10.339 {}
goog.provide('mranderson047.re_frame.v0v10v2.re_frame.loggers');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Holds the current set of logging functions.
 * By default, mranderson047.re-frame.v0v10v2.re-frame uses the functions provided by js/console.
 * Use `set-loggers!` to change these defaults
 *   
 */
mranderson047.re_frame.v0v10v2.re_frame.loggers.loggers = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),console.log.bind(console),new cljs.core.Keyword(null,"warn","warn",-436710552),console.warn.bind(console),new cljs.core.Keyword(null,"error","error",-978969032),console.error.bind(console),new cljs.core.Keyword(null,"group","group",582596132),(cljs.core.truth_(console.group)?console.group.bind(console):console.log.bind(console)),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(cljs.core.truth_(console.groupEnd)?console.groupEnd.bind(console):(function (){
return cljs.core.List.EMPTY;
}))], null));
mranderson047.re_frame.v0v10v2.re_frame.loggers.console = (function mranderson047$re_frame$v0v10v2$re_frame$loggers$console(var_args){
var args__4534__auto__ = [];
var len__4531__auto___23277 = arguments.length;
var i__4532__auto___23278 = (0);
while(true){
if((i__4532__auto___23278 < len__4531__auto___23277)){
args__4534__auto__.push((arguments[i__4532__auto___23278]));

var G__23279 = (i__4532__auto___23278 + (1));
i__4532__auto___23278 = G__23279;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic = (function (level,args){
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.loggers.loggers),level)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["re-frame: log called with unknown level: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)].join('')),"\n","(contains? (clojure.core/deref loggers) level)"].join('')));
}

return cljs.core.apply.call(null,level.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.loggers.loggers)),args);
});

mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$lang$applyTo = (function (seq23275){
var G__23276 = cljs.core.first.call(null,seq23275);
var seq23275__$1 = cljs.core.next.call(null,seq23275);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23276,seq23275__$1);
});

/**
 * Change the set (or a subset) of logging functions used by mranderson047.re-frame.v0v10v2.re-frame.
 *   `new-loggers` should be a map with the same keys as `loggers` (above)
 */
mranderson047.re_frame.v0v10v2.re_frame.loggers.set_loggers_BANG_ = (function mranderson047$re_frame$v0v10v2$re_frame$loggers$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.loggers.loggers)))))){
} else {
throw (new Error(["Assert failed: ","Unknown keys in new-loggers","\n","(empty? (difference (set (keys new-loggers)) (-> (clojure.core/deref loggers) keys set)))"].join('')));
}

return cljs.core.swap_BANG_.call(null,mranderson047.re_frame.v0v10v2.re_frame.loggers.loggers,cljs.core.merge,new_loggers);
});
/**
 * Get the current logging functions used by mranderson047.re-frame.v0v10v2.re-frame.
 */
mranderson047.re_frame.v0v10v2.re_frame.loggers.get_loggers = (function mranderson047$re_frame$v0v10v2$re_frame$loggers$get_loggers(){
return cljs.core.deref.call(null,mranderson047.re_frame.v0v10v2.re_frame.loggers.loggers);
});

//# sourceMappingURL=loggers.js.map?rel=1543701277951
