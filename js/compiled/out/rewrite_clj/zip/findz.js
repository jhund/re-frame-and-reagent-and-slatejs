// Compiled by ClojureScript 1.10.339 {}
goog.provide('rewrite_clj.zip.findz');
goog.require('cljs.core');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip.whitespace');
goog.require('clojure.zip');
rewrite_clj.zip.findz.tag_predicate = (function rewrite_clj$zip$findz$tag_predicate(var_args){
var args__4534__auto__ = [];
var len__4531__auto___28165 = arguments.length;
var i__4532__auto___28166 = (0);
while(true){
if((i__4532__auto___28166 < len__4531__auto___28165)){
args__4534__auto__.push((arguments[i__4532__auto___28166]));

var G__28167 = (i__4532__auto___28166 + (1));
i__4532__auto___28166 = G__28167;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return rewrite_clj.zip.findz.tag_predicate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

rewrite_clj.zip.findz.tag_predicate.cljs$core$IFn$_invoke$arity$variadic = (function (t,p__28161){
var vec__28162 = p__28161;
var additional = cljs.core.nth.call(null,vec__28162,(0),null);
if(cljs.core.truth_(additional)){
return ((function (vec__28162,additional){
return (function (node){
var and__3938__auto__ = cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,node),t);
if(and__3938__auto__){
return additional.call(null,node);
} else {
return and__3938__auto__;
}
});
;})(vec__28162,additional))
} else {
return ((function (vec__28162,additional){
return (function (p1__28158_SHARP_){
return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,p1__28158_SHARP_),t);
});
;})(vec__28162,additional))
}
});

rewrite_clj.zip.findz.tag_predicate.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
rewrite_clj.zip.findz.tag_predicate.cljs$lang$applyTo = (function (seq28159){
var G__28160 = cljs.core.first.call(null,seq28159);
var seq28159__$1 = cljs.core.next.call(null,seq28159);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28160,seq28159__$1);
});

rewrite_clj.zip.findz.in_range_QMARK_ = (function rewrite_clj$zip$findz$in_range_QMARK_(p__28168,p__28169){
var map__28170 = p__28168;
var map__28170__$1 = ((((!((map__28170 == null)))?(((((map__28170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28170):map__28170);
var row = cljs.core.get.call(null,map__28170__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.call(null,map__28170__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var end_row = cljs.core.get.call(null,map__28170__$1,new cljs.core.Keyword(null,"end-row","end-row",-545103581));
var end_col = cljs.core.get.call(null,map__28170__$1,new cljs.core.Keyword(null,"end-col","end-col",-724155879));
var map__28171 = p__28169;
var map__28171__$1 = ((((!((map__28171 == null)))?(((((map__28171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28171):map__28171);
var r = cljs.core.get.call(null,map__28171__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var c = cljs.core.get.call(null,map__28171__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var and__3938__auto__ = (r >= row);
if(and__3938__auto__){
var and__3938__auto____$1 = (r <= end_row);
if(and__3938__auto____$1){
var and__3938__auto____$2 = ((cljs.core._EQ_.call(null,r,row))?(c >= col):true);
if(and__3938__auto____$2){
if(cljs.core._EQ_.call(null,r,end_row)){
return (c <= end_col);
} else {
return true;
}
} else {
return and__3938__auto____$2;
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});
/**
 * Find node satisfying the given predicate by repeatedly
 * applying the given movement function to the initial zipper
 * location.
 */
rewrite_clj.zip.findz.find = (function rewrite_clj$zip$findz$find(var_args){
var G__28175 = arguments.length;
switch (G__28175) {
case 2:
return rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_clj.zip.findz.find.call(null,zloc,rewrite_clj.zip.move.right,p_QMARK_);
});

rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
return cljs.core.first.call(null,cljs.core.drop_while.call(null,cljs.core.complement.call(null,p_QMARK_),cljs.core.take_while.call(null,cljs.core.complement.call(null,rewrite_clj.zip.move.end_QMARK_),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,f,zloc)))));
});

rewrite_clj.zip.findz.find.cljs$lang$maxFixedArity = 3;

/**
 * Find last node (if more than one node) that is in range of pos and
 *   satisfying the given predicate depth first from initial zipper
 *   location.
 */
rewrite_clj.zip.findz.find_last_by_pos = (function rewrite_clj$zip$findz$find_last_by_pos(var_args){
var G__28179 = arguments.length;
switch (G__28179) {
case 2:
return rewrite_clj.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$2 = (function (zloc,pos){
return rewrite_clj.zip.findz.find_last_by_pos.call(null,zloc,pos,cljs.core.constantly.call(null,true));
});

rewrite_clj.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$3 = (function (zloc,pos,p_QMARK_){
return cljs.core.last.call(null,cljs.core.filter.call(null,(function (p1__28177_SHARP_){
var and__3938__auto__ = p_QMARK_.call(null,p1__28177_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return rewrite_clj.zip.findz.in_range_QMARK_.call(null,cljs.core.meta.call(null,clojure.zip.node.call(null,p1__28177_SHARP_)),pos);
} else {
return and__3938__auto__;
}
}),cljs.core.take_while.call(null,cljs.core.complement.call(null,rewrite_clj.zip.move.end_QMARK_),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,clojure.zip.next,zloc)))));
});

rewrite_clj.zip.findz.find_last_by_pos.cljs$lang$maxFixedArity = 3;

/**
 * Find node satisfying the given predicate by traversing
 * the zipper in a depth-first way.
 */
rewrite_clj.zip.findz.find_depth_first = (function rewrite_clj$zip$findz$find_depth_first(zloc,p_QMARK_){
return rewrite_clj.zip.findz.find.call(null,zloc,rewrite_clj.zip.move.next,p_QMARK_);
});
/**
 * Find node other than the current zipper location matching
 * the given predicate by applying the given movement function
 * to the initial zipper location.
 */
rewrite_clj.zip.findz.find_next = (function rewrite_clj$zip$findz$find_next(var_args){
var G__28182 = arguments.length;
switch (G__28182) {
case 2:
return rewrite_clj.zip.findz.find_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_next.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.zip.findz.find_next.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_clj.zip.findz.find_next.call(null,zloc,rewrite_clj.zip.move.right,p_QMARK_);
});

rewrite_clj.zip.findz.find_next.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
var G__28183 = zloc;
var G__28183__$1 = (((G__28183 == null))?null:f.call(null,G__28183));
if((G__28183__$1 == null)){
return null;
} else {
return rewrite_clj.zip.findz.find.call(null,G__28183__$1,f,p_QMARK_);
}
});

rewrite_clj.zip.findz.find_next.cljs$lang$maxFixedArity = 3;

/**
 * Find node other than the current zipper location matching
 * the given predicate by traversing the zipper in a
 * depth-first way.
 */
rewrite_clj.zip.findz.find_next_depth_first = (function rewrite_clj$zip$findz$find_next_depth_first(zloc,p_QMARK_){
return rewrite_clj.zip.findz.find_next.call(null,zloc,rewrite_clj.zip.move.next,p_QMARK_);
});
/**
 * Find node with the given tag by repeatedly applying the given
 * movement function to the initial zipper location.
 */
rewrite_clj.zip.findz.find_tag = (function rewrite_clj$zip$findz$find_tag(var_args){
var G__28187 = arguments.length;
switch (G__28187) {
case 2:
return rewrite_clj.zip.findz.find_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.zip.findz.find_tag.cljs$core$IFn$_invoke$arity$2 = (function (zloc,t){
return rewrite_clj.zip.findz.find_tag.call(null,zloc,rewrite_clj.zip.move.right,t);
});

rewrite_clj.zip.findz.find_tag.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,t){
return rewrite_clj.zip.findz.find.call(null,zloc,f,(function (p1__28185_SHARP_){
return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,p1__28185_SHARP_),t);
}));
});

rewrite_clj.zip.findz.find_tag.cljs$lang$maxFixedArity = 3;

/**
 * Find node other than the current zipper location with the
 * given tag by repeatedly applying the given movement function to
 * the initial zipper location.
 */
rewrite_clj.zip.findz.find_next_tag = (function rewrite_clj$zip$findz$find_next_tag(var_args){
var G__28190 = arguments.length;
switch (G__28190) {
case 2:
return rewrite_clj.zip.findz.find_next_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_next_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.zip.findz.find_next_tag.cljs$core$IFn$_invoke$arity$2 = (function (zloc,t){
return rewrite_clj.zip.findz.find_next_tag.call(null,zloc,rewrite_clj.zip.move.right,t);
});

rewrite_clj.zip.findz.find_next_tag.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,t){
return rewrite_clj.zip.findz.find_next.call(null,zloc,f,rewrite_clj.zip.findz.tag_predicate.call(null,t));
});

rewrite_clj.zip.findz.find_next_tag.cljs$lang$maxFixedArity = 3;

/**
 * Find node with the given tag and pos depth-first from initial zipper location.
 */
rewrite_clj.zip.findz.find_tag_by_pos = (function rewrite_clj$zip$findz$find_tag_by_pos(zloc,pos,t){
return rewrite_clj.zip.findz.find_last_by_pos.call(null,zloc,pos,(function (p1__28192_SHARP_){
return cljs.core._EQ_.call(null,rewrite_clj.zip.base.tag.call(null,p1__28192_SHARP_),t);
}));
});
/**
 * Find token node matching the given predicate by applying the
 * given movement function to the initial zipper location, defaulting
 * to `right`.
 */
rewrite_clj.zip.findz.find_token = (function rewrite_clj$zip$findz$find_token(var_args){
var G__28194 = arguments.length;
switch (G__28194) {
case 2:
return rewrite_clj.zip.findz.find_token.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.zip.findz.find_token.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_clj.zip.findz.find_token.call(null,zloc,rewrite_clj.zip.move.right,p_QMARK_);
});

rewrite_clj.zip.findz.find_token.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
return rewrite_clj.zip.findz.find.call(null,zloc,f,rewrite_clj.zip.findz.tag_predicate.call(null,new cljs.core.Keyword(null,"token","token",-1211463215),p_QMARK_));
});

rewrite_clj.zip.findz.find_token.cljs$lang$maxFixedArity = 3;

/**
 * Find next token node matching the given predicate by applying the
 * given movement function to the initial zipper location, defaulting
 * to `right`.
 */
rewrite_clj.zip.findz.find_next_token = (function rewrite_clj$zip$findz$find_next_token(var_args){
var G__28197 = arguments.length;
switch (G__28197) {
case 2:
return rewrite_clj.zip.findz.find_next_token.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_next_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.zip.findz.find_next_token.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_clj.zip.findz.find_next_token.call(null,zloc,rewrite_clj.zip.move.right,p_QMARK_);
});

rewrite_clj.zip.findz.find_next_token.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
return rewrite_clj.zip.findz.find_token.call(null,f.call(null,zloc),f,p_QMARK_);
});

rewrite_clj.zip.findz.find_next_token.cljs$lang$maxFixedArity = 3;

/**
 * Find token node whose value matches the given one by applying the
 * given movement function to the initial zipper location, defaulting
 * to `right`.
 */
rewrite_clj.zip.findz.find_value = (function rewrite_clj$zip$findz$find_value(var_args){
var G__28201 = arguments.length;
switch (G__28201) {
case 2:
return rewrite_clj.zip.findz.find_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.zip.findz.find_value.cljs$core$IFn$_invoke$arity$2 = (function (zloc,v){
return rewrite_clj.zip.findz.find_value.call(null,zloc,rewrite_clj.zip.move.right,v);
});

rewrite_clj.zip.findz.find_value.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,v){
var p_QMARK_ = ((cljs.core.set_QMARK_.call(null,v))?cljs.core.comp.call(null,v,rewrite_clj.zip.base.sexpr):(function (p1__28199_SHARP_){
return cljs.core._EQ_.call(null,rewrite_clj.zip.base.sexpr.call(null,p1__28199_SHARP_),v);
}));
return rewrite_clj.zip.findz.find_token.call(null,zloc,f,p_QMARK_);
});

rewrite_clj.zip.findz.find_value.cljs$lang$maxFixedArity = 3;

/**
 * Find next token node whose value matches the given one by applying the
 * given movement function to the initial zipper location, defaulting
 * to `right`.
 */
rewrite_clj.zip.findz.find_next_value = (function rewrite_clj$zip$findz$find_next_value(var_args){
var G__28204 = arguments.length;
switch (G__28204) {
case 2:
return rewrite_clj.zip.findz.find_next_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_next_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.zip.findz.find_next_value.cljs$core$IFn$_invoke$arity$2 = (function (zloc,v){
return rewrite_clj.zip.findz.find_next_value.call(null,zloc,rewrite_clj.zip.move.right,v);
});

rewrite_clj.zip.findz.find_next_value.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,v){
return rewrite_clj.zip.findz.find_value.call(null,f.call(null,zloc),f,v);
});

rewrite_clj.zip.findz.find_next_value.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=findz.js.map?rel=1543701286809
