// Compiled by ClojureScript 1.10.339 {}
goog.provide('mranderson047.reagent.v0v7v0.reagent.impl.component');
goog.require('cljs.core');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.util');
goog.require('mranderson047.reagent.v0v7v0.reagent.impl.batching');
goog.require('mranderson047.reagent.v0v7v0.reagent.ratom');
goog.require('mranderson047.reagent.v0v7v0.reagent.interop');
goog.require('mranderson047.reagent.v0v7v0.reagent.debug');
mranderson047.reagent.v0v7v0.reagent.impl.component.shallow_obj_to_map = (function mranderson047$reagent$v0v7v0$reagent$impl$component$shallow_obj_to_map(o){
var ks = cljs.core.js_keys.call(null,o);
var len = ks.length;
var m = cljs.core.PersistentArrayMap.EMPTY;
var i = (0);
while(true){
if((i < len)){
var k = (ks[i]);
var G__29171 = cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,k),(o[k]));
var G__29172 = (i + (1));
m = G__29171;
i = G__29172;
continue;
} else {
return m;
}
break;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.extract_props = (function mranderson047$reagent$v0v7v0$reagent$impl$component$extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.extract_children = (function mranderson047$reagent$v0v7v0$reagent$impl$component$extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = (((((p == null)) || (cljs.core.map_QMARK_.call(null,p))))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.props_argv = (function mranderson047$reagent$v0v7v0$reagent$impl$component$props_argv(c,p){
var temp__5459__auto__ = (p["argv"]);
if((temp__5459__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.constructor,mranderson047.reagent.v0v7v0.reagent.impl.component.shallow_obj_to_map.call(null,p)], null);
} else {
var a = temp__5459__auto__;
return a;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.get_argv = (function mranderson047$reagent$v0v7v0$reagent$impl$component$get_argv(c){
return mranderson047.reagent.v0v7v0.reagent.impl.component.props_argv.call(null,c,(c["props"]));
});
mranderson047.reagent.v0v7v0.reagent.impl.component.get_props = (function mranderson047$reagent$v0v7v0$reagent$impl$component$get_props(c){
var p = (c["props"]);
var temp__5459__auto__ = (p["argv"]);
if((temp__5459__auto__ == null)){
return mranderson047.reagent.v0v7v0.reagent.impl.component.shallow_obj_to_map.call(null,p);
} else {
var v = temp__5459__auto__;
return mranderson047.reagent.v0v7v0.reagent.impl.component.extract_props.call(null,v);
}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.get_children = (function mranderson047$reagent$v0v7v0$reagent$impl$component$get_children(c){
var p = (c["props"]);
var temp__5459__auto__ = (p["argv"]);
if((temp__5459__auto__ == null)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(mranderson047.reagent.v0v7v0.reagent.impl.util.react["Children"]["toArray"])((p["children"])));
} else {
var v = temp__5459__auto__;
return mranderson047.reagent.v0v7v0.reagent.impl.component.extract_children.call(null,v);
}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.reagent_class_QMARK_ = (function mranderson047$reagent$v0v7v0$reagent$impl$component$reagent_class_QMARK_(c){
return ((cljs.core.fn_QMARK_.call(null,c)) && (!(((function (){var G__29174 = c;
var G__29174__$1 = (((G__29174 == null))?null:G__29174.prototype);
if((G__29174__$1 == null)){
return null;
} else {
return (G__29174__$1["reagentRender"]);
}
})() == null))));
});
mranderson047.reagent.v0v7v0.reagent.impl.component.react_class_QMARK_ = (function mranderson047$reagent$v0v7v0$reagent$impl$component$react_class_QMARK_(c){
return ((cljs.core.fn_QMARK_.call(null,c)) && (!(((function (){var G__29176 = c;
var G__29176__$1 = (((G__29176 == null))?null:G__29176.prototype);
if((G__29176__$1 == null)){
return null;
} else {
return (G__29176__$1["render"]);
}
})() == null))));
});
mranderson047.reagent.v0v7v0.reagent.impl.component.reagent_component_QMARK_ = (function mranderson047$reagent$v0v7v0$reagent$impl$component$reagent_component_QMARK_(c){
return !(((c["reagentRender"]) == null));
});
mranderson047.reagent.v0v7v0.reagent.impl.component.cached_react_class = (function mranderson047$reagent$v0v7v0$reagent$impl$component$cached_react_class(c){
return (c["cljsReactClass"]);
});
mranderson047.reagent.v0v7v0.reagent.impl.component.cache_react_class = (function mranderson047$reagent$v0v7v0$reagent$impl$component$cache_react_class(c,constructor$){
return (c["cljsReactClass"] = constructor$);
});
mranderson047.reagent.v0v7v0.reagent.impl.component.state_atom = (function mranderson047$reagent$v0v7v0$reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if(!((sa == null))){
return sa;
} else {
return (this$["cljsState"] = mranderson047.reagent.v0v7v0.reagent.ratom.atom.call(null,null));
}
});
if((typeof mranderson047 !== 'undefined') && (typeof mranderson047.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v7v0 !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent.impl !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent.impl.component !== 'undefined') && (typeof mranderson047.reagent.v0v7v0.reagent.impl.component.as_element !== 'undefined')){
} else {
mranderson047.reagent.v0v7v0.reagent.impl.component.as_element = null;
}
mranderson047.reagent.v0v7v0.reagent.impl.component.wrap_render = (function mranderson047$reagent$v0v7v0$reagent$impl$component$wrap_render(c){
while(true){
var f = (c["reagentRender"]);
var _ = ((cljs.core.ifn_QMARK_.call(null,f))?null:(function(){throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected something callable, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,f))].join('')),"\n","(clojure.core/ifn? f)"].join('')))})());
var res = (((c["cljsLegacyRender"]) === true)?f.call(c,c):(function (){var v = mranderson047.reagent.v0v7v0.reagent.impl.component.get_argv.call(null,c);
var n = cljs.core.count.call(null,v);
var G__29177 = n;
switch (G__29177) {
case (1):
return f.call(c);

break;
case (2):
return f.call(c,cljs.core.nth.call(null,v,(1)));

break;
case (3):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)));

break;
case (4):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)),cljs.core.nth.call(null,v,(3)));

break;
case (5):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)),cljs.core.nth.call(null,v,(3)),cljs.core.nth.call(null,v,(4)));

break;
default:
return f.apply(c,cljs.core.into_array.call(null,v).slice((1)));

}
})());
if(cljs.core.vector_QMARK_.call(null,res)){
return mranderson047.reagent.v0v7v0.reagent.impl.component.as_element.call(null,res);
} else {
if(cljs.core.ifn_QMARK_.call(null,res)){
var f__$1 = ((mranderson047.reagent.v0v7v0.reagent.impl.component.reagent_class_QMARK_.call(null,res))?((function (c,f,_,res){
return (function() { 
var G__29179__delegate = function (args){
return mranderson047.reagent.v0v7v0.reagent.impl.component.as_element.call(null,cljs.core.apply.call(null,cljs.core.vector,res,args));
};
var G__29179 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29180__i = 0, G__29180__a = new Array(arguments.length -  0);
while (G__29180__i < G__29180__a.length) {G__29180__a[G__29180__i] = arguments[G__29180__i + 0]; ++G__29180__i;}
  args = new cljs.core.IndexedSeq(G__29180__a,0,null);
} 
return G__29179__delegate.call(this,args);};
G__29179.cljs$lang$maxFixedArity = 0;
G__29179.cljs$lang$applyTo = (function (arglist__29181){
var args = cljs.core.seq(arglist__29181);
return G__29179__delegate(args);
});
G__29179.cljs$core$IFn$_invoke$arity$variadic = G__29179__delegate;
return G__29179;
})()
;})(c,f,_,res))
:res);
(c["reagentRender"] = f__$1);

var G__29182 = c;
c = G__29182;
continue;
} else {
return res;

}
}
break;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.do_render = (function mranderson047$reagent$v0v7v0$reagent$impl$component$do_render(c){
var _STAR_current_component_STAR_29183 = mranderson047.reagent.v0v7v0.reagent.impl.component._STAR_current_component_STAR_;
mranderson047.reagent.v0v7v0.reagent.impl.component._STAR_current_component_STAR_ = c;

try{var ok = [false];
try{var res = mranderson047.reagent.v0v7v0.reagent.impl.component.wrap_render.call(null,c);
(ok[(0)] = true);

return res;
}finally {if(cljs.core.truth_((ok[(0)]))){
} else {
if(cljs.core.truth_(mranderson047.reagent.v0v7v0.reagent.debug.has_console)){
(cljs.core.truth_(mranderson047.reagent.v0v7v0.reagent.debug.tracking)?mranderson047.reagent.v0v7v0.reagent.debug.track_console:console).error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Error rendering component",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v7v0.reagent.impl.component.comp_name.call(null))].join(''))].join(''));
} else {
}
}
}
}finally {mranderson047.reagent.v0v7v0.reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_29183;
}});
mranderson047.reagent.v0v7v0.reagent.impl.component.rat_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null);
mranderson047.reagent.v0v7v0.reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function mranderson047$reagent$v0v7v0$reagent$impl$component$render(){
var c = this;
if(mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_non_reactive_STAR_){
return mranderson047.reagent.v0v7v0.reagent.impl.component.do_render.call(null,c);
} else {
var rat = (c["cljsRatom"]);
mranderson047.reagent.v0v7v0.reagent.impl.batching.mark_rendered.call(null,c);

if((rat == null)){
return mranderson047.reagent.v0v7v0.reagent.ratom.run_in_reaction.call(null,((function (rat,c){
return (function (){
return mranderson047.reagent.v0v7v0.reagent.impl.component.do_render.call(null,c);
});})(rat,c))
,c,"cljsRatom",mranderson047.reagent.v0v7v0.reagent.impl.batching.queue_render,mranderson047.reagent.v0v7v0.reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
})], null);
mranderson047.reagent.v0v7v0.reagent.impl.component.custom_wrapper = (function mranderson047$reagent$v0v7v0$reagent$impl$component$custom_wrapper(key,f){
var G__29184 = key;
var G__29184__$1 = (((G__29184 instanceof cljs.core.Keyword))?G__29184.fqn:null);
switch (G__29184__$1) {
case "getDefaultProps":
throw (new Error("getDefaultProps not supported"));

break;
case "getInitialState":
return ((function (G__29184,G__29184__$1){
return (function mranderson047$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_getInitialState(){
var c = this;
return cljs.core.reset_BANG_.call(null,mranderson047.reagent.v0v7v0.reagent.impl.component.state_atom.call(null,c),f.call(c,c));
});
;})(G__29184,G__29184__$1))

break;
case "componentWillReceiveProps":
return ((function (G__29184,G__29184__$1){
return (function mranderson047$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,mranderson047.reagent.v0v7v0.reagent.impl.component.props_argv.call(null,c,nextprops));
});
;})(G__29184,G__29184__$1))

break;
case "shouldComponentUpdate":
return ((function (G__29184,G__29184__$1){
return (function mranderson047$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_shouldComponentUpdate(nextprops,nextstate){
var or__3949__auto__ = mranderson047.reagent.v0v7v0.reagent.impl.util._STAR_always_update_STAR_;
if(or__3949__auto__){
return or__3949__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
var noargv = (((old_argv == null)) || ((new_argv == null)));
if((f == null)){
return ((noargv) || (cljs.core.not_EQ_.call(null,old_argv,new_argv)));
} else {
if(noargv){
return f.call(c,c,mranderson047.reagent.v0v7v0.reagent.impl.component.get_argv.call(null,c),mranderson047.reagent.v0v7v0.reagent.impl.component.props_argv.call(null,c,nextprops));
} else {
return f.call(c,c,old_argv,new_argv);

}
}
}
});
;})(G__29184,G__29184__$1))

break;
case "componentWillUpdate":
return ((function (G__29184,G__29184__$1){
return (function mranderson047$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops){
var c = this;
return f.call(c,c,mranderson047.reagent.v0v7v0.reagent.impl.component.props_argv.call(null,c,nextprops));
});
;})(G__29184,G__29184__$1))

break;
case "componentDidUpdate":
return ((function (G__29184,G__29184__$1){
return (function mranderson047$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_componentDidUpdate(oldprops){
var c = this;
return f.call(c,c,mranderson047.reagent.v0v7v0.reagent.impl.component.props_argv.call(null,c,oldprops));
});
;})(G__29184,G__29184__$1))

break;
case "componentWillMount":
return ((function (G__29184,G__29184__$1){
return (function mranderson047$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
(c["cljsMountOrder"] = mranderson047.reagent.v0v7v0.reagent.impl.batching.next_mount_count.call(null));

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
;})(G__29184,G__29184__$1))

break;
case "componentDidMount":
return ((function (G__29184,G__29184__$1){
return (function mranderson047$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_componentDidMount(){
var c = this;
return f.call(c,c);
});
;})(G__29184,G__29184__$1))

break;
case "componentWillUnmount":
return ((function (G__29184,G__29184__$1){
return (function mranderson047$reagent$v0v7v0$reagent$impl$component$custom_wrapper_$_componentWillUnmount(){
var c = this;
var G__29185_29187 = (c["cljsRatom"]);
if((G__29185_29187 == null)){
} else {
mranderson047.reagent.v0v7v0.reagent.ratom.dispose_BANG_.call(null,G__29185_29187);
}

mranderson047.reagent.v0v7v0.reagent.impl.batching.mark_rendered.call(null,c);

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
;})(G__29184,G__29184__$1))

break;
default:
return null;

}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.get_wrapper = (function mranderson047$reagent$v0v7v0$reagent$impl$component$get_wrapper(key,f,name){
var wrap = mranderson047.reagent.v0v7v0.reagent.impl.component.custom_wrapper.call(null,key,f);
if(cljs.core.truth_((function (){var and__3938__auto__ = wrap;
if(cljs.core.truth_(and__3938__auto__)){
return f;
} else {
return and__3938__auto__;
}
})())){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected something callable, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,f))].join('')),"\n","(clojure.core/ifn? f)"].join('')));
}
} else {
}

var or__3949__auto__ = wrap;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return f;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),null,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null);
mranderson047.reagent.v0v7v0.reagent.impl.component.dash_to_camel = mranderson047.reagent.v0v7v0.reagent.impl.util.memoize_1.call(null,mranderson047.reagent.v0v7v0.reagent.impl.util.dash_to_camel);
mranderson047.reagent.v0v7v0.reagent.impl.component.camelify_map_keys = (function mranderson047$reagent$v0v7v0$reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,mranderson047.reagent.v0v7v0.reagent.impl.component.dash_to_camel.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
mranderson047.reagent.v0v7v0.reagent.impl.component.add_obligatory = (function mranderson047$reagent$v0v7v0$reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.call(null,mranderson047.reagent.v0v7v0.reagent.impl.component.obligatory,fun_map);
});
mranderson047.reagent.v0v7v0.reagent.impl.component.wrap_funs = (function mranderson047$reagent$v0v7v0$reagent$impl$component$wrap_funs(fmap){
var renders_29189 = cljs.core.select_keys.call(null,fmap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104)], null));
var render_fun_29190 = cljs.core.first.call(null,cljs.core.vals.call(null,renders_29189));
if((cljs.core.count.call(null,renders_29189) > (0))){
} else {
throw (new Error(["Assert failed: ","Missing reagent-render","\n","(pos? (count renders))"].join('')));
}

if(((1) === cljs.core.count.call(null,renders_29189))){
} else {
throw (new Error(["Assert failed: ","Too many render functions supplied","\n","(== 1 (count renders))"].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,render_fun_29190)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected something callable, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,render_fun_29190))].join('')),"\n","(clojure.core/ifn? render-fun)"].join('')));
}


var render_fun = (function (){var or__3949__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var legacy_render = (render_fun == null);
var render_fun__$1 = (function (){var or__3949__auto__ = render_fun;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return mranderson047.reagent.v0v7v0.reagent.impl.util.fun_name.call(null,render_fun__$1);
}
})())].join('');
var name__$1 = (function (){var G__29188 = name;
switch (G__29188) {
case "":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"reagent"))].join('');

break;
default:
return name;

}
})();
var fmap__$1 = cljs.core.reduce_kv.call(null,((function (render_fun,legacy_render,render_fun__$1,name,name__$1){
return (function (m,k,v){
return cljs.core.assoc.call(null,m,k,mranderson047.reagent.v0v7v0.reagent.impl.component.get_wrapper.call(null,k,v,name__$1));
});})(render_fun,legacy_render,render_fun__$1,name,name__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap);
return cljs.core.assoc.call(null,fmap__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name__$1,new cljs.core.Keyword(null,"autobind","autobind",-570650245),false,new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613),legacy_render,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),render_fun__$1,new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v7v0.reagent.impl.component.static_fns));
});
mranderson047.reagent.v0v7v0.reagent.impl.component.map_to_js = (function mranderson047$reagent$v0v7v0$reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv.call(null,(function (o,k,v){
var G__29192 = o;
(G__29192[cljs.core.name.call(null,k)] = v);

return G__29192;
}),({}),m);
});
mranderson047.reagent.v0v7v0.reagent.impl.component.cljsify = (function mranderson047$reagent$v0v7v0$reagent$impl$component$cljsify(body){
return mranderson047.reagent.v0v7v0.reagent.impl.component.map_to_js.call(null,mranderson047.reagent.v0v7v0.reagent.impl.component.wrap_funs.call(null,mranderson047.reagent.v0v7v0.reagent.impl.component.add_obligatory.call(null,mranderson047.reagent.v0v7v0.reagent.impl.component.camelify_map_keys.call(null,body))));
});
mranderson047.reagent.v0v7v0.reagent.impl.component.create_class = (function mranderson047$reagent$v0v7v0$reagent$impl$component$create_class(body){
if(cljs.core.map_QMARK_.call(null,body)){
} else {
throw (new Error("Assert failed: (map? body)"));
}

return mranderson047.reagent.v0v7v0.reagent.impl.util.create_class.call(null,mranderson047.reagent.v0v7v0.reagent.impl.component.cljsify.call(null,body));
});
mranderson047.reagent.v0v7v0.reagent.impl.component.component_path = (function mranderson047$reagent$v0v7v0$reagent$impl$component$component_path(c){
var elem = (function (){var G__29193 = (function (){var or__3949__auto__ = (function (){var G__29195 = c;
if((G__29195 == null)){
return null;
} else {
return (G__29195["_reactInternalInstance"]);
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return c;
}
})();
if((G__29193 == null)){
return null;
} else {
return (G__29193["_currentElement"]);
}
})();
var name = (function (){var G__29196 = elem;
var G__29196__$1 = (((G__29196 == null))?null:(G__29196["type"]));
if((G__29196__$1 == null)){
return null;
} else {
return (G__29196__$1["displayName"]);
}
})();
var path = (function (){var G__29197 = elem;
var G__29197__$1 = (((G__29197 == null))?null:(G__29197["_owner"]));
var G__29197__$2 = (((G__29197__$1 == null))?null:mranderson047.reagent.v0v7v0.reagent.impl.component.component_path.call(null,G__29197__$1));
if((G__29197__$2 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29197__$2)," > "].join('');
}
})();
var res = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.comp_name = (function mranderson047$reagent$v0v7v0$reagent$impl$component$comp_name(){
var c = mranderson047.reagent.v0v7v0.reagent.impl.component._STAR_current_component_STAR_;
var n = (function (){var or__3949__auto__ = mranderson047.reagent.v0v7v0.reagent.impl.component.component_path.call(null,c);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var G__29198 = c;
var G__29198__$1 = (((G__29198 == null))?null:G__29198.constructor);
if((G__29198__$1 == null)){
return null;
} else {
return mranderson047.reagent.v0v7v0.reagent.impl.util.fun_name.call(null,G__29198__$1);
}
}
})();
if(!(cljs.core.empty_QMARK_.call(null,n))){
return [" (in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),")"].join('');
} else {
return "";
}

});
mranderson047.reagent.v0v7v0.reagent.impl.component.fn_to_class = (function mranderson047$reagent$v0v7v0$reagent$impl$component$fn_to_class(f){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected something callable, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,f))].join('')),"\n","(clojure.core/ifn? f)"].join('')));
}

if(!(!(((mranderson047.reagent.v0v7v0.reagent.impl.component.react_class_QMARK_.call(null,f)) && (!(mranderson047.reagent.v0v7v0.reagent.impl.component.reagent_class_QMARK_.call(null,f))))))){
if(cljs.core.truth_(mranderson047.reagent.v0v7v0.reagent.debug.has_console)){
(cljs.core.truth_(mranderson047.reagent.v0v7v0.reagent.debug.tracking)?mranderson047.reagent.v0v7v0.reagent.debug.track_console:console).warn(["Warning: ","Using native React classes directly in Hiccup forms ","is not supported. Use create-element or ","adapt-react-class instead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var n = mranderson047.reagent.v0v7v0.reagent.impl.util.fun_name.call(null,f);
if(cljs.core.empty_QMARK_.call(null,n)){
return f;
} else {
return n;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson047.reagent.v0v7v0.reagent.impl.component.comp_name.call(null))].join(''));
} else {
}
} else {
}

if(mranderson047.reagent.v0v7v0.reagent.impl.component.reagent_class_QMARK_.call(null,f)){
return mranderson047.reagent.v0v7v0.reagent.impl.component.cache_react_class.call(null,f,f);
} else {
var spec = cljs.core.meta.call(null,f);
var withrender = cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),f);
var res = mranderson047.reagent.v0v7v0.reagent.impl.component.create_class.call(null,withrender);
return mranderson047.reagent.v0v7v0.reagent.impl.component.cache_react_class.call(null,f,res);
}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.as_class = (function mranderson047$reagent$v0v7v0$reagent$impl$component$as_class(tag){
var temp__5459__auto__ = mranderson047.reagent.v0v7v0.reagent.impl.component.cached_react_class.call(null,tag);
if((temp__5459__auto__ == null)){
return mranderson047.reagent.v0v7v0.reagent.impl.component.fn_to_class.call(null,tag);
} else {
var cached_class = temp__5459__auto__;
return cached_class;
}
});
mranderson047.reagent.v0v7v0.reagent.impl.component.reactify_component = (function mranderson047$reagent$v0v7v0$reagent$impl$component$reactify_component(comp){
if(mranderson047.reagent.v0v7v0.reagent.impl.component.react_class_QMARK_.call(null,comp)){
return comp;
} else {
return mranderson047.reagent.v0v7v0.reagent.impl.component.as_class.call(null,comp);
}
});

//# sourceMappingURL=component.js.map?rel=1543701289197
