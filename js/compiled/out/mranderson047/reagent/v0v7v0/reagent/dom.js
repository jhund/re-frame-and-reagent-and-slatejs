// Compiled by ClojureScript 1.10.339 {}
goog.provide('mranderson047.reagent.v0v7v0.reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.util');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.template');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.batching');
goog.require('mranderson047.reagent.v0v7v0.reagent.ratom');
goog.require('mranderson047.reagent.v0v7v0.reagent.debug');
goog.require('mranderson047.reagent.v0v7v0.reagent.interop');
if((typeof mranderson047 !== 'undefined') && (typeof mranderson047.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v7v0 !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent.dom !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent.dom.imported !== 'undefined')){
} else {
mranderson047.reagent.v0v7v0.reagent.dom.imported = null;
}
mranderson047.reagent.v0v7v0.reagent.dom.module = (function mranderson047$reagent$v0v7v0$reagent$dom$module(){
if(!((mranderson047.reagent.v0v7v0.reagent.dom.imported == null))){
return mranderson047.reagent.v0v7v0.reagent.dom.imported;
} else {
if((typeof ReactDOM !== 'undefined')){
return mranderson047.reagent.v0v7v0.reagent.dom.imported = ReactDOM;
} else {
if((typeof require !== 'undefined')){
var or__3949__auto__ = mranderson047.reagent.v0v7v0.reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if((typeof mranderson047 !== 'undefined') && (typeof mranderson047.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v7v0 !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent.dom !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent.dom.roots !== 'undefined')){
} else {
mranderson047.reagent.v0v7v0.reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
mranderson047.reagent.v0v7v0.reagent.dom.unmount_comp = (function mranderson047$reagent$v0v7v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.dom.roots,cljs.core.dissoc,container);

return (mranderson047.reagent.v0v7v0.reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
mranderson047.reagent.v0v7v0.reagent.dom.render_comp = (function mranderson047$reagent$v0v7v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_29242 = mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_;
mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (mranderson047.reagent.v0v7v0.reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_29242){
return (function (){
var _STAR_always_update_STAR_29243 = mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_;
mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

mranderson047.reagent.v0v7v0.reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_29243;
}});})(_STAR_always_update_STAR_29242))
);
}finally {mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_29242;
}});
mranderson047.reagent.v0v7v0.reagent.dom.re_render_component = (function mranderson047$reagent$v0v7v0$reagent$dom$re_render_component(comp,container){
return mranderson047.reagent.v0v7v0.reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
mranderson047.reagent.v0v7v0.reagent.dom.render = (function mranderson047$reagent$v0v7v0$reagent$dom$render(var_args){
var G__29245 = arguments.length;
switch (G__29245) {
case 2:
return mranderson047.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson047.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return mranderson047.reagent.v0v7v0.reagent.dom.render.call(null,comp,container,null);
});

mranderson047.reagent.v0v7v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
mranderson047.reagent.v0v7v0.reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return mranderson047.reagent.v0v7v0.reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return mranderson047.reagent.v0v7v0.reagent.dom.render_comp.call(null,f,container,callback);
});

mranderson047.reagent.v0v7v0.reagent.dom.render.cljs$lang$maxFixedArity = 3;

mranderson047.reagent.v0v7v0.reagent.dom.unmount_component_at_node = (function mranderson047$reagent$v0v7v0$reagent$dom$unmount_component_at_node(container){
return mranderson047.reagent.v0v7v0.reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
mranderson047.reagent.v0v7v0.reagent.dom.dom_node = (function mranderson047$reagent$v0v7v0$reagent$dom$dom_node(this$){
return (mranderson047.reagent.v0v7v0.reagent.dom.module.call(null)["findDOMNode"])(this$);
});
mranderson047.reagent.v0v7v0.reagent.impl.template.find_dom_node = mranderson047.reagent.v0v7v0.reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
mranderson047.reagent.v0v7v0.reagent.dom.force_update_all = (function mranderson047$reagent$v0v7v0$reagent$dom$force_update_all(){
mranderson047.reagent.v0v7v0.reagent.ratom.flush_BANG_.call(null);

var seq__29247_29251 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,mranderson047.reagent.v0v7v0.reagent.dom.roots)));
var chunk__29248_29252 = null;
var count__29249_29253 = (0);
var i__29250_29254 = (0);
while(true){
if((i__29250_29254 < count__29249_29253)){
var v_29255 = cljs.core._nth.call(null,chunk__29248_29252,i__29250_29254);
cljs.core.apply.call(null,mranderson047.reagent.v0v7v0.reagent.dom.re_render_component,v_29255);


var G__29256 = seq__29247_29251;
var G__29257 = chunk__29248_29252;
var G__29258 = count__29249_29253;
var G__29259 = (i__29250_29254 + (1));
seq__29247_29251 = G__29256;
chunk__29248_29252 = G__29257;
count__29249_29253 = G__29258;
i__29250_29254 = G__29259;
continue;
} else {
var temp__5457__auto___29260 = cljs.core.seq.call(null,seq__29247_29251);
if(temp__5457__auto___29260){
var seq__29247_29261__$1 = temp__5457__auto___29260;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29247_29261__$1)){
var c__4351__auto___29262 = cljs.core.chunk_first.call(null,seq__29247_29261__$1);
var G__29263 = cljs.core.chunk_rest.call(null,seq__29247_29261__$1);
var G__29264 = c__4351__auto___29262;
var G__29265 = cljs.core.count.call(null,c__4351__auto___29262);
var G__29266 = (0);
seq__29247_29251 = G__29263;
chunk__29248_29252 = G__29264;
count__29249_29253 = G__29265;
i__29250_29254 = G__29266;
continue;
} else {
var v_29267 = cljs.core.first.call(null,seq__29247_29261__$1);
cljs.core.apply.call(null,mranderson047.reagent.v0v7v0.reagent.dom.re_render_component,v_29267);


var G__29268 = cljs.core.next.call(null,seq__29247_29261__$1);
var G__29269 = null;
var G__29270 = (0);
var G__29271 = (0);
seq__29247_29251 = G__29268;
chunk__29248_29252 = G__29269;
count__29249_29253 = G__29270;
i__29250_29254 = G__29271;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1543701289361
