// Compiled by ClojureScript 1.10.339 {}
goog.provide('mranderson047.reagent.v0v7v0.reagent.impl.batching');
goog.require('cljs.core');
goog.require('mranderson047.reagent.v0v7v0.reagent.debug');
goog.require('mranderson047.reagent.v0v7v0.reagent.interop');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.util');
goog.require('clojure.string');
if((typeof mranderson047 !== 'undefined') && (typeof mranderson047.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v7v0 !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent.impl !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent.impl.batching !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent.impl.batching.mount_count !== 'undefined')){
} else {
mranderson047.reagent.v0v7v0.reagent.impl.batching.mount_count = (0);
}
mranderson047.reagent.v0v7v0.reagent.impl.batching.next_mount_count = (function mranderson047$reagent$v0v7v0$reagent$impl$batching$next_mount_count(){
return mranderson047.reagent.v0v7v0.reagent.impl.batching.mount_count = (mranderson047.reagent.v0v7v0.reagent.impl.batching.mount_count + (1));
});
mranderson047.reagent.v0v7v0.reagent.impl.batching.fake_raf = (function mranderson047$reagent$v0v7v0$reagent$impl$batching$fake_raf(f){
return setTimeout(f,(16));
});
mranderson047.reagent.v0v7v0.reagent.impl.batching.next_tick = ((!(mranderson047.reagent.v0v7v0.reagent.impl.util.is_client))?mranderson047.reagent.v0v7v0.reagent.impl.batching.fake_raf:(function (){var w = window;
var or__3949__auto__ = (w["requestAnimationFrame"]);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = (w["webkitRequestAnimationFrame"]);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = (w["mozRequestAnimationFrame"]);
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
var or__3949__auto____$3 = (w["msRequestAnimationFrame"]);
if(cljs.core.truth_(or__3949__auto____$3)){
return or__3949__auto____$3;
} else {
return mranderson047.reagent.v0v7v0.reagent.impl.batching.fake_raf;
}
}
}
}
})());
mranderson047.reagent.v0v7v0.reagent.impl.batching.compare_mount_order = (function mranderson047$reagent$v0v7v0$reagent$impl$batching$compare_mount_order(c1,c2){
return ((c1["cljsMountOrder"]) - (c2["cljsMountOrder"]));
});
mranderson047.reagent.v0v7v0.reagent.impl.batching.run_queue = (function mranderson047$reagent$v0v7v0$reagent$impl$batching$run_queue(a){
a.sort(mranderson047.reagent.v0v7v0.reagent.impl.batching.compare_mount_order);

var n__4408__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4408__auto__)){
var c_29000 = (a[i]);
if((c_29000["cljsIsDirty"]) === true){
(c_29000["forceUpdate"])();
} else {
}

var G__29001 = (i + (1));
i = G__29001;
continue;
} else {
return null;
}
break;
}
});
if((typeof mranderson047 !== 'undefined') && (typeof mranderson047.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v7v0 !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent.impl !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent.impl.batching !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent.impl.batching.ratom_flush !== 'undefined')){
} else {
mranderson047.reagent.v0v7v0.reagent.impl.batching.ratom_flush = (function mranderson047$reagent$v0v7v0$reagent$impl$batching$ratom_flush(){
return null;
});
}

/**
* @constructor
 * @implements {mranderson047.reagent.v0v7v0.reagent.impl.batching.Object}
*/
mranderson047.reagent.v0v7v0.reagent.impl.batching.RenderQueue = (function (scheduled_QMARK_){
this.scheduled_QMARK_ = scheduled_QMARK_;
});
mranderson047.reagent.v0v7v0.reagent.impl.batching.RenderQueue.prototype.run_funs = (function (k){
var self__ = this;
var this$ = this;
var temp__5461__auto__ = (this$[k]);
if((temp__5461__auto__ == null)){
return null;
} else {
var fs = temp__5461__auto__;
(this$[k] = null);

var n__4408__auto__ = fs.length;
var i = (0);
while(true){
if((i < n__4408__auto__)){
(fs[i]).call(null);

var G__29002 = (i + (1));
i = G__29002;
continue;
} else {
return null;
}
break;
}
}
});

mranderson047.reagent.v0v7v0.reagent.impl.batching.RenderQueue.prototype.flush_after_render = (function (){
var self__ = this;
var this$ = this;
return this$.run_funs("afterRender");
});

mranderson047.reagent.v0v7v0.reagent.impl.batching.RenderQueue.prototype.queue_render = (function (c){
var self__ = this;
var this$ = this;
return this$.enqueue("componentQueue",c);
});

mranderson047.reagent.v0v7v0.reagent.impl.batching.RenderQueue.prototype.schedule = (function (){
var self__ = this;
var this$ = this;
if(self__.scheduled_QMARK_){
return null;
} else {
self__.scheduled_QMARK_ = true;

return mranderson047.reagent.v0v7v0.reagent.impl.batching.next_tick.call(null,((function (this$){
return (function (){
return this$.run_queues();
});})(this$))
);
}
});

mranderson047.reagent.v0v7v0.reagent.impl.batching.RenderQueue.prototype.flush_queues = (function (){
var self__ = this;
var this$ = this;
this$.run_funs("beforeFlush");

mranderson047.reagent.v0v7v0.reagent.impl.batching.ratom_flush.call(null);

var temp__5461__auto___29003 = (this$["componentQueue"]);
if((temp__5461__auto___29003 == null)){
} else {
var cs_29004 = temp__5461__auto___29003;
(this$["componentQueue"] = null);

mranderson047.reagent.v0v7v0.reagent.impl.batching.run_queue.call(null,cs_29004);
}

return this$.flush_after_render();
});

mranderson047.reagent.v0v7v0.reagent.impl.batching.RenderQueue.prototype.run_queues = (function (){
var self__ = this;
var this$ = this;
self__.scheduled_QMARK_ = false;

return this$.flush_queues();
});

mranderson047.reagent.v0v7v0.reagent.impl.batching.RenderQueue.prototype.enqueue = (function (k,f){
var self__ = this;
var this$ = this;
if(cljs.core.truth_(f)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Enqueued function"," must not be nil"].join('')),"\n","f"].join('')));
}

if(((this$[k]) == null)){
(this$[k] = []);
} else {
}

(this$[k]).push(f);

return this$.schedule();
});

mranderson047.reagent.v0v7v0.reagent.impl.batching.RenderQueue.prototype.add_before_flush = (function (f){
var self__ = this;
var this$ = this;
return this$.enqueue("beforeFlush",f);
});

mranderson047.reagent.v0v7v0.reagent.impl.batching.RenderQueue.prototype.add_after_render = (function (f){
var self__ = this;
var this$ = this;
return this$.enqueue("afterRender",f);
});

mranderson047.reagent.v0v7v0.reagent.impl.batching.RenderQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"scheduled?","scheduled?",579986609,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson047.reagent.v0v7v0.reagent.impl.batching.RenderQueue.cljs$lang$type = true;

mranderson047.reagent.v0v7v0.reagent.impl.batching.RenderQueue.cljs$lang$ctorStr = "mranderson047.reagent.v0v7v0.reagent.impl.batching/RenderQueue";

mranderson047.reagent.v0v7v0.reagent.impl.batching.RenderQueue.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"mranderson047.reagent.v0v7v0.reagent.impl.batching/RenderQueue");
});

/**
 * Positional factory function for mranderson047.reagent.v0v7v0.reagent.impl.batching/RenderQueue.
 */
mranderson047.reagent.v0v7v0.reagent.impl.batching.__GT_RenderQueue = (function mranderson047$reagent$v0v7v0$reagent$impl$batching$__GT_RenderQueue(scheduled_QMARK_){
return (new mranderson047.reagent.v0v7v0.reagent.impl.batching.RenderQueue(scheduled_QMARK_));
});

if((typeof mranderson047 !== 'undefined') && (typeof mranderson047.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v7v0 !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent.impl !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent.impl.batching !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent.impl.batching.render_queue !== 'undefined')){
} else {
mranderson047.reagent.v0v7v0.reagent.impl.batching.render_queue = mranderson047.reagent.v0v7v0.reagent.impl.batching.__GT_RenderQueue.call(null,false);
}
mranderson047.reagent.v0v7v0.reagent.impl.batching.flush = (function mranderson047$reagent$v0v7v0$reagent$impl$batching$flush(){
return mranderson047.reagent.v0v7v0.reagent.impl.batching.render_queue.flush_queues();
});
mranderson047.reagent.v0v7v0.reagent.impl.batching.flush_after_render = (function mranderson047$reagent$v0v7v0$reagent$impl$batching$flush_after_render(){
return mranderson047.reagent.v0v7v0.reagent.impl.batching.render_queue.flush_after_render();
});
mranderson047.reagent.v0v7v0.reagent.impl.batching.queue_render = (function mranderson047$reagent$v0v7v0$reagent$impl$batching$queue_render(c){
if(cljs.core.truth_((c["cljsIsDirty"]))){
return null;
} else {
(c["cljsIsDirty"] = true);

return mranderson047.reagent.v0v7v0.reagent.impl.batching.render_queue.queue_render(c);
}
});
mranderson047.reagent.v0v7v0.reagent.impl.batching.mark_rendered = (function mranderson047$reagent$v0v7v0$reagent$impl$batching$mark_rendered(c){
return (c["cljsIsDirty"] = false);
});
mranderson047.reagent.v0v7v0.reagent.impl.batching.do_before_flush = (function mranderson047$reagent$v0v7v0$reagent$impl$batching$do_before_flush(f){
return mranderson047.reagent.v0v7v0.reagent.impl.batching.render_queue.add_before_flush(f);
});
mranderson047.reagent.v0v7v0.reagent.impl.batching.do_after_render = (function mranderson047$reagent$v0v7v0$reagent$impl$batching$do_after_render(f){
return mranderson047.reagent.v0v7v0.reagent.impl.batching.render_queue.add_after_render(f);
});
mranderson047.reagent.v0v7v0.reagent.impl.batching.schedule = (function mranderson047$reagent$v0v7v0$reagent$impl$batching$schedule(){
if(mranderson047.reagent.v0v7v0.reagent.impl.batching.render_queue.scheduled_QMARK_ === false){
return mranderson047.reagent.v0v7v0.reagent.impl.batching.render_queue.schedule();
} else {
return null;
}
});

//# sourceMappingURL=batching.js.map?rel=1543701288796
