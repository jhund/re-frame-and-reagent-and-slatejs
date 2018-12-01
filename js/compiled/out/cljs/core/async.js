// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34059 = arguments.length;
switch (G__34059) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34060 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34060 = (function (f,blockable,meta34061){
this.f = f;
this.blockable = blockable;
this.meta34061 = meta34061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34062,meta34061__$1){
var self__ = this;
var _34062__$1 = this;
return (new cljs.core.async.t_cljs$core$async34060(self__.f,self__.blockable,meta34061__$1));
});

cljs.core.async.t_cljs$core$async34060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34062){
var self__ = this;
var _34062__$1 = this;
return self__.meta34061;
});

cljs.core.async.t_cljs$core$async34060.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34060.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34060.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34060.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34061","meta34061",277551069,null)], null);
});

cljs.core.async.t_cljs$core$async34060.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34060";

cljs.core.async.t_cljs$core$async34060.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async34060");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34060.
 */
cljs.core.async.__GT_t_cljs$core$async34060 = (function cljs$core$async$__GT_t_cljs$core$async34060(f__$1,blockable__$1,meta34061){
return (new cljs.core.async.t_cljs$core$async34060(f__$1,blockable__$1,meta34061));
});

}

return (new cljs.core.async.t_cljs$core$async34060(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__34066 = arguments.length;
switch (G__34066) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__34069 = arguments.length;
switch (G__34069) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__34072 = arguments.length;
switch (G__34072) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_34074 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34074);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34074,ret){
return (function (){
return fn1.call(null,val_34074);
});})(val_34074,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__34076 = arguments.length;
switch (G__34076) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___34078 = n;
var x_34079 = (0);
while(true){
if((x_34079 < n__4408__auto___34078)){
(a[x_34079] = (0));

var G__34080 = (x_34079 + (1));
x_34079 = G__34080;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__34081 = (i + (1));
i = G__34081;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34082 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34082 = (function (flag,meta34083){
this.flag = flag;
this.meta34083 = meta34083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34084,meta34083__$1){
var self__ = this;
var _34084__$1 = this;
return (new cljs.core.async.t_cljs$core$async34082(self__.flag,meta34083__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34082.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34084){
var self__ = this;
var _34084__$1 = this;
return self__.meta34083;
});})(flag))
;

cljs.core.async.t_cljs$core$async34082.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34082.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34082.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34082.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34082.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34083","meta34083",641288084,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34082.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34082";

cljs.core.async.t_cljs$core$async34082.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async34082");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34082.
 */
cljs.core.async.__GT_t_cljs$core$async34082 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34082(flag__$1,meta34083){
return (new cljs.core.async.t_cljs$core$async34082(flag__$1,meta34083));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34082(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34085 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34085 = (function (flag,cb,meta34086){
this.flag = flag;
this.cb = cb;
this.meta34086 = meta34086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34087,meta34086__$1){
var self__ = this;
var _34087__$1 = this;
return (new cljs.core.async.t_cljs$core$async34085(self__.flag,self__.cb,meta34086__$1));
});

cljs.core.async.t_cljs$core$async34085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34087){
var self__ = this;
var _34087__$1 = this;
return self__.meta34086;
});

cljs.core.async.t_cljs$core$async34085.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34085.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34085.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34085.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34085.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34086","meta34086",1990172979,null)], null);
});

cljs.core.async.t_cljs$core$async34085.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34085";

cljs.core.async.t_cljs$core$async34085.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async34085");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34085.
 */
cljs.core.async.__GT_t_cljs$core$async34085 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34085(flag__$1,cb__$1,meta34086){
return (new cljs.core.async.t_cljs$core$async34085(flag__$1,cb__$1,meta34086));
});

}

return (new cljs.core.async.t_cljs$core$async34085(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34088_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34088_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34089_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34089_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34090 = (i + (1));
i = G__34090;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___34096 = arguments.length;
var i__4532__auto___34097 = (0);
while(true){
if((i__4532__auto___34097 < len__4531__auto___34096)){
args__4534__auto__.push((arguments[i__4532__auto___34097]));

var G__34098 = (i__4532__auto___34097 + (1));
i__4532__auto___34097 = G__34098;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34093){
var map__34094 = p__34093;
var map__34094__$1 = ((((!((map__34094 == null)))?(((((map__34094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34094):map__34094);
var opts = map__34094__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34091){
var G__34092 = cljs.core.first.call(null,seq34091);
var seq34091__$1 = cljs.core.next.call(null,seq34091);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34092,seq34091__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__34100 = arguments.length;
switch (G__34100) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33999__auto___34146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto___34146){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto___34146){
return (function (state_34124){
var state_val_34125 = (state_34124[(1)]);
if((state_val_34125 === (7))){
var inst_34120 = (state_34124[(2)]);
var state_34124__$1 = state_34124;
var statearr_34126_34147 = state_34124__$1;
(statearr_34126_34147[(2)] = inst_34120);

(statearr_34126_34147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (1))){
var state_34124__$1 = state_34124;
var statearr_34127_34148 = state_34124__$1;
(statearr_34127_34148[(2)] = null);

(statearr_34127_34148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (4))){
var inst_34103 = (state_34124[(7)]);
var inst_34103__$1 = (state_34124[(2)]);
var inst_34104 = (inst_34103__$1 == null);
var state_34124__$1 = (function (){var statearr_34128 = state_34124;
(statearr_34128[(7)] = inst_34103__$1);

return statearr_34128;
})();
if(cljs.core.truth_(inst_34104)){
var statearr_34129_34149 = state_34124__$1;
(statearr_34129_34149[(1)] = (5));

} else {
var statearr_34130_34150 = state_34124__$1;
(statearr_34130_34150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (13))){
var state_34124__$1 = state_34124;
var statearr_34131_34151 = state_34124__$1;
(statearr_34131_34151[(2)] = null);

(statearr_34131_34151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (6))){
var inst_34103 = (state_34124[(7)]);
var state_34124__$1 = state_34124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34124__$1,(11),to,inst_34103);
} else {
if((state_val_34125 === (3))){
var inst_34122 = (state_34124[(2)]);
var state_34124__$1 = state_34124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34124__$1,inst_34122);
} else {
if((state_val_34125 === (12))){
var state_34124__$1 = state_34124;
var statearr_34132_34152 = state_34124__$1;
(statearr_34132_34152[(2)] = null);

(statearr_34132_34152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (2))){
var state_34124__$1 = state_34124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34124__$1,(4),from);
} else {
if((state_val_34125 === (11))){
var inst_34113 = (state_34124[(2)]);
var state_34124__$1 = state_34124;
if(cljs.core.truth_(inst_34113)){
var statearr_34133_34153 = state_34124__$1;
(statearr_34133_34153[(1)] = (12));

} else {
var statearr_34134_34154 = state_34124__$1;
(statearr_34134_34154[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (9))){
var state_34124__$1 = state_34124;
var statearr_34135_34155 = state_34124__$1;
(statearr_34135_34155[(2)] = null);

(statearr_34135_34155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (5))){
var state_34124__$1 = state_34124;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34136_34156 = state_34124__$1;
(statearr_34136_34156[(1)] = (8));

} else {
var statearr_34137_34157 = state_34124__$1;
(statearr_34137_34157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (14))){
var inst_34118 = (state_34124[(2)]);
var state_34124__$1 = state_34124;
var statearr_34138_34158 = state_34124__$1;
(statearr_34138_34158[(2)] = inst_34118);

(statearr_34138_34158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (10))){
var inst_34110 = (state_34124[(2)]);
var state_34124__$1 = state_34124;
var statearr_34139_34159 = state_34124__$1;
(statearr_34139_34159[(2)] = inst_34110);

(statearr_34139_34159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (8))){
var inst_34107 = cljs.core.async.close_BANG_.call(null,to);
var state_34124__$1 = state_34124;
var statearr_34140_34160 = state_34124__$1;
(statearr_34140_34160[(2)] = inst_34107);

(statearr_34140_34160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33999__auto___34146))
;
return ((function (switch__33908__auto__,c__33999__auto___34146){
return (function() {
var cljs$core$async$state_machine__33909__auto__ = null;
var cljs$core$async$state_machine__33909__auto____0 = (function (){
var statearr_34141 = [null,null,null,null,null,null,null,null];
(statearr_34141[(0)] = cljs$core$async$state_machine__33909__auto__);

(statearr_34141[(1)] = (1));

return statearr_34141;
});
var cljs$core$async$state_machine__33909__auto____1 = (function (state_34124){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_34124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e34142){if((e34142 instanceof Object)){
var ex__33912__auto__ = e34142;
var statearr_34143_34161 = state_34124;
(statearr_34143_34161[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34162 = state_34124;
state_34124 = G__34162;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
cljs$core$async$state_machine__33909__auto__ = function(state_34124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33909__auto____1.call(this,state_34124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33909__auto____0;
cljs$core$async$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33909__auto____1;
return cljs$core$async$state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto___34146))
})();
var state__34001__auto__ = (function (){var statearr_34144 = f__34000__auto__.call(null);
(statearr_34144[(6)] = c__33999__auto___34146);

return statearr_34144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto___34146))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__34163){
var vec__34164 = p__34163;
var v = cljs.core.nth.call(null,vec__34164,(0),null);
var p = cljs.core.nth.call(null,vec__34164,(1),null);
var job = vec__34164;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33999__auto___34335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto___34335,res,vec__34164,v,p,job,jobs,results){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto___34335,res,vec__34164,v,p,job,jobs,results){
return (function (state_34171){
var state_val_34172 = (state_34171[(1)]);
if((state_val_34172 === (1))){
var state_34171__$1 = state_34171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34171__$1,(2),res,v);
} else {
if((state_val_34172 === (2))){
var inst_34168 = (state_34171[(2)]);
var inst_34169 = cljs.core.async.close_BANG_.call(null,res);
var state_34171__$1 = (function (){var statearr_34173 = state_34171;
(statearr_34173[(7)] = inst_34168);

return statearr_34173;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34171__$1,inst_34169);
} else {
return null;
}
}
});})(c__33999__auto___34335,res,vec__34164,v,p,job,jobs,results))
;
return ((function (switch__33908__auto__,c__33999__auto___34335,res,vec__34164,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____0 = (function (){
var statearr_34174 = [null,null,null,null,null,null,null,null];
(statearr_34174[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__);

(statearr_34174[(1)] = (1));

return statearr_34174;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____1 = (function (state_34171){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_34171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e34175){if((e34175 instanceof Object)){
var ex__33912__auto__ = e34175;
var statearr_34176_34336 = state_34171;
(statearr_34176_34336[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34337 = state_34171;
state_34171 = G__34337;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__ = function(state_34171){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____1.call(this,state_34171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto___34335,res,vec__34164,v,p,job,jobs,results))
})();
var state__34001__auto__ = (function (){var statearr_34177 = f__34000__auto__.call(null);
(statearr_34177[(6)] = c__33999__auto___34335);

return statearr_34177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto___34335,res,vec__34164,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34178){
var vec__34179 = p__34178;
var v = cljs.core.nth.call(null,vec__34179,(0),null);
var p = cljs.core.nth.call(null,vec__34179,(1),null);
var job = vec__34179;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___34338 = n;
var __34339 = (0);
while(true){
if((__34339 < n__4408__auto___34338)){
var G__34182_34340 = type;
var G__34182_34341__$1 = (((G__34182_34340 instanceof cljs.core.Keyword))?G__34182_34340.fqn:null);
switch (G__34182_34341__$1) {
case "compute":
var c__33999__auto___34343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34339,c__33999__auto___34343,G__34182_34340,G__34182_34341__$1,n__4408__auto___34338,jobs,results,process,async){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (__34339,c__33999__auto___34343,G__34182_34340,G__34182_34341__$1,n__4408__auto___34338,jobs,results,process,async){
return (function (state_34195){
var state_val_34196 = (state_34195[(1)]);
if((state_val_34196 === (1))){
var state_34195__$1 = state_34195;
var statearr_34197_34344 = state_34195__$1;
(statearr_34197_34344[(2)] = null);

(statearr_34197_34344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (2))){
var state_34195__$1 = state_34195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34195__$1,(4),jobs);
} else {
if((state_val_34196 === (3))){
var inst_34193 = (state_34195[(2)]);
var state_34195__$1 = state_34195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34195__$1,inst_34193);
} else {
if((state_val_34196 === (4))){
var inst_34185 = (state_34195[(2)]);
var inst_34186 = process.call(null,inst_34185);
var state_34195__$1 = state_34195;
if(cljs.core.truth_(inst_34186)){
var statearr_34198_34345 = state_34195__$1;
(statearr_34198_34345[(1)] = (5));

} else {
var statearr_34199_34346 = state_34195__$1;
(statearr_34199_34346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (5))){
var state_34195__$1 = state_34195;
var statearr_34200_34347 = state_34195__$1;
(statearr_34200_34347[(2)] = null);

(statearr_34200_34347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (6))){
var state_34195__$1 = state_34195;
var statearr_34201_34348 = state_34195__$1;
(statearr_34201_34348[(2)] = null);

(statearr_34201_34348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34196 === (7))){
var inst_34191 = (state_34195[(2)]);
var state_34195__$1 = state_34195;
var statearr_34202_34349 = state_34195__$1;
(statearr_34202_34349[(2)] = inst_34191);

(statearr_34202_34349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34339,c__33999__auto___34343,G__34182_34340,G__34182_34341__$1,n__4408__auto___34338,jobs,results,process,async))
;
return ((function (__34339,switch__33908__auto__,c__33999__auto___34343,G__34182_34340,G__34182_34341__$1,n__4408__auto___34338,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____0 = (function (){
var statearr_34203 = [null,null,null,null,null,null,null];
(statearr_34203[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__);

(statearr_34203[(1)] = (1));

return statearr_34203;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____1 = (function (state_34195){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_34195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e34204){if((e34204 instanceof Object)){
var ex__33912__auto__ = e34204;
var statearr_34205_34350 = state_34195;
(statearr_34205_34350[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34351 = state_34195;
state_34195 = G__34351;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__ = function(state_34195){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____1.call(this,state_34195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__;
})()
;})(__34339,switch__33908__auto__,c__33999__auto___34343,G__34182_34340,G__34182_34341__$1,n__4408__auto___34338,jobs,results,process,async))
})();
var state__34001__auto__ = (function (){var statearr_34206 = f__34000__auto__.call(null);
(statearr_34206[(6)] = c__33999__auto___34343);

return statearr_34206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(__34339,c__33999__auto___34343,G__34182_34340,G__34182_34341__$1,n__4408__auto___34338,jobs,results,process,async))
);


break;
case "async":
var c__33999__auto___34352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34339,c__33999__auto___34352,G__34182_34340,G__34182_34341__$1,n__4408__auto___34338,jobs,results,process,async){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (__34339,c__33999__auto___34352,G__34182_34340,G__34182_34341__$1,n__4408__auto___34338,jobs,results,process,async){
return (function (state_34219){
var state_val_34220 = (state_34219[(1)]);
if((state_val_34220 === (1))){
var state_34219__$1 = state_34219;
var statearr_34221_34353 = state_34219__$1;
(statearr_34221_34353[(2)] = null);

(statearr_34221_34353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (2))){
var state_34219__$1 = state_34219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34219__$1,(4),jobs);
} else {
if((state_val_34220 === (3))){
var inst_34217 = (state_34219[(2)]);
var state_34219__$1 = state_34219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34219__$1,inst_34217);
} else {
if((state_val_34220 === (4))){
var inst_34209 = (state_34219[(2)]);
var inst_34210 = async.call(null,inst_34209);
var state_34219__$1 = state_34219;
if(cljs.core.truth_(inst_34210)){
var statearr_34222_34354 = state_34219__$1;
(statearr_34222_34354[(1)] = (5));

} else {
var statearr_34223_34355 = state_34219__$1;
(statearr_34223_34355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (5))){
var state_34219__$1 = state_34219;
var statearr_34224_34356 = state_34219__$1;
(statearr_34224_34356[(2)] = null);

(statearr_34224_34356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (6))){
var state_34219__$1 = state_34219;
var statearr_34225_34357 = state_34219__$1;
(statearr_34225_34357[(2)] = null);

(statearr_34225_34357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34220 === (7))){
var inst_34215 = (state_34219[(2)]);
var state_34219__$1 = state_34219;
var statearr_34226_34358 = state_34219__$1;
(statearr_34226_34358[(2)] = inst_34215);

(statearr_34226_34358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34339,c__33999__auto___34352,G__34182_34340,G__34182_34341__$1,n__4408__auto___34338,jobs,results,process,async))
;
return ((function (__34339,switch__33908__auto__,c__33999__auto___34352,G__34182_34340,G__34182_34341__$1,n__4408__auto___34338,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____0 = (function (){
var statearr_34227 = [null,null,null,null,null,null,null];
(statearr_34227[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__);

(statearr_34227[(1)] = (1));

return statearr_34227;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____1 = (function (state_34219){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_34219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e34228){if((e34228 instanceof Object)){
var ex__33912__auto__ = e34228;
var statearr_34229_34359 = state_34219;
(statearr_34229_34359[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34360 = state_34219;
state_34219 = G__34360;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__ = function(state_34219){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____1.call(this,state_34219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__;
})()
;})(__34339,switch__33908__auto__,c__33999__auto___34352,G__34182_34340,G__34182_34341__$1,n__4408__auto___34338,jobs,results,process,async))
})();
var state__34001__auto__ = (function (){var statearr_34230 = f__34000__auto__.call(null);
(statearr_34230[(6)] = c__33999__auto___34352);

return statearr_34230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(__34339,c__33999__auto___34352,G__34182_34340,G__34182_34341__$1,n__4408__auto___34338,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34182_34341__$1)].join('')));

}

var G__34361 = (__34339 + (1));
__34339 = G__34361;
continue;
} else {
}
break;
}

var c__33999__auto___34362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto___34362,jobs,results,process,async){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto___34362,jobs,results,process,async){
return (function (state_34252){
var state_val_34253 = (state_34252[(1)]);
if((state_val_34253 === (1))){
var state_34252__$1 = state_34252;
var statearr_34254_34363 = state_34252__$1;
(statearr_34254_34363[(2)] = null);

(statearr_34254_34363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (2))){
var state_34252__$1 = state_34252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34252__$1,(4),from);
} else {
if((state_val_34253 === (3))){
var inst_34250 = (state_34252[(2)]);
var state_34252__$1 = state_34252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34252__$1,inst_34250);
} else {
if((state_val_34253 === (4))){
var inst_34233 = (state_34252[(7)]);
var inst_34233__$1 = (state_34252[(2)]);
var inst_34234 = (inst_34233__$1 == null);
var state_34252__$1 = (function (){var statearr_34255 = state_34252;
(statearr_34255[(7)] = inst_34233__$1);

return statearr_34255;
})();
if(cljs.core.truth_(inst_34234)){
var statearr_34256_34364 = state_34252__$1;
(statearr_34256_34364[(1)] = (5));

} else {
var statearr_34257_34365 = state_34252__$1;
(statearr_34257_34365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (5))){
var inst_34236 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34252__$1 = state_34252;
var statearr_34258_34366 = state_34252__$1;
(statearr_34258_34366[(2)] = inst_34236);

(statearr_34258_34366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (6))){
var inst_34238 = (state_34252[(8)]);
var inst_34233 = (state_34252[(7)]);
var inst_34238__$1 = cljs.core.async.chan.call(null,(1));
var inst_34239 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34240 = [inst_34233,inst_34238__$1];
var inst_34241 = (new cljs.core.PersistentVector(null,2,(5),inst_34239,inst_34240,null));
var state_34252__$1 = (function (){var statearr_34259 = state_34252;
(statearr_34259[(8)] = inst_34238__$1);

return statearr_34259;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34252__$1,(8),jobs,inst_34241);
} else {
if((state_val_34253 === (7))){
var inst_34248 = (state_34252[(2)]);
var state_34252__$1 = state_34252;
var statearr_34260_34367 = state_34252__$1;
(statearr_34260_34367[(2)] = inst_34248);

(statearr_34260_34367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34253 === (8))){
var inst_34238 = (state_34252[(8)]);
var inst_34243 = (state_34252[(2)]);
var state_34252__$1 = (function (){var statearr_34261 = state_34252;
(statearr_34261[(9)] = inst_34243);

return statearr_34261;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34252__$1,(9),results,inst_34238);
} else {
if((state_val_34253 === (9))){
var inst_34245 = (state_34252[(2)]);
var state_34252__$1 = (function (){var statearr_34262 = state_34252;
(statearr_34262[(10)] = inst_34245);

return statearr_34262;
})();
var statearr_34263_34368 = state_34252__$1;
(statearr_34263_34368[(2)] = null);

(statearr_34263_34368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__33999__auto___34362,jobs,results,process,async))
;
return ((function (switch__33908__auto__,c__33999__auto___34362,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____0 = (function (){
var statearr_34264 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34264[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__);

(statearr_34264[(1)] = (1));

return statearr_34264;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____1 = (function (state_34252){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_34252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e34265){if((e34265 instanceof Object)){
var ex__33912__auto__ = e34265;
var statearr_34266_34369 = state_34252;
(statearr_34266_34369[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34370 = state_34252;
state_34252 = G__34370;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__ = function(state_34252){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____1.call(this,state_34252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto___34362,jobs,results,process,async))
})();
var state__34001__auto__ = (function (){var statearr_34267 = f__34000__auto__.call(null);
(statearr_34267[(6)] = c__33999__auto___34362);

return statearr_34267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto___34362,jobs,results,process,async))
);


var c__33999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto__,jobs,results,process,async){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto__,jobs,results,process,async){
return (function (state_34305){
var state_val_34306 = (state_34305[(1)]);
if((state_val_34306 === (7))){
var inst_34301 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
var statearr_34307_34371 = state_34305__$1;
(statearr_34307_34371[(2)] = inst_34301);

(statearr_34307_34371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (20))){
var state_34305__$1 = state_34305;
var statearr_34308_34372 = state_34305__$1;
(statearr_34308_34372[(2)] = null);

(statearr_34308_34372[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (1))){
var state_34305__$1 = state_34305;
var statearr_34309_34373 = state_34305__$1;
(statearr_34309_34373[(2)] = null);

(statearr_34309_34373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (4))){
var inst_34270 = (state_34305[(7)]);
var inst_34270__$1 = (state_34305[(2)]);
var inst_34271 = (inst_34270__$1 == null);
var state_34305__$1 = (function (){var statearr_34310 = state_34305;
(statearr_34310[(7)] = inst_34270__$1);

return statearr_34310;
})();
if(cljs.core.truth_(inst_34271)){
var statearr_34311_34374 = state_34305__$1;
(statearr_34311_34374[(1)] = (5));

} else {
var statearr_34312_34375 = state_34305__$1;
(statearr_34312_34375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (15))){
var inst_34283 = (state_34305[(8)]);
var state_34305__$1 = state_34305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34305__$1,(18),to,inst_34283);
} else {
if((state_val_34306 === (21))){
var inst_34296 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
var statearr_34313_34376 = state_34305__$1;
(statearr_34313_34376[(2)] = inst_34296);

(statearr_34313_34376[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (13))){
var inst_34298 = (state_34305[(2)]);
var state_34305__$1 = (function (){var statearr_34314 = state_34305;
(statearr_34314[(9)] = inst_34298);

return statearr_34314;
})();
var statearr_34315_34377 = state_34305__$1;
(statearr_34315_34377[(2)] = null);

(statearr_34315_34377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (6))){
var inst_34270 = (state_34305[(7)]);
var state_34305__$1 = state_34305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34305__$1,(11),inst_34270);
} else {
if((state_val_34306 === (17))){
var inst_34291 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
if(cljs.core.truth_(inst_34291)){
var statearr_34316_34378 = state_34305__$1;
(statearr_34316_34378[(1)] = (19));

} else {
var statearr_34317_34379 = state_34305__$1;
(statearr_34317_34379[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (3))){
var inst_34303 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34305__$1,inst_34303);
} else {
if((state_val_34306 === (12))){
var inst_34280 = (state_34305[(10)]);
var state_34305__$1 = state_34305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34305__$1,(14),inst_34280);
} else {
if((state_val_34306 === (2))){
var state_34305__$1 = state_34305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34305__$1,(4),results);
} else {
if((state_val_34306 === (19))){
var state_34305__$1 = state_34305;
var statearr_34318_34380 = state_34305__$1;
(statearr_34318_34380[(2)] = null);

(statearr_34318_34380[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (11))){
var inst_34280 = (state_34305[(2)]);
var state_34305__$1 = (function (){var statearr_34319 = state_34305;
(statearr_34319[(10)] = inst_34280);

return statearr_34319;
})();
var statearr_34320_34381 = state_34305__$1;
(statearr_34320_34381[(2)] = null);

(statearr_34320_34381[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (9))){
var state_34305__$1 = state_34305;
var statearr_34321_34382 = state_34305__$1;
(statearr_34321_34382[(2)] = null);

(statearr_34321_34382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (5))){
var state_34305__$1 = state_34305;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34322_34383 = state_34305__$1;
(statearr_34322_34383[(1)] = (8));

} else {
var statearr_34323_34384 = state_34305__$1;
(statearr_34323_34384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (14))){
var inst_34283 = (state_34305[(8)]);
var inst_34285 = (state_34305[(11)]);
var inst_34283__$1 = (state_34305[(2)]);
var inst_34284 = (inst_34283__$1 == null);
var inst_34285__$1 = cljs.core.not.call(null,inst_34284);
var state_34305__$1 = (function (){var statearr_34324 = state_34305;
(statearr_34324[(8)] = inst_34283__$1);

(statearr_34324[(11)] = inst_34285__$1);

return statearr_34324;
})();
if(inst_34285__$1){
var statearr_34325_34385 = state_34305__$1;
(statearr_34325_34385[(1)] = (15));

} else {
var statearr_34326_34386 = state_34305__$1;
(statearr_34326_34386[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (16))){
var inst_34285 = (state_34305[(11)]);
var state_34305__$1 = state_34305;
var statearr_34327_34387 = state_34305__$1;
(statearr_34327_34387[(2)] = inst_34285);

(statearr_34327_34387[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (10))){
var inst_34277 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
var statearr_34328_34388 = state_34305__$1;
(statearr_34328_34388[(2)] = inst_34277);

(statearr_34328_34388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (18))){
var inst_34288 = (state_34305[(2)]);
var state_34305__$1 = state_34305;
var statearr_34329_34389 = state_34305__$1;
(statearr_34329_34389[(2)] = inst_34288);

(statearr_34329_34389[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34306 === (8))){
var inst_34274 = cljs.core.async.close_BANG_.call(null,to);
var state_34305__$1 = state_34305;
var statearr_34330_34390 = state_34305__$1;
(statearr_34330_34390[(2)] = inst_34274);

(statearr_34330_34390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33999__auto__,jobs,results,process,async))
;
return ((function (switch__33908__auto__,c__33999__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____0 = (function (){
var statearr_34331 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34331[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__);

(statearr_34331[(1)] = (1));

return statearr_34331;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____1 = (function (state_34305){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_34305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e34332){if((e34332 instanceof Object)){
var ex__33912__auto__ = e34332;
var statearr_34333_34391 = state_34305;
(statearr_34333_34391[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34392 = state_34305;
state_34305 = G__34392;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__ = function(state_34305){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____1.call(this,state_34305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33909__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto__,jobs,results,process,async))
})();
var state__34001__auto__ = (function (){var statearr_34334 = f__34000__auto__.call(null);
(statearr_34334[(6)] = c__33999__auto__);

return statearr_34334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto__,jobs,results,process,async))
);

return c__33999__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34394 = arguments.length;
switch (G__34394) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34397 = arguments.length;
switch (G__34397) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34400 = arguments.length;
switch (G__34400) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33999__auto___34449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto___34449,tc,fc){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto___34449,tc,fc){
return (function (state_34426){
var state_val_34427 = (state_34426[(1)]);
if((state_val_34427 === (7))){
var inst_34422 = (state_34426[(2)]);
var state_34426__$1 = state_34426;
var statearr_34428_34450 = state_34426__$1;
(statearr_34428_34450[(2)] = inst_34422);

(statearr_34428_34450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (1))){
var state_34426__$1 = state_34426;
var statearr_34429_34451 = state_34426__$1;
(statearr_34429_34451[(2)] = null);

(statearr_34429_34451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (4))){
var inst_34403 = (state_34426[(7)]);
var inst_34403__$1 = (state_34426[(2)]);
var inst_34404 = (inst_34403__$1 == null);
var state_34426__$1 = (function (){var statearr_34430 = state_34426;
(statearr_34430[(7)] = inst_34403__$1);

return statearr_34430;
})();
if(cljs.core.truth_(inst_34404)){
var statearr_34431_34452 = state_34426__$1;
(statearr_34431_34452[(1)] = (5));

} else {
var statearr_34432_34453 = state_34426__$1;
(statearr_34432_34453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (13))){
var state_34426__$1 = state_34426;
var statearr_34433_34454 = state_34426__$1;
(statearr_34433_34454[(2)] = null);

(statearr_34433_34454[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (6))){
var inst_34403 = (state_34426[(7)]);
var inst_34409 = p.call(null,inst_34403);
var state_34426__$1 = state_34426;
if(cljs.core.truth_(inst_34409)){
var statearr_34434_34455 = state_34426__$1;
(statearr_34434_34455[(1)] = (9));

} else {
var statearr_34435_34456 = state_34426__$1;
(statearr_34435_34456[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (3))){
var inst_34424 = (state_34426[(2)]);
var state_34426__$1 = state_34426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34426__$1,inst_34424);
} else {
if((state_val_34427 === (12))){
var state_34426__$1 = state_34426;
var statearr_34436_34457 = state_34426__$1;
(statearr_34436_34457[(2)] = null);

(statearr_34436_34457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (2))){
var state_34426__$1 = state_34426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34426__$1,(4),ch);
} else {
if((state_val_34427 === (11))){
var inst_34403 = (state_34426[(7)]);
var inst_34413 = (state_34426[(2)]);
var state_34426__$1 = state_34426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34426__$1,(8),inst_34413,inst_34403);
} else {
if((state_val_34427 === (9))){
var state_34426__$1 = state_34426;
var statearr_34437_34458 = state_34426__$1;
(statearr_34437_34458[(2)] = tc);

(statearr_34437_34458[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (5))){
var inst_34406 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34407 = cljs.core.async.close_BANG_.call(null,fc);
var state_34426__$1 = (function (){var statearr_34438 = state_34426;
(statearr_34438[(8)] = inst_34406);

return statearr_34438;
})();
var statearr_34439_34459 = state_34426__$1;
(statearr_34439_34459[(2)] = inst_34407);

(statearr_34439_34459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (14))){
var inst_34420 = (state_34426[(2)]);
var state_34426__$1 = state_34426;
var statearr_34440_34460 = state_34426__$1;
(statearr_34440_34460[(2)] = inst_34420);

(statearr_34440_34460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (10))){
var state_34426__$1 = state_34426;
var statearr_34441_34461 = state_34426__$1;
(statearr_34441_34461[(2)] = fc);

(statearr_34441_34461[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34427 === (8))){
var inst_34415 = (state_34426[(2)]);
var state_34426__$1 = state_34426;
if(cljs.core.truth_(inst_34415)){
var statearr_34442_34462 = state_34426__$1;
(statearr_34442_34462[(1)] = (12));

} else {
var statearr_34443_34463 = state_34426__$1;
(statearr_34443_34463[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33999__auto___34449,tc,fc))
;
return ((function (switch__33908__auto__,c__33999__auto___34449,tc,fc){
return (function() {
var cljs$core$async$state_machine__33909__auto__ = null;
var cljs$core$async$state_machine__33909__auto____0 = (function (){
var statearr_34444 = [null,null,null,null,null,null,null,null,null];
(statearr_34444[(0)] = cljs$core$async$state_machine__33909__auto__);

(statearr_34444[(1)] = (1));

return statearr_34444;
});
var cljs$core$async$state_machine__33909__auto____1 = (function (state_34426){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_34426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e34445){if((e34445 instanceof Object)){
var ex__33912__auto__ = e34445;
var statearr_34446_34464 = state_34426;
(statearr_34446_34464[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34465 = state_34426;
state_34426 = G__34465;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
cljs$core$async$state_machine__33909__auto__ = function(state_34426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33909__auto____1.call(this,state_34426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33909__auto____0;
cljs$core$async$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33909__auto____1;
return cljs$core$async$state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto___34449,tc,fc))
})();
var state__34001__auto__ = (function (){var statearr_34447 = f__34000__auto__.call(null);
(statearr_34447[(6)] = c__33999__auto___34449);

return statearr_34447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto___34449,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto__){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto__){
return (function (state_34486){
var state_val_34487 = (state_34486[(1)]);
if((state_val_34487 === (7))){
var inst_34482 = (state_34486[(2)]);
var state_34486__$1 = state_34486;
var statearr_34488_34506 = state_34486__$1;
(statearr_34488_34506[(2)] = inst_34482);

(statearr_34488_34506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (1))){
var inst_34466 = init;
var state_34486__$1 = (function (){var statearr_34489 = state_34486;
(statearr_34489[(7)] = inst_34466);

return statearr_34489;
})();
var statearr_34490_34507 = state_34486__$1;
(statearr_34490_34507[(2)] = null);

(statearr_34490_34507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (4))){
var inst_34469 = (state_34486[(8)]);
var inst_34469__$1 = (state_34486[(2)]);
var inst_34470 = (inst_34469__$1 == null);
var state_34486__$1 = (function (){var statearr_34491 = state_34486;
(statearr_34491[(8)] = inst_34469__$1);

return statearr_34491;
})();
if(cljs.core.truth_(inst_34470)){
var statearr_34492_34508 = state_34486__$1;
(statearr_34492_34508[(1)] = (5));

} else {
var statearr_34493_34509 = state_34486__$1;
(statearr_34493_34509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (6))){
var inst_34466 = (state_34486[(7)]);
var inst_34473 = (state_34486[(9)]);
var inst_34469 = (state_34486[(8)]);
var inst_34473__$1 = f.call(null,inst_34466,inst_34469);
var inst_34474 = cljs.core.reduced_QMARK_.call(null,inst_34473__$1);
var state_34486__$1 = (function (){var statearr_34494 = state_34486;
(statearr_34494[(9)] = inst_34473__$1);

return statearr_34494;
})();
if(inst_34474){
var statearr_34495_34510 = state_34486__$1;
(statearr_34495_34510[(1)] = (8));

} else {
var statearr_34496_34511 = state_34486__$1;
(statearr_34496_34511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (3))){
var inst_34484 = (state_34486[(2)]);
var state_34486__$1 = state_34486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34486__$1,inst_34484);
} else {
if((state_val_34487 === (2))){
var state_34486__$1 = state_34486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34486__$1,(4),ch);
} else {
if((state_val_34487 === (9))){
var inst_34473 = (state_34486[(9)]);
var inst_34466 = inst_34473;
var state_34486__$1 = (function (){var statearr_34497 = state_34486;
(statearr_34497[(7)] = inst_34466);

return statearr_34497;
})();
var statearr_34498_34512 = state_34486__$1;
(statearr_34498_34512[(2)] = null);

(statearr_34498_34512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (5))){
var inst_34466 = (state_34486[(7)]);
var state_34486__$1 = state_34486;
var statearr_34499_34513 = state_34486__$1;
(statearr_34499_34513[(2)] = inst_34466);

(statearr_34499_34513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (10))){
var inst_34480 = (state_34486[(2)]);
var state_34486__$1 = state_34486;
var statearr_34500_34514 = state_34486__$1;
(statearr_34500_34514[(2)] = inst_34480);

(statearr_34500_34514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34487 === (8))){
var inst_34473 = (state_34486[(9)]);
var inst_34476 = cljs.core.deref.call(null,inst_34473);
var state_34486__$1 = state_34486;
var statearr_34501_34515 = state_34486__$1;
(statearr_34501_34515[(2)] = inst_34476);

(statearr_34501_34515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__33999__auto__))
;
return ((function (switch__33908__auto__,c__33999__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33909__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33909__auto____0 = (function (){
var statearr_34502 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34502[(0)] = cljs$core$async$reduce_$_state_machine__33909__auto__);

(statearr_34502[(1)] = (1));

return statearr_34502;
});
var cljs$core$async$reduce_$_state_machine__33909__auto____1 = (function (state_34486){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_34486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e34503){if((e34503 instanceof Object)){
var ex__33912__auto__ = e34503;
var statearr_34504_34516 = state_34486;
(statearr_34504_34516[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34517 = state_34486;
state_34486 = G__34517;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33909__auto__ = function(state_34486){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33909__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33909__auto____1.call(this,state_34486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33909__auto____0;
cljs$core$async$reduce_$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33909__auto____1;
return cljs$core$async$reduce_$_state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto__))
})();
var state__34001__auto__ = (function (){var statearr_34505 = f__34000__auto__.call(null);
(statearr_34505[(6)] = c__33999__auto__);

return statearr_34505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto__))
);

return c__33999__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto__,f__$1){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto__,f__$1){
return (function (state_34523){
var state_val_34524 = (state_34523[(1)]);
if((state_val_34524 === (1))){
var inst_34518 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34523__$1 = state_34523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34523__$1,(2),inst_34518);
} else {
if((state_val_34524 === (2))){
var inst_34520 = (state_34523[(2)]);
var inst_34521 = f__$1.call(null,inst_34520);
var state_34523__$1 = state_34523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34523__$1,inst_34521);
} else {
return null;
}
}
});})(c__33999__auto__,f__$1))
;
return ((function (switch__33908__auto__,c__33999__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33909__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33909__auto____0 = (function (){
var statearr_34525 = [null,null,null,null,null,null,null];
(statearr_34525[(0)] = cljs$core$async$transduce_$_state_machine__33909__auto__);

(statearr_34525[(1)] = (1));

return statearr_34525;
});
var cljs$core$async$transduce_$_state_machine__33909__auto____1 = (function (state_34523){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_34523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e34526){if((e34526 instanceof Object)){
var ex__33912__auto__ = e34526;
var statearr_34527_34529 = state_34523;
(statearr_34527_34529[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34530 = state_34523;
state_34523 = G__34530;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33909__auto__ = function(state_34523){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33909__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33909__auto____1.call(this,state_34523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33909__auto____0;
cljs$core$async$transduce_$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33909__auto____1;
return cljs$core$async$transduce_$_state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto__,f__$1))
})();
var state__34001__auto__ = (function (){var statearr_34528 = f__34000__auto__.call(null);
(statearr_34528[(6)] = c__33999__auto__);

return statearr_34528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto__,f__$1))
);

return c__33999__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34532 = arguments.length;
switch (G__34532) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto__){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto__){
return (function (state_34557){
var state_val_34558 = (state_34557[(1)]);
if((state_val_34558 === (7))){
var inst_34539 = (state_34557[(2)]);
var state_34557__$1 = state_34557;
var statearr_34559_34580 = state_34557__$1;
(statearr_34559_34580[(2)] = inst_34539);

(statearr_34559_34580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (1))){
var inst_34533 = cljs.core.seq.call(null,coll);
var inst_34534 = inst_34533;
var state_34557__$1 = (function (){var statearr_34560 = state_34557;
(statearr_34560[(7)] = inst_34534);

return statearr_34560;
})();
var statearr_34561_34581 = state_34557__$1;
(statearr_34561_34581[(2)] = null);

(statearr_34561_34581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (4))){
var inst_34534 = (state_34557[(7)]);
var inst_34537 = cljs.core.first.call(null,inst_34534);
var state_34557__$1 = state_34557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34557__$1,(7),ch,inst_34537);
} else {
if((state_val_34558 === (13))){
var inst_34551 = (state_34557[(2)]);
var state_34557__$1 = state_34557;
var statearr_34562_34582 = state_34557__$1;
(statearr_34562_34582[(2)] = inst_34551);

(statearr_34562_34582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (6))){
var inst_34542 = (state_34557[(2)]);
var state_34557__$1 = state_34557;
if(cljs.core.truth_(inst_34542)){
var statearr_34563_34583 = state_34557__$1;
(statearr_34563_34583[(1)] = (8));

} else {
var statearr_34564_34584 = state_34557__$1;
(statearr_34564_34584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (3))){
var inst_34555 = (state_34557[(2)]);
var state_34557__$1 = state_34557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34557__$1,inst_34555);
} else {
if((state_val_34558 === (12))){
var state_34557__$1 = state_34557;
var statearr_34565_34585 = state_34557__$1;
(statearr_34565_34585[(2)] = null);

(statearr_34565_34585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (2))){
var inst_34534 = (state_34557[(7)]);
var state_34557__$1 = state_34557;
if(cljs.core.truth_(inst_34534)){
var statearr_34566_34586 = state_34557__$1;
(statearr_34566_34586[(1)] = (4));

} else {
var statearr_34567_34587 = state_34557__$1;
(statearr_34567_34587[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (11))){
var inst_34548 = cljs.core.async.close_BANG_.call(null,ch);
var state_34557__$1 = state_34557;
var statearr_34568_34588 = state_34557__$1;
(statearr_34568_34588[(2)] = inst_34548);

(statearr_34568_34588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (9))){
var state_34557__$1 = state_34557;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34569_34589 = state_34557__$1;
(statearr_34569_34589[(1)] = (11));

} else {
var statearr_34570_34590 = state_34557__$1;
(statearr_34570_34590[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (5))){
var inst_34534 = (state_34557[(7)]);
var state_34557__$1 = state_34557;
var statearr_34571_34591 = state_34557__$1;
(statearr_34571_34591[(2)] = inst_34534);

(statearr_34571_34591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (10))){
var inst_34553 = (state_34557[(2)]);
var state_34557__$1 = state_34557;
var statearr_34572_34592 = state_34557__$1;
(statearr_34572_34592[(2)] = inst_34553);

(statearr_34572_34592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (8))){
var inst_34534 = (state_34557[(7)]);
var inst_34544 = cljs.core.next.call(null,inst_34534);
var inst_34534__$1 = inst_34544;
var state_34557__$1 = (function (){var statearr_34573 = state_34557;
(statearr_34573[(7)] = inst_34534__$1);

return statearr_34573;
})();
var statearr_34574_34593 = state_34557__$1;
(statearr_34574_34593[(2)] = null);

(statearr_34574_34593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33999__auto__))
;
return ((function (switch__33908__auto__,c__33999__auto__){
return (function() {
var cljs$core$async$state_machine__33909__auto__ = null;
var cljs$core$async$state_machine__33909__auto____0 = (function (){
var statearr_34575 = [null,null,null,null,null,null,null,null];
(statearr_34575[(0)] = cljs$core$async$state_machine__33909__auto__);

(statearr_34575[(1)] = (1));

return statearr_34575;
});
var cljs$core$async$state_machine__33909__auto____1 = (function (state_34557){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_34557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e34576){if((e34576 instanceof Object)){
var ex__33912__auto__ = e34576;
var statearr_34577_34594 = state_34557;
(statearr_34577_34594[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34595 = state_34557;
state_34557 = G__34595;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
cljs$core$async$state_machine__33909__auto__ = function(state_34557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33909__auto____1.call(this,state_34557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33909__auto____0;
cljs$core$async$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33909__auto____1;
return cljs$core$async$state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto__))
})();
var state__34001__auto__ = (function (){var statearr_34578 = f__34000__auto__.call(null);
(statearr_34578[(6)] = c__33999__auto__);

return statearr_34578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto__))
);

return c__33999__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34596 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34596 = (function (ch,cs,meta34597){
this.ch = ch;
this.cs = cs;
this.meta34597 = meta34597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34598,meta34597__$1){
var self__ = this;
var _34598__$1 = this;
return (new cljs.core.async.t_cljs$core$async34596(self__.ch,self__.cs,meta34597__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34598){
var self__ = this;
var _34598__$1 = this;
return self__.meta34597;
});})(cs))
;

cljs.core.async.t_cljs$core$async34596.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34596.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34596.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34596.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34596.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34596.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34596.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34597","meta34597",1594035290,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34596.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34596";

cljs.core.async.t_cljs$core$async34596.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async34596");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34596.
 */
cljs.core.async.__GT_t_cljs$core$async34596 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34596(ch__$1,cs__$1,meta34597){
return (new cljs.core.async.t_cljs$core$async34596(ch__$1,cs__$1,meta34597));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34596(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33999__auto___34818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto___34818,cs,m,dchan,dctr,done){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto___34818,cs,m,dchan,dctr,done){
return (function (state_34733){
var state_val_34734 = (state_34733[(1)]);
if((state_val_34734 === (7))){
var inst_34729 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34735_34819 = state_34733__$1;
(statearr_34735_34819[(2)] = inst_34729);

(statearr_34735_34819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (20))){
var inst_34632 = (state_34733[(7)]);
var inst_34644 = cljs.core.first.call(null,inst_34632);
var inst_34645 = cljs.core.nth.call(null,inst_34644,(0),null);
var inst_34646 = cljs.core.nth.call(null,inst_34644,(1),null);
var state_34733__$1 = (function (){var statearr_34736 = state_34733;
(statearr_34736[(8)] = inst_34645);

return statearr_34736;
})();
if(cljs.core.truth_(inst_34646)){
var statearr_34737_34820 = state_34733__$1;
(statearr_34737_34820[(1)] = (22));

} else {
var statearr_34738_34821 = state_34733__$1;
(statearr_34738_34821[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (27))){
var inst_34601 = (state_34733[(9)]);
var inst_34681 = (state_34733[(10)]);
var inst_34674 = (state_34733[(11)]);
var inst_34676 = (state_34733[(12)]);
var inst_34681__$1 = cljs.core._nth.call(null,inst_34674,inst_34676);
var inst_34682 = cljs.core.async.put_BANG_.call(null,inst_34681__$1,inst_34601,done);
var state_34733__$1 = (function (){var statearr_34739 = state_34733;
(statearr_34739[(10)] = inst_34681__$1);

return statearr_34739;
})();
if(cljs.core.truth_(inst_34682)){
var statearr_34740_34822 = state_34733__$1;
(statearr_34740_34822[(1)] = (30));

} else {
var statearr_34741_34823 = state_34733__$1;
(statearr_34741_34823[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (1))){
var state_34733__$1 = state_34733;
var statearr_34742_34824 = state_34733__$1;
(statearr_34742_34824[(2)] = null);

(statearr_34742_34824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (24))){
var inst_34632 = (state_34733[(7)]);
var inst_34651 = (state_34733[(2)]);
var inst_34652 = cljs.core.next.call(null,inst_34632);
var inst_34610 = inst_34652;
var inst_34611 = null;
var inst_34612 = (0);
var inst_34613 = (0);
var state_34733__$1 = (function (){var statearr_34743 = state_34733;
(statearr_34743[(13)] = inst_34651);

(statearr_34743[(14)] = inst_34613);

(statearr_34743[(15)] = inst_34611);

(statearr_34743[(16)] = inst_34610);

(statearr_34743[(17)] = inst_34612);

return statearr_34743;
})();
var statearr_34744_34825 = state_34733__$1;
(statearr_34744_34825[(2)] = null);

(statearr_34744_34825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (39))){
var state_34733__$1 = state_34733;
var statearr_34748_34826 = state_34733__$1;
(statearr_34748_34826[(2)] = null);

(statearr_34748_34826[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (4))){
var inst_34601 = (state_34733[(9)]);
var inst_34601__$1 = (state_34733[(2)]);
var inst_34602 = (inst_34601__$1 == null);
var state_34733__$1 = (function (){var statearr_34749 = state_34733;
(statearr_34749[(9)] = inst_34601__$1);

return statearr_34749;
})();
if(cljs.core.truth_(inst_34602)){
var statearr_34750_34827 = state_34733__$1;
(statearr_34750_34827[(1)] = (5));

} else {
var statearr_34751_34828 = state_34733__$1;
(statearr_34751_34828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (15))){
var inst_34613 = (state_34733[(14)]);
var inst_34611 = (state_34733[(15)]);
var inst_34610 = (state_34733[(16)]);
var inst_34612 = (state_34733[(17)]);
var inst_34628 = (state_34733[(2)]);
var inst_34629 = (inst_34613 + (1));
var tmp34745 = inst_34611;
var tmp34746 = inst_34610;
var tmp34747 = inst_34612;
var inst_34610__$1 = tmp34746;
var inst_34611__$1 = tmp34745;
var inst_34612__$1 = tmp34747;
var inst_34613__$1 = inst_34629;
var state_34733__$1 = (function (){var statearr_34752 = state_34733;
(statearr_34752[(18)] = inst_34628);

(statearr_34752[(14)] = inst_34613__$1);

(statearr_34752[(15)] = inst_34611__$1);

(statearr_34752[(16)] = inst_34610__$1);

(statearr_34752[(17)] = inst_34612__$1);

return statearr_34752;
})();
var statearr_34753_34829 = state_34733__$1;
(statearr_34753_34829[(2)] = null);

(statearr_34753_34829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (21))){
var inst_34655 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34757_34830 = state_34733__$1;
(statearr_34757_34830[(2)] = inst_34655);

(statearr_34757_34830[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (31))){
var inst_34681 = (state_34733[(10)]);
var inst_34685 = done.call(null,null);
var inst_34686 = cljs.core.async.untap_STAR_.call(null,m,inst_34681);
var state_34733__$1 = (function (){var statearr_34758 = state_34733;
(statearr_34758[(19)] = inst_34685);

return statearr_34758;
})();
var statearr_34759_34831 = state_34733__$1;
(statearr_34759_34831[(2)] = inst_34686);

(statearr_34759_34831[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (32))){
var inst_34675 = (state_34733[(20)]);
var inst_34674 = (state_34733[(11)]);
var inst_34676 = (state_34733[(12)]);
var inst_34673 = (state_34733[(21)]);
var inst_34688 = (state_34733[(2)]);
var inst_34689 = (inst_34676 + (1));
var tmp34754 = inst_34675;
var tmp34755 = inst_34674;
var tmp34756 = inst_34673;
var inst_34673__$1 = tmp34756;
var inst_34674__$1 = tmp34755;
var inst_34675__$1 = tmp34754;
var inst_34676__$1 = inst_34689;
var state_34733__$1 = (function (){var statearr_34760 = state_34733;
(statearr_34760[(20)] = inst_34675__$1);

(statearr_34760[(11)] = inst_34674__$1);

(statearr_34760[(12)] = inst_34676__$1);

(statearr_34760[(21)] = inst_34673__$1);

(statearr_34760[(22)] = inst_34688);

return statearr_34760;
})();
var statearr_34761_34832 = state_34733__$1;
(statearr_34761_34832[(2)] = null);

(statearr_34761_34832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (40))){
var inst_34701 = (state_34733[(23)]);
var inst_34705 = done.call(null,null);
var inst_34706 = cljs.core.async.untap_STAR_.call(null,m,inst_34701);
var state_34733__$1 = (function (){var statearr_34762 = state_34733;
(statearr_34762[(24)] = inst_34705);

return statearr_34762;
})();
var statearr_34763_34833 = state_34733__$1;
(statearr_34763_34833[(2)] = inst_34706);

(statearr_34763_34833[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (33))){
var inst_34692 = (state_34733[(25)]);
var inst_34694 = cljs.core.chunked_seq_QMARK_.call(null,inst_34692);
var state_34733__$1 = state_34733;
if(inst_34694){
var statearr_34764_34834 = state_34733__$1;
(statearr_34764_34834[(1)] = (36));

} else {
var statearr_34765_34835 = state_34733__$1;
(statearr_34765_34835[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (13))){
var inst_34622 = (state_34733[(26)]);
var inst_34625 = cljs.core.async.close_BANG_.call(null,inst_34622);
var state_34733__$1 = state_34733;
var statearr_34766_34836 = state_34733__$1;
(statearr_34766_34836[(2)] = inst_34625);

(statearr_34766_34836[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (22))){
var inst_34645 = (state_34733[(8)]);
var inst_34648 = cljs.core.async.close_BANG_.call(null,inst_34645);
var state_34733__$1 = state_34733;
var statearr_34767_34837 = state_34733__$1;
(statearr_34767_34837[(2)] = inst_34648);

(statearr_34767_34837[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (36))){
var inst_34692 = (state_34733[(25)]);
var inst_34696 = cljs.core.chunk_first.call(null,inst_34692);
var inst_34697 = cljs.core.chunk_rest.call(null,inst_34692);
var inst_34698 = cljs.core.count.call(null,inst_34696);
var inst_34673 = inst_34697;
var inst_34674 = inst_34696;
var inst_34675 = inst_34698;
var inst_34676 = (0);
var state_34733__$1 = (function (){var statearr_34768 = state_34733;
(statearr_34768[(20)] = inst_34675);

(statearr_34768[(11)] = inst_34674);

(statearr_34768[(12)] = inst_34676);

(statearr_34768[(21)] = inst_34673);

return statearr_34768;
})();
var statearr_34769_34838 = state_34733__$1;
(statearr_34769_34838[(2)] = null);

(statearr_34769_34838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (41))){
var inst_34692 = (state_34733[(25)]);
var inst_34708 = (state_34733[(2)]);
var inst_34709 = cljs.core.next.call(null,inst_34692);
var inst_34673 = inst_34709;
var inst_34674 = null;
var inst_34675 = (0);
var inst_34676 = (0);
var state_34733__$1 = (function (){var statearr_34770 = state_34733;
(statearr_34770[(20)] = inst_34675);

(statearr_34770[(11)] = inst_34674);

(statearr_34770[(12)] = inst_34676);

(statearr_34770[(27)] = inst_34708);

(statearr_34770[(21)] = inst_34673);

return statearr_34770;
})();
var statearr_34771_34839 = state_34733__$1;
(statearr_34771_34839[(2)] = null);

(statearr_34771_34839[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (43))){
var state_34733__$1 = state_34733;
var statearr_34772_34840 = state_34733__$1;
(statearr_34772_34840[(2)] = null);

(statearr_34772_34840[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (29))){
var inst_34717 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34773_34841 = state_34733__$1;
(statearr_34773_34841[(2)] = inst_34717);

(statearr_34773_34841[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (44))){
var inst_34726 = (state_34733[(2)]);
var state_34733__$1 = (function (){var statearr_34774 = state_34733;
(statearr_34774[(28)] = inst_34726);

return statearr_34774;
})();
var statearr_34775_34842 = state_34733__$1;
(statearr_34775_34842[(2)] = null);

(statearr_34775_34842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (6))){
var inst_34665 = (state_34733[(29)]);
var inst_34664 = cljs.core.deref.call(null,cs);
var inst_34665__$1 = cljs.core.keys.call(null,inst_34664);
var inst_34666 = cljs.core.count.call(null,inst_34665__$1);
var inst_34667 = cljs.core.reset_BANG_.call(null,dctr,inst_34666);
var inst_34672 = cljs.core.seq.call(null,inst_34665__$1);
var inst_34673 = inst_34672;
var inst_34674 = null;
var inst_34675 = (0);
var inst_34676 = (0);
var state_34733__$1 = (function (){var statearr_34776 = state_34733;
(statearr_34776[(29)] = inst_34665__$1);

(statearr_34776[(20)] = inst_34675);

(statearr_34776[(11)] = inst_34674);

(statearr_34776[(12)] = inst_34676);

(statearr_34776[(21)] = inst_34673);

(statearr_34776[(30)] = inst_34667);

return statearr_34776;
})();
var statearr_34777_34843 = state_34733__$1;
(statearr_34777_34843[(2)] = null);

(statearr_34777_34843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (28))){
var inst_34692 = (state_34733[(25)]);
var inst_34673 = (state_34733[(21)]);
var inst_34692__$1 = cljs.core.seq.call(null,inst_34673);
var state_34733__$1 = (function (){var statearr_34778 = state_34733;
(statearr_34778[(25)] = inst_34692__$1);

return statearr_34778;
})();
if(inst_34692__$1){
var statearr_34779_34844 = state_34733__$1;
(statearr_34779_34844[(1)] = (33));

} else {
var statearr_34780_34845 = state_34733__$1;
(statearr_34780_34845[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (25))){
var inst_34675 = (state_34733[(20)]);
var inst_34676 = (state_34733[(12)]);
var inst_34678 = (inst_34676 < inst_34675);
var inst_34679 = inst_34678;
var state_34733__$1 = state_34733;
if(cljs.core.truth_(inst_34679)){
var statearr_34781_34846 = state_34733__$1;
(statearr_34781_34846[(1)] = (27));

} else {
var statearr_34782_34847 = state_34733__$1;
(statearr_34782_34847[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (34))){
var state_34733__$1 = state_34733;
var statearr_34783_34848 = state_34733__$1;
(statearr_34783_34848[(2)] = null);

(statearr_34783_34848[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (17))){
var state_34733__$1 = state_34733;
var statearr_34784_34849 = state_34733__$1;
(statearr_34784_34849[(2)] = null);

(statearr_34784_34849[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (3))){
var inst_34731 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34733__$1,inst_34731);
} else {
if((state_val_34734 === (12))){
var inst_34660 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34785_34850 = state_34733__$1;
(statearr_34785_34850[(2)] = inst_34660);

(statearr_34785_34850[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (2))){
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34733__$1,(4),ch);
} else {
if((state_val_34734 === (23))){
var state_34733__$1 = state_34733;
var statearr_34786_34851 = state_34733__$1;
(statearr_34786_34851[(2)] = null);

(statearr_34786_34851[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (35))){
var inst_34715 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34787_34852 = state_34733__$1;
(statearr_34787_34852[(2)] = inst_34715);

(statearr_34787_34852[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (19))){
var inst_34632 = (state_34733[(7)]);
var inst_34636 = cljs.core.chunk_first.call(null,inst_34632);
var inst_34637 = cljs.core.chunk_rest.call(null,inst_34632);
var inst_34638 = cljs.core.count.call(null,inst_34636);
var inst_34610 = inst_34637;
var inst_34611 = inst_34636;
var inst_34612 = inst_34638;
var inst_34613 = (0);
var state_34733__$1 = (function (){var statearr_34788 = state_34733;
(statearr_34788[(14)] = inst_34613);

(statearr_34788[(15)] = inst_34611);

(statearr_34788[(16)] = inst_34610);

(statearr_34788[(17)] = inst_34612);

return statearr_34788;
})();
var statearr_34789_34853 = state_34733__$1;
(statearr_34789_34853[(2)] = null);

(statearr_34789_34853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (11))){
var inst_34632 = (state_34733[(7)]);
var inst_34610 = (state_34733[(16)]);
var inst_34632__$1 = cljs.core.seq.call(null,inst_34610);
var state_34733__$1 = (function (){var statearr_34790 = state_34733;
(statearr_34790[(7)] = inst_34632__$1);

return statearr_34790;
})();
if(inst_34632__$1){
var statearr_34791_34854 = state_34733__$1;
(statearr_34791_34854[(1)] = (16));

} else {
var statearr_34792_34855 = state_34733__$1;
(statearr_34792_34855[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (9))){
var inst_34662 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34793_34856 = state_34733__$1;
(statearr_34793_34856[(2)] = inst_34662);

(statearr_34793_34856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (5))){
var inst_34608 = cljs.core.deref.call(null,cs);
var inst_34609 = cljs.core.seq.call(null,inst_34608);
var inst_34610 = inst_34609;
var inst_34611 = null;
var inst_34612 = (0);
var inst_34613 = (0);
var state_34733__$1 = (function (){var statearr_34794 = state_34733;
(statearr_34794[(14)] = inst_34613);

(statearr_34794[(15)] = inst_34611);

(statearr_34794[(16)] = inst_34610);

(statearr_34794[(17)] = inst_34612);

return statearr_34794;
})();
var statearr_34795_34857 = state_34733__$1;
(statearr_34795_34857[(2)] = null);

(statearr_34795_34857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (14))){
var state_34733__$1 = state_34733;
var statearr_34796_34858 = state_34733__$1;
(statearr_34796_34858[(2)] = null);

(statearr_34796_34858[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (45))){
var inst_34723 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34797_34859 = state_34733__$1;
(statearr_34797_34859[(2)] = inst_34723);

(statearr_34797_34859[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (26))){
var inst_34665 = (state_34733[(29)]);
var inst_34719 = (state_34733[(2)]);
var inst_34720 = cljs.core.seq.call(null,inst_34665);
var state_34733__$1 = (function (){var statearr_34798 = state_34733;
(statearr_34798[(31)] = inst_34719);

return statearr_34798;
})();
if(inst_34720){
var statearr_34799_34860 = state_34733__$1;
(statearr_34799_34860[(1)] = (42));

} else {
var statearr_34800_34861 = state_34733__$1;
(statearr_34800_34861[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (16))){
var inst_34632 = (state_34733[(7)]);
var inst_34634 = cljs.core.chunked_seq_QMARK_.call(null,inst_34632);
var state_34733__$1 = state_34733;
if(inst_34634){
var statearr_34801_34862 = state_34733__$1;
(statearr_34801_34862[(1)] = (19));

} else {
var statearr_34802_34863 = state_34733__$1;
(statearr_34802_34863[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (38))){
var inst_34712 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34803_34864 = state_34733__$1;
(statearr_34803_34864[(2)] = inst_34712);

(statearr_34803_34864[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (30))){
var state_34733__$1 = state_34733;
var statearr_34804_34865 = state_34733__$1;
(statearr_34804_34865[(2)] = null);

(statearr_34804_34865[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (10))){
var inst_34613 = (state_34733[(14)]);
var inst_34611 = (state_34733[(15)]);
var inst_34621 = cljs.core._nth.call(null,inst_34611,inst_34613);
var inst_34622 = cljs.core.nth.call(null,inst_34621,(0),null);
var inst_34623 = cljs.core.nth.call(null,inst_34621,(1),null);
var state_34733__$1 = (function (){var statearr_34805 = state_34733;
(statearr_34805[(26)] = inst_34622);

return statearr_34805;
})();
if(cljs.core.truth_(inst_34623)){
var statearr_34806_34866 = state_34733__$1;
(statearr_34806_34866[(1)] = (13));

} else {
var statearr_34807_34867 = state_34733__$1;
(statearr_34807_34867[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (18))){
var inst_34658 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34808_34868 = state_34733__$1;
(statearr_34808_34868[(2)] = inst_34658);

(statearr_34808_34868[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (42))){
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34733__$1,(45),dchan);
} else {
if((state_val_34734 === (37))){
var inst_34601 = (state_34733[(9)]);
var inst_34692 = (state_34733[(25)]);
var inst_34701 = (state_34733[(23)]);
var inst_34701__$1 = cljs.core.first.call(null,inst_34692);
var inst_34702 = cljs.core.async.put_BANG_.call(null,inst_34701__$1,inst_34601,done);
var state_34733__$1 = (function (){var statearr_34809 = state_34733;
(statearr_34809[(23)] = inst_34701__$1);

return statearr_34809;
})();
if(cljs.core.truth_(inst_34702)){
var statearr_34810_34869 = state_34733__$1;
(statearr_34810_34869[(1)] = (39));

} else {
var statearr_34811_34870 = state_34733__$1;
(statearr_34811_34870[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (8))){
var inst_34613 = (state_34733[(14)]);
var inst_34612 = (state_34733[(17)]);
var inst_34615 = (inst_34613 < inst_34612);
var inst_34616 = inst_34615;
var state_34733__$1 = state_34733;
if(cljs.core.truth_(inst_34616)){
var statearr_34812_34871 = state_34733__$1;
(statearr_34812_34871[(1)] = (10));

} else {
var statearr_34813_34872 = state_34733__$1;
(statearr_34813_34872[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33999__auto___34818,cs,m,dchan,dctr,done))
;
return ((function (switch__33908__auto__,c__33999__auto___34818,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33909__auto__ = null;
var cljs$core$async$mult_$_state_machine__33909__auto____0 = (function (){
var statearr_34814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34814[(0)] = cljs$core$async$mult_$_state_machine__33909__auto__);

(statearr_34814[(1)] = (1));

return statearr_34814;
});
var cljs$core$async$mult_$_state_machine__33909__auto____1 = (function (state_34733){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_34733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e34815){if((e34815 instanceof Object)){
var ex__33912__auto__ = e34815;
var statearr_34816_34873 = state_34733;
(statearr_34816_34873[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34874 = state_34733;
state_34733 = G__34874;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33909__auto__ = function(state_34733){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33909__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33909__auto____1.call(this,state_34733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33909__auto____0;
cljs$core$async$mult_$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33909__auto____1;
return cljs$core$async$mult_$_state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto___34818,cs,m,dchan,dctr,done))
})();
var state__34001__auto__ = (function (){var statearr_34817 = f__34000__auto__.call(null);
(statearr_34817[(6)] = c__33999__auto___34818);

return statearr_34817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto___34818,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34876 = arguments.length;
switch (G__34876) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___34888 = arguments.length;
var i__4532__auto___34889 = (0);
while(true){
if((i__4532__auto___34889 < len__4531__auto___34888)){
args__4534__auto__.push((arguments[i__4532__auto___34889]));

var G__34890 = (i__4532__auto___34889 + (1));
i__4532__auto___34889 = G__34890;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34882){
var map__34883 = p__34882;
var map__34883__$1 = ((((!((map__34883 == null)))?(((((map__34883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34883):map__34883);
var opts = map__34883__$1;
var statearr_34885_34891 = state;
(statearr_34885_34891[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__34883,map__34883__$1,opts){
return (function (val){
var statearr_34886_34892 = state;
(statearr_34886_34892[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34883,map__34883__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_34887_34893 = state;
(statearr_34887_34893[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34878){
var G__34879 = cljs.core.first.call(null,seq34878);
var seq34878__$1 = cljs.core.next.call(null,seq34878);
var G__34880 = cljs.core.first.call(null,seq34878__$1);
var seq34878__$2 = cljs.core.next.call(null,seq34878__$1);
var G__34881 = cljs.core.first.call(null,seq34878__$2);
var seq34878__$3 = cljs.core.next.call(null,seq34878__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34879,G__34880,G__34881,seq34878__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34894 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34894 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34895){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34895 = meta34895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34896,meta34895__$1){
var self__ = this;
var _34896__$1 = this;
return (new cljs.core.async.t_cljs$core$async34894(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34895__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34894.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34896){
var self__ = this;
var _34896__$1 = this;
return self__.meta34895;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34894.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34894.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34894.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34894.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34894.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34894.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34894.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34894.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34894.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34895","meta34895",73644955,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34894.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34894";

cljs.core.async.t_cljs$core$async34894.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async34894");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34894.
 */
cljs.core.async.__GT_t_cljs$core$async34894 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34894(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34895){
return (new cljs.core.async.t_cljs$core$async34894(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34895));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34894(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33999__auto___35058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto___35058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto___35058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34998){
var state_val_34999 = (state_34998[(1)]);
if((state_val_34999 === (7))){
var inst_34913 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
var statearr_35000_35059 = state_34998__$1;
(statearr_35000_35059[(2)] = inst_34913);

(statearr_35000_35059[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (20))){
var inst_34925 = (state_34998[(7)]);
var state_34998__$1 = state_34998;
var statearr_35001_35060 = state_34998__$1;
(statearr_35001_35060[(2)] = inst_34925);

(statearr_35001_35060[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (27))){
var state_34998__$1 = state_34998;
var statearr_35002_35061 = state_34998__$1;
(statearr_35002_35061[(2)] = null);

(statearr_35002_35061[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (1))){
var inst_34900 = (state_34998[(8)]);
var inst_34900__$1 = calc_state.call(null);
var inst_34902 = (inst_34900__$1 == null);
var inst_34903 = cljs.core.not.call(null,inst_34902);
var state_34998__$1 = (function (){var statearr_35003 = state_34998;
(statearr_35003[(8)] = inst_34900__$1);

return statearr_35003;
})();
if(inst_34903){
var statearr_35004_35062 = state_34998__$1;
(statearr_35004_35062[(1)] = (2));

} else {
var statearr_35005_35063 = state_34998__$1;
(statearr_35005_35063[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (24))){
var inst_34972 = (state_34998[(9)]);
var inst_34958 = (state_34998[(10)]);
var inst_34949 = (state_34998[(11)]);
var inst_34972__$1 = inst_34949.call(null,inst_34958);
var state_34998__$1 = (function (){var statearr_35006 = state_34998;
(statearr_35006[(9)] = inst_34972__$1);

return statearr_35006;
})();
if(cljs.core.truth_(inst_34972__$1)){
var statearr_35007_35064 = state_34998__$1;
(statearr_35007_35064[(1)] = (29));

} else {
var statearr_35008_35065 = state_34998__$1;
(statearr_35008_35065[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (4))){
var inst_34916 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
if(cljs.core.truth_(inst_34916)){
var statearr_35009_35066 = state_34998__$1;
(statearr_35009_35066[(1)] = (8));

} else {
var statearr_35010_35067 = state_34998__$1;
(statearr_35010_35067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (15))){
var inst_34943 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
if(cljs.core.truth_(inst_34943)){
var statearr_35011_35068 = state_34998__$1;
(statearr_35011_35068[(1)] = (19));

} else {
var statearr_35012_35069 = state_34998__$1;
(statearr_35012_35069[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (21))){
var inst_34948 = (state_34998[(12)]);
var inst_34948__$1 = (state_34998[(2)]);
var inst_34949 = cljs.core.get.call(null,inst_34948__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34950 = cljs.core.get.call(null,inst_34948__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34951 = cljs.core.get.call(null,inst_34948__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34998__$1 = (function (){var statearr_35013 = state_34998;
(statearr_35013[(13)] = inst_34950);

(statearr_35013[(11)] = inst_34949);

(statearr_35013[(12)] = inst_34948__$1);

return statearr_35013;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34998__$1,(22),inst_34951);
} else {
if((state_val_34999 === (31))){
var inst_34980 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
if(cljs.core.truth_(inst_34980)){
var statearr_35014_35070 = state_34998__$1;
(statearr_35014_35070[(1)] = (32));

} else {
var statearr_35015_35071 = state_34998__$1;
(statearr_35015_35071[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (32))){
var inst_34957 = (state_34998[(14)]);
var state_34998__$1 = state_34998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34998__$1,(35),out,inst_34957);
} else {
if((state_val_34999 === (33))){
var inst_34948 = (state_34998[(12)]);
var inst_34925 = inst_34948;
var state_34998__$1 = (function (){var statearr_35016 = state_34998;
(statearr_35016[(7)] = inst_34925);

return statearr_35016;
})();
var statearr_35017_35072 = state_34998__$1;
(statearr_35017_35072[(2)] = null);

(statearr_35017_35072[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (13))){
var inst_34925 = (state_34998[(7)]);
var inst_34932 = inst_34925.cljs$lang$protocol_mask$partition0$;
var inst_34933 = (inst_34932 & (64));
var inst_34934 = inst_34925.cljs$core$ISeq$;
var inst_34935 = (cljs.core.PROTOCOL_SENTINEL === inst_34934);
var inst_34936 = ((inst_34933) || (inst_34935));
var state_34998__$1 = state_34998;
if(cljs.core.truth_(inst_34936)){
var statearr_35018_35073 = state_34998__$1;
(statearr_35018_35073[(1)] = (16));

} else {
var statearr_35019_35074 = state_34998__$1;
(statearr_35019_35074[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (22))){
var inst_34958 = (state_34998[(10)]);
var inst_34957 = (state_34998[(14)]);
var inst_34956 = (state_34998[(2)]);
var inst_34957__$1 = cljs.core.nth.call(null,inst_34956,(0),null);
var inst_34958__$1 = cljs.core.nth.call(null,inst_34956,(1),null);
var inst_34959 = (inst_34957__$1 == null);
var inst_34960 = cljs.core._EQ_.call(null,inst_34958__$1,change);
var inst_34961 = ((inst_34959) || (inst_34960));
var state_34998__$1 = (function (){var statearr_35020 = state_34998;
(statearr_35020[(10)] = inst_34958__$1);

(statearr_35020[(14)] = inst_34957__$1);

return statearr_35020;
})();
if(cljs.core.truth_(inst_34961)){
var statearr_35021_35075 = state_34998__$1;
(statearr_35021_35075[(1)] = (23));

} else {
var statearr_35022_35076 = state_34998__$1;
(statearr_35022_35076[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (36))){
var inst_34948 = (state_34998[(12)]);
var inst_34925 = inst_34948;
var state_34998__$1 = (function (){var statearr_35023 = state_34998;
(statearr_35023[(7)] = inst_34925);

return statearr_35023;
})();
var statearr_35024_35077 = state_34998__$1;
(statearr_35024_35077[(2)] = null);

(statearr_35024_35077[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (29))){
var inst_34972 = (state_34998[(9)]);
var state_34998__$1 = state_34998;
var statearr_35025_35078 = state_34998__$1;
(statearr_35025_35078[(2)] = inst_34972);

(statearr_35025_35078[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (6))){
var state_34998__$1 = state_34998;
var statearr_35026_35079 = state_34998__$1;
(statearr_35026_35079[(2)] = false);

(statearr_35026_35079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (28))){
var inst_34968 = (state_34998[(2)]);
var inst_34969 = calc_state.call(null);
var inst_34925 = inst_34969;
var state_34998__$1 = (function (){var statearr_35027 = state_34998;
(statearr_35027[(7)] = inst_34925);

(statearr_35027[(15)] = inst_34968);

return statearr_35027;
})();
var statearr_35028_35080 = state_34998__$1;
(statearr_35028_35080[(2)] = null);

(statearr_35028_35080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (25))){
var inst_34994 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
var statearr_35029_35081 = state_34998__$1;
(statearr_35029_35081[(2)] = inst_34994);

(statearr_35029_35081[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (34))){
var inst_34992 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
var statearr_35030_35082 = state_34998__$1;
(statearr_35030_35082[(2)] = inst_34992);

(statearr_35030_35082[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (17))){
var state_34998__$1 = state_34998;
var statearr_35031_35083 = state_34998__$1;
(statearr_35031_35083[(2)] = false);

(statearr_35031_35083[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (3))){
var state_34998__$1 = state_34998;
var statearr_35032_35084 = state_34998__$1;
(statearr_35032_35084[(2)] = false);

(statearr_35032_35084[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (12))){
var inst_34996 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34998__$1,inst_34996);
} else {
if((state_val_34999 === (2))){
var inst_34900 = (state_34998[(8)]);
var inst_34905 = inst_34900.cljs$lang$protocol_mask$partition0$;
var inst_34906 = (inst_34905 & (64));
var inst_34907 = inst_34900.cljs$core$ISeq$;
var inst_34908 = (cljs.core.PROTOCOL_SENTINEL === inst_34907);
var inst_34909 = ((inst_34906) || (inst_34908));
var state_34998__$1 = state_34998;
if(cljs.core.truth_(inst_34909)){
var statearr_35033_35085 = state_34998__$1;
(statearr_35033_35085[(1)] = (5));

} else {
var statearr_35034_35086 = state_34998__$1;
(statearr_35034_35086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (23))){
var inst_34957 = (state_34998[(14)]);
var inst_34963 = (inst_34957 == null);
var state_34998__$1 = state_34998;
if(cljs.core.truth_(inst_34963)){
var statearr_35035_35087 = state_34998__$1;
(statearr_35035_35087[(1)] = (26));

} else {
var statearr_35036_35088 = state_34998__$1;
(statearr_35036_35088[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (35))){
var inst_34983 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
if(cljs.core.truth_(inst_34983)){
var statearr_35037_35089 = state_34998__$1;
(statearr_35037_35089[(1)] = (36));

} else {
var statearr_35038_35090 = state_34998__$1;
(statearr_35038_35090[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (19))){
var inst_34925 = (state_34998[(7)]);
var inst_34945 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34925);
var state_34998__$1 = state_34998;
var statearr_35039_35091 = state_34998__$1;
(statearr_35039_35091[(2)] = inst_34945);

(statearr_35039_35091[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (11))){
var inst_34925 = (state_34998[(7)]);
var inst_34929 = (inst_34925 == null);
var inst_34930 = cljs.core.not.call(null,inst_34929);
var state_34998__$1 = state_34998;
if(inst_34930){
var statearr_35040_35092 = state_34998__$1;
(statearr_35040_35092[(1)] = (13));

} else {
var statearr_35041_35093 = state_34998__$1;
(statearr_35041_35093[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (9))){
var inst_34900 = (state_34998[(8)]);
var state_34998__$1 = state_34998;
var statearr_35042_35094 = state_34998__$1;
(statearr_35042_35094[(2)] = inst_34900);

(statearr_35042_35094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (5))){
var state_34998__$1 = state_34998;
var statearr_35043_35095 = state_34998__$1;
(statearr_35043_35095[(2)] = true);

(statearr_35043_35095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (14))){
var state_34998__$1 = state_34998;
var statearr_35044_35096 = state_34998__$1;
(statearr_35044_35096[(2)] = false);

(statearr_35044_35096[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (26))){
var inst_34958 = (state_34998[(10)]);
var inst_34965 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34958);
var state_34998__$1 = state_34998;
var statearr_35045_35097 = state_34998__$1;
(statearr_35045_35097[(2)] = inst_34965);

(statearr_35045_35097[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (16))){
var state_34998__$1 = state_34998;
var statearr_35046_35098 = state_34998__$1;
(statearr_35046_35098[(2)] = true);

(statearr_35046_35098[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (38))){
var inst_34988 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
var statearr_35047_35099 = state_34998__$1;
(statearr_35047_35099[(2)] = inst_34988);

(statearr_35047_35099[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (30))){
var inst_34958 = (state_34998[(10)]);
var inst_34950 = (state_34998[(13)]);
var inst_34949 = (state_34998[(11)]);
var inst_34975 = cljs.core.empty_QMARK_.call(null,inst_34949);
var inst_34976 = inst_34950.call(null,inst_34958);
var inst_34977 = cljs.core.not.call(null,inst_34976);
var inst_34978 = ((inst_34975) && (inst_34977));
var state_34998__$1 = state_34998;
var statearr_35048_35100 = state_34998__$1;
(statearr_35048_35100[(2)] = inst_34978);

(statearr_35048_35100[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (10))){
var inst_34900 = (state_34998[(8)]);
var inst_34921 = (state_34998[(2)]);
var inst_34922 = cljs.core.get.call(null,inst_34921,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34923 = cljs.core.get.call(null,inst_34921,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34924 = cljs.core.get.call(null,inst_34921,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34925 = inst_34900;
var state_34998__$1 = (function (){var statearr_35049 = state_34998;
(statearr_35049[(16)] = inst_34923);

(statearr_35049[(7)] = inst_34925);

(statearr_35049[(17)] = inst_34924);

(statearr_35049[(18)] = inst_34922);

return statearr_35049;
})();
var statearr_35050_35101 = state_34998__$1;
(statearr_35050_35101[(2)] = null);

(statearr_35050_35101[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (18))){
var inst_34940 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
var statearr_35051_35102 = state_34998__$1;
(statearr_35051_35102[(2)] = inst_34940);

(statearr_35051_35102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (37))){
var state_34998__$1 = state_34998;
var statearr_35052_35103 = state_34998__$1;
(statearr_35052_35103[(2)] = null);

(statearr_35052_35103[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (8))){
var inst_34900 = (state_34998[(8)]);
var inst_34918 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34900);
var state_34998__$1 = state_34998;
var statearr_35053_35104 = state_34998__$1;
(statearr_35053_35104[(2)] = inst_34918);

(statearr_35053_35104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33999__auto___35058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33908__auto__,c__33999__auto___35058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33909__auto__ = null;
var cljs$core$async$mix_$_state_machine__33909__auto____0 = (function (){
var statearr_35054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35054[(0)] = cljs$core$async$mix_$_state_machine__33909__auto__);

(statearr_35054[(1)] = (1));

return statearr_35054;
});
var cljs$core$async$mix_$_state_machine__33909__auto____1 = (function (state_34998){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_34998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e35055){if((e35055 instanceof Object)){
var ex__33912__auto__ = e35055;
var statearr_35056_35105 = state_34998;
(statearr_35056_35105[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35106 = state_34998;
state_34998 = G__35106;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33909__auto__ = function(state_34998){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33909__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33909__auto____1.call(this,state_34998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33909__auto____0;
cljs$core$async$mix_$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33909__auto____1;
return cljs$core$async$mix_$_state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto___35058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34001__auto__ = (function (){var statearr_35057 = f__34000__auto__.call(null);
(statearr_35057[(6)] = c__33999__auto___35058);

return statearr_35057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto___35058,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35108 = arguments.length;
switch (G__35108) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35112 = arguments.length;
switch (G__35112) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__35110_SHARP_){
if(cljs.core.truth_(p1__35110_SHARP_.call(null,topic))){
return p1__35110_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35110_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35113 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35113 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35114){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35114 = meta35114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35115,meta35114__$1){
var self__ = this;
var _35115__$1 = this;
return (new cljs.core.async.t_cljs$core$async35113(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35114__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35113.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35115){
var self__ = this;
var _35115__$1 = this;
return self__.meta35114;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35113.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35113.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35113.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35113.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35113.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35113.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35113.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35113.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35114","meta35114",-1298223025,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35113";

cljs.core.async.t_cljs$core$async35113.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async35113");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35113.
 */
cljs.core.async.__GT_t_cljs$core$async35113 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35113(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35114){
return (new cljs.core.async.t_cljs$core$async35113(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35114));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35113(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33999__auto___35233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto___35233,mults,ensure_mult,p){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto___35233,mults,ensure_mult,p){
return (function (state_35187){
var state_val_35188 = (state_35187[(1)]);
if((state_val_35188 === (7))){
var inst_35183 = (state_35187[(2)]);
var state_35187__$1 = state_35187;
var statearr_35189_35234 = state_35187__$1;
(statearr_35189_35234[(2)] = inst_35183);

(statearr_35189_35234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (20))){
var state_35187__$1 = state_35187;
var statearr_35190_35235 = state_35187__$1;
(statearr_35190_35235[(2)] = null);

(statearr_35190_35235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (1))){
var state_35187__$1 = state_35187;
var statearr_35191_35236 = state_35187__$1;
(statearr_35191_35236[(2)] = null);

(statearr_35191_35236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (24))){
var inst_35166 = (state_35187[(7)]);
var inst_35175 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35166);
var state_35187__$1 = state_35187;
var statearr_35192_35237 = state_35187__$1;
(statearr_35192_35237[(2)] = inst_35175);

(statearr_35192_35237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (4))){
var inst_35118 = (state_35187[(8)]);
var inst_35118__$1 = (state_35187[(2)]);
var inst_35119 = (inst_35118__$1 == null);
var state_35187__$1 = (function (){var statearr_35193 = state_35187;
(statearr_35193[(8)] = inst_35118__$1);

return statearr_35193;
})();
if(cljs.core.truth_(inst_35119)){
var statearr_35194_35238 = state_35187__$1;
(statearr_35194_35238[(1)] = (5));

} else {
var statearr_35195_35239 = state_35187__$1;
(statearr_35195_35239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (15))){
var inst_35160 = (state_35187[(2)]);
var state_35187__$1 = state_35187;
var statearr_35196_35240 = state_35187__$1;
(statearr_35196_35240[(2)] = inst_35160);

(statearr_35196_35240[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (21))){
var inst_35180 = (state_35187[(2)]);
var state_35187__$1 = (function (){var statearr_35197 = state_35187;
(statearr_35197[(9)] = inst_35180);

return statearr_35197;
})();
var statearr_35198_35241 = state_35187__$1;
(statearr_35198_35241[(2)] = null);

(statearr_35198_35241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (13))){
var inst_35142 = (state_35187[(10)]);
var inst_35144 = cljs.core.chunked_seq_QMARK_.call(null,inst_35142);
var state_35187__$1 = state_35187;
if(inst_35144){
var statearr_35199_35242 = state_35187__$1;
(statearr_35199_35242[(1)] = (16));

} else {
var statearr_35200_35243 = state_35187__$1;
(statearr_35200_35243[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (22))){
var inst_35172 = (state_35187[(2)]);
var state_35187__$1 = state_35187;
if(cljs.core.truth_(inst_35172)){
var statearr_35201_35244 = state_35187__$1;
(statearr_35201_35244[(1)] = (23));

} else {
var statearr_35202_35245 = state_35187__$1;
(statearr_35202_35245[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (6))){
var inst_35168 = (state_35187[(11)]);
var inst_35118 = (state_35187[(8)]);
var inst_35166 = (state_35187[(7)]);
var inst_35166__$1 = topic_fn.call(null,inst_35118);
var inst_35167 = cljs.core.deref.call(null,mults);
var inst_35168__$1 = cljs.core.get.call(null,inst_35167,inst_35166__$1);
var state_35187__$1 = (function (){var statearr_35203 = state_35187;
(statearr_35203[(11)] = inst_35168__$1);

(statearr_35203[(7)] = inst_35166__$1);

return statearr_35203;
})();
if(cljs.core.truth_(inst_35168__$1)){
var statearr_35204_35246 = state_35187__$1;
(statearr_35204_35246[(1)] = (19));

} else {
var statearr_35205_35247 = state_35187__$1;
(statearr_35205_35247[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (25))){
var inst_35177 = (state_35187[(2)]);
var state_35187__$1 = state_35187;
var statearr_35206_35248 = state_35187__$1;
(statearr_35206_35248[(2)] = inst_35177);

(statearr_35206_35248[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (17))){
var inst_35142 = (state_35187[(10)]);
var inst_35151 = cljs.core.first.call(null,inst_35142);
var inst_35152 = cljs.core.async.muxch_STAR_.call(null,inst_35151);
var inst_35153 = cljs.core.async.close_BANG_.call(null,inst_35152);
var inst_35154 = cljs.core.next.call(null,inst_35142);
var inst_35128 = inst_35154;
var inst_35129 = null;
var inst_35130 = (0);
var inst_35131 = (0);
var state_35187__$1 = (function (){var statearr_35207 = state_35187;
(statearr_35207[(12)] = inst_35131);

(statearr_35207[(13)] = inst_35130);

(statearr_35207[(14)] = inst_35129);

(statearr_35207[(15)] = inst_35153);

(statearr_35207[(16)] = inst_35128);

return statearr_35207;
})();
var statearr_35208_35249 = state_35187__$1;
(statearr_35208_35249[(2)] = null);

(statearr_35208_35249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (3))){
var inst_35185 = (state_35187[(2)]);
var state_35187__$1 = state_35187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35187__$1,inst_35185);
} else {
if((state_val_35188 === (12))){
var inst_35162 = (state_35187[(2)]);
var state_35187__$1 = state_35187;
var statearr_35209_35250 = state_35187__$1;
(statearr_35209_35250[(2)] = inst_35162);

(statearr_35209_35250[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (2))){
var state_35187__$1 = state_35187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35187__$1,(4),ch);
} else {
if((state_val_35188 === (23))){
var state_35187__$1 = state_35187;
var statearr_35210_35251 = state_35187__$1;
(statearr_35210_35251[(2)] = null);

(statearr_35210_35251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (19))){
var inst_35168 = (state_35187[(11)]);
var inst_35118 = (state_35187[(8)]);
var inst_35170 = cljs.core.async.muxch_STAR_.call(null,inst_35168);
var state_35187__$1 = state_35187;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35187__$1,(22),inst_35170,inst_35118);
} else {
if((state_val_35188 === (11))){
var inst_35142 = (state_35187[(10)]);
var inst_35128 = (state_35187[(16)]);
var inst_35142__$1 = cljs.core.seq.call(null,inst_35128);
var state_35187__$1 = (function (){var statearr_35211 = state_35187;
(statearr_35211[(10)] = inst_35142__$1);

return statearr_35211;
})();
if(inst_35142__$1){
var statearr_35212_35252 = state_35187__$1;
(statearr_35212_35252[(1)] = (13));

} else {
var statearr_35213_35253 = state_35187__$1;
(statearr_35213_35253[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (9))){
var inst_35164 = (state_35187[(2)]);
var state_35187__$1 = state_35187;
var statearr_35214_35254 = state_35187__$1;
(statearr_35214_35254[(2)] = inst_35164);

(statearr_35214_35254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (5))){
var inst_35125 = cljs.core.deref.call(null,mults);
var inst_35126 = cljs.core.vals.call(null,inst_35125);
var inst_35127 = cljs.core.seq.call(null,inst_35126);
var inst_35128 = inst_35127;
var inst_35129 = null;
var inst_35130 = (0);
var inst_35131 = (0);
var state_35187__$1 = (function (){var statearr_35215 = state_35187;
(statearr_35215[(12)] = inst_35131);

(statearr_35215[(13)] = inst_35130);

(statearr_35215[(14)] = inst_35129);

(statearr_35215[(16)] = inst_35128);

return statearr_35215;
})();
var statearr_35216_35255 = state_35187__$1;
(statearr_35216_35255[(2)] = null);

(statearr_35216_35255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (14))){
var state_35187__$1 = state_35187;
var statearr_35220_35256 = state_35187__$1;
(statearr_35220_35256[(2)] = null);

(statearr_35220_35256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (16))){
var inst_35142 = (state_35187[(10)]);
var inst_35146 = cljs.core.chunk_first.call(null,inst_35142);
var inst_35147 = cljs.core.chunk_rest.call(null,inst_35142);
var inst_35148 = cljs.core.count.call(null,inst_35146);
var inst_35128 = inst_35147;
var inst_35129 = inst_35146;
var inst_35130 = inst_35148;
var inst_35131 = (0);
var state_35187__$1 = (function (){var statearr_35221 = state_35187;
(statearr_35221[(12)] = inst_35131);

(statearr_35221[(13)] = inst_35130);

(statearr_35221[(14)] = inst_35129);

(statearr_35221[(16)] = inst_35128);

return statearr_35221;
})();
var statearr_35222_35257 = state_35187__$1;
(statearr_35222_35257[(2)] = null);

(statearr_35222_35257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (10))){
var inst_35131 = (state_35187[(12)]);
var inst_35130 = (state_35187[(13)]);
var inst_35129 = (state_35187[(14)]);
var inst_35128 = (state_35187[(16)]);
var inst_35136 = cljs.core._nth.call(null,inst_35129,inst_35131);
var inst_35137 = cljs.core.async.muxch_STAR_.call(null,inst_35136);
var inst_35138 = cljs.core.async.close_BANG_.call(null,inst_35137);
var inst_35139 = (inst_35131 + (1));
var tmp35217 = inst_35130;
var tmp35218 = inst_35129;
var tmp35219 = inst_35128;
var inst_35128__$1 = tmp35219;
var inst_35129__$1 = tmp35218;
var inst_35130__$1 = tmp35217;
var inst_35131__$1 = inst_35139;
var state_35187__$1 = (function (){var statearr_35223 = state_35187;
(statearr_35223[(12)] = inst_35131__$1);

(statearr_35223[(13)] = inst_35130__$1);

(statearr_35223[(17)] = inst_35138);

(statearr_35223[(14)] = inst_35129__$1);

(statearr_35223[(16)] = inst_35128__$1);

return statearr_35223;
})();
var statearr_35224_35258 = state_35187__$1;
(statearr_35224_35258[(2)] = null);

(statearr_35224_35258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (18))){
var inst_35157 = (state_35187[(2)]);
var state_35187__$1 = state_35187;
var statearr_35225_35259 = state_35187__$1;
(statearr_35225_35259[(2)] = inst_35157);

(statearr_35225_35259[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35188 === (8))){
var inst_35131 = (state_35187[(12)]);
var inst_35130 = (state_35187[(13)]);
var inst_35133 = (inst_35131 < inst_35130);
var inst_35134 = inst_35133;
var state_35187__$1 = state_35187;
if(cljs.core.truth_(inst_35134)){
var statearr_35226_35260 = state_35187__$1;
(statearr_35226_35260[(1)] = (10));

} else {
var statearr_35227_35261 = state_35187__$1;
(statearr_35227_35261[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33999__auto___35233,mults,ensure_mult,p))
;
return ((function (switch__33908__auto__,c__33999__auto___35233,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33909__auto__ = null;
var cljs$core$async$state_machine__33909__auto____0 = (function (){
var statearr_35228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35228[(0)] = cljs$core$async$state_machine__33909__auto__);

(statearr_35228[(1)] = (1));

return statearr_35228;
});
var cljs$core$async$state_machine__33909__auto____1 = (function (state_35187){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_35187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e35229){if((e35229 instanceof Object)){
var ex__33912__auto__ = e35229;
var statearr_35230_35262 = state_35187;
(statearr_35230_35262[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35263 = state_35187;
state_35187 = G__35263;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
cljs$core$async$state_machine__33909__auto__ = function(state_35187){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33909__auto____1.call(this,state_35187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33909__auto____0;
cljs$core$async$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33909__auto____1;
return cljs$core$async$state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto___35233,mults,ensure_mult,p))
})();
var state__34001__auto__ = (function (){var statearr_35231 = f__34000__auto__.call(null);
(statearr_35231[(6)] = c__33999__auto___35233);

return statearr_35231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto___35233,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35265 = arguments.length;
switch (G__35265) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35268 = arguments.length;
switch (G__35268) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35271 = arguments.length;
switch (G__35271) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__33999__auto___35338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto___35338,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto___35338,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35310){
var state_val_35311 = (state_35310[(1)]);
if((state_val_35311 === (7))){
var state_35310__$1 = state_35310;
var statearr_35312_35339 = state_35310__$1;
(statearr_35312_35339[(2)] = null);

(statearr_35312_35339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (1))){
var state_35310__$1 = state_35310;
var statearr_35313_35340 = state_35310__$1;
(statearr_35313_35340[(2)] = null);

(statearr_35313_35340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (4))){
var inst_35274 = (state_35310[(7)]);
var inst_35276 = (inst_35274 < cnt);
var state_35310__$1 = state_35310;
if(cljs.core.truth_(inst_35276)){
var statearr_35314_35341 = state_35310__$1;
(statearr_35314_35341[(1)] = (6));

} else {
var statearr_35315_35342 = state_35310__$1;
(statearr_35315_35342[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (15))){
var inst_35306 = (state_35310[(2)]);
var state_35310__$1 = state_35310;
var statearr_35316_35343 = state_35310__$1;
(statearr_35316_35343[(2)] = inst_35306);

(statearr_35316_35343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (13))){
var inst_35299 = cljs.core.async.close_BANG_.call(null,out);
var state_35310__$1 = state_35310;
var statearr_35317_35344 = state_35310__$1;
(statearr_35317_35344[(2)] = inst_35299);

(statearr_35317_35344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (6))){
var state_35310__$1 = state_35310;
var statearr_35318_35345 = state_35310__$1;
(statearr_35318_35345[(2)] = null);

(statearr_35318_35345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (3))){
var inst_35308 = (state_35310[(2)]);
var state_35310__$1 = state_35310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35310__$1,inst_35308);
} else {
if((state_val_35311 === (12))){
var inst_35296 = (state_35310[(8)]);
var inst_35296__$1 = (state_35310[(2)]);
var inst_35297 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35296__$1);
var state_35310__$1 = (function (){var statearr_35319 = state_35310;
(statearr_35319[(8)] = inst_35296__$1);

return statearr_35319;
})();
if(cljs.core.truth_(inst_35297)){
var statearr_35320_35346 = state_35310__$1;
(statearr_35320_35346[(1)] = (13));

} else {
var statearr_35321_35347 = state_35310__$1;
(statearr_35321_35347[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (2))){
var inst_35273 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35274 = (0);
var state_35310__$1 = (function (){var statearr_35322 = state_35310;
(statearr_35322[(9)] = inst_35273);

(statearr_35322[(7)] = inst_35274);

return statearr_35322;
})();
var statearr_35323_35348 = state_35310__$1;
(statearr_35323_35348[(2)] = null);

(statearr_35323_35348[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (11))){
var inst_35274 = (state_35310[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35310,(10),Object,null,(9));
var inst_35283 = chs__$1.call(null,inst_35274);
var inst_35284 = done.call(null,inst_35274);
var inst_35285 = cljs.core.async.take_BANG_.call(null,inst_35283,inst_35284);
var state_35310__$1 = state_35310;
var statearr_35324_35349 = state_35310__$1;
(statearr_35324_35349[(2)] = inst_35285);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35310__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (9))){
var inst_35274 = (state_35310[(7)]);
var inst_35287 = (state_35310[(2)]);
var inst_35288 = (inst_35274 + (1));
var inst_35274__$1 = inst_35288;
var state_35310__$1 = (function (){var statearr_35325 = state_35310;
(statearr_35325[(10)] = inst_35287);

(statearr_35325[(7)] = inst_35274__$1);

return statearr_35325;
})();
var statearr_35326_35350 = state_35310__$1;
(statearr_35326_35350[(2)] = null);

(statearr_35326_35350[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (5))){
var inst_35294 = (state_35310[(2)]);
var state_35310__$1 = (function (){var statearr_35327 = state_35310;
(statearr_35327[(11)] = inst_35294);

return statearr_35327;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35310__$1,(12),dchan);
} else {
if((state_val_35311 === (14))){
var inst_35296 = (state_35310[(8)]);
var inst_35301 = cljs.core.apply.call(null,f,inst_35296);
var state_35310__$1 = state_35310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35310__$1,(16),out,inst_35301);
} else {
if((state_val_35311 === (16))){
var inst_35303 = (state_35310[(2)]);
var state_35310__$1 = (function (){var statearr_35328 = state_35310;
(statearr_35328[(12)] = inst_35303);

return statearr_35328;
})();
var statearr_35329_35351 = state_35310__$1;
(statearr_35329_35351[(2)] = null);

(statearr_35329_35351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (10))){
var inst_35278 = (state_35310[(2)]);
var inst_35279 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35310__$1 = (function (){var statearr_35330 = state_35310;
(statearr_35330[(13)] = inst_35278);

return statearr_35330;
})();
var statearr_35331_35352 = state_35310__$1;
(statearr_35331_35352[(2)] = inst_35279);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35310__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35311 === (8))){
var inst_35292 = (state_35310[(2)]);
var state_35310__$1 = state_35310;
var statearr_35332_35353 = state_35310__$1;
(statearr_35332_35353[(2)] = inst_35292);

(statearr_35332_35353[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33999__auto___35338,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33908__auto__,c__33999__auto___35338,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33909__auto__ = null;
var cljs$core$async$state_machine__33909__auto____0 = (function (){
var statearr_35333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35333[(0)] = cljs$core$async$state_machine__33909__auto__);

(statearr_35333[(1)] = (1));

return statearr_35333;
});
var cljs$core$async$state_machine__33909__auto____1 = (function (state_35310){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_35310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e35334){if((e35334 instanceof Object)){
var ex__33912__auto__ = e35334;
var statearr_35335_35354 = state_35310;
(statearr_35335_35354[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35355 = state_35310;
state_35310 = G__35355;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
cljs$core$async$state_machine__33909__auto__ = function(state_35310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33909__auto____1.call(this,state_35310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33909__auto____0;
cljs$core$async$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33909__auto____1;
return cljs$core$async$state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto___35338,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34001__auto__ = (function (){var statearr_35336 = f__34000__auto__.call(null);
(statearr_35336[(6)] = c__33999__auto___35338);

return statearr_35336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto___35338,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35358 = arguments.length;
switch (G__35358) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33999__auto___35412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto___35412,out){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto___35412,out){
return (function (state_35390){
var state_val_35391 = (state_35390[(1)]);
if((state_val_35391 === (7))){
var inst_35369 = (state_35390[(7)]);
var inst_35370 = (state_35390[(8)]);
var inst_35369__$1 = (state_35390[(2)]);
var inst_35370__$1 = cljs.core.nth.call(null,inst_35369__$1,(0),null);
var inst_35371 = cljs.core.nth.call(null,inst_35369__$1,(1),null);
var inst_35372 = (inst_35370__$1 == null);
var state_35390__$1 = (function (){var statearr_35392 = state_35390;
(statearr_35392[(7)] = inst_35369__$1);

(statearr_35392[(8)] = inst_35370__$1);

(statearr_35392[(9)] = inst_35371);

return statearr_35392;
})();
if(cljs.core.truth_(inst_35372)){
var statearr_35393_35413 = state_35390__$1;
(statearr_35393_35413[(1)] = (8));

} else {
var statearr_35394_35414 = state_35390__$1;
(statearr_35394_35414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (1))){
var inst_35359 = cljs.core.vec.call(null,chs);
var inst_35360 = inst_35359;
var state_35390__$1 = (function (){var statearr_35395 = state_35390;
(statearr_35395[(10)] = inst_35360);

return statearr_35395;
})();
var statearr_35396_35415 = state_35390__$1;
(statearr_35396_35415[(2)] = null);

(statearr_35396_35415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (4))){
var inst_35360 = (state_35390[(10)]);
var state_35390__$1 = state_35390;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35390__$1,(7),inst_35360);
} else {
if((state_val_35391 === (6))){
var inst_35386 = (state_35390[(2)]);
var state_35390__$1 = state_35390;
var statearr_35397_35416 = state_35390__$1;
(statearr_35397_35416[(2)] = inst_35386);

(statearr_35397_35416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (3))){
var inst_35388 = (state_35390[(2)]);
var state_35390__$1 = state_35390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35390__$1,inst_35388);
} else {
if((state_val_35391 === (2))){
var inst_35360 = (state_35390[(10)]);
var inst_35362 = cljs.core.count.call(null,inst_35360);
var inst_35363 = (inst_35362 > (0));
var state_35390__$1 = state_35390;
if(cljs.core.truth_(inst_35363)){
var statearr_35399_35417 = state_35390__$1;
(statearr_35399_35417[(1)] = (4));

} else {
var statearr_35400_35418 = state_35390__$1;
(statearr_35400_35418[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (11))){
var inst_35360 = (state_35390[(10)]);
var inst_35379 = (state_35390[(2)]);
var tmp35398 = inst_35360;
var inst_35360__$1 = tmp35398;
var state_35390__$1 = (function (){var statearr_35401 = state_35390;
(statearr_35401[(11)] = inst_35379);

(statearr_35401[(10)] = inst_35360__$1);

return statearr_35401;
})();
var statearr_35402_35419 = state_35390__$1;
(statearr_35402_35419[(2)] = null);

(statearr_35402_35419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (9))){
var inst_35370 = (state_35390[(8)]);
var state_35390__$1 = state_35390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35390__$1,(11),out,inst_35370);
} else {
if((state_val_35391 === (5))){
var inst_35384 = cljs.core.async.close_BANG_.call(null,out);
var state_35390__$1 = state_35390;
var statearr_35403_35420 = state_35390__$1;
(statearr_35403_35420[(2)] = inst_35384);

(statearr_35403_35420[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (10))){
var inst_35382 = (state_35390[(2)]);
var state_35390__$1 = state_35390;
var statearr_35404_35421 = state_35390__$1;
(statearr_35404_35421[(2)] = inst_35382);

(statearr_35404_35421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35391 === (8))){
var inst_35369 = (state_35390[(7)]);
var inst_35370 = (state_35390[(8)]);
var inst_35371 = (state_35390[(9)]);
var inst_35360 = (state_35390[(10)]);
var inst_35374 = (function (){var cs = inst_35360;
var vec__35365 = inst_35369;
var v = inst_35370;
var c = inst_35371;
return ((function (cs,vec__35365,v,c,inst_35369,inst_35370,inst_35371,inst_35360,state_val_35391,c__33999__auto___35412,out){
return (function (p1__35356_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35356_SHARP_);
});
;})(cs,vec__35365,v,c,inst_35369,inst_35370,inst_35371,inst_35360,state_val_35391,c__33999__auto___35412,out))
})();
var inst_35375 = cljs.core.filterv.call(null,inst_35374,inst_35360);
var inst_35360__$1 = inst_35375;
var state_35390__$1 = (function (){var statearr_35405 = state_35390;
(statearr_35405[(10)] = inst_35360__$1);

return statearr_35405;
})();
var statearr_35406_35422 = state_35390__$1;
(statearr_35406_35422[(2)] = null);

(statearr_35406_35422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33999__auto___35412,out))
;
return ((function (switch__33908__auto__,c__33999__auto___35412,out){
return (function() {
var cljs$core$async$state_machine__33909__auto__ = null;
var cljs$core$async$state_machine__33909__auto____0 = (function (){
var statearr_35407 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35407[(0)] = cljs$core$async$state_machine__33909__auto__);

(statearr_35407[(1)] = (1));

return statearr_35407;
});
var cljs$core$async$state_machine__33909__auto____1 = (function (state_35390){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_35390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e35408){if((e35408 instanceof Object)){
var ex__33912__auto__ = e35408;
var statearr_35409_35423 = state_35390;
(statearr_35409_35423[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35424 = state_35390;
state_35390 = G__35424;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
cljs$core$async$state_machine__33909__auto__ = function(state_35390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33909__auto____1.call(this,state_35390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33909__auto____0;
cljs$core$async$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33909__auto____1;
return cljs$core$async$state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto___35412,out))
})();
var state__34001__auto__ = (function (){var statearr_35410 = f__34000__auto__.call(null);
(statearr_35410[(6)] = c__33999__auto___35412);

return statearr_35410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto___35412,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35426 = arguments.length;
switch (G__35426) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33999__auto___35471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto___35471,out){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto___35471,out){
return (function (state_35450){
var state_val_35451 = (state_35450[(1)]);
if((state_val_35451 === (7))){
var inst_35432 = (state_35450[(7)]);
var inst_35432__$1 = (state_35450[(2)]);
var inst_35433 = (inst_35432__$1 == null);
var inst_35434 = cljs.core.not.call(null,inst_35433);
var state_35450__$1 = (function (){var statearr_35452 = state_35450;
(statearr_35452[(7)] = inst_35432__$1);

return statearr_35452;
})();
if(inst_35434){
var statearr_35453_35472 = state_35450__$1;
(statearr_35453_35472[(1)] = (8));

} else {
var statearr_35454_35473 = state_35450__$1;
(statearr_35454_35473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35451 === (1))){
var inst_35427 = (0);
var state_35450__$1 = (function (){var statearr_35455 = state_35450;
(statearr_35455[(8)] = inst_35427);

return statearr_35455;
})();
var statearr_35456_35474 = state_35450__$1;
(statearr_35456_35474[(2)] = null);

(statearr_35456_35474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35451 === (4))){
var state_35450__$1 = state_35450;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35450__$1,(7),ch);
} else {
if((state_val_35451 === (6))){
var inst_35445 = (state_35450[(2)]);
var state_35450__$1 = state_35450;
var statearr_35457_35475 = state_35450__$1;
(statearr_35457_35475[(2)] = inst_35445);

(statearr_35457_35475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35451 === (3))){
var inst_35447 = (state_35450[(2)]);
var inst_35448 = cljs.core.async.close_BANG_.call(null,out);
var state_35450__$1 = (function (){var statearr_35458 = state_35450;
(statearr_35458[(9)] = inst_35447);

return statearr_35458;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35450__$1,inst_35448);
} else {
if((state_val_35451 === (2))){
var inst_35427 = (state_35450[(8)]);
var inst_35429 = (inst_35427 < n);
var state_35450__$1 = state_35450;
if(cljs.core.truth_(inst_35429)){
var statearr_35459_35476 = state_35450__$1;
(statearr_35459_35476[(1)] = (4));

} else {
var statearr_35460_35477 = state_35450__$1;
(statearr_35460_35477[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35451 === (11))){
var inst_35427 = (state_35450[(8)]);
var inst_35437 = (state_35450[(2)]);
var inst_35438 = (inst_35427 + (1));
var inst_35427__$1 = inst_35438;
var state_35450__$1 = (function (){var statearr_35461 = state_35450;
(statearr_35461[(8)] = inst_35427__$1);

(statearr_35461[(10)] = inst_35437);

return statearr_35461;
})();
var statearr_35462_35478 = state_35450__$1;
(statearr_35462_35478[(2)] = null);

(statearr_35462_35478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35451 === (9))){
var state_35450__$1 = state_35450;
var statearr_35463_35479 = state_35450__$1;
(statearr_35463_35479[(2)] = null);

(statearr_35463_35479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35451 === (5))){
var state_35450__$1 = state_35450;
var statearr_35464_35480 = state_35450__$1;
(statearr_35464_35480[(2)] = null);

(statearr_35464_35480[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35451 === (10))){
var inst_35442 = (state_35450[(2)]);
var state_35450__$1 = state_35450;
var statearr_35465_35481 = state_35450__$1;
(statearr_35465_35481[(2)] = inst_35442);

(statearr_35465_35481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35451 === (8))){
var inst_35432 = (state_35450[(7)]);
var state_35450__$1 = state_35450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35450__$1,(11),out,inst_35432);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33999__auto___35471,out))
;
return ((function (switch__33908__auto__,c__33999__auto___35471,out){
return (function() {
var cljs$core$async$state_machine__33909__auto__ = null;
var cljs$core$async$state_machine__33909__auto____0 = (function (){
var statearr_35466 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35466[(0)] = cljs$core$async$state_machine__33909__auto__);

(statearr_35466[(1)] = (1));

return statearr_35466;
});
var cljs$core$async$state_machine__33909__auto____1 = (function (state_35450){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_35450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e35467){if((e35467 instanceof Object)){
var ex__33912__auto__ = e35467;
var statearr_35468_35482 = state_35450;
(statearr_35468_35482[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35483 = state_35450;
state_35450 = G__35483;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
cljs$core$async$state_machine__33909__auto__ = function(state_35450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33909__auto____1.call(this,state_35450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33909__auto____0;
cljs$core$async$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33909__auto____1;
return cljs$core$async$state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto___35471,out))
})();
var state__34001__auto__ = (function (){var statearr_35469 = f__34000__auto__.call(null);
(statearr_35469[(6)] = c__33999__auto___35471);

return statearr_35469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto___35471,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35485 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35485 = (function (f,ch,meta35486){
this.f = f;
this.ch = ch;
this.meta35486 = meta35486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35487,meta35486__$1){
var self__ = this;
var _35487__$1 = this;
return (new cljs.core.async.t_cljs$core$async35485(self__.f,self__.ch,meta35486__$1));
});

cljs.core.async.t_cljs$core$async35485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35487){
var self__ = this;
var _35487__$1 = this;
return self__.meta35486;
});

cljs.core.async.t_cljs$core$async35485.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35485.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35485.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35485.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35485.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35488 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35488 = (function (f,ch,meta35486,_,fn1,meta35489){
this.f = f;
this.ch = ch;
this.meta35486 = meta35486;
this._ = _;
this.fn1 = fn1;
this.meta35489 = meta35489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35490,meta35489__$1){
var self__ = this;
var _35490__$1 = this;
return (new cljs.core.async.t_cljs$core$async35488(self__.f,self__.ch,self__.meta35486,self__._,self__.fn1,meta35489__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35488.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35490){
var self__ = this;
var _35490__$1 = this;
return self__.meta35489;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35488.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35488.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35488.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35488.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35484_SHARP_){
return f1.call(null,(((p1__35484_SHARP_ == null))?null:self__.f.call(null,p1__35484_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35488.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35486","meta35486",38144257,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35485","cljs.core.async/t_cljs$core$async35485",1820319659,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35489","meta35489",1265745674,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35488.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35488";

cljs.core.async.t_cljs$core$async35488.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async35488");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35488.
 */
cljs.core.async.__GT_t_cljs$core$async35488 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35488(f__$1,ch__$1,meta35486__$1,___$2,fn1__$1,meta35489){
return (new cljs.core.async.t_cljs$core$async35488(f__$1,ch__$1,meta35486__$1,___$2,fn1__$1,meta35489));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35488(self__.f,self__.ch,self__.meta35486,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35485.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35485.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35486","meta35486",38144257,null)], null);
});

cljs.core.async.t_cljs$core$async35485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35485";

cljs.core.async.t_cljs$core$async35485.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async35485");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35485.
 */
cljs.core.async.__GT_t_cljs$core$async35485 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35485(f__$1,ch__$1,meta35486){
return (new cljs.core.async.t_cljs$core$async35485(f__$1,ch__$1,meta35486));
});

}

return (new cljs.core.async.t_cljs$core$async35485(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35491 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35491 = (function (f,ch,meta35492){
this.f = f;
this.ch = ch;
this.meta35492 = meta35492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35493,meta35492__$1){
var self__ = this;
var _35493__$1 = this;
return (new cljs.core.async.t_cljs$core$async35491(self__.f,self__.ch,meta35492__$1));
});

cljs.core.async.t_cljs$core$async35491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35493){
var self__ = this;
var _35493__$1 = this;
return self__.meta35492;
});

cljs.core.async.t_cljs$core$async35491.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35491.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35491.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35491.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35491.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35491.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35492","meta35492",1186222400,null)], null);
});

cljs.core.async.t_cljs$core$async35491.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35491";

cljs.core.async.t_cljs$core$async35491.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async35491");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35491.
 */
cljs.core.async.__GT_t_cljs$core$async35491 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35491(f__$1,ch__$1,meta35492){
return (new cljs.core.async.t_cljs$core$async35491(f__$1,ch__$1,meta35492));
});

}

return (new cljs.core.async.t_cljs$core$async35491(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35494 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35494 = (function (p,ch,meta35495){
this.p = p;
this.ch = ch;
this.meta35495 = meta35495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35496,meta35495__$1){
var self__ = this;
var _35496__$1 = this;
return (new cljs.core.async.t_cljs$core$async35494(self__.p,self__.ch,meta35495__$1));
});

cljs.core.async.t_cljs$core$async35494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35496){
var self__ = this;
var _35496__$1 = this;
return self__.meta35495;
});

cljs.core.async.t_cljs$core$async35494.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35494.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35494.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35494.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35494.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35494.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35494.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35494.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35495","meta35495",-614870355,null)], null);
});

cljs.core.async.t_cljs$core$async35494.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35494";

cljs.core.async.t_cljs$core$async35494.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async35494");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35494.
 */
cljs.core.async.__GT_t_cljs$core$async35494 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35494(p__$1,ch__$1,meta35495){
return (new cljs.core.async.t_cljs$core$async35494(p__$1,ch__$1,meta35495));
});

}

return (new cljs.core.async.t_cljs$core$async35494(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35498 = arguments.length;
switch (G__35498) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33999__auto___35538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto___35538,out){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto___35538,out){
return (function (state_35519){
var state_val_35520 = (state_35519[(1)]);
if((state_val_35520 === (7))){
var inst_35515 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35521_35539 = state_35519__$1;
(statearr_35521_35539[(2)] = inst_35515);

(statearr_35521_35539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (1))){
var state_35519__$1 = state_35519;
var statearr_35522_35540 = state_35519__$1;
(statearr_35522_35540[(2)] = null);

(statearr_35522_35540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (4))){
var inst_35501 = (state_35519[(7)]);
var inst_35501__$1 = (state_35519[(2)]);
var inst_35502 = (inst_35501__$1 == null);
var state_35519__$1 = (function (){var statearr_35523 = state_35519;
(statearr_35523[(7)] = inst_35501__$1);

return statearr_35523;
})();
if(cljs.core.truth_(inst_35502)){
var statearr_35524_35541 = state_35519__$1;
(statearr_35524_35541[(1)] = (5));

} else {
var statearr_35525_35542 = state_35519__$1;
(statearr_35525_35542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (6))){
var inst_35501 = (state_35519[(7)]);
var inst_35506 = p.call(null,inst_35501);
var state_35519__$1 = state_35519;
if(cljs.core.truth_(inst_35506)){
var statearr_35526_35543 = state_35519__$1;
(statearr_35526_35543[(1)] = (8));

} else {
var statearr_35527_35544 = state_35519__$1;
(statearr_35527_35544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (3))){
var inst_35517 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35519__$1,inst_35517);
} else {
if((state_val_35520 === (2))){
var state_35519__$1 = state_35519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35519__$1,(4),ch);
} else {
if((state_val_35520 === (11))){
var inst_35509 = (state_35519[(2)]);
var state_35519__$1 = state_35519;
var statearr_35528_35545 = state_35519__$1;
(statearr_35528_35545[(2)] = inst_35509);

(statearr_35528_35545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (9))){
var state_35519__$1 = state_35519;
var statearr_35529_35546 = state_35519__$1;
(statearr_35529_35546[(2)] = null);

(statearr_35529_35546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (5))){
var inst_35504 = cljs.core.async.close_BANG_.call(null,out);
var state_35519__$1 = state_35519;
var statearr_35530_35547 = state_35519__$1;
(statearr_35530_35547[(2)] = inst_35504);

(statearr_35530_35547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (10))){
var inst_35512 = (state_35519[(2)]);
var state_35519__$1 = (function (){var statearr_35531 = state_35519;
(statearr_35531[(8)] = inst_35512);

return statearr_35531;
})();
var statearr_35532_35548 = state_35519__$1;
(statearr_35532_35548[(2)] = null);

(statearr_35532_35548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35520 === (8))){
var inst_35501 = (state_35519[(7)]);
var state_35519__$1 = state_35519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35519__$1,(11),out,inst_35501);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33999__auto___35538,out))
;
return ((function (switch__33908__auto__,c__33999__auto___35538,out){
return (function() {
var cljs$core$async$state_machine__33909__auto__ = null;
var cljs$core$async$state_machine__33909__auto____0 = (function (){
var statearr_35533 = [null,null,null,null,null,null,null,null,null];
(statearr_35533[(0)] = cljs$core$async$state_machine__33909__auto__);

(statearr_35533[(1)] = (1));

return statearr_35533;
});
var cljs$core$async$state_machine__33909__auto____1 = (function (state_35519){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_35519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e35534){if((e35534 instanceof Object)){
var ex__33912__auto__ = e35534;
var statearr_35535_35549 = state_35519;
(statearr_35535_35549[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35550 = state_35519;
state_35519 = G__35550;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
cljs$core$async$state_machine__33909__auto__ = function(state_35519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33909__auto____1.call(this,state_35519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33909__auto____0;
cljs$core$async$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33909__auto____1;
return cljs$core$async$state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto___35538,out))
})();
var state__34001__auto__ = (function (){var statearr_35536 = f__34000__auto__.call(null);
(statearr_35536[(6)] = c__33999__auto___35538);

return statearr_35536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto___35538,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35552 = arguments.length;
switch (G__35552) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto__){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto__){
return (function (state_35615){
var state_val_35616 = (state_35615[(1)]);
if((state_val_35616 === (7))){
var inst_35611 = (state_35615[(2)]);
var state_35615__$1 = state_35615;
var statearr_35617_35655 = state_35615__$1;
(statearr_35617_35655[(2)] = inst_35611);

(statearr_35617_35655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (20))){
var inst_35581 = (state_35615[(7)]);
var inst_35592 = (state_35615[(2)]);
var inst_35593 = cljs.core.next.call(null,inst_35581);
var inst_35567 = inst_35593;
var inst_35568 = null;
var inst_35569 = (0);
var inst_35570 = (0);
var state_35615__$1 = (function (){var statearr_35618 = state_35615;
(statearr_35618[(8)] = inst_35569);

(statearr_35618[(9)] = inst_35592);

(statearr_35618[(10)] = inst_35568);

(statearr_35618[(11)] = inst_35570);

(statearr_35618[(12)] = inst_35567);

return statearr_35618;
})();
var statearr_35619_35656 = state_35615__$1;
(statearr_35619_35656[(2)] = null);

(statearr_35619_35656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (1))){
var state_35615__$1 = state_35615;
var statearr_35620_35657 = state_35615__$1;
(statearr_35620_35657[(2)] = null);

(statearr_35620_35657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (4))){
var inst_35556 = (state_35615[(13)]);
var inst_35556__$1 = (state_35615[(2)]);
var inst_35557 = (inst_35556__$1 == null);
var state_35615__$1 = (function (){var statearr_35621 = state_35615;
(statearr_35621[(13)] = inst_35556__$1);

return statearr_35621;
})();
if(cljs.core.truth_(inst_35557)){
var statearr_35622_35658 = state_35615__$1;
(statearr_35622_35658[(1)] = (5));

} else {
var statearr_35623_35659 = state_35615__$1;
(statearr_35623_35659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (15))){
var state_35615__$1 = state_35615;
var statearr_35627_35660 = state_35615__$1;
(statearr_35627_35660[(2)] = null);

(statearr_35627_35660[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (21))){
var state_35615__$1 = state_35615;
var statearr_35628_35661 = state_35615__$1;
(statearr_35628_35661[(2)] = null);

(statearr_35628_35661[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (13))){
var inst_35569 = (state_35615[(8)]);
var inst_35568 = (state_35615[(10)]);
var inst_35570 = (state_35615[(11)]);
var inst_35567 = (state_35615[(12)]);
var inst_35577 = (state_35615[(2)]);
var inst_35578 = (inst_35570 + (1));
var tmp35624 = inst_35569;
var tmp35625 = inst_35568;
var tmp35626 = inst_35567;
var inst_35567__$1 = tmp35626;
var inst_35568__$1 = tmp35625;
var inst_35569__$1 = tmp35624;
var inst_35570__$1 = inst_35578;
var state_35615__$1 = (function (){var statearr_35629 = state_35615;
(statearr_35629[(8)] = inst_35569__$1);

(statearr_35629[(10)] = inst_35568__$1);

(statearr_35629[(14)] = inst_35577);

(statearr_35629[(11)] = inst_35570__$1);

(statearr_35629[(12)] = inst_35567__$1);

return statearr_35629;
})();
var statearr_35630_35662 = state_35615__$1;
(statearr_35630_35662[(2)] = null);

(statearr_35630_35662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (22))){
var state_35615__$1 = state_35615;
var statearr_35631_35663 = state_35615__$1;
(statearr_35631_35663[(2)] = null);

(statearr_35631_35663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (6))){
var inst_35556 = (state_35615[(13)]);
var inst_35565 = f.call(null,inst_35556);
var inst_35566 = cljs.core.seq.call(null,inst_35565);
var inst_35567 = inst_35566;
var inst_35568 = null;
var inst_35569 = (0);
var inst_35570 = (0);
var state_35615__$1 = (function (){var statearr_35632 = state_35615;
(statearr_35632[(8)] = inst_35569);

(statearr_35632[(10)] = inst_35568);

(statearr_35632[(11)] = inst_35570);

(statearr_35632[(12)] = inst_35567);

return statearr_35632;
})();
var statearr_35633_35664 = state_35615__$1;
(statearr_35633_35664[(2)] = null);

(statearr_35633_35664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (17))){
var inst_35581 = (state_35615[(7)]);
var inst_35585 = cljs.core.chunk_first.call(null,inst_35581);
var inst_35586 = cljs.core.chunk_rest.call(null,inst_35581);
var inst_35587 = cljs.core.count.call(null,inst_35585);
var inst_35567 = inst_35586;
var inst_35568 = inst_35585;
var inst_35569 = inst_35587;
var inst_35570 = (0);
var state_35615__$1 = (function (){var statearr_35634 = state_35615;
(statearr_35634[(8)] = inst_35569);

(statearr_35634[(10)] = inst_35568);

(statearr_35634[(11)] = inst_35570);

(statearr_35634[(12)] = inst_35567);

return statearr_35634;
})();
var statearr_35635_35665 = state_35615__$1;
(statearr_35635_35665[(2)] = null);

(statearr_35635_35665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (3))){
var inst_35613 = (state_35615[(2)]);
var state_35615__$1 = state_35615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35615__$1,inst_35613);
} else {
if((state_val_35616 === (12))){
var inst_35601 = (state_35615[(2)]);
var state_35615__$1 = state_35615;
var statearr_35636_35666 = state_35615__$1;
(statearr_35636_35666[(2)] = inst_35601);

(statearr_35636_35666[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (2))){
var state_35615__$1 = state_35615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35615__$1,(4),in$);
} else {
if((state_val_35616 === (23))){
var inst_35609 = (state_35615[(2)]);
var state_35615__$1 = state_35615;
var statearr_35637_35667 = state_35615__$1;
(statearr_35637_35667[(2)] = inst_35609);

(statearr_35637_35667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (19))){
var inst_35596 = (state_35615[(2)]);
var state_35615__$1 = state_35615;
var statearr_35638_35668 = state_35615__$1;
(statearr_35638_35668[(2)] = inst_35596);

(statearr_35638_35668[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (11))){
var inst_35581 = (state_35615[(7)]);
var inst_35567 = (state_35615[(12)]);
var inst_35581__$1 = cljs.core.seq.call(null,inst_35567);
var state_35615__$1 = (function (){var statearr_35639 = state_35615;
(statearr_35639[(7)] = inst_35581__$1);

return statearr_35639;
})();
if(inst_35581__$1){
var statearr_35640_35669 = state_35615__$1;
(statearr_35640_35669[(1)] = (14));

} else {
var statearr_35641_35670 = state_35615__$1;
(statearr_35641_35670[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (9))){
var inst_35603 = (state_35615[(2)]);
var inst_35604 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35615__$1 = (function (){var statearr_35642 = state_35615;
(statearr_35642[(15)] = inst_35603);

return statearr_35642;
})();
if(cljs.core.truth_(inst_35604)){
var statearr_35643_35671 = state_35615__$1;
(statearr_35643_35671[(1)] = (21));

} else {
var statearr_35644_35672 = state_35615__$1;
(statearr_35644_35672[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (5))){
var inst_35559 = cljs.core.async.close_BANG_.call(null,out);
var state_35615__$1 = state_35615;
var statearr_35645_35673 = state_35615__$1;
(statearr_35645_35673[(2)] = inst_35559);

(statearr_35645_35673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (14))){
var inst_35581 = (state_35615[(7)]);
var inst_35583 = cljs.core.chunked_seq_QMARK_.call(null,inst_35581);
var state_35615__$1 = state_35615;
if(inst_35583){
var statearr_35646_35674 = state_35615__$1;
(statearr_35646_35674[(1)] = (17));

} else {
var statearr_35647_35675 = state_35615__$1;
(statearr_35647_35675[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (16))){
var inst_35599 = (state_35615[(2)]);
var state_35615__$1 = state_35615;
var statearr_35648_35676 = state_35615__$1;
(statearr_35648_35676[(2)] = inst_35599);

(statearr_35648_35676[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35616 === (10))){
var inst_35568 = (state_35615[(10)]);
var inst_35570 = (state_35615[(11)]);
var inst_35575 = cljs.core._nth.call(null,inst_35568,inst_35570);
var state_35615__$1 = state_35615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35615__$1,(13),out,inst_35575);
} else {
if((state_val_35616 === (18))){
var inst_35581 = (state_35615[(7)]);
var inst_35590 = cljs.core.first.call(null,inst_35581);
var state_35615__$1 = state_35615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35615__$1,(20),out,inst_35590);
} else {
if((state_val_35616 === (8))){
var inst_35569 = (state_35615[(8)]);
var inst_35570 = (state_35615[(11)]);
var inst_35572 = (inst_35570 < inst_35569);
var inst_35573 = inst_35572;
var state_35615__$1 = state_35615;
if(cljs.core.truth_(inst_35573)){
var statearr_35649_35677 = state_35615__$1;
(statearr_35649_35677[(1)] = (10));

} else {
var statearr_35650_35678 = state_35615__$1;
(statearr_35650_35678[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33999__auto__))
;
return ((function (switch__33908__auto__,c__33999__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33909__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33909__auto____0 = (function (){
var statearr_35651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35651[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33909__auto__);

(statearr_35651[(1)] = (1));

return statearr_35651;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33909__auto____1 = (function (state_35615){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_35615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e35652){if((e35652 instanceof Object)){
var ex__33912__auto__ = e35652;
var statearr_35653_35679 = state_35615;
(statearr_35653_35679[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35680 = state_35615;
state_35615 = G__35680;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33909__auto__ = function(state_35615){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33909__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33909__auto____1.call(this,state_35615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33909__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33909__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto__))
})();
var state__34001__auto__ = (function (){var statearr_35654 = f__34000__auto__.call(null);
(statearr_35654[(6)] = c__33999__auto__);

return statearr_35654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto__))
);

return c__33999__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35682 = arguments.length;
switch (G__35682) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35685 = arguments.length;
switch (G__35685) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35688 = arguments.length;
switch (G__35688) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33999__auto___35735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto___35735,out){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto___35735,out){
return (function (state_35712){
var state_val_35713 = (state_35712[(1)]);
if((state_val_35713 === (7))){
var inst_35707 = (state_35712[(2)]);
var state_35712__$1 = state_35712;
var statearr_35714_35736 = state_35712__$1;
(statearr_35714_35736[(2)] = inst_35707);

(statearr_35714_35736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35713 === (1))){
var inst_35689 = null;
var state_35712__$1 = (function (){var statearr_35715 = state_35712;
(statearr_35715[(7)] = inst_35689);

return statearr_35715;
})();
var statearr_35716_35737 = state_35712__$1;
(statearr_35716_35737[(2)] = null);

(statearr_35716_35737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35713 === (4))){
var inst_35692 = (state_35712[(8)]);
var inst_35692__$1 = (state_35712[(2)]);
var inst_35693 = (inst_35692__$1 == null);
var inst_35694 = cljs.core.not.call(null,inst_35693);
var state_35712__$1 = (function (){var statearr_35717 = state_35712;
(statearr_35717[(8)] = inst_35692__$1);

return statearr_35717;
})();
if(inst_35694){
var statearr_35718_35738 = state_35712__$1;
(statearr_35718_35738[(1)] = (5));

} else {
var statearr_35719_35739 = state_35712__$1;
(statearr_35719_35739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35713 === (6))){
var state_35712__$1 = state_35712;
var statearr_35720_35740 = state_35712__$1;
(statearr_35720_35740[(2)] = null);

(statearr_35720_35740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35713 === (3))){
var inst_35709 = (state_35712[(2)]);
var inst_35710 = cljs.core.async.close_BANG_.call(null,out);
var state_35712__$1 = (function (){var statearr_35721 = state_35712;
(statearr_35721[(9)] = inst_35709);

return statearr_35721;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35712__$1,inst_35710);
} else {
if((state_val_35713 === (2))){
var state_35712__$1 = state_35712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35712__$1,(4),ch);
} else {
if((state_val_35713 === (11))){
var inst_35692 = (state_35712[(8)]);
var inst_35701 = (state_35712[(2)]);
var inst_35689 = inst_35692;
var state_35712__$1 = (function (){var statearr_35722 = state_35712;
(statearr_35722[(7)] = inst_35689);

(statearr_35722[(10)] = inst_35701);

return statearr_35722;
})();
var statearr_35723_35741 = state_35712__$1;
(statearr_35723_35741[(2)] = null);

(statearr_35723_35741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35713 === (9))){
var inst_35692 = (state_35712[(8)]);
var state_35712__$1 = state_35712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35712__$1,(11),out,inst_35692);
} else {
if((state_val_35713 === (5))){
var inst_35689 = (state_35712[(7)]);
var inst_35692 = (state_35712[(8)]);
var inst_35696 = cljs.core._EQ_.call(null,inst_35692,inst_35689);
var state_35712__$1 = state_35712;
if(inst_35696){
var statearr_35725_35742 = state_35712__$1;
(statearr_35725_35742[(1)] = (8));

} else {
var statearr_35726_35743 = state_35712__$1;
(statearr_35726_35743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35713 === (10))){
var inst_35704 = (state_35712[(2)]);
var state_35712__$1 = state_35712;
var statearr_35727_35744 = state_35712__$1;
(statearr_35727_35744[(2)] = inst_35704);

(statearr_35727_35744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35713 === (8))){
var inst_35689 = (state_35712[(7)]);
var tmp35724 = inst_35689;
var inst_35689__$1 = tmp35724;
var state_35712__$1 = (function (){var statearr_35728 = state_35712;
(statearr_35728[(7)] = inst_35689__$1);

return statearr_35728;
})();
var statearr_35729_35745 = state_35712__$1;
(statearr_35729_35745[(2)] = null);

(statearr_35729_35745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33999__auto___35735,out))
;
return ((function (switch__33908__auto__,c__33999__auto___35735,out){
return (function() {
var cljs$core$async$state_machine__33909__auto__ = null;
var cljs$core$async$state_machine__33909__auto____0 = (function (){
var statearr_35730 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35730[(0)] = cljs$core$async$state_machine__33909__auto__);

(statearr_35730[(1)] = (1));

return statearr_35730;
});
var cljs$core$async$state_machine__33909__auto____1 = (function (state_35712){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_35712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e35731){if((e35731 instanceof Object)){
var ex__33912__auto__ = e35731;
var statearr_35732_35746 = state_35712;
(statearr_35732_35746[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35747 = state_35712;
state_35712 = G__35747;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
cljs$core$async$state_machine__33909__auto__ = function(state_35712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33909__auto____1.call(this,state_35712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33909__auto____0;
cljs$core$async$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33909__auto____1;
return cljs$core$async$state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto___35735,out))
})();
var state__34001__auto__ = (function (){var statearr_35733 = f__34000__auto__.call(null);
(statearr_35733[(6)] = c__33999__auto___35735);

return statearr_35733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto___35735,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35749 = arguments.length;
switch (G__35749) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33999__auto___35815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto___35815,out){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto___35815,out){
return (function (state_35787){
var state_val_35788 = (state_35787[(1)]);
if((state_val_35788 === (7))){
var inst_35783 = (state_35787[(2)]);
var state_35787__$1 = state_35787;
var statearr_35789_35816 = state_35787__$1;
(statearr_35789_35816[(2)] = inst_35783);

(statearr_35789_35816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35788 === (1))){
var inst_35750 = (new Array(n));
var inst_35751 = inst_35750;
var inst_35752 = (0);
var state_35787__$1 = (function (){var statearr_35790 = state_35787;
(statearr_35790[(7)] = inst_35752);

(statearr_35790[(8)] = inst_35751);

return statearr_35790;
})();
var statearr_35791_35817 = state_35787__$1;
(statearr_35791_35817[(2)] = null);

(statearr_35791_35817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35788 === (4))){
var inst_35755 = (state_35787[(9)]);
var inst_35755__$1 = (state_35787[(2)]);
var inst_35756 = (inst_35755__$1 == null);
var inst_35757 = cljs.core.not.call(null,inst_35756);
var state_35787__$1 = (function (){var statearr_35792 = state_35787;
(statearr_35792[(9)] = inst_35755__$1);

return statearr_35792;
})();
if(inst_35757){
var statearr_35793_35818 = state_35787__$1;
(statearr_35793_35818[(1)] = (5));

} else {
var statearr_35794_35819 = state_35787__$1;
(statearr_35794_35819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35788 === (15))){
var inst_35777 = (state_35787[(2)]);
var state_35787__$1 = state_35787;
var statearr_35795_35820 = state_35787__$1;
(statearr_35795_35820[(2)] = inst_35777);

(statearr_35795_35820[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35788 === (13))){
var state_35787__$1 = state_35787;
var statearr_35796_35821 = state_35787__$1;
(statearr_35796_35821[(2)] = null);

(statearr_35796_35821[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35788 === (6))){
var inst_35752 = (state_35787[(7)]);
var inst_35773 = (inst_35752 > (0));
var state_35787__$1 = state_35787;
if(cljs.core.truth_(inst_35773)){
var statearr_35797_35822 = state_35787__$1;
(statearr_35797_35822[(1)] = (12));

} else {
var statearr_35798_35823 = state_35787__$1;
(statearr_35798_35823[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35788 === (3))){
var inst_35785 = (state_35787[(2)]);
var state_35787__$1 = state_35787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35787__$1,inst_35785);
} else {
if((state_val_35788 === (12))){
var inst_35751 = (state_35787[(8)]);
var inst_35775 = cljs.core.vec.call(null,inst_35751);
var state_35787__$1 = state_35787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35787__$1,(15),out,inst_35775);
} else {
if((state_val_35788 === (2))){
var state_35787__$1 = state_35787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35787__$1,(4),ch);
} else {
if((state_val_35788 === (11))){
var inst_35767 = (state_35787[(2)]);
var inst_35768 = (new Array(n));
var inst_35751 = inst_35768;
var inst_35752 = (0);
var state_35787__$1 = (function (){var statearr_35799 = state_35787;
(statearr_35799[(10)] = inst_35767);

(statearr_35799[(7)] = inst_35752);

(statearr_35799[(8)] = inst_35751);

return statearr_35799;
})();
var statearr_35800_35824 = state_35787__$1;
(statearr_35800_35824[(2)] = null);

(statearr_35800_35824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35788 === (9))){
var inst_35751 = (state_35787[(8)]);
var inst_35765 = cljs.core.vec.call(null,inst_35751);
var state_35787__$1 = state_35787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35787__$1,(11),out,inst_35765);
} else {
if((state_val_35788 === (5))){
var inst_35760 = (state_35787[(11)]);
var inst_35752 = (state_35787[(7)]);
var inst_35751 = (state_35787[(8)]);
var inst_35755 = (state_35787[(9)]);
var inst_35759 = (inst_35751[inst_35752] = inst_35755);
var inst_35760__$1 = (inst_35752 + (1));
var inst_35761 = (inst_35760__$1 < n);
var state_35787__$1 = (function (){var statearr_35801 = state_35787;
(statearr_35801[(11)] = inst_35760__$1);

(statearr_35801[(12)] = inst_35759);

return statearr_35801;
})();
if(cljs.core.truth_(inst_35761)){
var statearr_35802_35825 = state_35787__$1;
(statearr_35802_35825[(1)] = (8));

} else {
var statearr_35803_35826 = state_35787__$1;
(statearr_35803_35826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35788 === (14))){
var inst_35780 = (state_35787[(2)]);
var inst_35781 = cljs.core.async.close_BANG_.call(null,out);
var state_35787__$1 = (function (){var statearr_35805 = state_35787;
(statearr_35805[(13)] = inst_35780);

return statearr_35805;
})();
var statearr_35806_35827 = state_35787__$1;
(statearr_35806_35827[(2)] = inst_35781);

(statearr_35806_35827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35788 === (10))){
var inst_35771 = (state_35787[(2)]);
var state_35787__$1 = state_35787;
var statearr_35807_35828 = state_35787__$1;
(statearr_35807_35828[(2)] = inst_35771);

(statearr_35807_35828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35788 === (8))){
var inst_35760 = (state_35787[(11)]);
var inst_35751 = (state_35787[(8)]);
var tmp35804 = inst_35751;
var inst_35751__$1 = tmp35804;
var inst_35752 = inst_35760;
var state_35787__$1 = (function (){var statearr_35808 = state_35787;
(statearr_35808[(7)] = inst_35752);

(statearr_35808[(8)] = inst_35751__$1);

return statearr_35808;
})();
var statearr_35809_35829 = state_35787__$1;
(statearr_35809_35829[(2)] = null);

(statearr_35809_35829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33999__auto___35815,out))
;
return ((function (switch__33908__auto__,c__33999__auto___35815,out){
return (function() {
var cljs$core$async$state_machine__33909__auto__ = null;
var cljs$core$async$state_machine__33909__auto____0 = (function (){
var statearr_35810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35810[(0)] = cljs$core$async$state_machine__33909__auto__);

(statearr_35810[(1)] = (1));

return statearr_35810;
});
var cljs$core$async$state_machine__33909__auto____1 = (function (state_35787){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_35787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e35811){if((e35811 instanceof Object)){
var ex__33912__auto__ = e35811;
var statearr_35812_35830 = state_35787;
(statearr_35812_35830[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35831 = state_35787;
state_35787 = G__35831;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
cljs$core$async$state_machine__33909__auto__ = function(state_35787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33909__auto____1.call(this,state_35787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33909__auto____0;
cljs$core$async$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33909__auto____1;
return cljs$core$async$state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto___35815,out))
})();
var state__34001__auto__ = (function (){var statearr_35813 = f__34000__auto__.call(null);
(statearr_35813[(6)] = c__33999__auto___35815);

return statearr_35813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto___35815,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35833 = arguments.length;
switch (G__35833) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33999__auto___35903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto___35903,out){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto___35903,out){
return (function (state_35875){
var state_val_35876 = (state_35875[(1)]);
if((state_val_35876 === (7))){
var inst_35871 = (state_35875[(2)]);
var state_35875__$1 = state_35875;
var statearr_35877_35904 = state_35875__$1;
(statearr_35877_35904[(2)] = inst_35871);

(statearr_35877_35904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35876 === (1))){
var inst_35834 = [];
var inst_35835 = inst_35834;
var inst_35836 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35875__$1 = (function (){var statearr_35878 = state_35875;
(statearr_35878[(7)] = inst_35835);

(statearr_35878[(8)] = inst_35836);

return statearr_35878;
})();
var statearr_35879_35905 = state_35875__$1;
(statearr_35879_35905[(2)] = null);

(statearr_35879_35905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35876 === (4))){
var inst_35839 = (state_35875[(9)]);
var inst_35839__$1 = (state_35875[(2)]);
var inst_35840 = (inst_35839__$1 == null);
var inst_35841 = cljs.core.not.call(null,inst_35840);
var state_35875__$1 = (function (){var statearr_35880 = state_35875;
(statearr_35880[(9)] = inst_35839__$1);

return statearr_35880;
})();
if(inst_35841){
var statearr_35881_35906 = state_35875__$1;
(statearr_35881_35906[(1)] = (5));

} else {
var statearr_35882_35907 = state_35875__$1;
(statearr_35882_35907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35876 === (15))){
var inst_35865 = (state_35875[(2)]);
var state_35875__$1 = state_35875;
var statearr_35883_35908 = state_35875__$1;
(statearr_35883_35908[(2)] = inst_35865);

(statearr_35883_35908[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35876 === (13))){
var state_35875__$1 = state_35875;
var statearr_35884_35909 = state_35875__$1;
(statearr_35884_35909[(2)] = null);

(statearr_35884_35909[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35876 === (6))){
var inst_35835 = (state_35875[(7)]);
var inst_35860 = inst_35835.length;
var inst_35861 = (inst_35860 > (0));
var state_35875__$1 = state_35875;
if(cljs.core.truth_(inst_35861)){
var statearr_35885_35910 = state_35875__$1;
(statearr_35885_35910[(1)] = (12));

} else {
var statearr_35886_35911 = state_35875__$1;
(statearr_35886_35911[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35876 === (3))){
var inst_35873 = (state_35875[(2)]);
var state_35875__$1 = state_35875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35875__$1,inst_35873);
} else {
if((state_val_35876 === (12))){
var inst_35835 = (state_35875[(7)]);
var inst_35863 = cljs.core.vec.call(null,inst_35835);
var state_35875__$1 = state_35875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35875__$1,(15),out,inst_35863);
} else {
if((state_val_35876 === (2))){
var state_35875__$1 = state_35875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35875__$1,(4),ch);
} else {
if((state_val_35876 === (11))){
var inst_35839 = (state_35875[(9)]);
var inst_35843 = (state_35875[(10)]);
var inst_35853 = (state_35875[(2)]);
var inst_35854 = [];
var inst_35855 = inst_35854.push(inst_35839);
var inst_35835 = inst_35854;
var inst_35836 = inst_35843;
var state_35875__$1 = (function (){var statearr_35887 = state_35875;
(statearr_35887[(7)] = inst_35835);

(statearr_35887[(11)] = inst_35853);

(statearr_35887[(8)] = inst_35836);

(statearr_35887[(12)] = inst_35855);

return statearr_35887;
})();
var statearr_35888_35912 = state_35875__$1;
(statearr_35888_35912[(2)] = null);

(statearr_35888_35912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35876 === (9))){
var inst_35835 = (state_35875[(7)]);
var inst_35851 = cljs.core.vec.call(null,inst_35835);
var state_35875__$1 = state_35875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35875__$1,(11),out,inst_35851);
} else {
if((state_val_35876 === (5))){
var inst_35839 = (state_35875[(9)]);
var inst_35843 = (state_35875[(10)]);
var inst_35836 = (state_35875[(8)]);
var inst_35843__$1 = f.call(null,inst_35839);
var inst_35844 = cljs.core._EQ_.call(null,inst_35843__$1,inst_35836);
var inst_35845 = cljs.core.keyword_identical_QMARK_.call(null,inst_35836,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35846 = ((inst_35844) || (inst_35845));
var state_35875__$1 = (function (){var statearr_35889 = state_35875;
(statearr_35889[(10)] = inst_35843__$1);

return statearr_35889;
})();
if(cljs.core.truth_(inst_35846)){
var statearr_35890_35913 = state_35875__$1;
(statearr_35890_35913[(1)] = (8));

} else {
var statearr_35891_35914 = state_35875__$1;
(statearr_35891_35914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35876 === (14))){
var inst_35868 = (state_35875[(2)]);
var inst_35869 = cljs.core.async.close_BANG_.call(null,out);
var state_35875__$1 = (function (){var statearr_35893 = state_35875;
(statearr_35893[(13)] = inst_35868);

return statearr_35893;
})();
var statearr_35894_35915 = state_35875__$1;
(statearr_35894_35915[(2)] = inst_35869);

(statearr_35894_35915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35876 === (10))){
var inst_35858 = (state_35875[(2)]);
var state_35875__$1 = state_35875;
var statearr_35895_35916 = state_35875__$1;
(statearr_35895_35916[(2)] = inst_35858);

(statearr_35895_35916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35876 === (8))){
var inst_35835 = (state_35875[(7)]);
var inst_35839 = (state_35875[(9)]);
var inst_35843 = (state_35875[(10)]);
var inst_35848 = inst_35835.push(inst_35839);
var tmp35892 = inst_35835;
var inst_35835__$1 = tmp35892;
var inst_35836 = inst_35843;
var state_35875__$1 = (function (){var statearr_35896 = state_35875;
(statearr_35896[(7)] = inst_35835__$1);

(statearr_35896[(14)] = inst_35848);

(statearr_35896[(8)] = inst_35836);

return statearr_35896;
})();
var statearr_35897_35917 = state_35875__$1;
(statearr_35897_35917[(2)] = null);

(statearr_35897_35917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33999__auto___35903,out))
;
return ((function (switch__33908__auto__,c__33999__auto___35903,out){
return (function() {
var cljs$core$async$state_machine__33909__auto__ = null;
var cljs$core$async$state_machine__33909__auto____0 = (function (){
var statearr_35898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35898[(0)] = cljs$core$async$state_machine__33909__auto__);

(statearr_35898[(1)] = (1));

return statearr_35898;
});
var cljs$core$async$state_machine__33909__auto____1 = (function (state_35875){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_35875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e35899){if((e35899 instanceof Object)){
var ex__33912__auto__ = e35899;
var statearr_35900_35918 = state_35875;
(statearr_35900_35918[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35919 = state_35875;
state_35875 = G__35919;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
cljs$core$async$state_machine__33909__auto__ = function(state_35875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33909__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33909__auto____1.call(this,state_35875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33909__auto____0;
cljs$core$async$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33909__auto____1;
return cljs$core$async$state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto___35903,out))
})();
var state__34001__auto__ = (function (){var statearr_35901 = f__34000__auto__.call(null);
(statearr_35901[(6)] = c__33999__auto___35903);

return statearr_35901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto___35903,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1543701296567
