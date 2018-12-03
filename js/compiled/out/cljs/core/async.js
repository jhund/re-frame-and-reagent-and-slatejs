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
var G__27960 = arguments.length;
switch (G__27960) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27961 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27961 = (function (f,blockable,meta27962){
this.f = f;
this.blockable = blockable;
this.meta27962 = meta27962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27963,meta27962__$1){
var self__ = this;
var _27963__$1 = this;
return (new cljs.core.async.t_cljs$core$async27961(self__.f,self__.blockable,meta27962__$1));
});

cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27963){
var self__ = this;
var _27963__$1 = this;
return self__.meta27962;
});

cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27961.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27962","meta27962",-1929110701,null)], null);
});

cljs.core.async.t_cljs$core$async27961.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27961";

cljs.core.async.t_cljs$core$async27961.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async27961");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27961.
 */
cljs.core.async.__GT_t_cljs$core$async27961 = (function cljs$core$async$__GT_t_cljs$core$async27961(f__$1,blockable__$1,meta27962){
return (new cljs.core.async.t_cljs$core$async27961(f__$1,blockable__$1,meta27962));
});

}

return (new cljs.core.async.t_cljs$core$async27961(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27967 = arguments.length;
switch (G__27967) {
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
var G__27970 = arguments.length;
switch (G__27970) {
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
var G__27973 = arguments.length;
switch (G__27973) {
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
var val_27975 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27975);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27975,ret){
return (function (){
return fn1.call(null,val_27975);
});})(val_27975,ret))
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
var G__27977 = arguments.length;
switch (G__27977) {
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
var n__4408__auto___27979 = n;
var x_27980 = (0);
while(true){
if((x_27980 < n__4408__auto___27979)){
(a[x_27980] = (0));

var G__27981 = (x_27980 + (1));
x_27980 = G__27981;
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

var G__27982 = (i + (1));
i = G__27982;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27983 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27983 = (function (flag,meta27984){
this.flag = flag;
this.meta27984 = meta27984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27985,meta27984__$1){
var self__ = this;
var _27985__$1 = this;
return (new cljs.core.async.t_cljs$core$async27983(self__.flag,meta27984__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27983.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27985){
var self__ = this;
var _27985__$1 = this;
return self__.meta27984;
});})(flag))
;

cljs.core.async.t_cljs$core$async27983.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27983.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27983.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27983.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27983.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27984","meta27984",-569656278,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27983.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27983.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27983";

cljs.core.async.t_cljs$core$async27983.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async27983");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27983.
 */
cljs.core.async.__GT_t_cljs$core$async27983 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27983(flag__$1,meta27984){
return (new cljs.core.async.t_cljs$core$async27983(flag__$1,meta27984));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27983(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27986 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27986 = (function (flag,cb,meta27987){
this.flag = flag;
this.cb = cb;
this.meta27987 = meta27987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27988,meta27987__$1){
var self__ = this;
var _27988__$1 = this;
return (new cljs.core.async.t_cljs$core$async27986(self__.flag,self__.cb,meta27987__$1));
});

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27988){
var self__ = this;
var _27988__$1 = this;
return self__.meta27987;
});

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27986.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27987","meta27987",-1465930965,null)], null);
});

cljs.core.async.t_cljs$core$async27986.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27986.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27986";

cljs.core.async.t_cljs$core$async27986.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async27986");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27986.
 */
cljs.core.async.__GT_t_cljs$core$async27986 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27986(flag__$1,cb__$1,meta27987){
return (new cljs.core.async.t_cljs$core$async27986(flag__$1,cb__$1,meta27987));
});

}

return (new cljs.core.async.t_cljs$core$async27986(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27989_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27989_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27990_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27990_SHARP_,port], null));
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
var G__27991 = (i + (1));
i = G__27991;
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
var len__4531__auto___27997 = arguments.length;
var i__4532__auto___27998 = (0);
while(true){
if((i__4532__auto___27998 < len__4531__auto___27997)){
args__4534__auto__.push((arguments[i__4532__auto___27998]));

var G__27999 = (i__4532__auto___27998 + (1));
i__4532__auto___27998 = G__27999;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27994){
var map__27995 = p__27994;
var map__27995__$1 = ((((!((map__27995 == null)))?(((((map__27995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27995):map__27995);
var opts = map__27995__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27992){
var G__27993 = cljs.core.first.call(null,seq27992);
var seq27992__$1 = cljs.core.next.call(null,seq27992);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27993,seq27992__$1);
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
var G__28001 = arguments.length;
switch (G__28001) {
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
var c__27900__auto___28047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___28047){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto___28047){
return (function (state_28025){
var state_val_28026 = (state_28025[(1)]);
if((state_val_28026 === (7))){
var inst_28021 = (state_28025[(2)]);
var state_28025__$1 = state_28025;
var statearr_28027_28048 = state_28025__$1;
(statearr_28027_28048[(2)] = inst_28021);

(statearr_28027_28048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (1))){
var state_28025__$1 = state_28025;
var statearr_28028_28049 = state_28025__$1;
(statearr_28028_28049[(2)] = null);

(statearr_28028_28049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (4))){
var inst_28004 = (state_28025[(7)]);
var inst_28004__$1 = (state_28025[(2)]);
var inst_28005 = (inst_28004__$1 == null);
var state_28025__$1 = (function (){var statearr_28029 = state_28025;
(statearr_28029[(7)] = inst_28004__$1);

return statearr_28029;
})();
if(cljs.core.truth_(inst_28005)){
var statearr_28030_28050 = state_28025__$1;
(statearr_28030_28050[(1)] = (5));

} else {
var statearr_28031_28051 = state_28025__$1;
(statearr_28031_28051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (13))){
var state_28025__$1 = state_28025;
var statearr_28032_28052 = state_28025__$1;
(statearr_28032_28052[(2)] = null);

(statearr_28032_28052[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (6))){
var inst_28004 = (state_28025[(7)]);
var state_28025__$1 = state_28025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28025__$1,(11),to,inst_28004);
} else {
if((state_val_28026 === (3))){
var inst_28023 = (state_28025[(2)]);
var state_28025__$1 = state_28025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28025__$1,inst_28023);
} else {
if((state_val_28026 === (12))){
var state_28025__$1 = state_28025;
var statearr_28033_28053 = state_28025__$1;
(statearr_28033_28053[(2)] = null);

(statearr_28033_28053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (2))){
var state_28025__$1 = state_28025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28025__$1,(4),from);
} else {
if((state_val_28026 === (11))){
var inst_28014 = (state_28025[(2)]);
var state_28025__$1 = state_28025;
if(cljs.core.truth_(inst_28014)){
var statearr_28034_28054 = state_28025__$1;
(statearr_28034_28054[(1)] = (12));

} else {
var statearr_28035_28055 = state_28025__$1;
(statearr_28035_28055[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (9))){
var state_28025__$1 = state_28025;
var statearr_28036_28056 = state_28025__$1;
(statearr_28036_28056[(2)] = null);

(statearr_28036_28056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (5))){
var state_28025__$1 = state_28025;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28037_28057 = state_28025__$1;
(statearr_28037_28057[(1)] = (8));

} else {
var statearr_28038_28058 = state_28025__$1;
(statearr_28038_28058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (14))){
var inst_28019 = (state_28025[(2)]);
var state_28025__$1 = state_28025;
var statearr_28039_28059 = state_28025__$1;
(statearr_28039_28059[(2)] = inst_28019);

(statearr_28039_28059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (10))){
var inst_28011 = (state_28025[(2)]);
var state_28025__$1 = state_28025;
var statearr_28040_28060 = state_28025__$1;
(statearr_28040_28060[(2)] = inst_28011);

(statearr_28040_28060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28026 === (8))){
var inst_28008 = cljs.core.async.close_BANG_.call(null,to);
var state_28025__$1 = state_28025;
var statearr_28041_28061 = state_28025__$1;
(statearr_28041_28061[(2)] = inst_28008);

(statearr_28041_28061[(1)] = (10));


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
});})(c__27900__auto___28047))
;
return ((function (switch__27809__auto__,c__27900__auto___28047){
return (function() {
var cljs$core$async$state_machine__27810__auto__ = null;
var cljs$core$async$state_machine__27810__auto____0 = (function (){
var statearr_28042 = [null,null,null,null,null,null,null,null];
(statearr_28042[(0)] = cljs$core$async$state_machine__27810__auto__);

(statearr_28042[(1)] = (1));

return statearr_28042;
});
var cljs$core$async$state_machine__27810__auto____1 = (function (state_28025){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_28025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e28043){if((e28043 instanceof Object)){
var ex__27813__auto__ = e28043;
var statearr_28044_28062 = state_28025;
(statearr_28044_28062[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28063 = state_28025;
state_28025 = G__28063;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
cljs$core$async$state_machine__27810__auto__ = function(state_28025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27810__auto____1.call(this,state_28025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27810__auto____0;
cljs$core$async$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27810__auto____1;
return cljs$core$async$state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto___28047))
})();
var state__27902__auto__ = (function (){var statearr_28045 = f__27901__auto__.call(null);
(statearr_28045[(6)] = c__27900__auto___28047);

return statearr_28045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___28047))
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
return (function (p__28064){
var vec__28065 = p__28064;
var v = cljs.core.nth.call(null,vec__28065,(0),null);
var p = cljs.core.nth.call(null,vec__28065,(1),null);
var job = vec__28065;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27900__auto___28236 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___28236,res,vec__28065,v,p,job,jobs,results){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto___28236,res,vec__28065,v,p,job,jobs,results){
return (function (state_28072){
var state_val_28073 = (state_28072[(1)]);
if((state_val_28073 === (1))){
var state_28072__$1 = state_28072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28072__$1,(2),res,v);
} else {
if((state_val_28073 === (2))){
var inst_28069 = (state_28072[(2)]);
var inst_28070 = cljs.core.async.close_BANG_.call(null,res);
var state_28072__$1 = (function (){var statearr_28074 = state_28072;
(statearr_28074[(7)] = inst_28069);

return statearr_28074;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28072__$1,inst_28070);
} else {
return null;
}
}
});})(c__27900__auto___28236,res,vec__28065,v,p,job,jobs,results))
;
return ((function (switch__27809__auto__,c__27900__auto___28236,res,vec__28065,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____0 = (function (){
var statearr_28075 = [null,null,null,null,null,null,null,null];
(statearr_28075[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__);

(statearr_28075[(1)] = (1));

return statearr_28075;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____1 = (function (state_28072){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_28072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e28076){if((e28076 instanceof Object)){
var ex__27813__auto__ = e28076;
var statearr_28077_28237 = state_28072;
(statearr_28077_28237[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28238 = state_28072;
state_28072 = G__28238;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__ = function(state_28072){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____1.call(this,state_28072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto___28236,res,vec__28065,v,p,job,jobs,results))
})();
var state__27902__auto__ = (function (){var statearr_28078 = f__27901__auto__.call(null);
(statearr_28078[(6)] = c__27900__auto___28236);

return statearr_28078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___28236,res,vec__28065,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28079){
var vec__28080 = p__28079;
var v = cljs.core.nth.call(null,vec__28080,(0),null);
var p = cljs.core.nth.call(null,vec__28080,(1),null);
var job = vec__28080;
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
var n__4408__auto___28239 = n;
var __28240 = (0);
while(true){
if((__28240 < n__4408__auto___28239)){
var G__28083_28241 = type;
var G__28083_28242__$1 = (((G__28083_28241 instanceof cljs.core.Keyword))?G__28083_28241.fqn:null);
switch (G__28083_28242__$1) {
case "compute":
var c__27900__auto___28244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28240,c__27900__auto___28244,G__28083_28241,G__28083_28242__$1,n__4408__auto___28239,jobs,results,process,async){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (__28240,c__27900__auto___28244,G__28083_28241,G__28083_28242__$1,n__4408__auto___28239,jobs,results,process,async){
return (function (state_28096){
var state_val_28097 = (state_28096[(1)]);
if((state_val_28097 === (1))){
var state_28096__$1 = state_28096;
var statearr_28098_28245 = state_28096__$1;
(statearr_28098_28245[(2)] = null);

(statearr_28098_28245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28097 === (2))){
var state_28096__$1 = state_28096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28096__$1,(4),jobs);
} else {
if((state_val_28097 === (3))){
var inst_28094 = (state_28096[(2)]);
var state_28096__$1 = state_28096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28096__$1,inst_28094);
} else {
if((state_val_28097 === (4))){
var inst_28086 = (state_28096[(2)]);
var inst_28087 = process.call(null,inst_28086);
var state_28096__$1 = state_28096;
if(cljs.core.truth_(inst_28087)){
var statearr_28099_28246 = state_28096__$1;
(statearr_28099_28246[(1)] = (5));

} else {
var statearr_28100_28247 = state_28096__$1;
(statearr_28100_28247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28097 === (5))){
var state_28096__$1 = state_28096;
var statearr_28101_28248 = state_28096__$1;
(statearr_28101_28248[(2)] = null);

(statearr_28101_28248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28097 === (6))){
var state_28096__$1 = state_28096;
var statearr_28102_28249 = state_28096__$1;
(statearr_28102_28249[(2)] = null);

(statearr_28102_28249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28097 === (7))){
var inst_28092 = (state_28096[(2)]);
var state_28096__$1 = state_28096;
var statearr_28103_28250 = state_28096__$1;
(statearr_28103_28250[(2)] = inst_28092);

(statearr_28103_28250[(1)] = (3));


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
});})(__28240,c__27900__auto___28244,G__28083_28241,G__28083_28242__$1,n__4408__auto___28239,jobs,results,process,async))
;
return ((function (__28240,switch__27809__auto__,c__27900__auto___28244,G__28083_28241,G__28083_28242__$1,n__4408__auto___28239,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____0 = (function (){
var statearr_28104 = [null,null,null,null,null,null,null];
(statearr_28104[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__);

(statearr_28104[(1)] = (1));

return statearr_28104;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____1 = (function (state_28096){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_28096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e28105){if((e28105 instanceof Object)){
var ex__27813__auto__ = e28105;
var statearr_28106_28251 = state_28096;
(statearr_28106_28251[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28252 = state_28096;
state_28096 = G__28252;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__ = function(state_28096){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____1.call(this,state_28096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__;
})()
;})(__28240,switch__27809__auto__,c__27900__auto___28244,G__28083_28241,G__28083_28242__$1,n__4408__auto___28239,jobs,results,process,async))
})();
var state__27902__auto__ = (function (){var statearr_28107 = f__27901__auto__.call(null);
(statearr_28107[(6)] = c__27900__auto___28244);

return statearr_28107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(__28240,c__27900__auto___28244,G__28083_28241,G__28083_28242__$1,n__4408__auto___28239,jobs,results,process,async))
);


break;
case "async":
var c__27900__auto___28253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28240,c__27900__auto___28253,G__28083_28241,G__28083_28242__$1,n__4408__auto___28239,jobs,results,process,async){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (__28240,c__27900__auto___28253,G__28083_28241,G__28083_28242__$1,n__4408__auto___28239,jobs,results,process,async){
return (function (state_28120){
var state_val_28121 = (state_28120[(1)]);
if((state_val_28121 === (1))){
var state_28120__$1 = state_28120;
var statearr_28122_28254 = state_28120__$1;
(statearr_28122_28254[(2)] = null);

(statearr_28122_28254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (2))){
var state_28120__$1 = state_28120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28120__$1,(4),jobs);
} else {
if((state_val_28121 === (3))){
var inst_28118 = (state_28120[(2)]);
var state_28120__$1 = state_28120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28120__$1,inst_28118);
} else {
if((state_val_28121 === (4))){
var inst_28110 = (state_28120[(2)]);
var inst_28111 = async.call(null,inst_28110);
var state_28120__$1 = state_28120;
if(cljs.core.truth_(inst_28111)){
var statearr_28123_28255 = state_28120__$1;
(statearr_28123_28255[(1)] = (5));

} else {
var statearr_28124_28256 = state_28120__$1;
(statearr_28124_28256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (5))){
var state_28120__$1 = state_28120;
var statearr_28125_28257 = state_28120__$1;
(statearr_28125_28257[(2)] = null);

(statearr_28125_28257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (6))){
var state_28120__$1 = state_28120;
var statearr_28126_28258 = state_28120__$1;
(statearr_28126_28258[(2)] = null);

(statearr_28126_28258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28121 === (7))){
var inst_28116 = (state_28120[(2)]);
var state_28120__$1 = state_28120;
var statearr_28127_28259 = state_28120__$1;
(statearr_28127_28259[(2)] = inst_28116);

(statearr_28127_28259[(1)] = (3));


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
});})(__28240,c__27900__auto___28253,G__28083_28241,G__28083_28242__$1,n__4408__auto___28239,jobs,results,process,async))
;
return ((function (__28240,switch__27809__auto__,c__27900__auto___28253,G__28083_28241,G__28083_28242__$1,n__4408__auto___28239,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____0 = (function (){
var statearr_28128 = [null,null,null,null,null,null,null];
(statearr_28128[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__);

(statearr_28128[(1)] = (1));

return statearr_28128;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____1 = (function (state_28120){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_28120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e28129){if((e28129 instanceof Object)){
var ex__27813__auto__ = e28129;
var statearr_28130_28260 = state_28120;
(statearr_28130_28260[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28261 = state_28120;
state_28120 = G__28261;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__ = function(state_28120){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____1.call(this,state_28120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__;
})()
;})(__28240,switch__27809__auto__,c__27900__auto___28253,G__28083_28241,G__28083_28242__$1,n__4408__auto___28239,jobs,results,process,async))
})();
var state__27902__auto__ = (function (){var statearr_28131 = f__27901__auto__.call(null);
(statearr_28131[(6)] = c__27900__auto___28253);

return statearr_28131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(__28240,c__27900__auto___28253,G__28083_28241,G__28083_28242__$1,n__4408__auto___28239,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28083_28242__$1)].join('')));

}

var G__28262 = (__28240 + (1));
__28240 = G__28262;
continue;
} else {
}
break;
}

var c__27900__auto___28263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___28263,jobs,results,process,async){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto___28263,jobs,results,process,async){
return (function (state_28153){
var state_val_28154 = (state_28153[(1)]);
if((state_val_28154 === (1))){
var state_28153__$1 = state_28153;
var statearr_28155_28264 = state_28153__$1;
(statearr_28155_28264[(2)] = null);

(statearr_28155_28264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (2))){
var state_28153__$1 = state_28153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28153__$1,(4),from);
} else {
if((state_val_28154 === (3))){
var inst_28151 = (state_28153[(2)]);
var state_28153__$1 = state_28153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28153__$1,inst_28151);
} else {
if((state_val_28154 === (4))){
var inst_28134 = (state_28153[(7)]);
var inst_28134__$1 = (state_28153[(2)]);
var inst_28135 = (inst_28134__$1 == null);
var state_28153__$1 = (function (){var statearr_28156 = state_28153;
(statearr_28156[(7)] = inst_28134__$1);

return statearr_28156;
})();
if(cljs.core.truth_(inst_28135)){
var statearr_28157_28265 = state_28153__$1;
(statearr_28157_28265[(1)] = (5));

} else {
var statearr_28158_28266 = state_28153__$1;
(statearr_28158_28266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (5))){
var inst_28137 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28153__$1 = state_28153;
var statearr_28159_28267 = state_28153__$1;
(statearr_28159_28267[(2)] = inst_28137);

(statearr_28159_28267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (6))){
var inst_28134 = (state_28153[(7)]);
var inst_28139 = (state_28153[(8)]);
var inst_28139__$1 = cljs.core.async.chan.call(null,(1));
var inst_28140 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28141 = [inst_28134,inst_28139__$1];
var inst_28142 = (new cljs.core.PersistentVector(null,2,(5),inst_28140,inst_28141,null));
var state_28153__$1 = (function (){var statearr_28160 = state_28153;
(statearr_28160[(8)] = inst_28139__$1);

return statearr_28160;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28153__$1,(8),jobs,inst_28142);
} else {
if((state_val_28154 === (7))){
var inst_28149 = (state_28153[(2)]);
var state_28153__$1 = state_28153;
var statearr_28161_28268 = state_28153__$1;
(statearr_28161_28268[(2)] = inst_28149);

(statearr_28161_28268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28154 === (8))){
var inst_28139 = (state_28153[(8)]);
var inst_28144 = (state_28153[(2)]);
var state_28153__$1 = (function (){var statearr_28162 = state_28153;
(statearr_28162[(9)] = inst_28144);

return statearr_28162;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28153__$1,(9),results,inst_28139);
} else {
if((state_val_28154 === (9))){
var inst_28146 = (state_28153[(2)]);
var state_28153__$1 = (function (){var statearr_28163 = state_28153;
(statearr_28163[(10)] = inst_28146);

return statearr_28163;
})();
var statearr_28164_28269 = state_28153__$1;
(statearr_28164_28269[(2)] = null);

(statearr_28164_28269[(1)] = (2));


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
});})(c__27900__auto___28263,jobs,results,process,async))
;
return ((function (switch__27809__auto__,c__27900__auto___28263,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____0 = (function (){
var statearr_28165 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28165[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__);

(statearr_28165[(1)] = (1));

return statearr_28165;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____1 = (function (state_28153){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_28153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e28166){if((e28166 instanceof Object)){
var ex__27813__auto__ = e28166;
var statearr_28167_28270 = state_28153;
(statearr_28167_28270[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28271 = state_28153;
state_28153 = G__28271;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__ = function(state_28153){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____1.call(this,state_28153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto___28263,jobs,results,process,async))
})();
var state__27902__auto__ = (function (){var statearr_28168 = f__27901__auto__.call(null);
(statearr_28168[(6)] = c__27900__auto___28263);

return statearr_28168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___28263,jobs,results,process,async))
);


var c__27900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto__,jobs,results,process,async){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto__,jobs,results,process,async){
return (function (state_28206){
var state_val_28207 = (state_28206[(1)]);
if((state_val_28207 === (7))){
var inst_28202 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28208_28272 = state_28206__$1;
(statearr_28208_28272[(2)] = inst_28202);

(statearr_28208_28272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (20))){
var state_28206__$1 = state_28206;
var statearr_28209_28273 = state_28206__$1;
(statearr_28209_28273[(2)] = null);

(statearr_28209_28273[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (1))){
var state_28206__$1 = state_28206;
var statearr_28210_28274 = state_28206__$1;
(statearr_28210_28274[(2)] = null);

(statearr_28210_28274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (4))){
var inst_28171 = (state_28206[(7)]);
var inst_28171__$1 = (state_28206[(2)]);
var inst_28172 = (inst_28171__$1 == null);
var state_28206__$1 = (function (){var statearr_28211 = state_28206;
(statearr_28211[(7)] = inst_28171__$1);

return statearr_28211;
})();
if(cljs.core.truth_(inst_28172)){
var statearr_28212_28275 = state_28206__$1;
(statearr_28212_28275[(1)] = (5));

} else {
var statearr_28213_28276 = state_28206__$1;
(statearr_28213_28276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (15))){
var inst_28184 = (state_28206[(8)]);
var state_28206__$1 = state_28206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28206__$1,(18),to,inst_28184);
} else {
if((state_val_28207 === (21))){
var inst_28197 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28214_28277 = state_28206__$1;
(statearr_28214_28277[(2)] = inst_28197);

(statearr_28214_28277[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (13))){
var inst_28199 = (state_28206[(2)]);
var state_28206__$1 = (function (){var statearr_28215 = state_28206;
(statearr_28215[(9)] = inst_28199);

return statearr_28215;
})();
var statearr_28216_28278 = state_28206__$1;
(statearr_28216_28278[(2)] = null);

(statearr_28216_28278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (6))){
var inst_28171 = (state_28206[(7)]);
var state_28206__$1 = state_28206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28206__$1,(11),inst_28171);
} else {
if((state_val_28207 === (17))){
var inst_28192 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
if(cljs.core.truth_(inst_28192)){
var statearr_28217_28279 = state_28206__$1;
(statearr_28217_28279[(1)] = (19));

} else {
var statearr_28218_28280 = state_28206__$1;
(statearr_28218_28280[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (3))){
var inst_28204 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28206__$1,inst_28204);
} else {
if((state_val_28207 === (12))){
var inst_28181 = (state_28206[(10)]);
var state_28206__$1 = state_28206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28206__$1,(14),inst_28181);
} else {
if((state_val_28207 === (2))){
var state_28206__$1 = state_28206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28206__$1,(4),results);
} else {
if((state_val_28207 === (19))){
var state_28206__$1 = state_28206;
var statearr_28219_28281 = state_28206__$1;
(statearr_28219_28281[(2)] = null);

(statearr_28219_28281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (11))){
var inst_28181 = (state_28206[(2)]);
var state_28206__$1 = (function (){var statearr_28220 = state_28206;
(statearr_28220[(10)] = inst_28181);

return statearr_28220;
})();
var statearr_28221_28282 = state_28206__$1;
(statearr_28221_28282[(2)] = null);

(statearr_28221_28282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (9))){
var state_28206__$1 = state_28206;
var statearr_28222_28283 = state_28206__$1;
(statearr_28222_28283[(2)] = null);

(statearr_28222_28283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (5))){
var state_28206__$1 = state_28206;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28223_28284 = state_28206__$1;
(statearr_28223_28284[(1)] = (8));

} else {
var statearr_28224_28285 = state_28206__$1;
(statearr_28224_28285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (14))){
var inst_28186 = (state_28206[(11)]);
var inst_28184 = (state_28206[(8)]);
var inst_28184__$1 = (state_28206[(2)]);
var inst_28185 = (inst_28184__$1 == null);
var inst_28186__$1 = cljs.core.not.call(null,inst_28185);
var state_28206__$1 = (function (){var statearr_28225 = state_28206;
(statearr_28225[(11)] = inst_28186__$1);

(statearr_28225[(8)] = inst_28184__$1);

return statearr_28225;
})();
if(inst_28186__$1){
var statearr_28226_28286 = state_28206__$1;
(statearr_28226_28286[(1)] = (15));

} else {
var statearr_28227_28287 = state_28206__$1;
(statearr_28227_28287[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (16))){
var inst_28186 = (state_28206[(11)]);
var state_28206__$1 = state_28206;
var statearr_28228_28288 = state_28206__$1;
(statearr_28228_28288[(2)] = inst_28186);

(statearr_28228_28288[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (10))){
var inst_28178 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28229_28289 = state_28206__$1;
(statearr_28229_28289[(2)] = inst_28178);

(statearr_28229_28289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (18))){
var inst_28189 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28230_28290 = state_28206__$1;
(statearr_28230_28290[(2)] = inst_28189);

(statearr_28230_28290[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (8))){
var inst_28175 = cljs.core.async.close_BANG_.call(null,to);
var state_28206__$1 = state_28206;
var statearr_28231_28291 = state_28206__$1;
(statearr_28231_28291[(2)] = inst_28175);

(statearr_28231_28291[(1)] = (10));


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
});})(c__27900__auto__,jobs,results,process,async))
;
return ((function (switch__27809__auto__,c__27900__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____0 = (function (){
var statearr_28232 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28232[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__);

(statearr_28232[(1)] = (1));

return statearr_28232;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____1 = (function (state_28206){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_28206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e28233){if((e28233 instanceof Object)){
var ex__27813__auto__ = e28233;
var statearr_28234_28292 = state_28206;
(statearr_28234_28292[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28293 = state_28206;
state_28206 = G__28293;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__ = function(state_28206){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____1.call(this,state_28206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto__,jobs,results,process,async))
})();
var state__27902__auto__ = (function (){var statearr_28235 = f__27901__auto__.call(null);
(statearr_28235[(6)] = c__27900__auto__);

return statearr_28235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto__,jobs,results,process,async))
);

return c__27900__auto__;
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
var G__28295 = arguments.length;
switch (G__28295) {
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
var G__28298 = arguments.length;
switch (G__28298) {
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
var G__28301 = arguments.length;
switch (G__28301) {
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
var c__27900__auto___28350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___28350,tc,fc){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto___28350,tc,fc){
return (function (state_28327){
var state_val_28328 = (state_28327[(1)]);
if((state_val_28328 === (7))){
var inst_28323 = (state_28327[(2)]);
var state_28327__$1 = state_28327;
var statearr_28329_28351 = state_28327__$1;
(statearr_28329_28351[(2)] = inst_28323);

(statearr_28329_28351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28328 === (1))){
var state_28327__$1 = state_28327;
var statearr_28330_28352 = state_28327__$1;
(statearr_28330_28352[(2)] = null);

(statearr_28330_28352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28328 === (4))){
var inst_28304 = (state_28327[(7)]);
var inst_28304__$1 = (state_28327[(2)]);
var inst_28305 = (inst_28304__$1 == null);
var state_28327__$1 = (function (){var statearr_28331 = state_28327;
(statearr_28331[(7)] = inst_28304__$1);

return statearr_28331;
})();
if(cljs.core.truth_(inst_28305)){
var statearr_28332_28353 = state_28327__$1;
(statearr_28332_28353[(1)] = (5));

} else {
var statearr_28333_28354 = state_28327__$1;
(statearr_28333_28354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28328 === (13))){
var state_28327__$1 = state_28327;
var statearr_28334_28355 = state_28327__$1;
(statearr_28334_28355[(2)] = null);

(statearr_28334_28355[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28328 === (6))){
var inst_28304 = (state_28327[(7)]);
var inst_28310 = p.call(null,inst_28304);
var state_28327__$1 = state_28327;
if(cljs.core.truth_(inst_28310)){
var statearr_28335_28356 = state_28327__$1;
(statearr_28335_28356[(1)] = (9));

} else {
var statearr_28336_28357 = state_28327__$1;
(statearr_28336_28357[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28328 === (3))){
var inst_28325 = (state_28327[(2)]);
var state_28327__$1 = state_28327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28327__$1,inst_28325);
} else {
if((state_val_28328 === (12))){
var state_28327__$1 = state_28327;
var statearr_28337_28358 = state_28327__$1;
(statearr_28337_28358[(2)] = null);

(statearr_28337_28358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28328 === (2))){
var state_28327__$1 = state_28327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28327__$1,(4),ch);
} else {
if((state_val_28328 === (11))){
var inst_28304 = (state_28327[(7)]);
var inst_28314 = (state_28327[(2)]);
var state_28327__$1 = state_28327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28327__$1,(8),inst_28314,inst_28304);
} else {
if((state_val_28328 === (9))){
var state_28327__$1 = state_28327;
var statearr_28338_28359 = state_28327__$1;
(statearr_28338_28359[(2)] = tc);

(statearr_28338_28359[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28328 === (5))){
var inst_28307 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28308 = cljs.core.async.close_BANG_.call(null,fc);
var state_28327__$1 = (function (){var statearr_28339 = state_28327;
(statearr_28339[(8)] = inst_28307);

return statearr_28339;
})();
var statearr_28340_28360 = state_28327__$1;
(statearr_28340_28360[(2)] = inst_28308);

(statearr_28340_28360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28328 === (14))){
var inst_28321 = (state_28327[(2)]);
var state_28327__$1 = state_28327;
var statearr_28341_28361 = state_28327__$1;
(statearr_28341_28361[(2)] = inst_28321);

(statearr_28341_28361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28328 === (10))){
var state_28327__$1 = state_28327;
var statearr_28342_28362 = state_28327__$1;
(statearr_28342_28362[(2)] = fc);

(statearr_28342_28362[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28328 === (8))){
var inst_28316 = (state_28327[(2)]);
var state_28327__$1 = state_28327;
if(cljs.core.truth_(inst_28316)){
var statearr_28343_28363 = state_28327__$1;
(statearr_28343_28363[(1)] = (12));

} else {
var statearr_28344_28364 = state_28327__$1;
(statearr_28344_28364[(1)] = (13));

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
});})(c__27900__auto___28350,tc,fc))
;
return ((function (switch__27809__auto__,c__27900__auto___28350,tc,fc){
return (function() {
var cljs$core$async$state_machine__27810__auto__ = null;
var cljs$core$async$state_machine__27810__auto____0 = (function (){
var statearr_28345 = [null,null,null,null,null,null,null,null,null];
(statearr_28345[(0)] = cljs$core$async$state_machine__27810__auto__);

(statearr_28345[(1)] = (1));

return statearr_28345;
});
var cljs$core$async$state_machine__27810__auto____1 = (function (state_28327){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_28327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e28346){if((e28346 instanceof Object)){
var ex__27813__auto__ = e28346;
var statearr_28347_28365 = state_28327;
(statearr_28347_28365[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28366 = state_28327;
state_28327 = G__28366;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
cljs$core$async$state_machine__27810__auto__ = function(state_28327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27810__auto____1.call(this,state_28327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27810__auto____0;
cljs$core$async$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27810__auto____1;
return cljs$core$async$state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto___28350,tc,fc))
})();
var state__27902__auto__ = (function (){var statearr_28348 = f__27901__auto__.call(null);
(statearr_28348[(6)] = c__27900__auto___28350);

return statearr_28348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___28350,tc,fc))
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
var c__27900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto__){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto__){
return (function (state_28387){
var state_val_28388 = (state_28387[(1)]);
if((state_val_28388 === (7))){
var inst_28383 = (state_28387[(2)]);
var state_28387__$1 = state_28387;
var statearr_28389_28407 = state_28387__$1;
(statearr_28389_28407[(2)] = inst_28383);

(statearr_28389_28407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (1))){
var inst_28367 = init;
var state_28387__$1 = (function (){var statearr_28390 = state_28387;
(statearr_28390[(7)] = inst_28367);

return statearr_28390;
})();
var statearr_28391_28408 = state_28387__$1;
(statearr_28391_28408[(2)] = null);

(statearr_28391_28408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (4))){
var inst_28370 = (state_28387[(8)]);
var inst_28370__$1 = (state_28387[(2)]);
var inst_28371 = (inst_28370__$1 == null);
var state_28387__$1 = (function (){var statearr_28392 = state_28387;
(statearr_28392[(8)] = inst_28370__$1);

return statearr_28392;
})();
if(cljs.core.truth_(inst_28371)){
var statearr_28393_28409 = state_28387__$1;
(statearr_28393_28409[(1)] = (5));

} else {
var statearr_28394_28410 = state_28387__$1;
(statearr_28394_28410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (6))){
var inst_28367 = (state_28387[(7)]);
var inst_28374 = (state_28387[(9)]);
var inst_28370 = (state_28387[(8)]);
var inst_28374__$1 = f.call(null,inst_28367,inst_28370);
var inst_28375 = cljs.core.reduced_QMARK_.call(null,inst_28374__$1);
var state_28387__$1 = (function (){var statearr_28395 = state_28387;
(statearr_28395[(9)] = inst_28374__$1);

return statearr_28395;
})();
if(inst_28375){
var statearr_28396_28411 = state_28387__$1;
(statearr_28396_28411[(1)] = (8));

} else {
var statearr_28397_28412 = state_28387__$1;
(statearr_28397_28412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (3))){
var inst_28385 = (state_28387[(2)]);
var state_28387__$1 = state_28387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28387__$1,inst_28385);
} else {
if((state_val_28388 === (2))){
var state_28387__$1 = state_28387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28387__$1,(4),ch);
} else {
if((state_val_28388 === (9))){
var inst_28374 = (state_28387[(9)]);
var inst_28367 = inst_28374;
var state_28387__$1 = (function (){var statearr_28398 = state_28387;
(statearr_28398[(7)] = inst_28367);

return statearr_28398;
})();
var statearr_28399_28413 = state_28387__$1;
(statearr_28399_28413[(2)] = null);

(statearr_28399_28413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (5))){
var inst_28367 = (state_28387[(7)]);
var state_28387__$1 = state_28387;
var statearr_28400_28414 = state_28387__$1;
(statearr_28400_28414[(2)] = inst_28367);

(statearr_28400_28414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (10))){
var inst_28381 = (state_28387[(2)]);
var state_28387__$1 = state_28387;
var statearr_28401_28415 = state_28387__$1;
(statearr_28401_28415[(2)] = inst_28381);

(statearr_28401_28415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28388 === (8))){
var inst_28374 = (state_28387[(9)]);
var inst_28377 = cljs.core.deref.call(null,inst_28374);
var state_28387__$1 = state_28387;
var statearr_28402_28416 = state_28387__$1;
(statearr_28402_28416[(2)] = inst_28377);

(statearr_28402_28416[(1)] = (10));


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
});})(c__27900__auto__))
;
return ((function (switch__27809__auto__,c__27900__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27810__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27810__auto____0 = (function (){
var statearr_28403 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28403[(0)] = cljs$core$async$reduce_$_state_machine__27810__auto__);

(statearr_28403[(1)] = (1));

return statearr_28403;
});
var cljs$core$async$reduce_$_state_machine__27810__auto____1 = (function (state_28387){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_28387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e28404){if((e28404 instanceof Object)){
var ex__27813__auto__ = e28404;
var statearr_28405_28417 = state_28387;
(statearr_28405_28417[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28418 = state_28387;
state_28387 = G__28418;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27810__auto__ = function(state_28387){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27810__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27810__auto____1.call(this,state_28387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27810__auto____0;
cljs$core$async$reduce_$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27810__auto____1;
return cljs$core$async$reduce_$_state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto__))
})();
var state__27902__auto__ = (function (){var statearr_28406 = f__27901__auto__.call(null);
(statearr_28406[(6)] = c__27900__auto__);

return statearr_28406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto__))
);

return c__27900__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto__,f__$1){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto__,f__$1){
return (function (state_28424){
var state_val_28425 = (state_28424[(1)]);
if((state_val_28425 === (1))){
var inst_28419 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28424__$1 = state_28424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28424__$1,(2),inst_28419);
} else {
if((state_val_28425 === (2))){
var inst_28421 = (state_28424[(2)]);
var inst_28422 = f__$1.call(null,inst_28421);
var state_28424__$1 = state_28424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28424__$1,inst_28422);
} else {
return null;
}
}
});})(c__27900__auto__,f__$1))
;
return ((function (switch__27809__auto__,c__27900__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27810__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27810__auto____0 = (function (){
var statearr_28426 = [null,null,null,null,null,null,null];
(statearr_28426[(0)] = cljs$core$async$transduce_$_state_machine__27810__auto__);

(statearr_28426[(1)] = (1));

return statearr_28426;
});
var cljs$core$async$transduce_$_state_machine__27810__auto____1 = (function (state_28424){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_28424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e28427){if((e28427 instanceof Object)){
var ex__27813__auto__ = e28427;
var statearr_28428_28430 = state_28424;
(statearr_28428_28430[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28431 = state_28424;
state_28424 = G__28431;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27810__auto__ = function(state_28424){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27810__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27810__auto____1.call(this,state_28424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27810__auto____0;
cljs$core$async$transduce_$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27810__auto____1;
return cljs$core$async$transduce_$_state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto__,f__$1))
})();
var state__27902__auto__ = (function (){var statearr_28429 = f__27901__auto__.call(null);
(statearr_28429[(6)] = c__27900__auto__);

return statearr_28429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto__,f__$1))
);

return c__27900__auto__;
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
var G__28433 = arguments.length;
switch (G__28433) {
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
var c__27900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto__){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto__){
return (function (state_28458){
var state_val_28459 = (state_28458[(1)]);
if((state_val_28459 === (7))){
var inst_28440 = (state_28458[(2)]);
var state_28458__$1 = state_28458;
var statearr_28460_28481 = state_28458__$1;
(statearr_28460_28481[(2)] = inst_28440);

(statearr_28460_28481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (1))){
var inst_28434 = cljs.core.seq.call(null,coll);
var inst_28435 = inst_28434;
var state_28458__$1 = (function (){var statearr_28461 = state_28458;
(statearr_28461[(7)] = inst_28435);

return statearr_28461;
})();
var statearr_28462_28482 = state_28458__$1;
(statearr_28462_28482[(2)] = null);

(statearr_28462_28482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (4))){
var inst_28435 = (state_28458[(7)]);
var inst_28438 = cljs.core.first.call(null,inst_28435);
var state_28458__$1 = state_28458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28458__$1,(7),ch,inst_28438);
} else {
if((state_val_28459 === (13))){
var inst_28452 = (state_28458[(2)]);
var state_28458__$1 = state_28458;
var statearr_28463_28483 = state_28458__$1;
(statearr_28463_28483[(2)] = inst_28452);

(statearr_28463_28483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (6))){
var inst_28443 = (state_28458[(2)]);
var state_28458__$1 = state_28458;
if(cljs.core.truth_(inst_28443)){
var statearr_28464_28484 = state_28458__$1;
(statearr_28464_28484[(1)] = (8));

} else {
var statearr_28465_28485 = state_28458__$1;
(statearr_28465_28485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (3))){
var inst_28456 = (state_28458[(2)]);
var state_28458__$1 = state_28458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28458__$1,inst_28456);
} else {
if((state_val_28459 === (12))){
var state_28458__$1 = state_28458;
var statearr_28466_28486 = state_28458__$1;
(statearr_28466_28486[(2)] = null);

(statearr_28466_28486[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (2))){
var inst_28435 = (state_28458[(7)]);
var state_28458__$1 = state_28458;
if(cljs.core.truth_(inst_28435)){
var statearr_28467_28487 = state_28458__$1;
(statearr_28467_28487[(1)] = (4));

} else {
var statearr_28468_28488 = state_28458__$1;
(statearr_28468_28488[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (11))){
var inst_28449 = cljs.core.async.close_BANG_.call(null,ch);
var state_28458__$1 = state_28458;
var statearr_28469_28489 = state_28458__$1;
(statearr_28469_28489[(2)] = inst_28449);

(statearr_28469_28489[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (9))){
var state_28458__$1 = state_28458;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28470_28490 = state_28458__$1;
(statearr_28470_28490[(1)] = (11));

} else {
var statearr_28471_28491 = state_28458__$1;
(statearr_28471_28491[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (5))){
var inst_28435 = (state_28458[(7)]);
var state_28458__$1 = state_28458;
var statearr_28472_28492 = state_28458__$1;
(statearr_28472_28492[(2)] = inst_28435);

(statearr_28472_28492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (10))){
var inst_28454 = (state_28458[(2)]);
var state_28458__$1 = state_28458;
var statearr_28473_28493 = state_28458__$1;
(statearr_28473_28493[(2)] = inst_28454);

(statearr_28473_28493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28459 === (8))){
var inst_28435 = (state_28458[(7)]);
var inst_28445 = cljs.core.next.call(null,inst_28435);
var inst_28435__$1 = inst_28445;
var state_28458__$1 = (function (){var statearr_28474 = state_28458;
(statearr_28474[(7)] = inst_28435__$1);

return statearr_28474;
})();
var statearr_28475_28494 = state_28458__$1;
(statearr_28475_28494[(2)] = null);

(statearr_28475_28494[(1)] = (2));


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
});})(c__27900__auto__))
;
return ((function (switch__27809__auto__,c__27900__auto__){
return (function() {
var cljs$core$async$state_machine__27810__auto__ = null;
var cljs$core$async$state_machine__27810__auto____0 = (function (){
var statearr_28476 = [null,null,null,null,null,null,null,null];
(statearr_28476[(0)] = cljs$core$async$state_machine__27810__auto__);

(statearr_28476[(1)] = (1));

return statearr_28476;
});
var cljs$core$async$state_machine__27810__auto____1 = (function (state_28458){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_28458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e28477){if((e28477 instanceof Object)){
var ex__27813__auto__ = e28477;
var statearr_28478_28495 = state_28458;
(statearr_28478_28495[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28496 = state_28458;
state_28458 = G__28496;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
cljs$core$async$state_machine__27810__auto__ = function(state_28458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27810__auto____1.call(this,state_28458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27810__auto____0;
cljs$core$async$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27810__auto____1;
return cljs$core$async$state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto__))
})();
var state__27902__auto__ = (function (){var statearr_28479 = f__27901__auto__.call(null);
(statearr_28479[(6)] = c__27900__auto__);

return statearr_28479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto__))
);

return c__27900__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28497 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28497 = (function (ch,cs,meta28498){
this.ch = ch;
this.cs = cs;
this.meta28498 = meta28498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28499,meta28498__$1){
var self__ = this;
var _28499__$1 = this;
return (new cljs.core.async.t_cljs$core$async28497(self__.ch,self__.cs,meta28498__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28497.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28499){
var self__ = this;
var _28499__$1 = this;
return self__.meta28498;
});})(cs))
;

cljs.core.async.t_cljs$core$async28497.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28497.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28497.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28497.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28497.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28497.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28497.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28498","meta28498",-777477582,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28497.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28497";

cljs.core.async.t_cljs$core$async28497.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28497");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28497.
 */
cljs.core.async.__GT_t_cljs$core$async28497 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28497(ch__$1,cs__$1,meta28498){
return (new cljs.core.async.t_cljs$core$async28497(ch__$1,cs__$1,meta28498));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28497(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27900__auto___28719 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___28719,cs,m,dchan,dctr,done){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto___28719,cs,m,dchan,dctr,done){
return (function (state_28634){
var state_val_28635 = (state_28634[(1)]);
if((state_val_28635 === (7))){
var inst_28630 = (state_28634[(2)]);
var state_28634__$1 = state_28634;
var statearr_28636_28720 = state_28634__$1;
(statearr_28636_28720[(2)] = inst_28630);

(statearr_28636_28720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (20))){
var inst_28533 = (state_28634[(7)]);
var inst_28545 = cljs.core.first.call(null,inst_28533);
var inst_28546 = cljs.core.nth.call(null,inst_28545,(0),null);
var inst_28547 = cljs.core.nth.call(null,inst_28545,(1),null);
var state_28634__$1 = (function (){var statearr_28637 = state_28634;
(statearr_28637[(8)] = inst_28546);

return statearr_28637;
})();
if(cljs.core.truth_(inst_28547)){
var statearr_28638_28721 = state_28634__$1;
(statearr_28638_28721[(1)] = (22));

} else {
var statearr_28639_28722 = state_28634__$1;
(statearr_28639_28722[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (27))){
var inst_28582 = (state_28634[(9)]);
var inst_28502 = (state_28634[(10)]);
var inst_28577 = (state_28634[(11)]);
var inst_28575 = (state_28634[(12)]);
var inst_28582__$1 = cljs.core._nth.call(null,inst_28575,inst_28577);
var inst_28583 = cljs.core.async.put_BANG_.call(null,inst_28582__$1,inst_28502,done);
var state_28634__$1 = (function (){var statearr_28640 = state_28634;
(statearr_28640[(9)] = inst_28582__$1);

return statearr_28640;
})();
if(cljs.core.truth_(inst_28583)){
var statearr_28641_28723 = state_28634__$1;
(statearr_28641_28723[(1)] = (30));

} else {
var statearr_28642_28724 = state_28634__$1;
(statearr_28642_28724[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (1))){
var state_28634__$1 = state_28634;
var statearr_28643_28725 = state_28634__$1;
(statearr_28643_28725[(2)] = null);

(statearr_28643_28725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (24))){
var inst_28533 = (state_28634[(7)]);
var inst_28552 = (state_28634[(2)]);
var inst_28553 = cljs.core.next.call(null,inst_28533);
var inst_28511 = inst_28553;
var inst_28512 = null;
var inst_28513 = (0);
var inst_28514 = (0);
var state_28634__$1 = (function (){var statearr_28644 = state_28634;
(statearr_28644[(13)] = inst_28514);

(statearr_28644[(14)] = inst_28552);

(statearr_28644[(15)] = inst_28512);

(statearr_28644[(16)] = inst_28511);

(statearr_28644[(17)] = inst_28513);

return statearr_28644;
})();
var statearr_28645_28726 = state_28634__$1;
(statearr_28645_28726[(2)] = null);

(statearr_28645_28726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (39))){
var state_28634__$1 = state_28634;
var statearr_28649_28727 = state_28634__$1;
(statearr_28649_28727[(2)] = null);

(statearr_28649_28727[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (4))){
var inst_28502 = (state_28634[(10)]);
var inst_28502__$1 = (state_28634[(2)]);
var inst_28503 = (inst_28502__$1 == null);
var state_28634__$1 = (function (){var statearr_28650 = state_28634;
(statearr_28650[(10)] = inst_28502__$1);

return statearr_28650;
})();
if(cljs.core.truth_(inst_28503)){
var statearr_28651_28728 = state_28634__$1;
(statearr_28651_28728[(1)] = (5));

} else {
var statearr_28652_28729 = state_28634__$1;
(statearr_28652_28729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (15))){
var inst_28514 = (state_28634[(13)]);
var inst_28512 = (state_28634[(15)]);
var inst_28511 = (state_28634[(16)]);
var inst_28513 = (state_28634[(17)]);
var inst_28529 = (state_28634[(2)]);
var inst_28530 = (inst_28514 + (1));
var tmp28646 = inst_28512;
var tmp28647 = inst_28511;
var tmp28648 = inst_28513;
var inst_28511__$1 = tmp28647;
var inst_28512__$1 = tmp28646;
var inst_28513__$1 = tmp28648;
var inst_28514__$1 = inst_28530;
var state_28634__$1 = (function (){var statearr_28653 = state_28634;
(statearr_28653[(13)] = inst_28514__$1);

(statearr_28653[(18)] = inst_28529);

(statearr_28653[(15)] = inst_28512__$1);

(statearr_28653[(16)] = inst_28511__$1);

(statearr_28653[(17)] = inst_28513__$1);

return statearr_28653;
})();
var statearr_28654_28730 = state_28634__$1;
(statearr_28654_28730[(2)] = null);

(statearr_28654_28730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (21))){
var inst_28556 = (state_28634[(2)]);
var state_28634__$1 = state_28634;
var statearr_28658_28731 = state_28634__$1;
(statearr_28658_28731[(2)] = inst_28556);

(statearr_28658_28731[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (31))){
var inst_28582 = (state_28634[(9)]);
var inst_28586 = done.call(null,null);
var inst_28587 = cljs.core.async.untap_STAR_.call(null,m,inst_28582);
var state_28634__$1 = (function (){var statearr_28659 = state_28634;
(statearr_28659[(19)] = inst_28586);

return statearr_28659;
})();
var statearr_28660_28732 = state_28634__$1;
(statearr_28660_28732[(2)] = inst_28587);

(statearr_28660_28732[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (32))){
var inst_28576 = (state_28634[(20)]);
var inst_28574 = (state_28634[(21)]);
var inst_28577 = (state_28634[(11)]);
var inst_28575 = (state_28634[(12)]);
var inst_28589 = (state_28634[(2)]);
var inst_28590 = (inst_28577 + (1));
var tmp28655 = inst_28576;
var tmp28656 = inst_28574;
var tmp28657 = inst_28575;
var inst_28574__$1 = tmp28656;
var inst_28575__$1 = tmp28657;
var inst_28576__$1 = tmp28655;
var inst_28577__$1 = inst_28590;
var state_28634__$1 = (function (){var statearr_28661 = state_28634;
(statearr_28661[(20)] = inst_28576__$1);

(statearr_28661[(21)] = inst_28574__$1);

(statearr_28661[(22)] = inst_28589);

(statearr_28661[(11)] = inst_28577__$1);

(statearr_28661[(12)] = inst_28575__$1);

return statearr_28661;
})();
var statearr_28662_28733 = state_28634__$1;
(statearr_28662_28733[(2)] = null);

(statearr_28662_28733[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (40))){
var inst_28602 = (state_28634[(23)]);
var inst_28606 = done.call(null,null);
var inst_28607 = cljs.core.async.untap_STAR_.call(null,m,inst_28602);
var state_28634__$1 = (function (){var statearr_28663 = state_28634;
(statearr_28663[(24)] = inst_28606);

return statearr_28663;
})();
var statearr_28664_28734 = state_28634__$1;
(statearr_28664_28734[(2)] = inst_28607);

(statearr_28664_28734[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (33))){
var inst_28593 = (state_28634[(25)]);
var inst_28595 = cljs.core.chunked_seq_QMARK_.call(null,inst_28593);
var state_28634__$1 = state_28634;
if(inst_28595){
var statearr_28665_28735 = state_28634__$1;
(statearr_28665_28735[(1)] = (36));

} else {
var statearr_28666_28736 = state_28634__$1;
(statearr_28666_28736[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (13))){
var inst_28523 = (state_28634[(26)]);
var inst_28526 = cljs.core.async.close_BANG_.call(null,inst_28523);
var state_28634__$1 = state_28634;
var statearr_28667_28737 = state_28634__$1;
(statearr_28667_28737[(2)] = inst_28526);

(statearr_28667_28737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (22))){
var inst_28546 = (state_28634[(8)]);
var inst_28549 = cljs.core.async.close_BANG_.call(null,inst_28546);
var state_28634__$1 = state_28634;
var statearr_28668_28738 = state_28634__$1;
(statearr_28668_28738[(2)] = inst_28549);

(statearr_28668_28738[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (36))){
var inst_28593 = (state_28634[(25)]);
var inst_28597 = cljs.core.chunk_first.call(null,inst_28593);
var inst_28598 = cljs.core.chunk_rest.call(null,inst_28593);
var inst_28599 = cljs.core.count.call(null,inst_28597);
var inst_28574 = inst_28598;
var inst_28575 = inst_28597;
var inst_28576 = inst_28599;
var inst_28577 = (0);
var state_28634__$1 = (function (){var statearr_28669 = state_28634;
(statearr_28669[(20)] = inst_28576);

(statearr_28669[(21)] = inst_28574);

(statearr_28669[(11)] = inst_28577);

(statearr_28669[(12)] = inst_28575);

return statearr_28669;
})();
var statearr_28670_28739 = state_28634__$1;
(statearr_28670_28739[(2)] = null);

(statearr_28670_28739[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (41))){
var inst_28593 = (state_28634[(25)]);
var inst_28609 = (state_28634[(2)]);
var inst_28610 = cljs.core.next.call(null,inst_28593);
var inst_28574 = inst_28610;
var inst_28575 = null;
var inst_28576 = (0);
var inst_28577 = (0);
var state_28634__$1 = (function (){var statearr_28671 = state_28634;
(statearr_28671[(20)] = inst_28576);

(statearr_28671[(27)] = inst_28609);

(statearr_28671[(21)] = inst_28574);

(statearr_28671[(11)] = inst_28577);

(statearr_28671[(12)] = inst_28575);

return statearr_28671;
})();
var statearr_28672_28740 = state_28634__$1;
(statearr_28672_28740[(2)] = null);

(statearr_28672_28740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (43))){
var state_28634__$1 = state_28634;
var statearr_28673_28741 = state_28634__$1;
(statearr_28673_28741[(2)] = null);

(statearr_28673_28741[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (29))){
var inst_28618 = (state_28634[(2)]);
var state_28634__$1 = state_28634;
var statearr_28674_28742 = state_28634__$1;
(statearr_28674_28742[(2)] = inst_28618);

(statearr_28674_28742[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (44))){
var inst_28627 = (state_28634[(2)]);
var state_28634__$1 = (function (){var statearr_28675 = state_28634;
(statearr_28675[(28)] = inst_28627);

return statearr_28675;
})();
var statearr_28676_28743 = state_28634__$1;
(statearr_28676_28743[(2)] = null);

(statearr_28676_28743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (6))){
var inst_28566 = (state_28634[(29)]);
var inst_28565 = cljs.core.deref.call(null,cs);
var inst_28566__$1 = cljs.core.keys.call(null,inst_28565);
var inst_28567 = cljs.core.count.call(null,inst_28566__$1);
var inst_28568 = cljs.core.reset_BANG_.call(null,dctr,inst_28567);
var inst_28573 = cljs.core.seq.call(null,inst_28566__$1);
var inst_28574 = inst_28573;
var inst_28575 = null;
var inst_28576 = (0);
var inst_28577 = (0);
var state_28634__$1 = (function (){var statearr_28677 = state_28634;
(statearr_28677[(20)] = inst_28576);

(statearr_28677[(21)] = inst_28574);

(statearr_28677[(30)] = inst_28568);

(statearr_28677[(29)] = inst_28566__$1);

(statearr_28677[(11)] = inst_28577);

(statearr_28677[(12)] = inst_28575);

return statearr_28677;
})();
var statearr_28678_28744 = state_28634__$1;
(statearr_28678_28744[(2)] = null);

(statearr_28678_28744[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (28))){
var inst_28574 = (state_28634[(21)]);
var inst_28593 = (state_28634[(25)]);
var inst_28593__$1 = cljs.core.seq.call(null,inst_28574);
var state_28634__$1 = (function (){var statearr_28679 = state_28634;
(statearr_28679[(25)] = inst_28593__$1);

return statearr_28679;
})();
if(inst_28593__$1){
var statearr_28680_28745 = state_28634__$1;
(statearr_28680_28745[(1)] = (33));

} else {
var statearr_28681_28746 = state_28634__$1;
(statearr_28681_28746[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (25))){
var inst_28576 = (state_28634[(20)]);
var inst_28577 = (state_28634[(11)]);
var inst_28579 = (inst_28577 < inst_28576);
var inst_28580 = inst_28579;
var state_28634__$1 = state_28634;
if(cljs.core.truth_(inst_28580)){
var statearr_28682_28747 = state_28634__$1;
(statearr_28682_28747[(1)] = (27));

} else {
var statearr_28683_28748 = state_28634__$1;
(statearr_28683_28748[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (34))){
var state_28634__$1 = state_28634;
var statearr_28684_28749 = state_28634__$1;
(statearr_28684_28749[(2)] = null);

(statearr_28684_28749[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (17))){
var state_28634__$1 = state_28634;
var statearr_28685_28750 = state_28634__$1;
(statearr_28685_28750[(2)] = null);

(statearr_28685_28750[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (3))){
var inst_28632 = (state_28634[(2)]);
var state_28634__$1 = state_28634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28634__$1,inst_28632);
} else {
if((state_val_28635 === (12))){
var inst_28561 = (state_28634[(2)]);
var state_28634__$1 = state_28634;
var statearr_28686_28751 = state_28634__$1;
(statearr_28686_28751[(2)] = inst_28561);

(statearr_28686_28751[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (2))){
var state_28634__$1 = state_28634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28634__$1,(4),ch);
} else {
if((state_val_28635 === (23))){
var state_28634__$1 = state_28634;
var statearr_28687_28752 = state_28634__$1;
(statearr_28687_28752[(2)] = null);

(statearr_28687_28752[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (35))){
var inst_28616 = (state_28634[(2)]);
var state_28634__$1 = state_28634;
var statearr_28688_28753 = state_28634__$1;
(statearr_28688_28753[(2)] = inst_28616);

(statearr_28688_28753[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (19))){
var inst_28533 = (state_28634[(7)]);
var inst_28537 = cljs.core.chunk_first.call(null,inst_28533);
var inst_28538 = cljs.core.chunk_rest.call(null,inst_28533);
var inst_28539 = cljs.core.count.call(null,inst_28537);
var inst_28511 = inst_28538;
var inst_28512 = inst_28537;
var inst_28513 = inst_28539;
var inst_28514 = (0);
var state_28634__$1 = (function (){var statearr_28689 = state_28634;
(statearr_28689[(13)] = inst_28514);

(statearr_28689[(15)] = inst_28512);

(statearr_28689[(16)] = inst_28511);

(statearr_28689[(17)] = inst_28513);

return statearr_28689;
})();
var statearr_28690_28754 = state_28634__$1;
(statearr_28690_28754[(2)] = null);

(statearr_28690_28754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (11))){
var inst_28511 = (state_28634[(16)]);
var inst_28533 = (state_28634[(7)]);
var inst_28533__$1 = cljs.core.seq.call(null,inst_28511);
var state_28634__$1 = (function (){var statearr_28691 = state_28634;
(statearr_28691[(7)] = inst_28533__$1);

return statearr_28691;
})();
if(inst_28533__$1){
var statearr_28692_28755 = state_28634__$1;
(statearr_28692_28755[(1)] = (16));

} else {
var statearr_28693_28756 = state_28634__$1;
(statearr_28693_28756[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (9))){
var inst_28563 = (state_28634[(2)]);
var state_28634__$1 = state_28634;
var statearr_28694_28757 = state_28634__$1;
(statearr_28694_28757[(2)] = inst_28563);

(statearr_28694_28757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (5))){
var inst_28509 = cljs.core.deref.call(null,cs);
var inst_28510 = cljs.core.seq.call(null,inst_28509);
var inst_28511 = inst_28510;
var inst_28512 = null;
var inst_28513 = (0);
var inst_28514 = (0);
var state_28634__$1 = (function (){var statearr_28695 = state_28634;
(statearr_28695[(13)] = inst_28514);

(statearr_28695[(15)] = inst_28512);

(statearr_28695[(16)] = inst_28511);

(statearr_28695[(17)] = inst_28513);

return statearr_28695;
})();
var statearr_28696_28758 = state_28634__$1;
(statearr_28696_28758[(2)] = null);

(statearr_28696_28758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (14))){
var state_28634__$1 = state_28634;
var statearr_28697_28759 = state_28634__$1;
(statearr_28697_28759[(2)] = null);

(statearr_28697_28759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (45))){
var inst_28624 = (state_28634[(2)]);
var state_28634__$1 = state_28634;
var statearr_28698_28760 = state_28634__$1;
(statearr_28698_28760[(2)] = inst_28624);

(statearr_28698_28760[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (26))){
var inst_28566 = (state_28634[(29)]);
var inst_28620 = (state_28634[(2)]);
var inst_28621 = cljs.core.seq.call(null,inst_28566);
var state_28634__$1 = (function (){var statearr_28699 = state_28634;
(statearr_28699[(31)] = inst_28620);

return statearr_28699;
})();
if(inst_28621){
var statearr_28700_28761 = state_28634__$1;
(statearr_28700_28761[(1)] = (42));

} else {
var statearr_28701_28762 = state_28634__$1;
(statearr_28701_28762[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (16))){
var inst_28533 = (state_28634[(7)]);
var inst_28535 = cljs.core.chunked_seq_QMARK_.call(null,inst_28533);
var state_28634__$1 = state_28634;
if(inst_28535){
var statearr_28702_28763 = state_28634__$1;
(statearr_28702_28763[(1)] = (19));

} else {
var statearr_28703_28764 = state_28634__$1;
(statearr_28703_28764[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (38))){
var inst_28613 = (state_28634[(2)]);
var state_28634__$1 = state_28634;
var statearr_28704_28765 = state_28634__$1;
(statearr_28704_28765[(2)] = inst_28613);

(statearr_28704_28765[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (30))){
var state_28634__$1 = state_28634;
var statearr_28705_28766 = state_28634__$1;
(statearr_28705_28766[(2)] = null);

(statearr_28705_28766[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (10))){
var inst_28514 = (state_28634[(13)]);
var inst_28512 = (state_28634[(15)]);
var inst_28522 = cljs.core._nth.call(null,inst_28512,inst_28514);
var inst_28523 = cljs.core.nth.call(null,inst_28522,(0),null);
var inst_28524 = cljs.core.nth.call(null,inst_28522,(1),null);
var state_28634__$1 = (function (){var statearr_28706 = state_28634;
(statearr_28706[(26)] = inst_28523);

return statearr_28706;
})();
if(cljs.core.truth_(inst_28524)){
var statearr_28707_28767 = state_28634__$1;
(statearr_28707_28767[(1)] = (13));

} else {
var statearr_28708_28768 = state_28634__$1;
(statearr_28708_28768[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (18))){
var inst_28559 = (state_28634[(2)]);
var state_28634__$1 = state_28634;
var statearr_28709_28769 = state_28634__$1;
(statearr_28709_28769[(2)] = inst_28559);

(statearr_28709_28769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (42))){
var state_28634__$1 = state_28634;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28634__$1,(45),dchan);
} else {
if((state_val_28635 === (37))){
var inst_28502 = (state_28634[(10)]);
var inst_28602 = (state_28634[(23)]);
var inst_28593 = (state_28634[(25)]);
var inst_28602__$1 = cljs.core.first.call(null,inst_28593);
var inst_28603 = cljs.core.async.put_BANG_.call(null,inst_28602__$1,inst_28502,done);
var state_28634__$1 = (function (){var statearr_28710 = state_28634;
(statearr_28710[(23)] = inst_28602__$1);

return statearr_28710;
})();
if(cljs.core.truth_(inst_28603)){
var statearr_28711_28770 = state_28634__$1;
(statearr_28711_28770[(1)] = (39));

} else {
var statearr_28712_28771 = state_28634__$1;
(statearr_28712_28771[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28635 === (8))){
var inst_28514 = (state_28634[(13)]);
var inst_28513 = (state_28634[(17)]);
var inst_28516 = (inst_28514 < inst_28513);
var inst_28517 = inst_28516;
var state_28634__$1 = state_28634;
if(cljs.core.truth_(inst_28517)){
var statearr_28713_28772 = state_28634__$1;
(statearr_28713_28772[(1)] = (10));

} else {
var statearr_28714_28773 = state_28634__$1;
(statearr_28714_28773[(1)] = (11));

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
});})(c__27900__auto___28719,cs,m,dchan,dctr,done))
;
return ((function (switch__27809__auto__,c__27900__auto___28719,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27810__auto__ = null;
var cljs$core$async$mult_$_state_machine__27810__auto____0 = (function (){
var statearr_28715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28715[(0)] = cljs$core$async$mult_$_state_machine__27810__auto__);

(statearr_28715[(1)] = (1));

return statearr_28715;
});
var cljs$core$async$mult_$_state_machine__27810__auto____1 = (function (state_28634){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_28634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e28716){if((e28716 instanceof Object)){
var ex__27813__auto__ = e28716;
var statearr_28717_28774 = state_28634;
(statearr_28717_28774[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28775 = state_28634;
state_28634 = G__28775;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27810__auto__ = function(state_28634){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27810__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27810__auto____1.call(this,state_28634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27810__auto____0;
cljs$core$async$mult_$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27810__auto____1;
return cljs$core$async$mult_$_state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto___28719,cs,m,dchan,dctr,done))
})();
var state__27902__auto__ = (function (){var statearr_28718 = f__27901__auto__.call(null);
(statearr_28718[(6)] = c__27900__auto___28719);

return statearr_28718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___28719,cs,m,dchan,dctr,done))
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
var G__28777 = arguments.length;
switch (G__28777) {
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
var len__4531__auto___28789 = arguments.length;
var i__4532__auto___28790 = (0);
while(true){
if((i__4532__auto___28790 < len__4531__auto___28789)){
args__4534__auto__.push((arguments[i__4532__auto___28790]));

var G__28791 = (i__4532__auto___28790 + (1));
i__4532__auto___28790 = G__28791;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28783){
var map__28784 = p__28783;
var map__28784__$1 = ((((!((map__28784 == null)))?(((((map__28784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28784):map__28784);
var opts = map__28784__$1;
var statearr_28786_28792 = state;
(statearr_28786_28792[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__28784,map__28784__$1,opts){
return (function (val){
var statearr_28787_28793 = state;
(statearr_28787_28793[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28784,map__28784__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_28788_28794 = state;
(statearr_28788_28794[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28779){
var G__28780 = cljs.core.first.call(null,seq28779);
var seq28779__$1 = cljs.core.next.call(null,seq28779);
var G__28781 = cljs.core.first.call(null,seq28779__$1);
var seq28779__$2 = cljs.core.next.call(null,seq28779__$1);
var G__28782 = cljs.core.first.call(null,seq28779__$2);
var seq28779__$3 = cljs.core.next.call(null,seq28779__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28780,G__28781,G__28782,seq28779__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28795 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28795 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28796){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28796 = meta28796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28797,meta28796__$1){
var self__ = this;
var _28797__$1 = this;
return (new cljs.core.async.t_cljs$core$async28795(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28796__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28795.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28797){
var self__ = this;
var _28797__$1 = this;
return self__.meta28796;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28795.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28795.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28795.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28795.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28795.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28795.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28795.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28795.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28795.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28796","meta28796",-1230449330,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28795.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28795.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28795";

cljs.core.async.t_cljs$core$async28795.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28795");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28795.
 */
cljs.core.async.__GT_t_cljs$core$async28795 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28795(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28796){
return (new cljs.core.async.t_cljs$core$async28795(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28796));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28795(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27900__auto___28959 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___28959,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto___28959,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28899){
var state_val_28900 = (state_28899[(1)]);
if((state_val_28900 === (7))){
var inst_28814 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
var statearr_28901_28960 = state_28899__$1;
(statearr_28901_28960[(2)] = inst_28814);

(statearr_28901_28960[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (20))){
var inst_28826 = (state_28899[(7)]);
var state_28899__$1 = state_28899;
var statearr_28902_28961 = state_28899__$1;
(statearr_28902_28961[(2)] = inst_28826);

(statearr_28902_28961[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (27))){
var state_28899__$1 = state_28899;
var statearr_28903_28962 = state_28899__$1;
(statearr_28903_28962[(2)] = null);

(statearr_28903_28962[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (1))){
var inst_28801 = (state_28899[(8)]);
var inst_28801__$1 = calc_state.call(null);
var inst_28803 = (inst_28801__$1 == null);
var inst_28804 = cljs.core.not.call(null,inst_28803);
var state_28899__$1 = (function (){var statearr_28904 = state_28899;
(statearr_28904[(8)] = inst_28801__$1);

return statearr_28904;
})();
if(inst_28804){
var statearr_28905_28963 = state_28899__$1;
(statearr_28905_28963[(1)] = (2));

} else {
var statearr_28906_28964 = state_28899__$1;
(statearr_28906_28964[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (24))){
var inst_28850 = (state_28899[(9)]);
var inst_28873 = (state_28899[(10)]);
var inst_28859 = (state_28899[(11)]);
var inst_28873__$1 = inst_28850.call(null,inst_28859);
var state_28899__$1 = (function (){var statearr_28907 = state_28899;
(statearr_28907[(10)] = inst_28873__$1);

return statearr_28907;
})();
if(cljs.core.truth_(inst_28873__$1)){
var statearr_28908_28965 = state_28899__$1;
(statearr_28908_28965[(1)] = (29));

} else {
var statearr_28909_28966 = state_28899__$1;
(statearr_28909_28966[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (4))){
var inst_28817 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
if(cljs.core.truth_(inst_28817)){
var statearr_28910_28967 = state_28899__$1;
(statearr_28910_28967[(1)] = (8));

} else {
var statearr_28911_28968 = state_28899__$1;
(statearr_28911_28968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (15))){
var inst_28844 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
if(cljs.core.truth_(inst_28844)){
var statearr_28912_28969 = state_28899__$1;
(statearr_28912_28969[(1)] = (19));

} else {
var statearr_28913_28970 = state_28899__$1;
(statearr_28913_28970[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (21))){
var inst_28849 = (state_28899[(12)]);
var inst_28849__$1 = (state_28899[(2)]);
var inst_28850 = cljs.core.get.call(null,inst_28849__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28851 = cljs.core.get.call(null,inst_28849__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28852 = cljs.core.get.call(null,inst_28849__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28899__$1 = (function (){var statearr_28914 = state_28899;
(statearr_28914[(12)] = inst_28849__$1);

(statearr_28914[(9)] = inst_28850);

(statearr_28914[(13)] = inst_28851);

return statearr_28914;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28899__$1,(22),inst_28852);
} else {
if((state_val_28900 === (31))){
var inst_28881 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
if(cljs.core.truth_(inst_28881)){
var statearr_28915_28971 = state_28899__$1;
(statearr_28915_28971[(1)] = (32));

} else {
var statearr_28916_28972 = state_28899__$1;
(statearr_28916_28972[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (32))){
var inst_28858 = (state_28899[(14)]);
var state_28899__$1 = state_28899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28899__$1,(35),out,inst_28858);
} else {
if((state_val_28900 === (33))){
var inst_28849 = (state_28899[(12)]);
var inst_28826 = inst_28849;
var state_28899__$1 = (function (){var statearr_28917 = state_28899;
(statearr_28917[(7)] = inst_28826);

return statearr_28917;
})();
var statearr_28918_28973 = state_28899__$1;
(statearr_28918_28973[(2)] = null);

(statearr_28918_28973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (13))){
var inst_28826 = (state_28899[(7)]);
var inst_28833 = inst_28826.cljs$lang$protocol_mask$partition0$;
var inst_28834 = (inst_28833 & (64));
var inst_28835 = inst_28826.cljs$core$ISeq$;
var inst_28836 = (cljs.core.PROTOCOL_SENTINEL === inst_28835);
var inst_28837 = ((inst_28834) || (inst_28836));
var state_28899__$1 = state_28899;
if(cljs.core.truth_(inst_28837)){
var statearr_28919_28974 = state_28899__$1;
(statearr_28919_28974[(1)] = (16));

} else {
var statearr_28920_28975 = state_28899__$1;
(statearr_28920_28975[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (22))){
var inst_28859 = (state_28899[(11)]);
var inst_28858 = (state_28899[(14)]);
var inst_28857 = (state_28899[(2)]);
var inst_28858__$1 = cljs.core.nth.call(null,inst_28857,(0),null);
var inst_28859__$1 = cljs.core.nth.call(null,inst_28857,(1),null);
var inst_28860 = (inst_28858__$1 == null);
var inst_28861 = cljs.core._EQ_.call(null,inst_28859__$1,change);
var inst_28862 = ((inst_28860) || (inst_28861));
var state_28899__$1 = (function (){var statearr_28921 = state_28899;
(statearr_28921[(11)] = inst_28859__$1);

(statearr_28921[(14)] = inst_28858__$1);

return statearr_28921;
})();
if(cljs.core.truth_(inst_28862)){
var statearr_28922_28976 = state_28899__$1;
(statearr_28922_28976[(1)] = (23));

} else {
var statearr_28923_28977 = state_28899__$1;
(statearr_28923_28977[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (36))){
var inst_28849 = (state_28899[(12)]);
var inst_28826 = inst_28849;
var state_28899__$1 = (function (){var statearr_28924 = state_28899;
(statearr_28924[(7)] = inst_28826);

return statearr_28924;
})();
var statearr_28925_28978 = state_28899__$1;
(statearr_28925_28978[(2)] = null);

(statearr_28925_28978[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (29))){
var inst_28873 = (state_28899[(10)]);
var state_28899__$1 = state_28899;
var statearr_28926_28979 = state_28899__$1;
(statearr_28926_28979[(2)] = inst_28873);

(statearr_28926_28979[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (6))){
var state_28899__$1 = state_28899;
var statearr_28927_28980 = state_28899__$1;
(statearr_28927_28980[(2)] = false);

(statearr_28927_28980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (28))){
var inst_28869 = (state_28899[(2)]);
var inst_28870 = calc_state.call(null);
var inst_28826 = inst_28870;
var state_28899__$1 = (function (){var statearr_28928 = state_28899;
(statearr_28928[(15)] = inst_28869);

(statearr_28928[(7)] = inst_28826);

return statearr_28928;
})();
var statearr_28929_28981 = state_28899__$1;
(statearr_28929_28981[(2)] = null);

(statearr_28929_28981[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (25))){
var inst_28895 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
var statearr_28930_28982 = state_28899__$1;
(statearr_28930_28982[(2)] = inst_28895);

(statearr_28930_28982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (34))){
var inst_28893 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
var statearr_28931_28983 = state_28899__$1;
(statearr_28931_28983[(2)] = inst_28893);

(statearr_28931_28983[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (17))){
var state_28899__$1 = state_28899;
var statearr_28932_28984 = state_28899__$1;
(statearr_28932_28984[(2)] = false);

(statearr_28932_28984[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (3))){
var state_28899__$1 = state_28899;
var statearr_28933_28985 = state_28899__$1;
(statearr_28933_28985[(2)] = false);

(statearr_28933_28985[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (12))){
var inst_28897 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28899__$1,inst_28897);
} else {
if((state_val_28900 === (2))){
var inst_28801 = (state_28899[(8)]);
var inst_28806 = inst_28801.cljs$lang$protocol_mask$partition0$;
var inst_28807 = (inst_28806 & (64));
var inst_28808 = inst_28801.cljs$core$ISeq$;
var inst_28809 = (cljs.core.PROTOCOL_SENTINEL === inst_28808);
var inst_28810 = ((inst_28807) || (inst_28809));
var state_28899__$1 = state_28899;
if(cljs.core.truth_(inst_28810)){
var statearr_28934_28986 = state_28899__$1;
(statearr_28934_28986[(1)] = (5));

} else {
var statearr_28935_28987 = state_28899__$1;
(statearr_28935_28987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (23))){
var inst_28858 = (state_28899[(14)]);
var inst_28864 = (inst_28858 == null);
var state_28899__$1 = state_28899;
if(cljs.core.truth_(inst_28864)){
var statearr_28936_28988 = state_28899__$1;
(statearr_28936_28988[(1)] = (26));

} else {
var statearr_28937_28989 = state_28899__$1;
(statearr_28937_28989[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (35))){
var inst_28884 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
if(cljs.core.truth_(inst_28884)){
var statearr_28938_28990 = state_28899__$1;
(statearr_28938_28990[(1)] = (36));

} else {
var statearr_28939_28991 = state_28899__$1;
(statearr_28939_28991[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (19))){
var inst_28826 = (state_28899[(7)]);
var inst_28846 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28826);
var state_28899__$1 = state_28899;
var statearr_28940_28992 = state_28899__$1;
(statearr_28940_28992[(2)] = inst_28846);

(statearr_28940_28992[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (11))){
var inst_28826 = (state_28899[(7)]);
var inst_28830 = (inst_28826 == null);
var inst_28831 = cljs.core.not.call(null,inst_28830);
var state_28899__$1 = state_28899;
if(inst_28831){
var statearr_28941_28993 = state_28899__$1;
(statearr_28941_28993[(1)] = (13));

} else {
var statearr_28942_28994 = state_28899__$1;
(statearr_28942_28994[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (9))){
var inst_28801 = (state_28899[(8)]);
var state_28899__$1 = state_28899;
var statearr_28943_28995 = state_28899__$1;
(statearr_28943_28995[(2)] = inst_28801);

(statearr_28943_28995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (5))){
var state_28899__$1 = state_28899;
var statearr_28944_28996 = state_28899__$1;
(statearr_28944_28996[(2)] = true);

(statearr_28944_28996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (14))){
var state_28899__$1 = state_28899;
var statearr_28945_28997 = state_28899__$1;
(statearr_28945_28997[(2)] = false);

(statearr_28945_28997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (26))){
var inst_28859 = (state_28899[(11)]);
var inst_28866 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28859);
var state_28899__$1 = state_28899;
var statearr_28946_28998 = state_28899__$1;
(statearr_28946_28998[(2)] = inst_28866);

(statearr_28946_28998[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (16))){
var state_28899__$1 = state_28899;
var statearr_28947_28999 = state_28899__$1;
(statearr_28947_28999[(2)] = true);

(statearr_28947_28999[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (38))){
var inst_28889 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
var statearr_28948_29000 = state_28899__$1;
(statearr_28948_29000[(2)] = inst_28889);

(statearr_28948_29000[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (30))){
var inst_28850 = (state_28899[(9)]);
var inst_28859 = (state_28899[(11)]);
var inst_28851 = (state_28899[(13)]);
var inst_28876 = cljs.core.empty_QMARK_.call(null,inst_28850);
var inst_28877 = inst_28851.call(null,inst_28859);
var inst_28878 = cljs.core.not.call(null,inst_28877);
var inst_28879 = ((inst_28876) && (inst_28878));
var state_28899__$1 = state_28899;
var statearr_28949_29001 = state_28899__$1;
(statearr_28949_29001[(2)] = inst_28879);

(statearr_28949_29001[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (10))){
var inst_28801 = (state_28899[(8)]);
var inst_28822 = (state_28899[(2)]);
var inst_28823 = cljs.core.get.call(null,inst_28822,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28824 = cljs.core.get.call(null,inst_28822,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28825 = cljs.core.get.call(null,inst_28822,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28826 = inst_28801;
var state_28899__$1 = (function (){var statearr_28950 = state_28899;
(statearr_28950[(7)] = inst_28826);

(statearr_28950[(16)] = inst_28825);

(statearr_28950[(17)] = inst_28824);

(statearr_28950[(18)] = inst_28823);

return statearr_28950;
})();
var statearr_28951_29002 = state_28899__$1;
(statearr_28951_29002[(2)] = null);

(statearr_28951_29002[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (18))){
var inst_28841 = (state_28899[(2)]);
var state_28899__$1 = state_28899;
var statearr_28952_29003 = state_28899__$1;
(statearr_28952_29003[(2)] = inst_28841);

(statearr_28952_29003[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (37))){
var state_28899__$1 = state_28899;
var statearr_28953_29004 = state_28899__$1;
(statearr_28953_29004[(2)] = null);

(statearr_28953_29004[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28900 === (8))){
var inst_28801 = (state_28899[(8)]);
var inst_28819 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28801);
var state_28899__$1 = state_28899;
var statearr_28954_29005 = state_28899__$1;
(statearr_28954_29005[(2)] = inst_28819);

(statearr_28954_29005[(1)] = (10));


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
});})(c__27900__auto___28959,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27809__auto__,c__27900__auto___28959,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27810__auto__ = null;
var cljs$core$async$mix_$_state_machine__27810__auto____0 = (function (){
var statearr_28955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28955[(0)] = cljs$core$async$mix_$_state_machine__27810__auto__);

(statearr_28955[(1)] = (1));

return statearr_28955;
});
var cljs$core$async$mix_$_state_machine__27810__auto____1 = (function (state_28899){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_28899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e28956){if((e28956 instanceof Object)){
var ex__27813__auto__ = e28956;
var statearr_28957_29006 = state_28899;
(statearr_28957_29006[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29007 = state_28899;
state_28899 = G__29007;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27810__auto__ = function(state_28899){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27810__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27810__auto____1.call(this,state_28899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27810__auto____0;
cljs$core$async$mix_$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27810__auto____1;
return cljs$core$async$mix_$_state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto___28959,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27902__auto__ = (function (){var statearr_28958 = f__27901__auto__.call(null);
(statearr_28958[(6)] = c__27900__auto___28959);

return statearr_28958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___28959,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__29009 = arguments.length;
switch (G__29009) {
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
var G__29013 = arguments.length;
switch (G__29013) {
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
return (function (p1__29011_SHARP_){
if(cljs.core.truth_(p1__29011_SHARP_.call(null,topic))){
return p1__29011_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29011_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29014 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29015){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29015 = meta29015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29016,meta29015__$1){
var self__ = this;
var _29016__$1 = this;
return (new cljs.core.async.t_cljs$core$async29014(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29015__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29014.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29016){
var self__ = this;
var _29016__$1 = this;
return self__.meta29015;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29014.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29014.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29014.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29014.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29014.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async29014.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29014.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29014.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29015","meta29015",5748960,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29014.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29014";

cljs.core.async.t_cljs$core$async29014.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29014");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29014.
 */
cljs.core.async.__GT_t_cljs$core$async29014 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29014(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29015){
return (new cljs.core.async.t_cljs$core$async29014(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29015));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29014(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27900__auto___29134 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___29134,mults,ensure_mult,p){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto___29134,mults,ensure_mult,p){
return (function (state_29088){
var state_val_29089 = (state_29088[(1)]);
if((state_val_29089 === (7))){
var inst_29084 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
var statearr_29090_29135 = state_29088__$1;
(statearr_29090_29135[(2)] = inst_29084);

(statearr_29090_29135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (20))){
var state_29088__$1 = state_29088;
var statearr_29091_29136 = state_29088__$1;
(statearr_29091_29136[(2)] = null);

(statearr_29091_29136[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (1))){
var state_29088__$1 = state_29088;
var statearr_29092_29137 = state_29088__$1;
(statearr_29092_29137[(2)] = null);

(statearr_29092_29137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (24))){
var inst_29067 = (state_29088[(7)]);
var inst_29076 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29067);
var state_29088__$1 = state_29088;
var statearr_29093_29138 = state_29088__$1;
(statearr_29093_29138[(2)] = inst_29076);

(statearr_29093_29138[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (4))){
var inst_29019 = (state_29088[(8)]);
var inst_29019__$1 = (state_29088[(2)]);
var inst_29020 = (inst_29019__$1 == null);
var state_29088__$1 = (function (){var statearr_29094 = state_29088;
(statearr_29094[(8)] = inst_29019__$1);

return statearr_29094;
})();
if(cljs.core.truth_(inst_29020)){
var statearr_29095_29139 = state_29088__$1;
(statearr_29095_29139[(1)] = (5));

} else {
var statearr_29096_29140 = state_29088__$1;
(statearr_29096_29140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (15))){
var inst_29061 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
var statearr_29097_29141 = state_29088__$1;
(statearr_29097_29141[(2)] = inst_29061);

(statearr_29097_29141[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (21))){
var inst_29081 = (state_29088[(2)]);
var state_29088__$1 = (function (){var statearr_29098 = state_29088;
(statearr_29098[(9)] = inst_29081);

return statearr_29098;
})();
var statearr_29099_29142 = state_29088__$1;
(statearr_29099_29142[(2)] = null);

(statearr_29099_29142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (13))){
var inst_29043 = (state_29088[(10)]);
var inst_29045 = cljs.core.chunked_seq_QMARK_.call(null,inst_29043);
var state_29088__$1 = state_29088;
if(inst_29045){
var statearr_29100_29143 = state_29088__$1;
(statearr_29100_29143[(1)] = (16));

} else {
var statearr_29101_29144 = state_29088__$1;
(statearr_29101_29144[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (22))){
var inst_29073 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
if(cljs.core.truth_(inst_29073)){
var statearr_29102_29145 = state_29088__$1;
(statearr_29102_29145[(1)] = (23));

} else {
var statearr_29103_29146 = state_29088__$1;
(statearr_29103_29146[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (6))){
var inst_29067 = (state_29088[(7)]);
var inst_29019 = (state_29088[(8)]);
var inst_29069 = (state_29088[(11)]);
var inst_29067__$1 = topic_fn.call(null,inst_29019);
var inst_29068 = cljs.core.deref.call(null,mults);
var inst_29069__$1 = cljs.core.get.call(null,inst_29068,inst_29067__$1);
var state_29088__$1 = (function (){var statearr_29104 = state_29088;
(statearr_29104[(7)] = inst_29067__$1);

(statearr_29104[(11)] = inst_29069__$1);

return statearr_29104;
})();
if(cljs.core.truth_(inst_29069__$1)){
var statearr_29105_29147 = state_29088__$1;
(statearr_29105_29147[(1)] = (19));

} else {
var statearr_29106_29148 = state_29088__$1;
(statearr_29106_29148[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (25))){
var inst_29078 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
var statearr_29107_29149 = state_29088__$1;
(statearr_29107_29149[(2)] = inst_29078);

(statearr_29107_29149[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (17))){
var inst_29043 = (state_29088[(10)]);
var inst_29052 = cljs.core.first.call(null,inst_29043);
var inst_29053 = cljs.core.async.muxch_STAR_.call(null,inst_29052);
var inst_29054 = cljs.core.async.close_BANG_.call(null,inst_29053);
var inst_29055 = cljs.core.next.call(null,inst_29043);
var inst_29029 = inst_29055;
var inst_29030 = null;
var inst_29031 = (0);
var inst_29032 = (0);
var state_29088__$1 = (function (){var statearr_29108 = state_29088;
(statearr_29108[(12)] = inst_29029);

(statearr_29108[(13)] = inst_29030);

(statearr_29108[(14)] = inst_29031);

(statearr_29108[(15)] = inst_29032);

(statearr_29108[(16)] = inst_29054);

return statearr_29108;
})();
var statearr_29109_29150 = state_29088__$1;
(statearr_29109_29150[(2)] = null);

(statearr_29109_29150[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (3))){
var inst_29086 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29088__$1,inst_29086);
} else {
if((state_val_29089 === (12))){
var inst_29063 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
var statearr_29110_29151 = state_29088__$1;
(statearr_29110_29151[(2)] = inst_29063);

(statearr_29110_29151[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (2))){
var state_29088__$1 = state_29088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29088__$1,(4),ch);
} else {
if((state_val_29089 === (23))){
var state_29088__$1 = state_29088;
var statearr_29111_29152 = state_29088__$1;
(statearr_29111_29152[(2)] = null);

(statearr_29111_29152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (19))){
var inst_29019 = (state_29088[(8)]);
var inst_29069 = (state_29088[(11)]);
var inst_29071 = cljs.core.async.muxch_STAR_.call(null,inst_29069);
var state_29088__$1 = state_29088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29088__$1,(22),inst_29071,inst_29019);
} else {
if((state_val_29089 === (11))){
var inst_29029 = (state_29088[(12)]);
var inst_29043 = (state_29088[(10)]);
var inst_29043__$1 = cljs.core.seq.call(null,inst_29029);
var state_29088__$1 = (function (){var statearr_29112 = state_29088;
(statearr_29112[(10)] = inst_29043__$1);

return statearr_29112;
})();
if(inst_29043__$1){
var statearr_29113_29153 = state_29088__$1;
(statearr_29113_29153[(1)] = (13));

} else {
var statearr_29114_29154 = state_29088__$1;
(statearr_29114_29154[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (9))){
var inst_29065 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
var statearr_29115_29155 = state_29088__$1;
(statearr_29115_29155[(2)] = inst_29065);

(statearr_29115_29155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (5))){
var inst_29026 = cljs.core.deref.call(null,mults);
var inst_29027 = cljs.core.vals.call(null,inst_29026);
var inst_29028 = cljs.core.seq.call(null,inst_29027);
var inst_29029 = inst_29028;
var inst_29030 = null;
var inst_29031 = (0);
var inst_29032 = (0);
var state_29088__$1 = (function (){var statearr_29116 = state_29088;
(statearr_29116[(12)] = inst_29029);

(statearr_29116[(13)] = inst_29030);

(statearr_29116[(14)] = inst_29031);

(statearr_29116[(15)] = inst_29032);

return statearr_29116;
})();
var statearr_29117_29156 = state_29088__$1;
(statearr_29117_29156[(2)] = null);

(statearr_29117_29156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (14))){
var state_29088__$1 = state_29088;
var statearr_29121_29157 = state_29088__$1;
(statearr_29121_29157[(2)] = null);

(statearr_29121_29157[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (16))){
var inst_29043 = (state_29088[(10)]);
var inst_29047 = cljs.core.chunk_first.call(null,inst_29043);
var inst_29048 = cljs.core.chunk_rest.call(null,inst_29043);
var inst_29049 = cljs.core.count.call(null,inst_29047);
var inst_29029 = inst_29048;
var inst_29030 = inst_29047;
var inst_29031 = inst_29049;
var inst_29032 = (0);
var state_29088__$1 = (function (){var statearr_29122 = state_29088;
(statearr_29122[(12)] = inst_29029);

(statearr_29122[(13)] = inst_29030);

(statearr_29122[(14)] = inst_29031);

(statearr_29122[(15)] = inst_29032);

return statearr_29122;
})();
var statearr_29123_29158 = state_29088__$1;
(statearr_29123_29158[(2)] = null);

(statearr_29123_29158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (10))){
var inst_29029 = (state_29088[(12)]);
var inst_29030 = (state_29088[(13)]);
var inst_29031 = (state_29088[(14)]);
var inst_29032 = (state_29088[(15)]);
var inst_29037 = cljs.core._nth.call(null,inst_29030,inst_29032);
var inst_29038 = cljs.core.async.muxch_STAR_.call(null,inst_29037);
var inst_29039 = cljs.core.async.close_BANG_.call(null,inst_29038);
var inst_29040 = (inst_29032 + (1));
var tmp29118 = inst_29029;
var tmp29119 = inst_29030;
var tmp29120 = inst_29031;
var inst_29029__$1 = tmp29118;
var inst_29030__$1 = tmp29119;
var inst_29031__$1 = tmp29120;
var inst_29032__$1 = inst_29040;
var state_29088__$1 = (function (){var statearr_29124 = state_29088;
(statearr_29124[(12)] = inst_29029__$1);

(statearr_29124[(13)] = inst_29030__$1);

(statearr_29124[(14)] = inst_29031__$1);

(statearr_29124[(17)] = inst_29039);

(statearr_29124[(15)] = inst_29032__$1);

return statearr_29124;
})();
var statearr_29125_29159 = state_29088__$1;
(statearr_29125_29159[(2)] = null);

(statearr_29125_29159[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (18))){
var inst_29058 = (state_29088[(2)]);
var state_29088__$1 = state_29088;
var statearr_29126_29160 = state_29088__$1;
(statearr_29126_29160[(2)] = inst_29058);

(statearr_29126_29160[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29089 === (8))){
var inst_29031 = (state_29088[(14)]);
var inst_29032 = (state_29088[(15)]);
var inst_29034 = (inst_29032 < inst_29031);
var inst_29035 = inst_29034;
var state_29088__$1 = state_29088;
if(cljs.core.truth_(inst_29035)){
var statearr_29127_29161 = state_29088__$1;
(statearr_29127_29161[(1)] = (10));

} else {
var statearr_29128_29162 = state_29088__$1;
(statearr_29128_29162[(1)] = (11));

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
});})(c__27900__auto___29134,mults,ensure_mult,p))
;
return ((function (switch__27809__auto__,c__27900__auto___29134,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27810__auto__ = null;
var cljs$core$async$state_machine__27810__auto____0 = (function (){
var statearr_29129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29129[(0)] = cljs$core$async$state_machine__27810__auto__);

(statearr_29129[(1)] = (1));

return statearr_29129;
});
var cljs$core$async$state_machine__27810__auto____1 = (function (state_29088){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_29088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e29130){if((e29130 instanceof Object)){
var ex__27813__auto__ = e29130;
var statearr_29131_29163 = state_29088;
(statearr_29131_29163[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29164 = state_29088;
state_29088 = G__29164;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
cljs$core$async$state_machine__27810__auto__ = function(state_29088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27810__auto____1.call(this,state_29088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27810__auto____0;
cljs$core$async$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27810__auto____1;
return cljs$core$async$state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto___29134,mults,ensure_mult,p))
})();
var state__27902__auto__ = (function (){var statearr_29132 = f__27901__auto__.call(null);
(statearr_29132[(6)] = c__27900__auto___29134);

return statearr_29132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___29134,mults,ensure_mult,p))
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
var G__29166 = arguments.length;
switch (G__29166) {
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
var G__29169 = arguments.length;
switch (G__29169) {
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
var G__29172 = arguments.length;
switch (G__29172) {
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
var c__27900__auto___29239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___29239,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto___29239,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29211){
var state_val_29212 = (state_29211[(1)]);
if((state_val_29212 === (7))){
var state_29211__$1 = state_29211;
var statearr_29213_29240 = state_29211__$1;
(statearr_29213_29240[(2)] = null);

(statearr_29213_29240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (1))){
var state_29211__$1 = state_29211;
var statearr_29214_29241 = state_29211__$1;
(statearr_29214_29241[(2)] = null);

(statearr_29214_29241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (4))){
var inst_29175 = (state_29211[(7)]);
var inst_29177 = (inst_29175 < cnt);
var state_29211__$1 = state_29211;
if(cljs.core.truth_(inst_29177)){
var statearr_29215_29242 = state_29211__$1;
(statearr_29215_29242[(1)] = (6));

} else {
var statearr_29216_29243 = state_29211__$1;
(statearr_29216_29243[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (15))){
var inst_29207 = (state_29211[(2)]);
var state_29211__$1 = state_29211;
var statearr_29217_29244 = state_29211__$1;
(statearr_29217_29244[(2)] = inst_29207);

(statearr_29217_29244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (13))){
var inst_29200 = cljs.core.async.close_BANG_.call(null,out);
var state_29211__$1 = state_29211;
var statearr_29218_29245 = state_29211__$1;
(statearr_29218_29245[(2)] = inst_29200);

(statearr_29218_29245[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (6))){
var state_29211__$1 = state_29211;
var statearr_29219_29246 = state_29211__$1;
(statearr_29219_29246[(2)] = null);

(statearr_29219_29246[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (3))){
var inst_29209 = (state_29211[(2)]);
var state_29211__$1 = state_29211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29211__$1,inst_29209);
} else {
if((state_val_29212 === (12))){
var inst_29197 = (state_29211[(8)]);
var inst_29197__$1 = (state_29211[(2)]);
var inst_29198 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29197__$1);
var state_29211__$1 = (function (){var statearr_29220 = state_29211;
(statearr_29220[(8)] = inst_29197__$1);

return statearr_29220;
})();
if(cljs.core.truth_(inst_29198)){
var statearr_29221_29247 = state_29211__$1;
(statearr_29221_29247[(1)] = (13));

} else {
var statearr_29222_29248 = state_29211__$1;
(statearr_29222_29248[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (2))){
var inst_29174 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29175 = (0);
var state_29211__$1 = (function (){var statearr_29223 = state_29211;
(statearr_29223[(7)] = inst_29175);

(statearr_29223[(9)] = inst_29174);

return statearr_29223;
})();
var statearr_29224_29249 = state_29211__$1;
(statearr_29224_29249[(2)] = null);

(statearr_29224_29249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (11))){
var inst_29175 = (state_29211[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29211,(10),Object,null,(9));
var inst_29184 = chs__$1.call(null,inst_29175);
var inst_29185 = done.call(null,inst_29175);
var inst_29186 = cljs.core.async.take_BANG_.call(null,inst_29184,inst_29185);
var state_29211__$1 = state_29211;
var statearr_29225_29250 = state_29211__$1;
(statearr_29225_29250[(2)] = inst_29186);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29211__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (9))){
var inst_29175 = (state_29211[(7)]);
var inst_29188 = (state_29211[(2)]);
var inst_29189 = (inst_29175 + (1));
var inst_29175__$1 = inst_29189;
var state_29211__$1 = (function (){var statearr_29226 = state_29211;
(statearr_29226[(10)] = inst_29188);

(statearr_29226[(7)] = inst_29175__$1);

return statearr_29226;
})();
var statearr_29227_29251 = state_29211__$1;
(statearr_29227_29251[(2)] = null);

(statearr_29227_29251[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (5))){
var inst_29195 = (state_29211[(2)]);
var state_29211__$1 = (function (){var statearr_29228 = state_29211;
(statearr_29228[(11)] = inst_29195);

return statearr_29228;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29211__$1,(12),dchan);
} else {
if((state_val_29212 === (14))){
var inst_29197 = (state_29211[(8)]);
var inst_29202 = cljs.core.apply.call(null,f,inst_29197);
var state_29211__$1 = state_29211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29211__$1,(16),out,inst_29202);
} else {
if((state_val_29212 === (16))){
var inst_29204 = (state_29211[(2)]);
var state_29211__$1 = (function (){var statearr_29229 = state_29211;
(statearr_29229[(12)] = inst_29204);

return statearr_29229;
})();
var statearr_29230_29252 = state_29211__$1;
(statearr_29230_29252[(2)] = null);

(statearr_29230_29252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (10))){
var inst_29179 = (state_29211[(2)]);
var inst_29180 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29211__$1 = (function (){var statearr_29231 = state_29211;
(statearr_29231[(13)] = inst_29179);

return statearr_29231;
})();
var statearr_29232_29253 = state_29211__$1;
(statearr_29232_29253[(2)] = inst_29180);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29211__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29212 === (8))){
var inst_29193 = (state_29211[(2)]);
var state_29211__$1 = state_29211;
var statearr_29233_29254 = state_29211__$1;
(statearr_29233_29254[(2)] = inst_29193);

(statearr_29233_29254[(1)] = (5));


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
});})(c__27900__auto___29239,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27809__auto__,c__27900__auto___29239,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27810__auto__ = null;
var cljs$core$async$state_machine__27810__auto____0 = (function (){
var statearr_29234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29234[(0)] = cljs$core$async$state_machine__27810__auto__);

(statearr_29234[(1)] = (1));

return statearr_29234;
});
var cljs$core$async$state_machine__27810__auto____1 = (function (state_29211){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_29211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e29235){if((e29235 instanceof Object)){
var ex__27813__auto__ = e29235;
var statearr_29236_29255 = state_29211;
(statearr_29236_29255[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29256 = state_29211;
state_29211 = G__29256;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
cljs$core$async$state_machine__27810__auto__ = function(state_29211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27810__auto____1.call(this,state_29211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27810__auto____0;
cljs$core$async$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27810__auto____1;
return cljs$core$async$state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto___29239,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27902__auto__ = (function (){var statearr_29237 = f__27901__auto__.call(null);
(statearr_29237[(6)] = c__27900__auto___29239);

return statearr_29237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___29239,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__29259 = arguments.length;
switch (G__29259) {
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
var c__27900__auto___29313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___29313,out){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto___29313,out){
return (function (state_29291){
var state_val_29292 = (state_29291[(1)]);
if((state_val_29292 === (7))){
var inst_29271 = (state_29291[(7)]);
var inst_29270 = (state_29291[(8)]);
var inst_29270__$1 = (state_29291[(2)]);
var inst_29271__$1 = cljs.core.nth.call(null,inst_29270__$1,(0),null);
var inst_29272 = cljs.core.nth.call(null,inst_29270__$1,(1),null);
var inst_29273 = (inst_29271__$1 == null);
var state_29291__$1 = (function (){var statearr_29293 = state_29291;
(statearr_29293[(7)] = inst_29271__$1);

(statearr_29293[(9)] = inst_29272);

(statearr_29293[(8)] = inst_29270__$1);

return statearr_29293;
})();
if(cljs.core.truth_(inst_29273)){
var statearr_29294_29314 = state_29291__$1;
(statearr_29294_29314[(1)] = (8));

} else {
var statearr_29295_29315 = state_29291__$1;
(statearr_29295_29315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29292 === (1))){
var inst_29260 = cljs.core.vec.call(null,chs);
var inst_29261 = inst_29260;
var state_29291__$1 = (function (){var statearr_29296 = state_29291;
(statearr_29296[(10)] = inst_29261);

return statearr_29296;
})();
var statearr_29297_29316 = state_29291__$1;
(statearr_29297_29316[(2)] = null);

(statearr_29297_29316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29292 === (4))){
var inst_29261 = (state_29291[(10)]);
var state_29291__$1 = state_29291;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29291__$1,(7),inst_29261);
} else {
if((state_val_29292 === (6))){
var inst_29287 = (state_29291[(2)]);
var state_29291__$1 = state_29291;
var statearr_29298_29317 = state_29291__$1;
(statearr_29298_29317[(2)] = inst_29287);

(statearr_29298_29317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29292 === (3))){
var inst_29289 = (state_29291[(2)]);
var state_29291__$1 = state_29291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29291__$1,inst_29289);
} else {
if((state_val_29292 === (2))){
var inst_29261 = (state_29291[(10)]);
var inst_29263 = cljs.core.count.call(null,inst_29261);
var inst_29264 = (inst_29263 > (0));
var state_29291__$1 = state_29291;
if(cljs.core.truth_(inst_29264)){
var statearr_29300_29318 = state_29291__$1;
(statearr_29300_29318[(1)] = (4));

} else {
var statearr_29301_29319 = state_29291__$1;
(statearr_29301_29319[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29292 === (11))){
var inst_29261 = (state_29291[(10)]);
var inst_29280 = (state_29291[(2)]);
var tmp29299 = inst_29261;
var inst_29261__$1 = tmp29299;
var state_29291__$1 = (function (){var statearr_29302 = state_29291;
(statearr_29302[(11)] = inst_29280);

(statearr_29302[(10)] = inst_29261__$1);

return statearr_29302;
})();
var statearr_29303_29320 = state_29291__$1;
(statearr_29303_29320[(2)] = null);

(statearr_29303_29320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29292 === (9))){
var inst_29271 = (state_29291[(7)]);
var state_29291__$1 = state_29291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29291__$1,(11),out,inst_29271);
} else {
if((state_val_29292 === (5))){
var inst_29285 = cljs.core.async.close_BANG_.call(null,out);
var state_29291__$1 = state_29291;
var statearr_29304_29321 = state_29291__$1;
(statearr_29304_29321[(2)] = inst_29285);

(statearr_29304_29321[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29292 === (10))){
var inst_29283 = (state_29291[(2)]);
var state_29291__$1 = state_29291;
var statearr_29305_29322 = state_29291__$1;
(statearr_29305_29322[(2)] = inst_29283);

(statearr_29305_29322[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29292 === (8))){
var inst_29271 = (state_29291[(7)]);
var inst_29272 = (state_29291[(9)]);
var inst_29270 = (state_29291[(8)]);
var inst_29261 = (state_29291[(10)]);
var inst_29275 = (function (){var cs = inst_29261;
var vec__29266 = inst_29270;
var v = inst_29271;
var c = inst_29272;
return ((function (cs,vec__29266,v,c,inst_29271,inst_29272,inst_29270,inst_29261,state_val_29292,c__27900__auto___29313,out){
return (function (p1__29257_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29257_SHARP_);
});
;})(cs,vec__29266,v,c,inst_29271,inst_29272,inst_29270,inst_29261,state_val_29292,c__27900__auto___29313,out))
})();
var inst_29276 = cljs.core.filterv.call(null,inst_29275,inst_29261);
var inst_29261__$1 = inst_29276;
var state_29291__$1 = (function (){var statearr_29306 = state_29291;
(statearr_29306[(10)] = inst_29261__$1);

return statearr_29306;
})();
var statearr_29307_29323 = state_29291__$1;
(statearr_29307_29323[(2)] = null);

(statearr_29307_29323[(1)] = (2));


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
});})(c__27900__auto___29313,out))
;
return ((function (switch__27809__auto__,c__27900__auto___29313,out){
return (function() {
var cljs$core$async$state_machine__27810__auto__ = null;
var cljs$core$async$state_machine__27810__auto____0 = (function (){
var statearr_29308 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29308[(0)] = cljs$core$async$state_machine__27810__auto__);

(statearr_29308[(1)] = (1));

return statearr_29308;
});
var cljs$core$async$state_machine__27810__auto____1 = (function (state_29291){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_29291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e29309){if((e29309 instanceof Object)){
var ex__27813__auto__ = e29309;
var statearr_29310_29324 = state_29291;
(statearr_29310_29324[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29325 = state_29291;
state_29291 = G__29325;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
cljs$core$async$state_machine__27810__auto__ = function(state_29291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27810__auto____1.call(this,state_29291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27810__auto____0;
cljs$core$async$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27810__auto____1;
return cljs$core$async$state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto___29313,out))
})();
var state__27902__auto__ = (function (){var statearr_29311 = f__27901__auto__.call(null);
(statearr_29311[(6)] = c__27900__auto___29313);

return statearr_29311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___29313,out))
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
var G__29327 = arguments.length;
switch (G__29327) {
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
var c__27900__auto___29372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___29372,out){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto___29372,out){
return (function (state_29351){
var state_val_29352 = (state_29351[(1)]);
if((state_val_29352 === (7))){
var inst_29333 = (state_29351[(7)]);
var inst_29333__$1 = (state_29351[(2)]);
var inst_29334 = (inst_29333__$1 == null);
var inst_29335 = cljs.core.not.call(null,inst_29334);
var state_29351__$1 = (function (){var statearr_29353 = state_29351;
(statearr_29353[(7)] = inst_29333__$1);

return statearr_29353;
})();
if(inst_29335){
var statearr_29354_29373 = state_29351__$1;
(statearr_29354_29373[(1)] = (8));

} else {
var statearr_29355_29374 = state_29351__$1;
(statearr_29355_29374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29352 === (1))){
var inst_29328 = (0);
var state_29351__$1 = (function (){var statearr_29356 = state_29351;
(statearr_29356[(8)] = inst_29328);

return statearr_29356;
})();
var statearr_29357_29375 = state_29351__$1;
(statearr_29357_29375[(2)] = null);

(statearr_29357_29375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29352 === (4))){
var state_29351__$1 = state_29351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29351__$1,(7),ch);
} else {
if((state_val_29352 === (6))){
var inst_29346 = (state_29351[(2)]);
var state_29351__$1 = state_29351;
var statearr_29358_29376 = state_29351__$1;
(statearr_29358_29376[(2)] = inst_29346);

(statearr_29358_29376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29352 === (3))){
var inst_29348 = (state_29351[(2)]);
var inst_29349 = cljs.core.async.close_BANG_.call(null,out);
var state_29351__$1 = (function (){var statearr_29359 = state_29351;
(statearr_29359[(9)] = inst_29348);

return statearr_29359;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29351__$1,inst_29349);
} else {
if((state_val_29352 === (2))){
var inst_29328 = (state_29351[(8)]);
var inst_29330 = (inst_29328 < n);
var state_29351__$1 = state_29351;
if(cljs.core.truth_(inst_29330)){
var statearr_29360_29377 = state_29351__$1;
(statearr_29360_29377[(1)] = (4));

} else {
var statearr_29361_29378 = state_29351__$1;
(statearr_29361_29378[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29352 === (11))){
var inst_29328 = (state_29351[(8)]);
var inst_29338 = (state_29351[(2)]);
var inst_29339 = (inst_29328 + (1));
var inst_29328__$1 = inst_29339;
var state_29351__$1 = (function (){var statearr_29362 = state_29351;
(statearr_29362[(8)] = inst_29328__$1);

(statearr_29362[(10)] = inst_29338);

return statearr_29362;
})();
var statearr_29363_29379 = state_29351__$1;
(statearr_29363_29379[(2)] = null);

(statearr_29363_29379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29352 === (9))){
var state_29351__$1 = state_29351;
var statearr_29364_29380 = state_29351__$1;
(statearr_29364_29380[(2)] = null);

(statearr_29364_29380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29352 === (5))){
var state_29351__$1 = state_29351;
var statearr_29365_29381 = state_29351__$1;
(statearr_29365_29381[(2)] = null);

(statearr_29365_29381[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29352 === (10))){
var inst_29343 = (state_29351[(2)]);
var state_29351__$1 = state_29351;
var statearr_29366_29382 = state_29351__$1;
(statearr_29366_29382[(2)] = inst_29343);

(statearr_29366_29382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29352 === (8))){
var inst_29333 = (state_29351[(7)]);
var state_29351__$1 = state_29351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29351__$1,(11),out,inst_29333);
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
});})(c__27900__auto___29372,out))
;
return ((function (switch__27809__auto__,c__27900__auto___29372,out){
return (function() {
var cljs$core$async$state_machine__27810__auto__ = null;
var cljs$core$async$state_machine__27810__auto____0 = (function (){
var statearr_29367 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29367[(0)] = cljs$core$async$state_machine__27810__auto__);

(statearr_29367[(1)] = (1));

return statearr_29367;
});
var cljs$core$async$state_machine__27810__auto____1 = (function (state_29351){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_29351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e29368){if((e29368 instanceof Object)){
var ex__27813__auto__ = e29368;
var statearr_29369_29383 = state_29351;
(statearr_29369_29383[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29384 = state_29351;
state_29351 = G__29384;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
cljs$core$async$state_machine__27810__auto__ = function(state_29351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27810__auto____1.call(this,state_29351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27810__auto____0;
cljs$core$async$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27810__auto____1;
return cljs$core$async$state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto___29372,out))
})();
var state__27902__auto__ = (function (){var statearr_29370 = f__27901__auto__.call(null);
(statearr_29370[(6)] = c__27900__auto___29372);

return statearr_29370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___29372,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29386 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29386 = (function (f,ch,meta29387){
this.f = f;
this.ch = ch;
this.meta29387 = meta29387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29388,meta29387__$1){
var self__ = this;
var _29388__$1 = this;
return (new cljs.core.async.t_cljs$core$async29386(self__.f,self__.ch,meta29387__$1));
});

cljs.core.async.t_cljs$core$async29386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29388){
var self__ = this;
var _29388__$1 = this;
return self__.meta29387;
});

cljs.core.async.t_cljs$core$async29386.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29386.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29386.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29386.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29386.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29389 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29389 = (function (f,ch,meta29387,_,fn1,meta29390){
this.f = f;
this.ch = ch;
this.meta29387 = meta29387;
this._ = _;
this.fn1 = fn1;
this.meta29390 = meta29390;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29391,meta29390__$1){
var self__ = this;
var _29391__$1 = this;
return (new cljs.core.async.t_cljs$core$async29389(self__.f,self__.ch,self__.meta29387,self__._,self__.fn1,meta29390__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29389.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29391){
var self__ = this;
var _29391__$1 = this;
return self__.meta29390;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29389.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29389.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29389.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29389.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29385_SHARP_){
return f1.call(null,(((p1__29385_SHARP_ == null))?null:self__.f.call(null,p1__29385_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29389.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29387","meta29387",161787948,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29386","cljs.core.async/t_cljs$core$async29386",-1390135880,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29390","meta29390",-50880589,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29389.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29389.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29389";

cljs.core.async.t_cljs$core$async29389.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29389");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29389.
 */
cljs.core.async.__GT_t_cljs$core$async29389 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29389(f__$1,ch__$1,meta29387__$1,___$2,fn1__$1,meta29390){
return (new cljs.core.async.t_cljs$core$async29389(f__$1,ch__$1,meta29387__$1,___$2,fn1__$1,meta29390));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29389(self__.f,self__.ch,self__.meta29387,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async29386.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29386.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29387","meta29387",161787948,null)], null);
});

cljs.core.async.t_cljs$core$async29386.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29386";

cljs.core.async.t_cljs$core$async29386.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29386");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29386.
 */
cljs.core.async.__GT_t_cljs$core$async29386 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29386(f__$1,ch__$1,meta29387){
return (new cljs.core.async.t_cljs$core$async29386(f__$1,ch__$1,meta29387));
});

}

return (new cljs.core.async.t_cljs$core$async29386(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29392 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29392 = (function (f,ch,meta29393){
this.f = f;
this.ch = ch;
this.meta29393 = meta29393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29394,meta29393__$1){
var self__ = this;
var _29394__$1 = this;
return (new cljs.core.async.t_cljs$core$async29392(self__.f,self__.ch,meta29393__$1));
});

cljs.core.async.t_cljs$core$async29392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29394){
var self__ = this;
var _29394__$1 = this;
return self__.meta29393;
});

cljs.core.async.t_cljs$core$async29392.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29392.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29392.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29392.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29392.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29392.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29392.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29393","meta29393",-1982205504,null)], null);
});

cljs.core.async.t_cljs$core$async29392.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29392";

cljs.core.async.t_cljs$core$async29392.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29392");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29392.
 */
cljs.core.async.__GT_t_cljs$core$async29392 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29392(f__$1,ch__$1,meta29393){
return (new cljs.core.async.t_cljs$core$async29392(f__$1,ch__$1,meta29393));
});

}

return (new cljs.core.async.t_cljs$core$async29392(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29395 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29395 = (function (p,ch,meta29396){
this.p = p;
this.ch = ch;
this.meta29396 = meta29396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29397,meta29396__$1){
var self__ = this;
var _29397__$1 = this;
return (new cljs.core.async.t_cljs$core$async29395(self__.p,self__.ch,meta29396__$1));
});

cljs.core.async.t_cljs$core$async29395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29397){
var self__ = this;
var _29397__$1 = this;
return self__.meta29396;
});

cljs.core.async.t_cljs$core$async29395.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29395.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29395.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29395.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29395.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29395.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29395.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29396","meta29396",-1282816325,null)], null);
});

cljs.core.async.t_cljs$core$async29395.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29395.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29395";

cljs.core.async.t_cljs$core$async29395.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29395");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29395.
 */
cljs.core.async.__GT_t_cljs$core$async29395 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29395(p__$1,ch__$1,meta29396){
return (new cljs.core.async.t_cljs$core$async29395(p__$1,ch__$1,meta29396));
});

}

return (new cljs.core.async.t_cljs$core$async29395(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29399 = arguments.length;
switch (G__29399) {
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
var c__27900__auto___29439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___29439,out){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto___29439,out){
return (function (state_29420){
var state_val_29421 = (state_29420[(1)]);
if((state_val_29421 === (7))){
var inst_29416 = (state_29420[(2)]);
var state_29420__$1 = state_29420;
var statearr_29422_29440 = state_29420__$1;
(statearr_29422_29440[(2)] = inst_29416);

(statearr_29422_29440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (1))){
var state_29420__$1 = state_29420;
var statearr_29423_29441 = state_29420__$1;
(statearr_29423_29441[(2)] = null);

(statearr_29423_29441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (4))){
var inst_29402 = (state_29420[(7)]);
var inst_29402__$1 = (state_29420[(2)]);
var inst_29403 = (inst_29402__$1 == null);
var state_29420__$1 = (function (){var statearr_29424 = state_29420;
(statearr_29424[(7)] = inst_29402__$1);

return statearr_29424;
})();
if(cljs.core.truth_(inst_29403)){
var statearr_29425_29442 = state_29420__$1;
(statearr_29425_29442[(1)] = (5));

} else {
var statearr_29426_29443 = state_29420__$1;
(statearr_29426_29443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (6))){
var inst_29402 = (state_29420[(7)]);
var inst_29407 = p.call(null,inst_29402);
var state_29420__$1 = state_29420;
if(cljs.core.truth_(inst_29407)){
var statearr_29427_29444 = state_29420__$1;
(statearr_29427_29444[(1)] = (8));

} else {
var statearr_29428_29445 = state_29420__$1;
(statearr_29428_29445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (3))){
var inst_29418 = (state_29420[(2)]);
var state_29420__$1 = state_29420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29420__$1,inst_29418);
} else {
if((state_val_29421 === (2))){
var state_29420__$1 = state_29420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29420__$1,(4),ch);
} else {
if((state_val_29421 === (11))){
var inst_29410 = (state_29420[(2)]);
var state_29420__$1 = state_29420;
var statearr_29429_29446 = state_29420__$1;
(statearr_29429_29446[(2)] = inst_29410);

(statearr_29429_29446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (9))){
var state_29420__$1 = state_29420;
var statearr_29430_29447 = state_29420__$1;
(statearr_29430_29447[(2)] = null);

(statearr_29430_29447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (5))){
var inst_29405 = cljs.core.async.close_BANG_.call(null,out);
var state_29420__$1 = state_29420;
var statearr_29431_29448 = state_29420__$1;
(statearr_29431_29448[(2)] = inst_29405);

(statearr_29431_29448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (10))){
var inst_29413 = (state_29420[(2)]);
var state_29420__$1 = (function (){var statearr_29432 = state_29420;
(statearr_29432[(8)] = inst_29413);

return statearr_29432;
})();
var statearr_29433_29449 = state_29420__$1;
(statearr_29433_29449[(2)] = null);

(statearr_29433_29449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29421 === (8))){
var inst_29402 = (state_29420[(7)]);
var state_29420__$1 = state_29420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29420__$1,(11),out,inst_29402);
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
});})(c__27900__auto___29439,out))
;
return ((function (switch__27809__auto__,c__27900__auto___29439,out){
return (function() {
var cljs$core$async$state_machine__27810__auto__ = null;
var cljs$core$async$state_machine__27810__auto____0 = (function (){
var statearr_29434 = [null,null,null,null,null,null,null,null,null];
(statearr_29434[(0)] = cljs$core$async$state_machine__27810__auto__);

(statearr_29434[(1)] = (1));

return statearr_29434;
});
var cljs$core$async$state_machine__27810__auto____1 = (function (state_29420){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_29420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e29435){if((e29435 instanceof Object)){
var ex__27813__auto__ = e29435;
var statearr_29436_29450 = state_29420;
(statearr_29436_29450[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29451 = state_29420;
state_29420 = G__29451;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
cljs$core$async$state_machine__27810__auto__ = function(state_29420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27810__auto____1.call(this,state_29420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27810__auto____0;
cljs$core$async$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27810__auto____1;
return cljs$core$async$state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto___29439,out))
})();
var state__27902__auto__ = (function (){var statearr_29437 = f__27901__auto__.call(null);
(statearr_29437[(6)] = c__27900__auto___29439);

return statearr_29437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___29439,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29453 = arguments.length;
switch (G__29453) {
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
var c__27900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto__){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto__){
return (function (state_29516){
var state_val_29517 = (state_29516[(1)]);
if((state_val_29517 === (7))){
var inst_29512 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
var statearr_29518_29556 = state_29516__$1;
(statearr_29518_29556[(2)] = inst_29512);

(statearr_29518_29556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (20))){
var inst_29482 = (state_29516[(7)]);
var inst_29493 = (state_29516[(2)]);
var inst_29494 = cljs.core.next.call(null,inst_29482);
var inst_29468 = inst_29494;
var inst_29469 = null;
var inst_29470 = (0);
var inst_29471 = (0);
var state_29516__$1 = (function (){var statearr_29519 = state_29516;
(statearr_29519[(8)] = inst_29468);

(statearr_29519[(9)] = inst_29493);

(statearr_29519[(10)] = inst_29469);

(statearr_29519[(11)] = inst_29470);

(statearr_29519[(12)] = inst_29471);

return statearr_29519;
})();
var statearr_29520_29557 = state_29516__$1;
(statearr_29520_29557[(2)] = null);

(statearr_29520_29557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (1))){
var state_29516__$1 = state_29516;
var statearr_29521_29558 = state_29516__$1;
(statearr_29521_29558[(2)] = null);

(statearr_29521_29558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (4))){
var inst_29457 = (state_29516[(13)]);
var inst_29457__$1 = (state_29516[(2)]);
var inst_29458 = (inst_29457__$1 == null);
var state_29516__$1 = (function (){var statearr_29522 = state_29516;
(statearr_29522[(13)] = inst_29457__$1);

return statearr_29522;
})();
if(cljs.core.truth_(inst_29458)){
var statearr_29523_29559 = state_29516__$1;
(statearr_29523_29559[(1)] = (5));

} else {
var statearr_29524_29560 = state_29516__$1;
(statearr_29524_29560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (15))){
var state_29516__$1 = state_29516;
var statearr_29528_29561 = state_29516__$1;
(statearr_29528_29561[(2)] = null);

(statearr_29528_29561[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (21))){
var state_29516__$1 = state_29516;
var statearr_29529_29562 = state_29516__$1;
(statearr_29529_29562[(2)] = null);

(statearr_29529_29562[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (13))){
var inst_29468 = (state_29516[(8)]);
var inst_29469 = (state_29516[(10)]);
var inst_29470 = (state_29516[(11)]);
var inst_29471 = (state_29516[(12)]);
var inst_29478 = (state_29516[(2)]);
var inst_29479 = (inst_29471 + (1));
var tmp29525 = inst_29468;
var tmp29526 = inst_29469;
var tmp29527 = inst_29470;
var inst_29468__$1 = tmp29525;
var inst_29469__$1 = tmp29526;
var inst_29470__$1 = tmp29527;
var inst_29471__$1 = inst_29479;
var state_29516__$1 = (function (){var statearr_29530 = state_29516;
(statearr_29530[(8)] = inst_29468__$1);

(statearr_29530[(10)] = inst_29469__$1);

(statearr_29530[(11)] = inst_29470__$1);

(statearr_29530[(14)] = inst_29478);

(statearr_29530[(12)] = inst_29471__$1);

return statearr_29530;
})();
var statearr_29531_29563 = state_29516__$1;
(statearr_29531_29563[(2)] = null);

(statearr_29531_29563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (22))){
var state_29516__$1 = state_29516;
var statearr_29532_29564 = state_29516__$1;
(statearr_29532_29564[(2)] = null);

(statearr_29532_29564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (6))){
var inst_29457 = (state_29516[(13)]);
var inst_29466 = f.call(null,inst_29457);
var inst_29467 = cljs.core.seq.call(null,inst_29466);
var inst_29468 = inst_29467;
var inst_29469 = null;
var inst_29470 = (0);
var inst_29471 = (0);
var state_29516__$1 = (function (){var statearr_29533 = state_29516;
(statearr_29533[(8)] = inst_29468);

(statearr_29533[(10)] = inst_29469);

(statearr_29533[(11)] = inst_29470);

(statearr_29533[(12)] = inst_29471);

return statearr_29533;
})();
var statearr_29534_29565 = state_29516__$1;
(statearr_29534_29565[(2)] = null);

(statearr_29534_29565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (17))){
var inst_29482 = (state_29516[(7)]);
var inst_29486 = cljs.core.chunk_first.call(null,inst_29482);
var inst_29487 = cljs.core.chunk_rest.call(null,inst_29482);
var inst_29488 = cljs.core.count.call(null,inst_29486);
var inst_29468 = inst_29487;
var inst_29469 = inst_29486;
var inst_29470 = inst_29488;
var inst_29471 = (0);
var state_29516__$1 = (function (){var statearr_29535 = state_29516;
(statearr_29535[(8)] = inst_29468);

(statearr_29535[(10)] = inst_29469);

(statearr_29535[(11)] = inst_29470);

(statearr_29535[(12)] = inst_29471);

return statearr_29535;
})();
var statearr_29536_29566 = state_29516__$1;
(statearr_29536_29566[(2)] = null);

(statearr_29536_29566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (3))){
var inst_29514 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29516__$1,inst_29514);
} else {
if((state_val_29517 === (12))){
var inst_29502 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
var statearr_29537_29567 = state_29516__$1;
(statearr_29537_29567[(2)] = inst_29502);

(statearr_29537_29567[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (2))){
var state_29516__$1 = state_29516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29516__$1,(4),in$);
} else {
if((state_val_29517 === (23))){
var inst_29510 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
var statearr_29538_29568 = state_29516__$1;
(statearr_29538_29568[(2)] = inst_29510);

(statearr_29538_29568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (19))){
var inst_29497 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
var statearr_29539_29569 = state_29516__$1;
(statearr_29539_29569[(2)] = inst_29497);

(statearr_29539_29569[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (11))){
var inst_29468 = (state_29516[(8)]);
var inst_29482 = (state_29516[(7)]);
var inst_29482__$1 = cljs.core.seq.call(null,inst_29468);
var state_29516__$1 = (function (){var statearr_29540 = state_29516;
(statearr_29540[(7)] = inst_29482__$1);

return statearr_29540;
})();
if(inst_29482__$1){
var statearr_29541_29570 = state_29516__$1;
(statearr_29541_29570[(1)] = (14));

} else {
var statearr_29542_29571 = state_29516__$1;
(statearr_29542_29571[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (9))){
var inst_29504 = (state_29516[(2)]);
var inst_29505 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29516__$1 = (function (){var statearr_29543 = state_29516;
(statearr_29543[(15)] = inst_29504);

return statearr_29543;
})();
if(cljs.core.truth_(inst_29505)){
var statearr_29544_29572 = state_29516__$1;
(statearr_29544_29572[(1)] = (21));

} else {
var statearr_29545_29573 = state_29516__$1;
(statearr_29545_29573[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (5))){
var inst_29460 = cljs.core.async.close_BANG_.call(null,out);
var state_29516__$1 = state_29516;
var statearr_29546_29574 = state_29516__$1;
(statearr_29546_29574[(2)] = inst_29460);

(statearr_29546_29574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (14))){
var inst_29482 = (state_29516[(7)]);
var inst_29484 = cljs.core.chunked_seq_QMARK_.call(null,inst_29482);
var state_29516__$1 = state_29516;
if(inst_29484){
var statearr_29547_29575 = state_29516__$1;
(statearr_29547_29575[(1)] = (17));

} else {
var statearr_29548_29576 = state_29516__$1;
(statearr_29548_29576[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (16))){
var inst_29500 = (state_29516[(2)]);
var state_29516__$1 = state_29516;
var statearr_29549_29577 = state_29516__$1;
(statearr_29549_29577[(2)] = inst_29500);

(statearr_29549_29577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29517 === (10))){
var inst_29469 = (state_29516[(10)]);
var inst_29471 = (state_29516[(12)]);
var inst_29476 = cljs.core._nth.call(null,inst_29469,inst_29471);
var state_29516__$1 = state_29516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29516__$1,(13),out,inst_29476);
} else {
if((state_val_29517 === (18))){
var inst_29482 = (state_29516[(7)]);
var inst_29491 = cljs.core.first.call(null,inst_29482);
var state_29516__$1 = state_29516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29516__$1,(20),out,inst_29491);
} else {
if((state_val_29517 === (8))){
var inst_29470 = (state_29516[(11)]);
var inst_29471 = (state_29516[(12)]);
var inst_29473 = (inst_29471 < inst_29470);
var inst_29474 = inst_29473;
var state_29516__$1 = state_29516;
if(cljs.core.truth_(inst_29474)){
var statearr_29550_29578 = state_29516__$1;
(statearr_29550_29578[(1)] = (10));

} else {
var statearr_29551_29579 = state_29516__$1;
(statearr_29551_29579[(1)] = (11));

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
});})(c__27900__auto__))
;
return ((function (switch__27809__auto__,c__27900__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27810__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27810__auto____0 = (function (){
var statearr_29552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29552[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27810__auto__);

(statearr_29552[(1)] = (1));

return statearr_29552;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27810__auto____1 = (function (state_29516){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_29516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e29553){if((e29553 instanceof Object)){
var ex__27813__auto__ = e29553;
var statearr_29554_29580 = state_29516;
(statearr_29554_29580[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29581 = state_29516;
state_29516 = G__29581;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27810__auto__ = function(state_29516){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27810__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27810__auto____1.call(this,state_29516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27810__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27810__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto__))
})();
var state__27902__auto__ = (function (){var statearr_29555 = f__27901__auto__.call(null);
(statearr_29555[(6)] = c__27900__auto__);

return statearr_29555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto__))
);

return c__27900__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29583 = arguments.length;
switch (G__29583) {
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
var G__29586 = arguments.length;
switch (G__29586) {
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
var G__29589 = arguments.length;
switch (G__29589) {
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
var c__27900__auto___29636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___29636,out){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto___29636,out){
return (function (state_29613){
var state_val_29614 = (state_29613[(1)]);
if((state_val_29614 === (7))){
var inst_29608 = (state_29613[(2)]);
var state_29613__$1 = state_29613;
var statearr_29615_29637 = state_29613__$1;
(statearr_29615_29637[(2)] = inst_29608);

(statearr_29615_29637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (1))){
var inst_29590 = null;
var state_29613__$1 = (function (){var statearr_29616 = state_29613;
(statearr_29616[(7)] = inst_29590);

return statearr_29616;
})();
var statearr_29617_29638 = state_29613__$1;
(statearr_29617_29638[(2)] = null);

(statearr_29617_29638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (4))){
var inst_29593 = (state_29613[(8)]);
var inst_29593__$1 = (state_29613[(2)]);
var inst_29594 = (inst_29593__$1 == null);
var inst_29595 = cljs.core.not.call(null,inst_29594);
var state_29613__$1 = (function (){var statearr_29618 = state_29613;
(statearr_29618[(8)] = inst_29593__$1);

return statearr_29618;
})();
if(inst_29595){
var statearr_29619_29639 = state_29613__$1;
(statearr_29619_29639[(1)] = (5));

} else {
var statearr_29620_29640 = state_29613__$1;
(statearr_29620_29640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (6))){
var state_29613__$1 = state_29613;
var statearr_29621_29641 = state_29613__$1;
(statearr_29621_29641[(2)] = null);

(statearr_29621_29641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (3))){
var inst_29610 = (state_29613[(2)]);
var inst_29611 = cljs.core.async.close_BANG_.call(null,out);
var state_29613__$1 = (function (){var statearr_29622 = state_29613;
(statearr_29622[(9)] = inst_29610);

return statearr_29622;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29613__$1,inst_29611);
} else {
if((state_val_29614 === (2))){
var state_29613__$1 = state_29613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29613__$1,(4),ch);
} else {
if((state_val_29614 === (11))){
var inst_29593 = (state_29613[(8)]);
var inst_29602 = (state_29613[(2)]);
var inst_29590 = inst_29593;
var state_29613__$1 = (function (){var statearr_29623 = state_29613;
(statearr_29623[(7)] = inst_29590);

(statearr_29623[(10)] = inst_29602);

return statearr_29623;
})();
var statearr_29624_29642 = state_29613__$1;
(statearr_29624_29642[(2)] = null);

(statearr_29624_29642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (9))){
var inst_29593 = (state_29613[(8)]);
var state_29613__$1 = state_29613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29613__$1,(11),out,inst_29593);
} else {
if((state_val_29614 === (5))){
var inst_29590 = (state_29613[(7)]);
var inst_29593 = (state_29613[(8)]);
var inst_29597 = cljs.core._EQ_.call(null,inst_29593,inst_29590);
var state_29613__$1 = state_29613;
if(inst_29597){
var statearr_29626_29643 = state_29613__$1;
(statearr_29626_29643[(1)] = (8));

} else {
var statearr_29627_29644 = state_29613__$1;
(statearr_29627_29644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (10))){
var inst_29605 = (state_29613[(2)]);
var state_29613__$1 = state_29613;
var statearr_29628_29645 = state_29613__$1;
(statearr_29628_29645[(2)] = inst_29605);

(statearr_29628_29645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (8))){
var inst_29590 = (state_29613[(7)]);
var tmp29625 = inst_29590;
var inst_29590__$1 = tmp29625;
var state_29613__$1 = (function (){var statearr_29629 = state_29613;
(statearr_29629[(7)] = inst_29590__$1);

return statearr_29629;
})();
var statearr_29630_29646 = state_29613__$1;
(statearr_29630_29646[(2)] = null);

(statearr_29630_29646[(1)] = (2));


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
});})(c__27900__auto___29636,out))
;
return ((function (switch__27809__auto__,c__27900__auto___29636,out){
return (function() {
var cljs$core$async$state_machine__27810__auto__ = null;
var cljs$core$async$state_machine__27810__auto____0 = (function (){
var statearr_29631 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29631[(0)] = cljs$core$async$state_machine__27810__auto__);

(statearr_29631[(1)] = (1));

return statearr_29631;
});
var cljs$core$async$state_machine__27810__auto____1 = (function (state_29613){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_29613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e29632){if((e29632 instanceof Object)){
var ex__27813__auto__ = e29632;
var statearr_29633_29647 = state_29613;
(statearr_29633_29647[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29648 = state_29613;
state_29613 = G__29648;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
cljs$core$async$state_machine__27810__auto__ = function(state_29613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27810__auto____1.call(this,state_29613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27810__auto____0;
cljs$core$async$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27810__auto____1;
return cljs$core$async$state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto___29636,out))
})();
var state__27902__auto__ = (function (){var statearr_29634 = f__27901__auto__.call(null);
(statearr_29634[(6)] = c__27900__auto___29636);

return statearr_29634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___29636,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29650 = arguments.length;
switch (G__29650) {
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
var c__27900__auto___29716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___29716,out){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto___29716,out){
return (function (state_29688){
var state_val_29689 = (state_29688[(1)]);
if((state_val_29689 === (7))){
var inst_29684 = (state_29688[(2)]);
var state_29688__$1 = state_29688;
var statearr_29690_29717 = state_29688__$1;
(statearr_29690_29717[(2)] = inst_29684);

(statearr_29690_29717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29689 === (1))){
var inst_29651 = (new Array(n));
var inst_29652 = inst_29651;
var inst_29653 = (0);
var state_29688__$1 = (function (){var statearr_29691 = state_29688;
(statearr_29691[(7)] = inst_29653);

(statearr_29691[(8)] = inst_29652);

return statearr_29691;
})();
var statearr_29692_29718 = state_29688__$1;
(statearr_29692_29718[(2)] = null);

(statearr_29692_29718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29689 === (4))){
var inst_29656 = (state_29688[(9)]);
var inst_29656__$1 = (state_29688[(2)]);
var inst_29657 = (inst_29656__$1 == null);
var inst_29658 = cljs.core.not.call(null,inst_29657);
var state_29688__$1 = (function (){var statearr_29693 = state_29688;
(statearr_29693[(9)] = inst_29656__$1);

return statearr_29693;
})();
if(inst_29658){
var statearr_29694_29719 = state_29688__$1;
(statearr_29694_29719[(1)] = (5));

} else {
var statearr_29695_29720 = state_29688__$1;
(statearr_29695_29720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29689 === (15))){
var inst_29678 = (state_29688[(2)]);
var state_29688__$1 = state_29688;
var statearr_29696_29721 = state_29688__$1;
(statearr_29696_29721[(2)] = inst_29678);

(statearr_29696_29721[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29689 === (13))){
var state_29688__$1 = state_29688;
var statearr_29697_29722 = state_29688__$1;
(statearr_29697_29722[(2)] = null);

(statearr_29697_29722[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29689 === (6))){
var inst_29653 = (state_29688[(7)]);
var inst_29674 = (inst_29653 > (0));
var state_29688__$1 = state_29688;
if(cljs.core.truth_(inst_29674)){
var statearr_29698_29723 = state_29688__$1;
(statearr_29698_29723[(1)] = (12));

} else {
var statearr_29699_29724 = state_29688__$1;
(statearr_29699_29724[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29689 === (3))){
var inst_29686 = (state_29688[(2)]);
var state_29688__$1 = state_29688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29688__$1,inst_29686);
} else {
if((state_val_29689 === (12))){
var inst_29652 = (state_29688[(8)]);
var inst_29676 = cljs.core.vec.call(null,inst_29652);
var state_29688__$1 = state_29688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29688__$1,(15),out,inst_29676);
} else {
if((state_val_29689 === (2))){
var state_29688__$1 = state_29688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29688__$1,(4),ch);
} else {
if((state_val_29689 === (11))){
var inst_29668 = (state_29688[(2)]);
var inst_29669 = (new Array(n));
var inst_29652 = inst_29669;
var inst_29653 = (0);
var state_29688__$1 = (function (){var statearr_29700 = state_29688;
(statearr_29700[(7)] = inst_29653);

(statearr_29700[(8)] = inst_29652);

(statearr_29700[(10)] = inst_29668);

return statearr_29700;
})();
var statearr_29701_29725 = state_29688__$1;
(statearr_29701_29725[(2)] = null);

(statearr_29701_29725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29689 === (9))){
var inst_29652 = (state_29688[(8)]);
var inst_29666 = cljs.core.vec.call(null,inst_29652);
var state_29688__$1 = state_29688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29688__$1,(11),out,inst_29666);
} else {
if((state_val_29689 === (5))){
var inst_29653 = (state_29688[(7)]);
var inst_29661 = (state_29688[(11)]);
var inst_29656 = (state_29688[(9)]);
var inst_29652 = (state_29688[(8)]);
var inst_29660 = (inst_29652[inst_29653] = inst_29656);
var inst_29661__$1 = (inst_29653 + (1));
var inst_29662 = (inst_29661__$1 < n);
var state_29688__$1 = (function (){var statearr_29702 = state_29688;
(statearr_29702[(12)] = inst_29660);

(statearr_29702[(11)] = inst_29661__$1);

return statearr_29702;
})();
if(cljs.core.truth_(inst_29662)){
var statearr_29703_29726 = state_29688__$1;
(statearr_29703_29726[(1)] = (8));

} else {
var statearr_29704_29727 = state_29688__$1;
(statearr_29704_29727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29689 === (14))){
var inst_29681 = (state_29688[(2)]);
var inst_29682 = cljs.core.async.close_BANG_.call(null,out);
var state_29688__$1 = (function (){var statearr_29706 = state_29688;
(statearr_29706[(13)] = inst_29681);

return statearr_29706;
})();
var statearr_29707_29728 = state_29688__$1;
(statearr_29707_29728[(2)] = inst_29682);

(statearr_29707_29728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29689 === (10))){
var inst_29672 = (state_29688[(2)]);
var state_29688__$1 = state_29688;
var statearr_29708_29729 = state_29688__$1;
(statearr_29708_29729[(2)] = inst_29672);

(statearr_29708_29729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29689 === (8))){
var inst_29661 = (state_29688[(11)]);
var inst_29652 = (state_29688[(8)]);
var tmp29705 = inst_29652;
var inst_29652__$1 = tmp29705;
var inst_29653 = inst_29661;
var state_29688__$1 = (function (){var statearr_29709 = state_29688;
(statearr_29709[(7)] = inst_29653);

(statearr_29709[(8)] = inst_29652__$1);

return statearr_29709;
})();
var statearr_29710_29730 = state_29688__$1;
(statearr_29710_29730[(2)] = null);

(statearr_29710_29730[(1)] = (2));


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
});})(c__27900__auto___29716,out))
;
return ((function (switch__27809__auto__,c__27900__auto___29716,out){
return (function() {
var cljs$core$async$state_machine__27810__auto__ = null;
var cljs$core$async$state_machine__27810__auto____0 = (function (){
var statearr_29711 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29711[(0)] = cljs$core$async$state_machine__27810__auto__);

(statearr_29711[(1)] = (1));

return statearr_29711;
});
var cljs$core$async$state_machine__27810__auto____1 = (function (state_29688){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_29688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e29712){if((e29712 instanceof Object)){
var ex__27813__auto__ = e29712;
var statearr_29713_29731 = state_29688;
(statearr_29713_29731[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29732 = state_29688;
state_29688 = G__29732;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
cljs$core$async$state_machine__27810__auto__ = function(state_29688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27810__auto____1.call(this,state_29688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27810__auto____0;
cljs$core$async$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27810__auto____1;
return cljs$core$async$state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto___29716,out))
})();
var state__27902__auto__ = (function (){var statearr_29714 = f__27901__auto__.call(null);
(statearr_29714[(6)] = c__27900__auto___29716);

return statearr_29714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___29716,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29734 = arguments.length;
switch (G__29734) {
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
var c__27900__auto___29804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___29804,out){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto___29804,out){
return (function (state_29776){
var state_val_29777 = (state_29776[(1)]);
if((state_val_29777 === (7))){
var inst_29772 = (state_29776[(2)]);
var state_29776__$1 = state_29776;
var statearr_29778_29805 = state_29776__$1;
(statearr_29778_29805[(2)] = inst_29772);

(statearr_29778_29805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (1))){
var inst_29735 = [];
var inst_29736 = inst_29735;
var inst_29737 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29776__$1 = (function (){var statearr_29779 = state_29776;
(statearr_29779[(7)] = inst_29736);

(statearr_29779[(8)] = inst_29737);

return statearr_29779;
})();
var statearr_29780_29806 = state_29776__$1;
(statearr_29780_29806[(2)] = null);

(statearr_29780_29806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (4))){
var inst_29740 = (state_29776[(9)]);
var inst_29740__$1 = (state_29776[(2)]);
var inst_29741 = (inst_29740__$1 == null);
var inst_29742 = cljs.core.not.call(null,inst_29741);
var state_29776__$1 = (function (){var statearr_29781 = state_29776;
(statearr_29781[(9)] = inst_29740__$1);

return statearr_29781;
})();
if(inst_29742){
var statearr_29782_29807 = state_29776__$1;
(statearr_29782_29807[(1)] = (5));

} else {
var statearr_29783_29808 = state_29776__$1;
(statearr_29783_29808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (15))){
var inst_29766 = (state_29776[(2)]);
var state_29776__$1 = state_29776;
var statearr_29784_29809 = state_29776__$1;
(statearr_29784_29809[(2)] = inst_29766);

(statearr_29784_29809[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (13))){
var state_29776__$1 = state_29776;
var statearr_29785_29810 = state_29776__$1;
(statearr_29785_29810[(2)] = null);

(statearr_29785_29810[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (6))){
var inst_29736 = (state_29776[(7)]);
var inst_29761 = inst_29736.length;
var inst_29762 = (inst_29761 > (0));
var state_29776__$1 = state_29776;
if(cljs.core.truth_(inst_29762)){
var statearr_29786_29811 = state_29776__$1;
(statearr_29786_29811[(1)] = (12));

} else {
var statearr_29787_29812 = state_29776__$1;
(statearr_29787_29812[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (3))){
var inst_29774 = (state_29776[(2)]);
var state_29776__$1 = state_29776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29776__$1,inst_29774);
} else {
if((state_val_29777 === (12))){
var inst_29736 = (state_29776[(7)]);
var inst_29764 = cljs.core.vec.call(null,inst_29736);
var state_29776__$1 = state_29776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29776__$1,(15),out,inst_29764);
} else {
if((state_val_29777 === (2))){
var state_29776__$1 = state_29776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29776__$1,(4),ch);
} else {
if((state_val_29777 === (11))){
var inst_29744 = (state_29776[(10)]);
var inst_29740 = (state_29776[(9)]);
var inst_29754 = (state_29776[(2)]);
var inst_29755 = [];
var inst_29756 = inst_29755.push(inst_29740);
var inst_29736 = inst_29755;
var inst_29737 = inst_29744;
var state_29776__$1 = (function (){var statearr_29788 = state_29776;
(statearr_29788[(7)] = inst_29736);

(statearr_29788[(8)] = inst_29737);

(statearr_29788[(11)] = inst_29756);

(statearr_29788[(12)] = inst_29754);

return statearr_29788;
})();
var statearr_29789_29813 = state_29776__$1;
(statearr_29789_29813[(2)] = null);

(statearr_29789_29813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (9))){
var inst_29736 = (state_29776[(7)]);
var inst_29752 = cljs.core.vec.call(null,inst_29736);
var state_29776__$1 = state_29776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29776__$1,(11),out,inst_29752);
} else {
if((state_val_29777 === (5))){
var inst_29737 = (state_29776[(8)]);
var inst_29744 = (state_29776[(10)]);
var inst_29740 = (state_29776[(9)]);
var inst_29744__$1 = f.call(null,inst_29740);
var inst_29745 = cljs.core._EQ_.call(null,inst_29744__$1,inst_29737);
var inst_29746 = cljs.core.keyword_identical_QMARK_.call(null,inst_29737,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29747 = ((inst_29745) || (inst_29746));
var state_29776__$1 = (function (){var statearr_29790 = state_29776;
(statearr_29790[(10)] = inst_29744__$1);

return statearr_29790;
})();
if(cljs.core.truth_(inst_29747)){
var statearr_29791_29814 = state_29776__$1;
(statearr_29791_29814[(1)] = (8));

} else {
var statearr_29792_29815 = state_29776__$1;
(statearr_29792_29815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (14))){
var inst_29769 = (state_29776[(2)]);
var inst_29770 = cljs.core.async.close_BANG_.call(null,out);
var state_29776__$1 = (function (){var statearr_29794 = state_29776;
(statearr_29794[(13)] = inst_29769);

return statearr_29794;
})();
var statearr_29795_29816 = state_29776__$1;
(statearr_29795_29816[(2)] = inst_29770);

(statearr_29795_29816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (10))){
var inst_29759 = (state_29776[(2)]);
var state_29776__$1 = state_29776;
var statearr_29796_29817 = state_29776__$1;
(statearr_29796_29817[(2)] = inst_29759);

(statearr_29796_29817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29777 === (8))){
var inst_29736 = (state_29776[(7)]);
var inst_29744 = (state_29776[(10)]);
var inst_29740 = (state_29776[(9)]);
var inst_29749 = inst_29736.push(inst_29740);
var tmp29793 = inst_29736;
var inst_29736__$1 = tmp29793;
var inst_29737 = inst_29744;
var state_29776__$1 = (function (){var statearr_29797 = state_29776;
(statearr_29797[(7)] = inst_29736__$1);

(statearr_29797[(8)] = inst_29737);

(statearr_29797[(14)] = inst_29749);

return statearr_29797;
})();
var statearr_29798_29818 = state_29776__$1;
(statearr_29798_29818[(2)] = null);

(statearr_29798_29818[(1)] = (2));


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
});})(c__27900__auto___29804,out))
;
return ((function (switch__27809__auto__,c__27900__auto___29804,out){
return (function() {
var cljs$core$async$state_machine__27810__auto__ = null;
var cljs$core$async$state_machine__27810__auto____0 = (function (){
var statearr_29799 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29799[(0)] = cljs$core$async$state_machine__27810__auto__);

(statearr_29799[(1)] = (1));

return statearr_29799;
});
var cljs$core$async$state_machine__27810__auto____1 = (function (state_29776){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_29776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e29800){if((e29800 instanceof Object)){
var ex__27813__auto__ = e29800;
var statearr_29801_29819 = state_29776;
(statearr_29801_29819[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29820 = state_29776;
state_29776 = G__29820;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
cljs$core$async$state_machine__27810__auto__ = function(state_29776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27810__auto____1.call(this,state_29776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27810__auto____0;
cljs$core$async$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27810__auto____1;
return cljs$core$async$state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto___29804,out))
})();
var state__27902__auto__ = (function (){var statearr_29802 = f__27901__auto__.call(null);
(statearr_29802[(6)] = c__27900__auto___29804);

return statearr_29802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___29804,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1543803804077
