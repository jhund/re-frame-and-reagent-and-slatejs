// Compiled by ClojureScript 1.10.339 {}
goog.provide('mranderson047.garden.v1v3v3.garden.compiler');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('mranderson047.garden.v1v3v3.garden.color');
goog.require('mranderson047.garden.v1v3v3.garden.compression');
goog.require('mranderson047.garden.v1v3v3.garden.selectors');
goog.require('mranderson047.garden.v1v3v3.garden.units');
goog.require('mranderson047.garden.v1v3v3.garden.util');
goog.require('mranderson047.garden.v1v3v3.garden.types');
/**
 * The current compiler flags.
 */
mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158),true,new cljs.core.Keyword(null,"preamble","preamble",1641040241),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"output-to","output-to",-965533968),null,new cljs.core.Keyword(null,"vendors","vendors",-153040496),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755),new cljs.core.Keyword(null,"default","default",-1987822328)], null)], null);
/**
 * Retun a function to call when rendering a media expression.
 *   The returned function accepts two arguments: the media
 *   expression being evaluated and the current media expression context.
 *   Both arguments are maps. This is used to provide semantics for nested
 *   media queries.
 */
mranderson047.garden.v1v3v3.garden.compiler.media_expression_behavior = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"merge","merge",-1804319409),(function (expr,context){
return cljs.core.merge.call(null,context,expr);
}),new cljs.core.Keyword(null,"default","default",-1987822328),(function (expr,_){
return expr;
})], null);
/**
 * The current parent selector context.
 */
mranderson047.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_ = null;
/**
 * The current media query context.
 */
mranderson047.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_ = null;
var ret__4565__auto___31503 = (function (){
mranderson047.garden.v1v3v3.garden.compiler.with_selector_context = (function mranderson047$garden$v1v3v3$garden$compiler$with_selector_context(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31504 = arguments.length;
var i__4532__auto___31505 = (0);
while(true){
if((i__4532__auto___31505 < len__4531__auto___31504)){
args__4534__auto__.push((arguments[i__4532__auto___31505]));

var G__31506 = (i__4532__auto___31505 + (1));
i__4532__auto___31505 = G__31506;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

mranderson047.garden.v1v3v3.garden.compiler.with_selector_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,selector_context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("mranderson047.garden.v1v3v3.garden.compiler","*selector-context*","mranderson047.garden.v1v3v3.garden.compiler/*selector-context*",-1281209688,null),null,(1),null)),(new cljs.core.List(null,selector_context,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))));
});

mranderson047.garden.v1v3v3.garden.compiler.with_selector_context.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.compiler.with_selector_context.cljs$lang$applyTo = (function (seq31499){
var G__31500 = cljs.core.first.call(null,seq31499);
var seq31499__$1 = cljs.core.next.call(null,seq31499);
var G__31501 = cljs.core.first.call(null,seq31499__$1);
var seq31499__$2 = cljs.core.next.call(null,seq31499__$1);
var G__31502 = cljs.core.first.call(null,seq31499__$2);
var seq31499__$3 = cljs.core.next.call(null,seq31499__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31500,G__31501,G__31502,seq31499__$3);
});

return null;
})()
;
mranderson047.garden.v1v3v3.garden.compiler.with_selector_context.cljs$lang$macro = true;

var ret__4565__auto___31511 = (function (){
mranderson047.garden.v1v3v3.garden.compiler.with_media_query_context = (function mranderson047$garden$v1v3v3$garden$compiler$with_media_query_context(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31512 = arguments.length;
var i__4532__auto___31513 = (0);
while(true){
if((i__4532__auto___31513 < len__4531__auto___31512)){
args__4534__auto__.push((arguments[i__4532__auto___31513]));

var G__31514 = (i__4532__auto___31513 + (1));
i__4532__auto___31513 = G__31514;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

mranderson047.garden.v1v3v3.garden.compiler.with_media_query_context.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,selector_context,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("mranderson047.garden.v1v3v3.garden.compiler","*media-query-context*","mranderson047.garden.v1v3v3.garden.compiler/*media-query-context*",150166342,null),null,(1),null)),(new cljs.core.List(null,selector_context,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))));
});

mranderson047.garden.v1v3v3.garden.compiler.with_media_query_context.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.compiler.with_media_query_context.cljs$lang$applyTo = (function (seq31507){
var G__31508 = cljs.core.first.call(null,seq31507);
var seq31507__$1 = cljs.core.next.call(null,seq31507);
var G__31509 = cljs.core.first.call(null,seq31507__$1);
var seq31507__$2 = cljs.core.next.call(null,seq31507__$1);
var G__31510 = cljs.core.first.call(null,seq31507__$2);
var seq31507__$3 = cljs.core.next.call(null,seq31507__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31508,G__31509,G__31510,seq31507__$3);
});

return null;
})()
;
mranderson047.garden.v1v3v3.garden.compiler.with_media_query_context.cljs$lang$macro = true;

/**
 * Return the current list of browser vendors specified in `*flags*`.
 */
mranderson047.garden.v1v3v3.garden.compiler.vendors = (function mranderson047$garden$v1v3v3$garden$compiler$vendors(){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_));
});
/**
 * Return the current list of auto-prefixed properties specified in `*flags*`.
 */
mranderson047.garden.v1v3v3.garden.compiler.auto_prefixed_properties = (function mranderson047$garden$v1v3v3$garden$compiler$auto_prefixed_properties(){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.name,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466).cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_)));
});
mranderson047.garden.v1v3v3.garden.compiler.auto_prefix_QMARK_ = (function mranderson047$garden$v1v3v3$garden$compiler$auto_prefix_QMARK_(property){
return cljs.core.contains_QMARK_.call(null,mranderson047.garden.v1v3v3.garden.compiler.auto_prefixed_properties.call(null),property);
});
mranderson047.garden.v1v3v3.garden.compiler.top_level_expression_QMARK_ = (function mranderson047$garden$v1v3v3$garden$compiler$top_level_expression_QMARK_(x){
var or__3949__auto__ = mranderson047.garden.v1v3v3.garden.util.rule_QMARK_.call(null,x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = mranderson047.garden.v1v3v3.garden.util.at_import_QMARK_.call(null,x);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = mranderson047.garden.v1v3v3.garden.util.at_media_QMARK_.call(null,x);
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return mranderson047.garden.v1v3v3.garden.util.at_keyframes_QMARK_.call(null,x);
}
}
}
});
/**
 * Return a vector of [(filter pred coll) (remove pred coll)].
 */
mranderson047.garden.v1v3v3.garden.compiler.divide_vec = (function mranderson047$garden$v1v3v3$garden$compiler$divide_vec(pred,coll){
return cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,pred,coll);
});

/**
 * @interface
 */
mranderson047.garden.v1v3v3.garden.compiler.IExpandable = function(){};

/**
 * Return a list containing the expanded form of `this`.
 */
mranderson047.garden.v1v3v3.garden.compiler.expand = (function mranderson047$garden$v1v3v3$garden$compiler$expand(this$){
if(((!((this$ == null))) && (!((this$.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 == null))))){
return this$.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (mranderson047.garden.v1v3v3.garden.compiler.expand[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (mranderson047.garden.v1v3v3.garden.compiler.expand["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IExpandable.expand",this$);
}
}
}
});

/**
 * Like flatten but only affects seqs.
 */
mranderson047.garden.v1v3v3.garden.compiler.expand_seqs = (function mranderson047$garden$v1v3v3$garden$compiler$expand_seqs(coll){
return cljs.core.mapcat.call(null,(function (x){
if(cljs.core.seq_QMARK_.call(null,x)){
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.call(null,x);
} else {
return (new cljs.core.List(null,x,null,(1),null));
}
}),coll);
});
mranderson047.garden.v1v3v3.garden.compiler.expand_declaration_1 = (function mranderson047$garden$v1v3v3$garden$compiler$expand_declaration_1(declaration){
if(cljs.core.map_QMARK_.call(null,declaration)){
} else {
throw (new Error("Assert failed: (map? declaration)"));
}

var prefix = (function (p1__31515_SHARP_,p2__31516_SHARP_){
return mranderson047.garden.v1v3v3.garden.util.as_str.call(null,p1__31515_SHARP_,"-",p2__31516_SHARP_);
});
return cljs.core.reduce.call(null,((function (prefix){
return (function (m,p__31517){
var vec__31518 = p__31517;
var k = cljs.core.nth.call(null,vec__31518,(0),null);
var v = cljs.core.nth.call(null,vec__31518,(1),null);
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.util.hash_map_QMARK_.call(null,v))){
return cljs.core.reduce.call(null,((function (vec__31518,k,v,prefix){
return (function (m1,p__31521){
var vec__31522 = p__31521;
var k1 = cljs.core.nth.call(null,vec__31522,(0),null);
var v1 = cljs.core.nth.call(null,vec__31522,(1),null);
return cljs.core.assoc.call(null,m1,prefix.call(null,k,k1),v1);
});})(vec__31518,k,v,prefix))
,m,mranderson047.garden.v1v3v3.garden.compiler.expand_declaration_1.call(null,v));
} else {
return cljs.core.assoc.call(null,m,mranderson047.garden.v1v3v3.garden.util.to_str.call(null,k),v);
}
});})(prefix))
,cljs.core.empty.call(null,declaration),declaration);
});
mranderson047.garden.v1v3v3.garden.compiler.expand_declaration = (function mranderson047$garden$v1v3v3$garden$compiler$expand_declaration(declaration){
if(cljs.core.empty_QMARK_.call(null,declaration)){
return declaration;
} else {
return cljs.core.with_meta.call(null,mranderson047.garden.v1v3v3.garden.compiler.expand_declaration_1.call(null,declaration),cljs.core.meta.call(null,declaration));
}
});
/**
 * Matches a single "&" or "&" follow by one or more
 *   non-whitespace characters.
 */
mranderson047.garden.v1v3v3.garden.compiler.parent_selector_re = /^&(?:\S+)?$/;
/**
 * Extract the selector portion of a parent selector reference.
 */
mranderson047.garden.v1v3v3.garden.compiler.extract_reference = (function mranderson047$garden$v1v3v3$garden$compiler$extract_reference(selector){
var temp__5457__auto__ = cljs.core.re_find.call(null,mranderson047.garden.v1v3v3.garden.compiler.parent_selector_re,mranderson047.garden.v1v3v3.garden.util.to_str.call(null,cljs.core.last.call(null,selector)));
if(cljs.core.truth_(temp__5457__auto__)){
var reference = temp__5457__auto__;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,reference));
} else {
return null;
}
});
mranderson047.garden.v1v3v3.garden.compiler.expand_selector_reference = (function mranderson047$garden$v1v3v3$garden$compiler$expand_selector_reference(selector){
var temp__5455__auto__ = mranderson047.garden.v1v3v3.garden.compiler.extract_reference.call(null,selector);
if(cljs.core.truth_(temp__5455__auto__)){
var reference = temp__5455__auto__;
var parent = cljs.core.butlast.call(null,selector);
return cljs.core.concat.call(null,cljs.core.butlast.call(null,parent),(new cljs.core.List(null,mranderson047.garden.v1v3v3.garden.util.as_str.call(null,cljs.core.last.call(null,parent),reference),null,(1),null)));
} else {
return selector;
}
});
mranderson047.garden.v1v3v3.garden.compiler.expand_selector = (function mranderson047$garden$v1v3v3$garden$compiler$expand_selector(selector,parent){
var selector__$1 = cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.selectors.css_selector,selector);
var selector__$2 = ((cljs.core.seq.call(null,parent))?cljs.core.map.call(null,cljs.core.flatten,mranderson047.garden.v1v3v3.garden.util.cartesian_product.call(null,parent,selector__$1)):cljs.core.map.call(null,cljs.core.list,selector__$1));
return cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.expand_selector_reference,selector__$2);
});
mranderson047.garden.v1v3v3.garden.compiler.expand_rule = (function mranderson047$garden$v1v3v3$garden$compiler$expand_rule(rule){
var vec__31525 = cljs.core.split_with.call(null,mranderson047.garden.v1v3v3.garden.selectors.selector_QMARK_,rule);
var selector = cljs.core.nth.call(null,vec__31525,(0),null);
var children = cljs.core.nth.call(null,vec__31525,(1),null);
var selector__$1 = mranderson047.garden.v1v3v3.garden.compiler.expand_selector.call(null,selector,mranderson047.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_);
var children__$1 = mranderson047.garden.v1v3v3.garden.compiler.expand.call(null,children);
var vec__31528 = mranderson047.garden.v1v3v3.garden.compiler.divide_vec.call(null,mranderson047.garden.v1v3v3.garden.util.declaration_QMARK_,children__$1);
var declarations = cljs.core.nth.call(null,vec__31528,(0),null);
var xs = cljs.core.nth.call(null,vec__31528,(1),null);
var ys = (function (){var _STAR_selector_context_STAR_31531 = mranderson047.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_;
mranderson047.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_ = ((cljs.core.seq.call(null,selector__$1))?selector__$1:mranderson047.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_);

try{return cljs.core.doall.call(null,cljs.core.mapcat.call(null,mranderson047.garden.v1v3v3.garden.compiler.expand,xs));
}finally {mranderson047.garden.v1v3v3.garden.compiler._STAR_selector_context_STAR_ = _STAR_selector_context_STAR_31531;
}})();
return cljs.core.conj.call(null,ys,cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector__$1], null),cljs.core.mapcat.call(null,mranderson047.garden.v1v3v3.garden.compiler.expand,declarations)));
});
if((typeof mranderson047 !== 'undefined') && (typeof mranderson047.garden !== 'undefined') && (typeof mranderson047.garden.v1v3v3 !== 'undefined') && (typeof mranderson047.garden.v1v3v3.garden !== 'undefined') && (typeof mranderson047.garden.v1v3v3.garden.compiler !== 'undefined') && (typeof mranderson047.garden.v1v3v3.garden.compiler.expand_at_rule !== 'undefined')){
} else {
mranderson047.garden.v1v3v3.garden.compiler.expand_at_rule = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"mranderson047.garden.v1v3v3.garden.compiler","expand-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,mranderson047.garden.v1v3v3.garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"default","default",-1987822328),(function (at_rule){
return (new cljs.core.List(null,at_rule,null,(1),null));
}));
cljs.core._add_method.call(null,mranderson047.garden.v1v3v3.garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__31532){
var map__31533 = p__31532;
var map__31533__$1 = ((((!((map__31533 == null)))?(((((map__31533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31533):map__31533);
var value = cljs.core.get.call(null,map__31533__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__31535 = value;
var map__31535__$1 = ((((!((map__31535 == null)))?(((((map__31535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31535):map__31535);
var identifier = cljs.core.get.call(null,map__31535__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.call(null,map__31535__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
return (new cljs.core.List(null,(new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),mranderson047.garden.v1v3v3.garden.util.to_str.call(null,identifier),new cljs.core.Keyword(null,"frames","frames",1765687497),cljs.core.mapcat.call(null,mranderson047.garden.v1v3v3.garden.compiler.expand,frames)], null),null,null,null)),null,(1),null));
}));
mranderson047.garden.v1v3v3.garden.compiler.expand_media_query_expression = (function mranderson047$garden$v1v3v3$garden$compiler$expand_media_query_expression(expression){
var temp__5455__auto__ = mranderson047.garden.v1v3v3.garden.compiler.media_expression_behavior.call(null,cljs.core.get_in.call(null,mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"media-expressions","media-expressions",1920421643),new cljs.core.Keyword(null,"nesting-behavior","nesting-behavior",-1555995755)], null)));
if(cljs.core.truth_(temp__5455__auto__)){
var f = temp__5455__auto__;
return f.call(null,expression,mranderson047.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_);
} else {
return expression;
}
});
cljs.core._add_method.call(null,mranderson047.garden.v1v3v3.garden.compiler.expand_at_rule,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__31537){
var map__31538 = p__31537;
var map__31538__$1 = ((((!((map__31538 == null)))?(((((map__31538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31538):map__31538);
var value = cljs.core.get.call(null,map__31538__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__31540 = value;
var map__31540__$1 = ((((!((map__31540 == null)))?(((((map__31540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31540):map__31540);
var media_queries = cljs.core.get.call(null,map__31540__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.call(null,map__31540__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
var media_queries__$1 = mranderson047.garden.v1v3v3.garden.compiler.expand_media_query_expression.call(null,media_queries);
var xs = (function (){var _STAR_media_query_context_STAR_31545 = mranderson047.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_;
mranderson047.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_ = media_queries__$1;

try{return cljs.core.doall.call(null,cljs.core.mapcat.call(null,mranderson047.garden.v1v3v3.garden.compiler.expand,mranderson047.garden.v1v3v3.garden.compiler.expand.call(null,rules)));
}finally {mranderson047.garden.v1v3v3.garden.compiler._STAR_media_query_context_STAR_ = _STAR_media_query_context_STAR_31545;
}})();
var vec__31541 = mranderson047.garden.v1v3v3.garden.compiler.divide_vec.call(null,mranderson047.garden.v1v3v3.garden.util.at_media_QMARK_,xs);
var subqueries = cljs.core.nth.call(null,vec__31541,(0),null);
var rules__$1 = cljs.core.nth.call(null,vec__31541,(1),null);
return cljs.core.cons.call(null,(new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries__$1,new cljs.core.Keyword(null,"rules","rules",1198912366),rules__$1], null),null,null,null)),subqueries);
}));
mranderson047.garden.v1v3v3.garden.compiler.expand_stylesheet = (function mranderson047$garden$v1v3v3$garden$compiler$expand_stylesheet(xs){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.expand,mranderson047.garden.v1v3v3.garden.compiler.expand.call(null,xs)));
});
goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.IExpandable,"null",true);

goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.expand,"null",(function (this$){
return null;
}));

cljs.core.IndexedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.LazySeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.NodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.NodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.BlackNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.BlackNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMapSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.Cons.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.RSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,this$__$1,null,(1),null));
});

cljs.core.PersistentHashMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,mranderson047.garden.v1v3v3.garden.compiler.expand_declaration.call(null,this$__$1),null,(1),null));
});

cljs.core.ArrayNodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ArrayNodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

cljs.core.Subvec.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_rule.call(null,this$__$1);
});

goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.IExpandable,"_",true);

goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.expand,"_",(function (this$){
return (new cljs.core.List(null,this$,null,(1),null));
}));

cljs.core.PersistentTreeMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,mranderson047.garden.v1v3v3.garden.compiler.expand_declaration.call(null,this$__$1),null,(1),null));
});

cljs.core.ChunkedCons.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedCons.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_at_rule.call(null,this$__$1);
});

cljs.core.RedNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RedNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentVector.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,mranderson047.garden.v1v3v3.garden.compiler.expand_declaration.call(null,this$__$1),null,(1),null));
});

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return (new cljs.core.List(null,this$__$1,null,(1),null));
});

cljs.core.List.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.mranderson047$garden$v1v3v3$garden$compiler$IExpandable$expand$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.expand_seqs.call(null,this$__$1);
});

/**
 * @interface
 */
mranderson047.garden.v1v3v3.garden.compiler.CSSRenderer = function(){};

/**
 * Convert a Clojure data type in to a string of CSS.
 */
mranderson047.garden.v1v3v3.garden.compiler.render_css = (function mranderson047$garden$v1v3v3$garden$compiler$render_css(this$){
if(((!((this$ == null))) && (!((this$.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 == null))))){
return this$.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (mranderson047.garden.v1v3v3.garden.compiler.render_css[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,this$);
} else {
var m__4244__auto____$1 = (mranderson047.garden.v1v3v3.garden.compiler.render_css["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"CSSRenderer.render-css",this$);
}
}
}
});

mranderson047.garden.v1v3v3.garden.compiler.comma = ", ";
mranderson047.garden.v1v3v3.garden.compiler.colon = ": ";
mranderson047.garden.v1v3v3.garden.compiler.semicolon = ";";
mranderson047.garden.v1v3v3.garden.compiler.l_brace = " {\n";
mranderson047.garden.v1v3v3.garden.compiler.r_brace = "\n}";
mranderson047.garden.v1v3v3.garden.compiler.l_brace_1 = " {\n\n";
mranderson047.garden.v1v3v3.garden.compiler.r_brace_1 = "\n\n}";
mranderson047.garden.v1v3v3.garden.compiler.rule_sep = "\n\n";
mranderson047.garden.v1v3v3.garden.compiler.indent = "  ";
/**
 * Return a space separated list of values.
 */
mranderson047.garden.v1v3v3.garden.compiler.space_separated_list = (function mranderson047$garden$v1v3v3$garden$compiler$space_separated_list(var_args){
var G__31547 = arguments.length;
switch (G__31547) {
case 1:
return mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,xs);
});

mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,f,xs));
});

mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.cljs$lang$maxFixedArity = 2;

/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list = (function mranderson047$garden$v1v3v3$garden$compiler$comma_separated_list(var_args){
var G__31550 = arguments.length;
switch (G__31550) {
case 1:
return mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,xs);
});

mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
var ys = (function (){var iter__4324__auto__ = (function mranderson047$garden$v1v3v3$garden$compiler$iter__31551(s__31552){
return (new cljs.core.LazySeq(null,(function (){
var s__31552__$1 = s__31552;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__31552__$1);
if(temp__5457__auto__){
var s__31552__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31552__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__31552__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__31554 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__31553 = (0);
while(true){
if((i__31553 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__31553);
cljs.core.chunk_append.call(null,b__31554,((cljs.core.sequential_QMARK_.call(null,x))?mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.call(null,f,x):f.call(null,x)));

var G__31556 = (i__31553 + (1));
i__31553 = G__31556;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31554),mranderson047$garden$v1v3v3$garden$compiler$iter__31551.call(null,cljs.core.chunk_rest.call(null,s__31552__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31554),null);
}
} else {
var x = cljs.core.first.call(null,s__31552__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?mranderson047.garden.v1v3v3.garden.compiler.space_separated_list.call(null,f,x):f.call(null,x)),mranderson047$garden$v1v3v3$garden$compiler$iter__31551.call(null,cljs.core.rest.call(null,s__31552__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,xs);
})();
return clojure.string.join.call(null,mranderson047.garden.v1v3v3.garden.compiler.comma,ys);
});

mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.cljs$lang$maxFixedArity = 2;

mranderson047.garden.v1v3v3.garden.compiler.rule_join = (function mranderson047$garden$v1v3v3$garden$compiler$rule_join(xs){
return clojure.string.join.call(null,mranderson047.garden.v1v3v3.garden.compiler.rule_sep,xs);
});
/**
 * Match the start of a line if the characters immediately
 *   after it are spaces or used in a CSS id (#), class (.), or tag name.
 */
mranderson047.garden.v1v3v3.garden.compiler.indent_loc_re = (new RegExp("(?=[ A-Za-z#.}-]+)^","gm"));
mranderson047.garden.v1v3v3.garden.compiler.indent_str = (function mranderson047$garden$v1v3v3$garden$compiler$indent_str(s){
return s.replace(mranderson047.garden.v1v3v3.garden.compiler.indent_loc_re,mranderson047.garden.v1v3v3.garden.compiler.indent);
});
/**
 * Render the value portion of a declaration.
 */
mranderson047.garden.v1v3v3.garden.compiler.render_value = (function mranderson047$garden$v1v3v3$garden$compiler$render_value(x){
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.util.at_keyframes_QMARK_.call(null,x))){
return mranderson047.garden.v1v3v3.garden.util.to_str.call(null,cljs.core.get_in.call(null,x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"identifier","identifier",-805503498)], null)));
} else {
return mranderson047.garden.v1v3v3.garden.compiler.render_css.call(null,x);
}
});
mranderson047.garden.v1v3v3.garden.compiler.render_property_and_value = (function mranderson047$garden$v1v3v3$garden$compiler$render_property_and_value(p__31557){
var vec__31558 = p__31557;
var prop = cljs.core.nth.call(null,vec__31558,(0),null);
var val = cljs.core.nth.call(null,vec__31558,(1),null);
if(cljs.core.set_QMARK_.call(null,val)){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_property_and_value,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,cljs.core.repeat.call(null,prop),val))));
} else {
var val__$1 = ((cljs.core.sequential_QMARK_.call(null,val))?mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_value,val):mranderson047.garden.v1v3v3.garden.compiler.render_value.call(null,val));
return mranderson047.garden.v1v3v3.garden.util.as_str.call(null,prop,mranderson047.garden.v1v3v3.garden.compiler.colon,val__$1,mranderson047.garden.v1v3v3.garden.compiler.semicolon);
}
});
/**
 * For each block in `declaration`, add sequence of blocks
 * returned from calling `f` on the block.
 */
mranderson047.garden.v1v3v3.garden.compiler.add_blocks = (function mranderson047$garden$v1v3v3$garden$compiler$add_blocks(f,declaration){
return cljs.core.mapcat.call(null,(function (p1__31561_SHARP_){
return cljs.core.cons.call(null,p1__31561_SHARP_,f.call(null,p1__31561_SHARP_));
}),declaration);
});
/**
 * Sequence of blocks with their properties prefixed by
 * each vendor in `vendors`.
 */
mranderson047.garden.v1v3v3.garden.compiler.prefixed_blocks = (function mranderson047$garden$v1v3v3$garden$compiler$prefixed_blocks(vendors,p__31562){
var vec__31563 = p__31562;
var p = cljs.core.nth.call(null,vec__31563,(0),null);
var v = cljs.core.nth.call(null,vec__31563,(1),null);
var iter__4324__auto__ = ((function (vec__31563,p,v){
return (function mranderson047$garden$v1v3v3$garden$compiler$prefixed_blocks_$_iter__31566(s__31567){
return (new cljs.core.LazySeq(null,((function (vec__31563,p,v){
return (function (){
var s__31567__$1 = s__31567;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__31567__$1);
if(temp__5457__auto__){
var s__31567__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31567__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__31567__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__31569 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__31568 = (0);
while(true){
if((i__31568 < size__4323__auto__)){
var vendor = cljs.core._nth.call(null,c__4322__auto__,i__31568);
cljs.core.chunk_append.call(null,b__31569,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.garden.v1v3v3.garden.util.vendor_prefix.call(null,vendor,cljs.core.name.call(null,p)),v], null));

var G__31570 = (i__31568 + (1));
i__31568 = G__31570;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31569),mranderson047$garden$v1v3v3$garden$compiler$prefixed_blocks_$_iter__31566.call(null,cljs.core.chunk_rest.call(null,s__31567__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31569),null);
}
} else {
var vendor = cljs.core.first.call(null,s__31567__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.garden.v1v3v3.garden.util.vendor_prefix.call(null,vendor,cljs.core.name.call(null,p)),v], null),mranderson047$garden$v1v3v3$garden$compiler$prefixed_blocks_$_iter__31566.call(null,cljs.core.rest.call(null,s__31567__$2)));
}
} else {
return null;
}
break;
}
});})(vec__31563,p,v))
,null,null));
});})(vec__31563,p,v))
;
return iter__4324__auto__.call(null,vendors);
});
/**
 * Add prefixes to all blocks in `declaration` using
 * vendor prefixes in `vendors`.
 */
mranderson047.garden.v1v3v3.garden.compiler.prefix_all_properties = (function mranderson047$garden$v1v3v3$garden$compiler$prefix_all_properties(vendors,declaration){
return mranderson047.garden.v1v3v3.garden.compiler.add_blocks.call(null,cljs.core.partial.call(null,mranderson047.garden.v1v3v3.garden.compiler.prefixed_blocks,vendors),declaration);
});
/**
 * Add prefixes to all blocks in `declaration` when property
 * is in the `:auto-prefix` set.
 */
mranderson047.garden.v1v3v3.garden.compiler.prefix_auto_properties = (function mranderson047$garden$v1v3v3$garden$compiler$prefix_auto_properties(vendors,declaration){
return mranderson047.garden.v1v3v3.garden.compiler.add_blocks.call(null,(function (block){
var vec__31571 = block;
var p = cljs.core.nth.call(null,vec__31571,(0),null);
var _ = cljs.core.nth.call(null,vec__31571,(1),null);
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.compiler.auto_prefix_QMARK_.call(null,cljs.core.name.call(null,p)))){
return mranderson047.garden.v1v3v3.garden.compiler.prefixed_blocks.call(null,vendors,block);
} else {
return null;
}
}),declaration);
});
/**
 * Prefix properties within a `declaration` if `{:prefix true}` is
 * set in its meta, or if a property is in the `:auto-prefix` set.
 */
mranderson047.garden.v1v3v3.garden.compiler.prefix_declaration = (function mranderson047$garden$v1v3v3$garden$compiler$prefix_declaration(declaration){
var vendors = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"vendors","vendors",-153040496).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,declaration));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return mranderson047.garden.v1v3v3.garden.compiler.vendors.call(null);
}
})();
var prefix_fn = (cljs.core.truth_(new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,declaration)))?mranderson047.garden.v1v3v3.garden.compiler.prefix_all_properties:mranderson047.garden.v1v3v3.garden.compiler.prefix_auto_properties);
return prefix_fn.call(null,vendors,declaration);
});
mranderson047.garden.v1v3v3.garden.compiler.render_declaration = (function mranderson047$garden$v1v3v3$garden$compiler$render_declaration(declaration){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_property_and_value,mranderson047.garden.v1v3v3.garden.compiler.prefix_declaration.call(null,declaration)));
});
mranderson047.garden.v1v3v3.garden.compiler.render_selector = (function mranderson047$garden$v1v3v3$garden$compiler$render_selector(selector){
return mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,selector);
});
/**
 * Convert a vector to a CSS rule string. The vector is expected to be
 *   fully expanded.
 */
mranderson047.garden.v1v3v3.garden.compiler.render_rule = (function mranderson047$garden$v1v3v3$garden$compiler$render_rule(p__31574){
var vec__31575 = p__31574;
var selector = cljs.core.nth.call(null,vec__31575,(0),null);
var declarations = cljs.core.nth.call(null,vec__31575,(1),null);
var rule = vec__31575;
if(((cljs.core.seq.call(null,rule)) && (cljs.core.every_QMARK_.call(null,cljs.core.seq,rule)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.render_selector.call(null,selector)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.l_brace),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.indent_str.call(null,clojure.string.join.call(null,"\n",cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,declarations)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.r_brace)].join('');
} else {
return null;
}
});
/**
 * Render the individual components of a media expression.
 */
mranderson047.garden.v1v3v3.garden.compiler.render_media_expr_part = (function mranderson047$garden$v1v3v3$garden$compiler$render_media_expr_part(p__31578){
var vec__31579 = p__31578;
var k = cljs.core.nth.call(null,vec__31579,(0),null);
var v = cljs.core.nth.call(null,vec__31579,(1),null);
var vec__31582 = cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var sk = cljs.core.nth.call(null,vec__31582,(0),null);
var sv = cljs.core.nth.call(null,vec__31582,(1),null);
if(v === true){
return sk;
} else {
if(v === false){
return ["not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core._EQ_.call(null,"only",sv)){
return ["only ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk)].join('');
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.seq.call(null,sv);
} else {
return and__3938__auto__;
}
})())){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.colon),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sv),")"].join('');
} else {
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sk),")"].join('');
}

}
}
}
});
/**
 * Make a media query expession from one or more maps. Keys are not
 *   validated but values have the following semantics:
 * 
 *  `true`  as in `{:screen true}`  == "screen"
 *  `false` as in `{:screen false}` == "not screen"
 *  `:only` as in `{:screen :only}  == "only screen"
 */
mranderson047.garden.v1v3v3.garden.compiler.render_media_expr = (function mranderson047$garden$v1v3v3$garden$compiler$render_media_expr(expr){
if(cljs.core.sequential_QMARK_.call(null,expr)){
return mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_media_expr,expr));
} else {
return clojure.string.join.call(null," and ",cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_media_expr_part,expr));
}
});
/**
 * Render a CSSUnit.
 */
mranderson047.garden.v1v3v3.garden.compiler.render_unit = (function mranderson047$garden$v1v3v3$garden$compiler$render_unit(css_unit){
var map__31585 = css_unit;
var map__31585__$1 = ((((!((map__31585 == null)))?(((((map__31585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31585):map__31585);
var magnitude = cljs.core.get.call(null,map__31585__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var unit = cljs.core.get.call(null,map__31585__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var magnitude__$1 = magnitude;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(magnitude__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,unit))].join('');
});
/**
 * Render a CSS function.
 */
mranderson047.garden.v1v3v3.garden.compiler.render_function = (function mranderson047$garden$v1v3v3$garden$compiler$render_function(css_function){
var map__31587 = css_function;
var map__31587__$1 = ((((!((map__31587 == null)))?(((((map__31587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31587):map__31587);
var function$ = cljs.core.get.call(null,map__31587__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var args = cljs.core.get.call(null,map__31587__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var args__$1 = ((cljs.core.sequential_QMARK_.call(null,args))?mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,args):mranderson047.garden.v1v3v3.garden.util.to_str.call(null,args));
return mranderson047.garden.v1v3v3.garden.util.format.call(null,"%s(%s)",mranderson047.garden.v1v3v3.garden.util.to_str.call(null,function$),args__$1);
});
mranderson047.garden.v1v3v3.garden.compiler.render_color = (function mranderson047$garden$v1v3v3$garden$compiler$render_color(c){
var temp__5455__auto__ = new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_(temp__5455__auto__)){
var a = temp__5455__auto__;
var map__31589 = mranderson047.garden.v1v3v3.garden.color.as_hsl.call(null,c);
var map__31589__$1 = ((((!((map__31589 == null)))?(((((map__31589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31589):map__31589);
var hue = cljs.core.get.call(null,map__31589__$1,new cljs.core.Keyword(null,"hue","hue",-508078848));
var saturation = cljs.core.get.call(null,map__31589__$1,new cljs.core.Keyword(null,"saturation","saturation",-14247929));
var lightness = cljs.core.get.call(null,map__31589__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
var vec__31590 = cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.units.percent,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [saturation,lightness], null));
var s = cljs.core.nth.call(null,vec__31590,(0),null);
var l = cljs.core.nth.call(null,vec__31590,(1),null);
return mranderson047.garden.v1v3v3.garden.util.format.call(null,"hsla(%s)",mranderson047.garden.v1v3v3.garden.compiler.comma_separated_list.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [hue,s,l,a], null)));
} else {
return mranderson047.garden.v1v3v3.garden.color.as_hex.call(null,c);
}
});
if((typeof mranderson047 !== 'undefined') && (typeof mranderson047.garden !== 'undefined') && (typeof mranderson047.garden.v1v3v3 !== 'undefined') && (typeof mranderson047.garden.v1v3v3.garden !== 'undefined') && (typeof mranderson047.garden.v1v3v3.garden.compiler !== 'undefined') && (typeof mranderson047.garden.v1v3v3.garden.compiler.render_at_rule !== 'undefined')){
} else {
/**
 * Render a CSS at-rule
 */
mranderson047.garden.v1v3v3.garden.compiler.render_at_rule = (function (){var method_table__4414__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"mranderson047.garden.v1v3v3.garden.compiler","render-at-rule"),new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
cljs.core._add_method.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_at_rule,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
cljs.core._add_method.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_at_rule,new cljs.core.Keyword(null,"import","import",-1399500709),(function (p__31594){
var map__31595 = p__31594;
var map__31595__$1 = ((((!((map__31595 == null)))?(((((map__31595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31595):map__31595);
var value = cljs.core.get.call(null,map__31595__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__31597 = value;
var map__31597__$1 = ((((!((map__31597 == null)))?(((((map__31597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31597):map__31597);
var url = cljs.core.get.call(null,map__31597__$1,new cljs.core.Keyword(null,"url","url",276297046));
var media_queries = cljs.core.get.call(null,map__31597__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var url__$1 = ((typeof url === 'string')?mranderson047.garden.v1v3v3.garden.util.wrap_quotes.call(null,url):mranderson047.garden.v1v3v3.garden.compiler.render_css.call(null,url));
var queries = (cljs.core.truth_(media_queries)?mranderson047.garden.v1v3v3.garden.compiler.render_media_expr.call(null,media_queries):null);
return ["@import ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(queries)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(queries)].join(''):url__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.semicolon)].join('');
}));
cljs.core._add_method.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_at_rule,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),(function (p__31600){
var map__31601 = p__31600;
var map__31601__$1 = ((((!((map__31601 == null)))?(((((map__31601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31601):map__31601);
var value = cljs.core.get.call(null,map__31601__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__31603 = value;
var map__31603__$1 = ((((!((map__31603 == null)))?(((((map__31603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31603):map__31603);
var identifier = cljs.core.get.call(null,map__31603__$1,new cljs.core.Keyword(null,"identifier","identifier",-805503498));
var frames = cljs.core.get.call(null,map__31603__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
if(cljs.core.seq.call(null,frames)){
var body = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.util.to_str.call(null,identifier)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.l_brace_1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.indent_str.call(null,mranderson047.garden.v1v3v3.garden.compiler.rule_join.call(null,cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,frames)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.r_brace_1)].join('');
var prefix = ((function (body,map__31603,map__31603__$1,identifier,frames,map__31601,map__31601__$1,value){
return (function (vendor){
return ["@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.util.vendor_prefix.call(null,vendor,"keyframes "))].join('');
});})(body,map__31603,map__31603__$1,identifier,frames,map__31601,map__31601__$1,value))
;
return mranderson047.garden.v1v3v3.garden.compiler.rule_join.call(null,cljs.core.map.call(null,((function (body,prefix,map__31603,map__31603__$1,identifier,frames,map__31601,map__31601__$1,value){
return (function (p1__31599_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31599_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(body)].join('');
});})(body,prefix,map__31603,map__31603__$1,identifier,frames,map__31601,map__31601__$1,value))
,cljs.core.cons.call(null,"@keyframes ",cljs.core.map.call(null,prefix,mranderson047.garden.v1v3v3.garden.compiler.vendors.call(null)))));
} else {
return null;
}
}));
cljs.core._add_method.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_at_rule,new cljs.core.Keyword(null,"media","media",-1066138403),(function (p__31605){
var map__31606 = p__31605;
var map__31606__$1 = ((((!((map__31606 == null)))?(((((map__31606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31606):map__31606);
var value = cljs.core.get.call(null,map__31606__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__31608 = value;
var map__31608__$1 = ((((!((map__31608 == null)))?(((((map__31608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31608):map__31608);
var media_queries = cljs.core.get.call(null,map__31608__$1,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678));
var rules = cljs.core.get.call(null,map__31608__$1,new cljs.core.Keyword(null,"rules","rules",1198912366));
if(cljs.core.seq.call(null,rules)){
return ["@media ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.render_media_expr.call(null,media_queries)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.l_brace_1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.indent_str.call(null,mranderson047.garden.v1v3v3.garden.compiler.rule_join.call(null,cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,rules)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.garden.v1v3v3.garden.compiler.r_brace_1)].join('');
} else {
return null;
}
}));
goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.CSSRenderer,"null",true);

goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.render_css,"null",(function (this$){
return "";
}));

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.garden.v1v3v3.garden.color.CSSColor.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_color.call(null,this$__$1);
});

cljs.core.IndexedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.LazySeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.NodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.NodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.BlackNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.BlackNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.PersistentArrayMapSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMapSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_unit.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.Cons.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.RSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.CSSRenderer,"number",true);

goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.render_css,"number",(function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
}));

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_function.call(null,this$__$1);
});

cljs.core.PersistentHashMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.ArrayNodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ArrayNodeSeq.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

cljs.core.Subvec.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_rule.call(null,this$__$1);
});

goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.CSSRenderer,"_",true);

goog.object.set(mranderson047.garden.v1v3v3.garden.compiler.render_css,"_",(function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
}));

cljs.core.PersistentTreeMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.ChunkedCons.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedCons.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_at_rule.call(null,this$__$1);
});

cljs.core.RedNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.RedNode.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.PersistentVector.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_rule.call(null,this$__$1);
});

cljs.core.Keyword.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return mranderson047.garden.v1v3v3.garden.compiler.render_declaration.call(null,this$__$1);
});

cljs.core.List.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.mranderson047$garden$v1v3v3$garden$compiler$CSSRenderer$render_css$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,this$__$1);
});
/**
 * Convert a sequence of maps into CSS for use with the HTML style
 * attribute.
 */
mranderson047.garden.v1v3v3.garden.compiler.compile_style = (function mranderson047$garden$v1v3v3$garden$compiler$compile_style(ms){
return cljs.core.first.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css.call(null,mranderson047.garden.v1v3v3.garden.compiler.expand.call(null,cljs.core.reduce.call(null,cljs.core.merge,cljs.core.filter.call(null,mranderson047.garden.v1v3v3.garden.util.declaration_QMARK_,ms)))));
});
/**
 * Return a string of CSS.
 */
mranderson047.garden.v1v3v3.garden.compiler.do_compile = (function mranderson047$garden$v1v3v3$garden$compiler$do_compile(flags,rules){
var _STAR_flags_STAR_31610 = mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_;
mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_ = flags;

try{return mranderson047.garden.v1v3v3.garden.compiler.rule_join.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,mranderson047.garden.v1v3v3.garden.compiler.render_css,cljs.core.filter.call(null,mranderson047.garden.v1v3v3.garden.compiler.top_level_expression_QMARK_,mranderson047.garden.v1v3v3.garden.compiler.expand_stylesheet.call(null,rules)))));
}finally {mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_ = _STAR_flags_STAR_31610;
}});
/**
 * Prefix stylesheet with files in preamble. Not available in
 *   ClojureScript.
 */
mranderson047.garden.v1v3v3.garden.compiler.do_preamble = (function mranderson047$garden$v1v3v3$garden$compiler$do_preamble(p__31611,stylesheet){
var map__31612 = p__31611;
var map__31612__$1 = ((((!((map__31612 == null)))?(((((map__31612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31612):map__31612);
var preamble = cljs.core.get.call(null,map__31612__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
return stylesheet;
});
/**
 * Compress CSS if the pretty-print(?) flag is true.
 */
mranderson047.garden.v1v3v3.garden.compiler.do_compression = (function mranderson047$garden$v1v3v3$garden$compiler$do_compression(p__31614,stylesheet){
var map__31615 = p__31614;
var map__31615__$1 = ((((!((map__31615 == null)))?(((((map__31615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31615):map__31615);
var pretty_print_QMARK_ = cljs.core.get.call(null,map__31615__$1,new cljs.core.Keyword(null,"pretty-print?","pretty-print?",1932217158));
var pretty_print = cljs.core.get.call(null,map__31615__$1,new cljs.core.Keyword(null,"pretty-print","pretty-print",-1314067013));
if(cljs.core.truth_((function (){var or__3949__auto__ = pretty_print_QMARK_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return pretty_print;
}
})())){
return stylesheet;
} else {
return mranderson047.garden.v1v3v3.garden.compression.compress_stylesheet.call(null,stylesheet);
}
});
/**
 * Write contents of stylesheet to disk.
 */
mranderson047.garden.v1v3v3.garden.compiler.do_output_to = (function mranderson047$garden$v1v3v3$garden$compiler$do_output_to(p__31617,stylesheet){
var map__31618 = p__31617;
var map__31618__$1 = ((((!((map__31618 == null)))?(((((map__31618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31618):map__31618);
var output_to = cljs.core.get.call(null,map__31618__$1,new cljs.core.Keyword(null,"output-to","output-to",-965533968));
return stylesheet;
});
/**
 * Convert any number of Clojure data structures to CSS.
 */
mranderson047.garden.v1v3v3.garden.compiler.compile_css = (function mranderson047$garden$v1v3v3$garden$compiler$compile_css(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31625 = arguments.length;
var i__4532__auto___31626 = (0);
while(true){
if((i__4532__auto___31626 < len__4531__auto___31625)){
args__4534__auto__.push((arguments[i__4532__auto___31626]));

var G__31627 = (i__4532__auto___31626 + (1));
i__4532__auto___31626 = G__31627;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

mranderson047.garden.v1v3v3.garden.compiler.compile_css.cljs$core$IFn$_invoke$arity$variadic = (function (flags,rules){
var vec__31622 = (cljs.core.truth_((function (){var and__3938__auto__ = mranderson047.garden.v1v3v3.garden.util.hash_map_QMARK_.call(null,flags);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.some.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,flags)),cljs.core.keys.call(null,mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_));
} else {
return and__3938__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_,flags),rules], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson047.garden.v1v3v3.garden.compiler._STAR_flags_STAR_,cljs.core.cons.call(null,flags,rules)], null));
var flags__$1 = cljs.core.nth.call(null,vec__31622,(0),null);
var rules__$1 = cljs.core.nth.call(null,vec__31622,(1),null);
return mranderson047.garden.v1v3v3.garden.compiler.do_output_to.call(null,flags__$1,mranderson047.garden.v1v3v3.garden.compiler.do_compression.call(null,flags__$1,mranderson047.garden.v1v3v3.garden.compiler.do_preamble.call(null,flags__$1,mranderson047.garden.v1v3v3.garden.compiler.do_compile.call(null,flags__$1,rules__$1))));
});

mranderson047.garden.v1v3v3.garden.compiler.compile_css.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.compiler.compile_css.cljs$lang$applyTo = (function (seq31620){
var G__31621 = cljs.core.first.call(null,seq31620);
var seq31620__$1 = cljs.core.next.call(null,seq31620);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31621,seq31620__$1);
});


//# sourceMappingURL=compiler.js.map?rel=1543701292361
