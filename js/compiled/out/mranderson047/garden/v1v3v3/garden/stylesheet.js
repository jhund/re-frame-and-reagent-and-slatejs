// Compiled by ClojureScript 1.10.339 {}
goog.provide('mranderson047.garden.v1v3v3.garden.stylesheet');
goog.require('cljs.core');
goog.require('mranderson047.garden.v1v3v3.garden.util');
goog.require('mranderson047.garden.v1v3v3.garden.color');
goog.require('mranderson047.garden.v1v3v3.garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
mranderson047.garden.v1v3v3.garden.stylesheet.rule = (function mranderson047$garden$v1v3v3$garden$stylesheet$rule(var_args){
var args__4534__auto__ = [];
var len__4531__auto___32132 = arguments.length;
var i__4532__auto___32133 = (0);
while(true){
if((i__4532__auto___32133 < len__4531__auto___32132)){
args__4534__auto__.push((arguments[i__4532__auto___32133]));

var G__32134 = (i__4532__auto___32133 + (1));
i__4532__auto___32133 = G__32134;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mranderson047.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if(!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol))))){
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__32135__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__32135 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__32136__i = 0, G__32136__a = new Array(arguments.length -  0);
while (G__32136__i < G__32136__a.length) {G__32136__a[G__32136__i] = arguments[G__32136__i + 0]; ++G__32136__i;}
  children = new cljs.core.IndexedSeq(G__32136__a,0,null);
} 
return G__32135__delegate.call(this,children);};
G__32135.cljs$lang$maxFixedArity = 0;
G__32135.cljs$lang$applyTo = (function (arglist__32137){
var children = cljs.core.seq(arglist__32137);
return G__32135__delegate(children);
});
G__32135.cljs$core$IFn$_invoke$arity$variadic = G__32135__delegate;
return G__32135;
})()
;
}
});

mranderson047.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$applyTo = (function (seq32130){
var G__32131 = cljs.core.first.call(null,seq32130);
var seq32130__$1 = cljs.core.next.call(null,seq32130);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32131,seq32130__$1);
});

mranderson047.garden.v1v3v3.garden.stylesheet.cssfn = (function mranderson047$garden$v1v3v3$garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__32138__delegate = function (args){
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__32138 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32139__i = 0, G__32139__a = new Array(arguments.length -  0);
while (G__32139__i < G__32139__a.length) {G__32139__a[G__32139__i] = arguments[G__32139__i + 0]; ++G__32139__i;}
  args = new cljs.core.IndexedSeq(G__32139__a,0,null);
} 
return G__32138__delegate.call(this,args);};
G__32138.cljs$lang$maxFixedArity = 0;
G__32138.cljs$lang$applyTo = (function (arglist__32140){
var args = cljs.core.seq(arglist__32140);
return G__32138__delegate(args);
});
G__32138.cljs$core$IFn$_invoke$arity$variadic = G__32138__delegate;
return G__32138;
})()
;
});
mranderson047.garden.v1v3v3.garden.stylesheet.at_rule = (function mranderson047$garden$v1v3v3$garden$stylesheet$at_rule(identifier,value){
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
mranderson047.garden.v1v3v3.garden.stylesheet.at_font_face = (function mranderson047$garden$v1v3v3$garden$stylesheet$at_font_face(var_args){
var args__4534__auto__ = [];
var len__4531__auto___32142 = arguments.length;
var i__4532__auto___32143 = (0);
while(true){
if((i__4532__auto___32143 < len__4531__auto___32142)){
args__4534__auto__.push((arguments[i__4532__auto___32143]));

var G__32144 = (i__4532__auto___32143 + (1));
i__4532__auto___32143 = G__32144;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

mranderson047.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

mranderson047.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq32141){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32141));
});

/**
 * Create a CSS @import rule.
 */
mranderson047.garden.v1v3v3.garden.stylesheet.at_import = (function mranderson047$garden$v1v3v3$garden$stylesheet$at_import(var_args){
var G__32148 = arguments.length;
switch (G__32148) {
case 1:
return mranderson047.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___32150 = arguments.length;
var i__4532__auto___32151 = (0);
while(true){
if((i__4532__auto___32151 < len__4531__auto___32150)){
args_arr__4546__auto__.push((arguments[i__4532__auto___32151]));

var G__32152 = (i__4532__auto___32151 + (1));
i__4532__auto___32151 = G__32152;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((1)),(0),null));
return mranderson047.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4547__auto__);

}
});

mranderson047.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return mranderson047.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

mranderson047.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return mranderson047.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq32146){
var G__32147 = cljs.core.first.call(null,seq32146);
var seq32146__$1 = cljs.core.next.call(null,seq32146);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32147,seq32146__$1);
});

mranderson047.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
mranderson047.garden.v1v3v3.garden.stylesheet.at_media = (function mranderson047$garden$v1v3v3$garden$stylesheet$at_media(var_args){
var args__4534__auto__ = [];
var len__4531__auto___32155 = arguments.length;
var i__4532__auto___32156 = (0);
while(true){
if((i__4532__auto___32156 < len__4531__auto___32155)){
args__4534__auto__.push((arguments[i__4532__auto___32156]));

var G__32157 = (i__4532__auto___32156 + (1));
i__4532__auto___32156 = G__32157;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mranderson047.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return mranderson047.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

mranderson047.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq32153){
var G__32154 = cljs.core.first.call(null,seq32153);
var seq32153__$1 = cljs.core.next.call(null,seq32153);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32154,seq32153__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
mranderson047.garden.v1v3v3.garden.stylesheet.at_keyframes = (function mranderson047$garden$v1v3v3$garden$stylesheet$at_keyframes(var_args){
var args__4534__auto__ = [];
var len__4531__auto___32160 = arguments.length;
var i__4532__auto___32161 = (0);
while(true){
if((i__4532__auto___32161 < len__4531__auto___32160)){
args__4534__auto__.push((arguments[i__4532__auto___32161]));

var G__32162 = (i__4532__auto___32161 + (1));
i__4532__auto___32161 = G__32162;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mranderson047.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return mranderson047.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

mranderson047.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq32158){
var G__32159 = cljs.core.first.call(null,seq32158);
var seq32158__$1 = cljs.core.next.call(null,seq32158);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32159,seq32158__$1);
});

/**
 * Create a color from RGB values.
 */
mranderson047.garden.v1v3v3.garden.stylesheet.rgb = (function mranderson047$garden$v1v3v3$garden$stylesheet$rgb(r,g,b){
return mranderson047.garden.v1v3v3.garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
mranderson047.garden.v1v3v3.garden.stylesheet.hsl = (function mranderson047$garden$v1v3v3$garden$stylesheet$hsl(h,s,l){
return mranderson047.garden.v1v3v3.garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=stylesheet.js.map?rel=1543701293933
