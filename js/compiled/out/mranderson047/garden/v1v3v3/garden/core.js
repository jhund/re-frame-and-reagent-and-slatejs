// Compiled by ClojureScript 1.10.339 {}
goog.provide('mranderson047.garden.v1v3v3.garden.core');
goog.require('cljs.core');
goog.require('mranderson047.garden.v1v3v3.garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
mranderson047.garden.v1v3v3.garden.core.css = (function mranderson047$garden$v1v3v3$garden$core$css(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31980 = arguments.length;
var i__4532__auto___31981 = (0);
while(true){
if((i__4532__auto___31981 < len__4531__auto___31980)){
args__4534__auto__.push((arguments[i__4532__auto___31981]));

var G__31982 = (i__4532__auto___31981 + (1));
i__4532__auto___31981 = G__31982;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

mranderson047.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,mranderson047.garden.v1v3v3.garden.compiler.compile_css,rules);
});

mranderson047.garden.v1v3v3.garden.core.css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.core.css.cljs$lang$applyTo = (function (seq31979){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31979));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
mranderson047.garden.v1v3v3.garden.core.style = (function mranderson047$garden$v1v3v3$garden$core$style(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31984 = arguments.length;
var i__4532__auto___31985 = (0);
while(true){
if((i__4532__auto___31985 < len__4531__auto___31984)){
args__4534__auto__.push((arguments[i__4532__auto___31985]));

var G__31986 = (i__4532__auto___31985 + (1));
i__4532__auto___31985 = G__31986;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

mranderson047.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return mranderson047.garden.v1v3v3.garden.compiler.compile_style.call(null,maps);
});

mranderson047.garden.v1v3v3.garden.core.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.core.style.cljs$lang$applyTo = (function (seq31983){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31983));
});


//# sourceMappingURL=core.js.map?rel=1543701293348
