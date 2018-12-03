// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3949__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30004_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30004_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30005 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30006 = null;
var count__30007 = (0);
var i__30008 = (0);
while(true){
if((i__30008 < count__30007)){
var n = cljs.core._nth.call(null,chunk__30006,i__30008);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30009 = seq__30005;
var G__30010 = chunk__30006;
var G__30011 = count__30007;
var G__30012 = (i__30008 + (1));
seq__30005 = G__30009;
chunk__30006 = G__30010;
count__30007 = G__30011;
i__30008 = G__30012;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30005);
if(temp__5457__auto__){
var seq__30005__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30005__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__30005__$1);
var G__30013 = cljs.core.chunk_rest.call(null,seq__30005__$1);
var G__30014 = c__4351__auto__;
var G__30015 = cljs.core.count.call(null,c__4351__auto__);
var G__30016 = (0);
seq__30005 = G__30013;
chunk__30006 = G__30014;
count__30007 = G__30015;
i__30008 = G__30016;
continue;
} else {
var n = cljs.core.first.call(null,seq__30005__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30017 = cljs.core.next.call(null,seq__30005__$1);
var G__30018 = null;
var G__30019 = (0);
var G__30020 = (0);
seq__30005 = G__30017;
chunk__30006 = G__30018;
count__30007 = G__30019;
i__30008 = G__30020;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__30021){
var vec__30022 = p__30021;
var _ = cljs.core.nth.call(null,vec__30022,(0),null);
var v = cljs.core.nth.call(null,vec__30022,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__30025){
var vec__30026 = p__30025;
var k = cljs.core.nth.call(null,vec__30026,(0),null);
var v = cljs.core.nth.call(null,vec__30026,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30038_30046 = cljs.core.seq.call(null,deps);
var chunk__30039_30047 = null;
var count__30040_30048 = (0);
var i__30041_30049 = (0);
while(true){
if((i__30041_30049 < count__30040_30048)){
var dep_30050 = cljs.core._nth.call(null,chunk__30039_30047,i__30041_30049);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_30050;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30050));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30050,(depth + (1)),state);
} else {
}


var G__30051 = seq__30038_30046;
var G__30052 = chunk__30039_30047;
var G__30053 = count__30040_30048;
var G__30054 = (i__30041_30049 + (1));
seq__30038_30046 = G__30051;
chunk__30039_30047 = G__30052;
count__30040_30048 = G__30053;
i__30041_30049 = G__30054;
continue;
} else {
var temp__5457__auto___30055 = cljs.core.seq.call(null,seq__30038_30046);
if(temp__5457__auto___30055){
var seq__30038_30056__$1 = temp__5457__auto___30055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30038_30056__$1)){
var c__4351__auto___30057 = cljs.core.chunk_first.call(null,seq__30038_30056__$1);
var G__30058 = cljs.core.chunk_rest.call(null,seq__30038_30056__$1);
var G__30059 = c__4351__auto___30057;
var G__30060 = cljs.core.count.call(null,c__4351__auto___30057);
var G__30061 = (0);
seq__30038_30046 = G__30058;
chunk__30039_30047 = G__30059;
count__30040_30048 = G__30060;
i__30041_30049 = G__30061;
continue;
} else {
var dep_30062 = cljs.core.first.call(null,seq__30038_30056__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_30062;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30062));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30062,(depth + (1)),state);
} else {
}


var G__30063 = cljs.core.next.call(null,seq__30038_30056__$1);
var G__30064 = null;
var G__30065 = (0);
var G__30066 = (0);
seq__30038_30046 = G__30063;
chunk__30039_30047 = G__30064;
count__30040_30048 = G__30065;
i__30041_30049 = G__30066;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30042){
var vec__30043 = p__30042;
var seq__30044 = cljs.core.seq.call(null,vec__30043);
var first__30045 = cljs.core.first.call(null,seq__30044);
var seq__30044__$1 = cljs.core.next.call(null,seq__30044);
var x = first__30045;
var xs = seq__30044__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30043,seq__30044,first__30045,seq__30044__$1,x,xs,get_deps__$1){
return (function (p1__30029_SHARP_){
return clojure.set.difference.call(null,p1__30029_SHARP_,x);
});})(vec__30043,seq__30044,first__30045,seq__30044__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30067 = cljs.core.seq.call(null,provides);
var chunk__30068 = null;
var count__30069 = (0);
var i__30070 = (0);
while(true){
if((i__30070 < count__30069)){
var prov = cljs.core._nth.call(null,chunk__30068,i__30070);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30071_30079 = cljs.core.seq.call(null,requires);
var chunk__30072_30080 = null;
var count__30073_30081 = (0);
var i__30074_30082 = (0);
while(true){
if((i__30074_30082 < count__30073_30081)){
var req_30083 = cljs.core._nth.call(null,chunk__30072_30080,i__30074_30082);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30083,prov);


var G__30084 = seq__30071_30079;
var G__30085 = chunk__30072_30080;
var G__30086 = count__30073_30081;
var G__30087 = (i__30074_30082 + (1));
seq__30071_30079 = G__30084;
chunk__30072_30080 = G__30085;
count__30073_30081 = G__30086;
i__30074_30082 = G__30087;
continue;
} else {
var temp__5457__auto___30088 = cljs.core.seq.call(null,seq__30071_30079);
if(temp__5457__auto___30088){
var seq__30071_30089__$1 = temp__5457__auto___30088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30071_30089__$1)){
var c__4351__auto___30090 = cljs.core.chunk_first.call(null,seq__30071_30089__$1);
var G__30091 = cljs.core.chunk_rest.call(null,seq__30071_30089__$1);
var G__30092 = c__4351__auto___30090;
var G__30093 = cljs.core.count.call(null,c__4351__auto___30090);
var G__30094 = (0);
seq__30071_30079 = G__30091;
chunk__30072_30080 = G__30092;
count__30073_30081 = G__30093;
i__30074_30082 = G__30094;
continue;
} else {
var req_30095 = cljs.core.first.call(null,seq__30071_30089__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30095,prov);


var G__30096 = cljs.core.next.call(null,seq__30071_30089__$1);
var G__30097 = null;
var G__30098 = (0);
var G__30099 = (0);
seq__30071_30079 = G__30096;
chunk__30072_30080 = G__30097;
count__30073_30081 = G__30098;
i__30074_30082 = G__30099;
continue;
}
} else {
}
}
break;
}


var G__30100 = seq__30067;
var G__30101 = chunk__30068;
var G__30102 = count__30069;
var G__30103 = (i__30070 + (1));
seq__30067 = G__30100;
chunk__30068 = G__30101;
count__30069 = G__30102;
i__30070 = G__30103;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30067);
if(temp__5457__auto__){
var seq__30067__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30067__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__30067__$1);
var G__30104 = cljs.core.chunk_rest.call(null,seq__30067__$1);
var G__30105 = c__4351__auto__;
var G__30106 = cljs.core.count.call(null,c__4351__auto__);
var G__30107 = (0);
seq__30067 = G__30104;
chunk__30068 = G__30105;
count__30069 = G__30106;
i__30070 = G__30107;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30067__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30075_30108 = cljs.core.seq.call(null,requires);
var chunk__30076_30109 = null;
var count__30077_30110 = (0);
var i__30078_30111 = (0);
while(true){
if((i__30078_30111 < count__30077_30110)){
var req_30112 = cljs.core._nth.call(null,chunk__30076_30109,i__30078_30111);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30112,prov);


var G__30113 = seq__30075_30108;
var G__30114 = chunk__30076_30109;
var G__30115 = count__30077_30110;
var G__30116 = (i__30078_30111 + (1));
seq__30075_30108 = G__30113;
chunk__30076_30109 = G__30114;
count__30077_30110 = G__30115;
i__30078_30111 = G__30116;
continue;
} else {
var temp__5457__auto___30117__$1 = cljs.core.seq.call(null,seq__30075_30108);
if(temp__5457__auto___30117__$1){
var seq__30075_30118__$1 = temp__5457__auto___30117__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30075_30118__$1)){
var c__4351__auto___30119 = cljs.core.chunk_first.call(null,seq__30075_30118__$1);
var G__30120 = cljs.core.chunk_rest.call(null,seq__30075_30118__$1);
var G__30121 = c__4351__auto___30119;
var G__30122 = cljs.core.count.call(null,c__4351__auto___30119);
var G__30123 = (0);
seq__30075_30108 = G__30120;
chunk__30076_30109 = G__30121;
count__30077_30110 = G__30122;
i__30078_30111 = G__30123;
continue;
} else {
var req_30124 = cljs.core.first.call(null,seq__30075_30118__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30124,prov);


var G__30125 = cljs.core.next.call(null,seq__30075_30118__$1);
var G__30126 = null;
var G__30127 = (0);
var G__30128 = (0);
seq__30075_30108 = G__30125;
chunk__30076_30109 = G__30126;
count__30077_30110 = G__30127;
i__30078_30111 = G__30128;
continue;
}
} else {
}
}
break;
}


var G__30129 = cljs.core.next.call(null,seq__30067__$1);
var G__30130 = null;
var G__30131 = (0);
var G__30132 = (0);
seq__30067 = G__30129;
chunk__30068 = G__30130;
count__30069 = G__30131;
i__30070 = G__30132;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30133_30137 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30134_30138 = null;
var count__30135_30139 = (0);
var i__30136_30140 = (0);
while(true){
if((i__30136_30140 < count__30135_30139)){
var ns_30141 = cljs.core._nth.call(null,chunk__30134_30138,i__30136_30140);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30141);


var G__30142 = seq__30133_30137;
var G__30143 = chunk__30134_30138;
var G__30144 = count__30135_30139;
var G__30145 = (i__30136_30140 + (1));
seq__30133_30137 = G__30142;
chunk__30134_30138 = G__30143;
count__30135_30139 = G__30144;
i__30136_30140 = G__30145;
continue;
} else {
var temp__5457__auto___30146 = cljs.core.seq.call(null,seq__30133_30137);
if(temp__5457__auto___30146){
var seq__30133_30147__$1 = temp__5457__auto___30146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30133_30147__$1)){
var c__4351__auto___30148 = cljs.core.chunk_first.call(null,seq__30133_30147__$1);
var G__30149 = cljs.core.chunk_rest.call(null,seq__30133_30147__$1);
var G__30150 = c__4351__auto___30148;
var G__30151 = cljs.core.count.call(null,c__4351__auto___30148);
var G__30152 = (0);
seq__30133_30137 = G__30149;
chunk__30134_30138 = G__30150;
count__30135_30139 = G__30151;
i__30136_30140 = G__30152;
continue;
} else {
var ns_30153 = cljs.core.first.call(null,seq__30133_30147__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30153);


var G__30154 = cljs.core.next.call(null,seq__30133_30147__$1);
var G__30155 = null;
var G__30156 = (0);
var G__30157 = (0);
seq__30133_30137 = G__30154;
chunk__30134_30138 = G__30155;
count__30135_30139 = G__30156;
i__30136_30140 = G__30157;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30158__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30159__i = 0, G__30159__a = new Array(arguments.length -  0);
while (G__30159__i < G__30159__a.length) {G__30159__a[G__30159__i] = arguments[G__30159__i + 0]; ++G__30159__i;}
  args = new cljs.core.IndexedSeq(G__30159__a,0,null);
} 
return G__30158__delegate.call(this,args);};
G__30158.cljs$lang$maxFixedArity = 0;
G__30158.cljs$lang$applyTo = (function (arglist__30160){
var args = cljs.core.seq(arglist__30160);
return G__30158__delegate(args);
});
G__30158.cljs$core$IFn$_invoke$arity$variadic = G__30158__delegate;
return G__30158;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__30161_SHARP_,p2__30162_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30161_SHARP_)].join('')),p2__30162_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__30163_SHARP_,p2__30164_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30163_SHARP_)].join(''),p2__30164_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__30165 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__30165.addCallback(((function (G__30165){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__30165))
);

G__30165.addErrback(((function (G__30165){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__30165))
);

return G__30165;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e30166){if((e30166 instanceof Error)){
var e = e30166;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30166;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30167){if((e30167 instanceof Error)){
var e = e30167;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30167;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30168 = cljs.core._EQ_;
var expr__30169 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30168.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30169))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__30168.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30169))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__30168.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__30169))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__30168,expr__30169){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30168,expr__30169))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30171,callback){
var map__30172 = p__30171;
var map__30172__$1 = ((((!((map__30172 == null)))?(((((map__30172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30172):map__30172);
var file_msg = map__30172__$1;
var request_url = cljs.core.get.call(null,map__30172__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__30172,map__30172__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30172,map__30172__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto__){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto__){
return (function (state_30210){
var state_val_30211 = (state_30210[(1)]);
if((state_val_30211 === (7))){
var inst_30206 = (state_30210[(2)]);
var state_30210__$1 = state_30210;
var statearr_30212_30238 = state_30210__$1;
(statearr_30212_30238[(2)] = inst_30206);

(statearr_30212_30238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (1))){
var state_30210__$1 = state_30210;
var statearr_30213_30239 = state_30210__$1;
(statearr_30213_30239[(2)] = null);

(statearr_30213_30239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (4))){
var inst_30176 = (state_30210[(7)]);
var inst_30176__$1 = (state_30210[(2)]);
var state_30210__$1 = (function (){var statearr_30214 = state_30210;
(statearr_30214[(7)] = inst_30176__$1);

return statearr_30214;
})();
if(cljs.core.truth_(inst_30176__$1)){
var statearr_30215_30240 = state_30210__$1;
(statearr_30215_30240[(1)] = (5));

} else {
var statearr_30216_30241 = state_30210__$1;
(statearr_30216_30241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (15))){
var inst_30191 = (state_30210[(8)]);
var inst_30189 = (state_30210[(9)]);
var inst_30193 = inst_30191.call(null,inst_30189);
var state_30210__$1 = state_30210;
var statearr_30217_30242 = state_30210__$1;
(statearr_30217_30242[(2)] = inst_30193);

(statearr_30217_30242[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (13))){
var inst_30200 = (state_30210[(2)]);
var state_30210__$1 = state_30210;
var statearr_30218_30243 = state_30210__$1;
(statearr_30218_30243[(2)] = inst_30200);

(statearr_30218_30243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (6))){
var state_30210__$1 = state_30210;
var statearr_30219_30244 = state_30210__$1;
(statearr_30219_30244[(2)] = null);

(statearr_30219_30244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (17))){
var inst_30197 = (state_30210[(2)]);
var state_30210__$1 = state_30210;
var statearr_30220_30245 = state_30210__$1;
(statearr_30220_30245[(2)] = inst_30197);

(statearr_30220_30245[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (3))){
var inst_30208 = (state_30210[(2)]);
var state_30210__$1 = state_30210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30210__$1,inst_30208);
} else {
if((state_val_30211 === (12))){
var state_30210__$1 = state_30210;
var statearr_30221_30246 = state_30210__$1;
(statearr_30221_30246[(2)] = null);

(statearr_30221_30246[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (2))){
var state_30210__$1 = state_30210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30210__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30211 === (11))){
var inst_30181 = (state_30210[(10)]);
var inst_30187 = figwheel.client.file_reloading.blocking_load.call(null,inst_30181);
var state_30210__$1 = state_30210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30210__$1,(14),inst_30187);
} else {
if((state_val_30211 === (9))){
var inst_30181 = (state_30210[(10)]);
var state_30210__$1 = state_30210;
if(cljs.core.truth_(inst_30181)){
var statearr_30222_30247 = state_30210__$1;
(statearr_30222_30247[(1)] = (11));

} else {
var statearr_30223_30248 = state_30210__$1;
(statearr_30223_30248[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (5))){
var inst_30176 = (state_30210[(7)]);
var inst_30182 = (state_30210[(11)]);
var inst_30181 = cljs.core.nth.call(null,inst_30176,(0),null);
var inst_30182__$1 = cljs.core.nth.call(null,inst_30176,(1),null);
var state_30210__$1 = (function (){var statearr_30224 = state_30210;
(statearr_30224[(11)] = inst_30182__$1);

(statearr_30224[(10)] = inst_30181);

return statearr_30224;
})();
if(cljs.core.truth_(inst_30182__$1)){
var statearr_30225_30249 = state_30210__$1;
(statearr_30225_30249[(1)] = (8));

} else {
var statearr_30226_30250 = state_30210__$1;
(statearr_30226_30250[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (14))){
var inst_30191 = (state_30210[(8)]);
var inst_30181 = (state_30210[(10)]);
var inst_30189 = (state_30210[(2)]);
var inst_30190 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30191__$1 = cljs.core.get.call(null,inst_30190,inst_30181);
var state_30210__$1 = (function (){var statearr_30227 = state_30210;
(statearr_30227[(8)] = inst_30191__$1);

(statearr_30227[(9)] = inst_30189);

return statearr_30227;
})();
if(cljs.core.truth_(inst_30191__$1)){
var statearr_30228_30251 = state_30210__$1;
(statearr_30228_30251[(1)] = (15));

} else {
var statearr_30229_30252 = state_30210__$1;
(statearr_30229_30252[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (16))){
var inst_30189 = (state_30210[(9)]);
var inst_30195 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30189);
var state_30210__$1 = state_30210;
var statearr_30230_30253 = state_30210__$1;
(statearr_30230_30253[(2)] = inst_30195);

(statearr_30230_30253[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (10))){
var inst_30202 = (state_30210[(2)]);
var state_30210__$1 = (function (){var statearr_30231 = state_30210;
(statearr_30231[(12)] = inst_30202);

return statearr_30231;
})();
var statearr_30232_30254 = state_30210__$1;
(statearr_30232_30254[(2)] = null);

(statearr_30232_30254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30211 === (8))){
var inst_30182 = (state_30210[(11)]);
var inst_30184 = eval(inst_30182);
var state_30210__$1 = state_30210;
var statearr_30233_30255 = state_30210__$1;
(statearr_30233_30255[(2)] = inst_30184);

(statearr_30233_30255[(1)] = (10));


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
});})(c__27900__auto__))
;
return ((function (switch__27809__auto__,c__27900__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27810__auto__ = null;
var figwheel$client$file_reloading$state_machine__27810__auto____0 = (function (){
var statearr_30234 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30234[(0)] = figwheel$client$file_reloading$state_machine__27810__auto__);

(statearr_30234[(1)] = (1));

return statearr_30234;
});
var figwheel$client$file_reloading$state_machine__27810__auto____1 = (function (state_30210){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_30210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e30235){if((e30235 instanceof Object)){
var ex__27813__auto__ = e30235;
var statearr_30236_30256 = state_30210;
(statearr_30236_30256[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30257 = state_30210;
state_30210 = G__30257;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27810__auto__ = function(state_30210){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27810__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27810__auto____1.call(this,state_30210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27810__auto____0;
figwheel$client$file_reloading$state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27810__auto____1;
return figwheel$client$file_reloading$state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto__))
})();
var state__27902__auto__ = (function (){var statearr_30237 = f__27901__auto__.call(null);
(statearr_30237[(6)] = c__27900__auto__);

return statearr_30237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto__))
);

return c__27900__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30259 = arguments.length;
switch (G__30259) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30261,callback){
var map__30262 = p__30261;
var map__30262__$1 = ((((!((map__30262 == null)))?(((((map__30262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30262):map__30262);
var file_msg = map__30262__$1;
var namespace = cljs.core.get.call(null,map__30262__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30262,map__30262__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30262,map__30262__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30264){
var map__30265 = p__30264;
var map__30265__$1 = ((((!((map__30265 == null)))?(((((map__30265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30265):map__30265);
var file_msg = map__30265__$1;
var namespace = cljs.core.get.call(null,map__30265__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30267){
var map__30268 = p__30267;
var map__30268__$1 = ((((!((map__30268 == null)))?(((((map__30268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30268):map__30268);
var file_msg = map__30268__$1;
var namespace = cljs.core.get.call(null,map__30268__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30270,callback){
var map__30271 = p__30270;
var map__30271__$1 = ((((!((map__30271 == null)))?(((((map__30271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30271):map__30271);
var file_msg = map__30271__$1;
var request_url = cljs.core.get.call(null,map__30271__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30271__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27900__auto___30321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___30321,out){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto___30321,out){
return (function (state_30306){
var state_val_30307 = (state_30306[(1)]);
if((state_val_30307 === (1))){
var inst_30280 = cljs.core.seq.call(null,files);
var inst_30281 = cljs.core.first.call(null,inst_30280);
var inst_30282 = cljs.core.next.call(null,inst_30280);
var inst_30283 = files;
var state_30306__$1 = (function (){var statearr_30308 = state_30306;
(statearr_30308[(7)] = inst_30281);

(statearr_30308[(8)] = inst_30282);

(statearr_30308[(9)] = inst_30283);

return statearr_30308;
})();
var statearr_30309_30322 = state_30306__$1;
(statearr_30309_30322[(2)] = null);

(statearr_30309_30322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (2))){
var inst_30289 = (state_30306[(10)]);
var inst_30283 = (state_30306[(9)]);
var inst_30288 = cljs.core.seq.call(null,inst_30283);
var inst_30289__$1 = cljs.core.first.call(null,inst_30288);
var inst_30290 = cljs.core.next.call(null,inst_30288);
var inst_30291 = (inst_30289__$1 == null);
var inst_30292 = cljs.core.not.call(null,inst_30291);
var state_30306__$1 = (function (){var statearr_30310 = state_30306;
(statearr_30310[(10)] = inst_30289__$1);

(statearr_30310[(11)] = inst_30290);

return statearr_30310;
})();
if(inst_30292){
var statearr_30311_30323 = state_30306__$1;
(statearr_30311_30323[(1)] = (4));

} else {
var statearr_30312_30324 = state_30306__$1;
(statearr_30312_30324[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (3))){
var inst_30304 = (state_30306[(2)]);
var state_30306__$1 = state_30306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30306__$1,inst_30304);
} else {
if((state_val_30307 === (4))){
var inst_30289 = (state_30306[(10)]);
var inst_30294 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30289);
var state_30306__$1 = state_30306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30306__$1,(7),inst_30294);
} else {
if((state_val_30307 === (5))){
var inst_30300 = cljs.core.async.close_BANG_.call(null,out);
var state_30306__$1 = state_30306;
var statearr_30313_30325 = state_30306__$1;
(statearr_30313_30325[(2)] = inst_30300);

(statearr_30313_30325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (6))){
var inst_30302 = (state_30306[(2)]);
var state_30306__$1 = state_30306;
var statearr_30314_30326 = state_30306__$1;
(statearr_30314_30326[(2)] = inst_30302);

(statearr_30314_30326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30307 === (7))){
var inst_30290 = (state_30306[(11)]);
var inst_30296 = (state_30306[(2)]);
var inst_30297 = cljs.core.async.put_BANG_.call(null,out,inst_30296);
var inst_30283 = inst_30290;
var state_30306__$1 = (function (){var statearr_30315 = state_30306;
(statearr_30315[(12)] = inst_30297);

(statearr_30315[(9)] = inst_30283);

return statearr_30315;
})();
var statearr_30316_30327 = state_30306__$1;
(statearr_30316_30327[(2)] = null);

(statearr_30316_30327[(1)] = (2));


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
});})(c__27900__auto___30321,out))
;
return ((function (switch__27809__auto__,c__27900__auto___30321,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27810__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27810__auto____0 = (function (){
var statearr_30317 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30317[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27810__auto__);

(statearr_30317[(1)] = (1));

return statearr_30317;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27810__auto____1 = (function (state_30306){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_30306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e30318){if((e30318 instanceof Object)){
var ex__27813__auto__ = e30318;
var statearr_30319_30328 = state_30306;
(statearr_30319_30328[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30329 = state_30306;
state_30306 = G__30329;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27810__auto__ = function(state_30306){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27810__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27810__auto____1.call(this,state_30306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27810__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27810__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto___30321,out))
})();
var state__27902__auto__ = (function (){var statearr_30320 = f__27901__auto__.call(null);
(statearr_30320[(6)] = c__27900__auto___30321);

return statearr_30320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___30321,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30330,opts){
var map__30331 = p__30330;
var map__30331__$1 = ((((!((map__30331 == null)))?(((((map__30331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30331):map__30331);
var eval_body = cljs.core.get.call(null,map__30331__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30331__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3938__auto__ = eval_body;
if(cljs.core.truth_(and__3938__auto__)){
return typeof eval_body === 'string';
} else {
return and__3938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30333){var e = e30333;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30334_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30334_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30335){
var vec__30336 = p__30335;
var k = cljs.core.nth.call(null,vec__30336,(0),null);
var v = cljs.core.nth.call(null,vec__30336,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30339){
var vec__30340 = p__30339;
var k = cljs.core.nth.call(null,vec__30340,(0),null);
var v = cljs.core.nth.call(null,vec__30340,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30346,p__30347){
var map__30348 = p__30346;
var map__30348__$1 = ((((!((map__30348 == null)))?(((((map__30348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30348):map__30348);
var opts = map__30348__$1;
var before_jsload = cljs.core.get.call(null,map__30348__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30348__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30348__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30349 = p__30347;
var map__30349__$1 = ((((!((map__30349 == null)))?(((((map__30349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30349):map__30349);
var msg = map__30349__$1;
var files = cljs.core.get.call(null,map__30349__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30349__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30349__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto__,map__30348,map__30348__$1,opts,before_jsload,on_jsload,reload_dependents,map__30349,map__30349__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto__,map__30348,map__30348__$1,opts,before_jsload,on_jsload,reload_dependents,map__30349,map__30349__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30503){
var state_val_30504 = (state_30503[(1)]);
if((state_val_30504 === (7))){
var inst_30365 = (state_30503[(7)]);
var inst_30363 = (state_30503[(8)]);
var inst_30364 = (state_30503[(9)]);
var inst_30366 = (state_30503[(10)]);
var inst_30371 = cljs.core._nth.call(null,inst_30364,inst_30366);
var inst_30372 = figwheel.client.file_reloading.eval_body.call(null,inst_30371,opts);
var inst_30373 = (inst_30366 + (1));
var tmp30505 = inst_30365;
var tmp30506 = inst_30363;
var tmp30507 = inst_30364;
var inst_30363__$1 = tmp30506;
var inst_30364__$1 = tmp30507;
var inst_30365__$1 = tmp30505;
var inst_30366__$1 = inst_30373;
var state_30503__$1 = (function (){var statearr_30508 = state_30503;
(statearr_30508[(11)] = inst_30372);

(statearr_30508[(7)] = inst_30365__$1);

(statearr_30508[(8)] = inst_30363__$1);

(statearr_30508[(9)] = inst_30364__$1);

(statearr_30508[(10)] = inst_30366__$1);

return statearr_30508;
})();
var statearr_30509_30592 = state_30503__$1;
(statearr_30509_30592[(2)] = null);

(statearr_30509_30592[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (20))){
var inst_30406 = (state_30503[(12)]);
var inst_30414 = figwheel.client.file_reloading.sort_files.call(null,inst_30406);
var state_30503__$1 = state_30503;
var statearr_30510_30593 = state_30503__$1;
(statearr_30510_30593[(2)] = inst_30414);

(statearr_30510_30593[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (27))){
var state_30503__$1 = state_30503;
var statearr_30511_30594 = state_30503__$1;
(statearr_30511_30594[(2)] = null);

(statearr_30511_30594[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (1))){
var inst_30355 = (state_30503[(13)]);
var inst_30352 = before_jsload.call(null,files);
var inst_30353 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30354 = (function (){return ((function (inst_30355,inst_30352,inst_30353,state_val_30504,c__27900__auto__,map__30348,map__30348__$1,opts,before_jsload,on_jsload,reload_dependents,map__30349,map__30349__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30343_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30343_SHARP_);
});
;})(inst_30355,inst_30352,inst_30353,state_val_30504,c__27900__auto__,map__30348,map__30348__$1,opts,before_jsload,on_jsload,reload_dependents,map__30349,map__30349__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30355__$1 = cljs.core.filter.call(null,inst_30354,files);
var inst_30356 = cljs.core.not_empty.call(null,inst_30355__$1);
var state_30503__$1 = (function (){var statearr_30512 = state_30503;
(statearr_30512[(14)] = inst_30353);

(statearr_30512[(13)] = inst_30355__$1);

(statearr_30512[(15)] = inst_30352);

return statearr_30512;
})();
if(cljs.core.truth_(inst_30356)){
var statearr_30513_30595 = state_30503__$1;
(statearr_30513_30595[(1)] = (2));

} else {
var statearr_30514_30596 = state_30503__$1;
(statearr_30514_30596[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (24))){
var state_30503__$1 = state_30503;
var statearr_30515_30597 = state_30503__$1;
(statearr_30515_30597[(2)] = null);

(statearr_30515_30597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (39))){
var inst_30456 = (state_30503[(16)]);
var state_30503__$1 = state_30503;
var statearr_30516_30598 = state_30503__$1;
(statearr_30516_30598[(2)] = inst_30456);

(statearr_30516_30598[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (46))){
var inst_30498 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
var statearr_30517_30599 = state_30503__$1;
(statearr_30517_30599[(2)] = inst_30498);

(statearr_30517_30599[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (4))){
var inst_30400 = (state_30503[(2)]);
var inst_30401 = cljs.core.List.EMPTY;
var inst_30402 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30401);
var inst_30403 = (function (){return ((function (inst_30400,inst_30401,inst_30402,state_val_30504,c__27900__auto__,map__30348,map__30348__$1,opts,before_jsload,on_jsload,reload_dependents,map__30349,map__30349__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30344_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30344_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30344_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30344_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_30400,inst_30401,inst_30402,state_val_30504,c__27900__auto__,map__30348,map__30348__$1,opts,before_jsload,on_jsload,reload_dependents,map__30349,map__30349__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30404 = cljs.core.filter.call(null,inst_30403,files);
var inst_30405 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30406 = cljs.core.concat.call(null,inst_30404,inst_30405);
var state_30503__$1 = (function (){var statearr_30518 = state_30503;
(statearr_30518[(17)] = inst_30400);

(statearr_30518[(12)] = inst_30406);

(statearr_30518[(18)] = inst_30402);

return statearr_30518;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30519_30600 = state_30503__$1;
(statearr_30519_30600[(1)] = (16));

} else {
var statearr_30520_30601 = state_30503__$1;
(statearr_30520_30601[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (15))){
var inst_30390 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
var statearr_30521_30602 = state_30503__$1;
(statearr_30521_30602[(2)] = inst_30390);

(statearr_30521_30602[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (21))){
var inst_30416 = (state_30503[(19)]);
var inst_30416__$1 = (state_30503[(2)]);
var inst_30417 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30416__$1);
var state_30503__$1 = (function (){var statearr_30522 = state_30503;
(statearr_30522[(19)] = inst_30416__$1);

return statearr_30522;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30503__$1,(22),inst_30417);
} else {
if((state_val_30504 === (31))){
var inst_30501 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30503__$1,inst_30501);
} else {
if((state_val_30504 === (32))){
var inst_30456 = (state_30503[(16)]);
var inst_30461 = inst_30456.cljs$lang$protocol_mask$partition0$;
var inst_30462 = (inst_30461 & (64));
var inst_30463 = inst_30456.cljs$core$ISeq$;
var inst_30464 = (cljs.core.PROTOCOL_SENTINEL === inst_30463);
var inst_30465 = ((inst_30462) || (inst_30464));
var state_30503__$1 = state_30503;
if(cljs.core.truth_(inst_30465)){
var statearr_30523_30603 = state_30503__$1;
(statearr_30523_30603[(1)] = (35));

} else {
var statearr_30524_30604 = state_30503__$1;
(statearr_30524_30604[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (40))){
var inst_30478 = (state_30503[(20)]);
var inst_30477 = (state_30503[(2)]);
var inst_30478__$1 = cljs.core.get.call(null,inst_30477,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30479 = cljs.core.get.call(null,inst_30477,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30480 = cljs.core.not_empty.call(null,inst_30478__$1);
var state_30503__$1 = (function (){var statearr_30525 = state_30503;
(statearr_30525[(21)] = inst_30479);

(statearr_30525[(20)] = inst_30478__$1);

return statearr_30525;
})();
if(cljs.core.truth_(inst_30480)){
var statearr_30526_30605 = state_30503__$1;
(statearr_30526_30605[(1)] = (41));

} else {
var statearr_30527_30606 = state_30503__$1;
(statearr_30527_30606[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (33))){
var state_30503__$1 = state_30503;
var statearr_30528_30607 = state_30503__$1;
(statearr_30528_30607[(2)] = false);

(statearr_30528_30607[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (13))){
var inst_30376 = (state_30503[(22)]);
var inst_30380 = cljs.core.chunk_first.call(null,inst_30376);
var inst_30381 = cljs.core.chunk_rest.call(null,inst_30376);
var inst_30382 = cljs.core.count.call(null,inst_30380);
var inst_30363 = inst_30381;
var inst_30364 = inst_30380;
var inst_30365 = inst_30382;
var inst_30366 = (0);
var state_30503__$1 = (function (){var statearr_30529 = state_30503;
(statearr_30529[(7)] = inst_30365);

(statearr_30529[(8)] = inst_30363);

(statearr_30529[(9)] = inst_30364);

(statearr_30529[(10)] = inst_30366);

return statearr_30529;
})();
var statearr_30530_30608 = state_30503__$1;
(statearr_30530_30608[(2)] = null);

(statearr_30530_30608[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (22))){
var inst_30416 = (state_30503[(19)]);
var inst_30420 = (state_30503[(23)]);
var inst_30424 = (state_30503[(24)]);
var inst_30419 = (state_30503[(25)]);
var inst_30419__$1 = (state_30503[(2)]);
var inst_30420__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30419__$1);
var inst_30421 = (function (){var all_files = inst_30416;
var res_SINGLEQUOTE_ = inst_30419__$1;
var res = inst_30420__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30416,inst_30420,inst_30424,inst_30419,inst_30419__$1,inst_30420__$1,state_val_30504,c__27900__auto__,map__30348,map__30348__$1,opts,before_jsload,on_jsload,reload_dependents,map__30349,map__30349__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30345_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30345_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30416,inst_30420,inst_30424,inst_30419,inst_30419__$1,inst_30420__$1,state_val_30504,c__27900__auto__,map__30348,map__30348__$1,opts,before_jsload,on_jsload,reload_dependents,map__30349,map__30349__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30422 = cljs.core.filter.call(null,inst_30421,inst_30419__$1);
var inst_30423 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30424__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30423);
var inst_30425 = cljs.core.not_empty.call(null,inst_30424__$1);
var state_30503__$1 = (function (){var statearr_30531 = state_30503;
(statearr_30531[(23)] = inst_30420__$1);

(statearr_30531[(24)] = inst_30424__$1);

(statearr_30531[(25)] = inst_30419__$1);

(statearr_30531[(26)] = inst_30422);

return statearr_30531;
})();
if(cljs.core.truth_(inst_30425)){
var statearr_30532_30609 = state_30503__$1;
(statearr_30532_30609[(1)] = (23));

} else {
var statearr_30533_30610 = state_30503__$1;
(statearr_30533_30610[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (36))){
var state_30503__$1 = state_30503;
var statearr_30534_30611 = state_30503__$1;
(statearr_30534_30611[(2)] = false);

(statearr_30534_30611[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (41))){
var inst_30478 = (state_30503[(20)]);
var inst_30482 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30483 = cljs.core.map.call(null,inst_30482,inst_30478);
var inst_30484 = cljs.core.pr_str.call(null,inst_30483);
var inst_30485 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30484)].join('');
var inst_30486 = figwheel.client.utils.log.call(null,inst_30485);
var state_30503__$1 = state_30503;
var statearr_30535_30612 = state_30503__$1;
(statearr_30535_30612[(2)] = inst_30486);

(statearr_30535_30612[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (43))){
var inst_30479 = (state_30503[(21)]);
var inst_30489 = (state_30503[(2)]);
var inst_30490 = cljs.core.not_empty.call(null,inst_30479);
var state_30503__$1 = (function (){var statearr_30536 = state_30503;
(statearr_30536[(27)] = inst_30489);

return statearr_30536;
})();
if(cljs.core.truth_(inst_30490)){
var statearr_30537_30613 = state_30503__$1;
(statearr_30537_30613[(1)] = (44));

} else {
var statearr_30538_30614 = state_30503__$1;
(statearr_30538_30614[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (29))){
var inst_30416 = (state_30503[(19)]);
var inst_30420 = (state_30503[(23)]);
var inst_30424 = (state_30503[(24)]);
var inst_30419 = (state_30503[(25)]);
var inst_30422 = (state_30503[(26)]);
var inst_30456 = (state_30503[(16)]);
var inst_30452 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30455 = (function (){var all_files = inst_30416;
var res_SINGLEQUOTE_ = inst_30419;
var res = inst_30420;
var files_not_loaded = inst_30422;
var dependencies_that_loaded = inst_30424;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30416,inst_30420,inst_30424,inst_30419,inst_30422,inst_30456,inst_30452,state_val_30504,c__27900__auto__,map__30348,map__30348__$1,opts,before_jsload,on_jsload,reload_dependents,map__30349,map__30349__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30454){
var map__30539 = p__30454;
var map__30539__$1 = ((((!((map__30539 == null)))?(((((map__30539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30539):map__30539);
var namespace = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30416,inst_30420,inst_30424,inst_30419,inst_30422,inst_30456,inst_30452,state_val_30504,c__27900__auto__,map__30348,map__30348__$1,opts,before_jsload,on_jsload,reload_dependents,map__30349,map__30349__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30456__$1 = cljs.core.group_by.call(null,inst_30455,inst_30422);
var inst_30458 = (inst_30456__$1 == null);
var inst_30459 = cljs.core.not.call(null,inst_30458);
var state_30503__$1 = (function (){var statearr_30541 = state_30503;
(statearr_30541[(28)] = inst_30452);

(statearr_30541[(16)] = inst_30456__$1);

return statearr_30541;
})();
if(inst_30459){
var statearr_30542_30615 = state_30503__$1;
(statearr_30542_30615[(1)] = (32));

} else {
var statearr_30543_30616 = state_30503__$1;
(statearr_30543_30616[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (44))){
var inst_30479 = (state_30503[(21)]);
var inst_30492 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30479);
var inst_30493 = cljs.core.pr_str.call(null,inst_30492);
var inst_30494 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30493)].join('');
var inst_30495 = figwheel.client.utils.log.call(null,inst_30494);
var state_30503__$1 = state_30503;
var statearr_30544_30617 = state_30503__$1;
(statearr_30544_30617[(2)] = inst_30495);

(statearr_30544_30617[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (6))){
var inst_30397 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
var statearr_30545_30618 = state_30503__$1;
(statearr_30545_30618[(2)] = inst_30397);

(statearr_30545_30618[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (28))){
var inst_30422 = (state_30503[(26)]);
var inst_30449 = (state_30503[(2)]);
var inst_30450 = cljs.core.not_empty.call(null,inst_30422);
var state_30503__$1 = (function (){var statearr_30546 = state_30503;
(statearr_30546[(29)] = inst_30449);

return statearr_30546;
})();
if(cljs.core.truth_(inst_30450)){
var statearr_30547_30619 = state_30503__$1;
(statearr_30547_30619[(1)] = (29));

} else {
var statearr_30548_30620 = state_30503__$1;
(statearr_30548_30620[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (25))){
var inst_30420 = (state_30503[(23)]);
var inst_30436 = (state_30503[(2)]);
var inst_30437 = cljs.core.not_empty.call(null,inst_30420);
var state_30503__$1 = (function (){var statearr_30549 = state_30503;
(statearr_30549[(30)] = inst_30436);

return statearr_30549;
})();
if(cljs.core.truth_(inst_30437)){
var statearr_30550_30621 = state_30503__$1;
(statearr_30550_30621[(1)] = (26));

} else {
var statearr_30551_30622 = state_30503__$1;
(statearr_30551_30622[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (34))){
var inst_30472 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
if(cljs.core.truth_(inst_30472)){
var statearr_30552_30623 = state_30503__$1;
(statearr_30552_30623[(1)] = (38));

} else {
var statearr_30553_30624 = state_30503__$1;
(statearr_30553_30624[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (17))){
var state_30503__$1 = state_30503;
var statearr_30554_30625 = state_30503__$1;
(statearr_30554_30625[(2)] = recompile_dependents);

(statearr_30554_30625[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (3))){
var state_30503__$1 = state_30503;
var statearr_30555_30626 = state_30503__$1;
(statearr_30555_30626[(2)] = null);

(statearr_30555_30626[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (12))){
var inst_30393 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
var statearr_30556_30627 = state_30503__$1;
(statearr_30556_30627[(2)] = inst_30393);

(statearr_30556_30627[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (2))){
var inst_30355 = (state_30503[(13)]);
var inst_30362 = cljs.core.seq.call(null,inst_30355);
var inst_30363 = inst_30362;
var inst_30364 = null;
var inst_30365 = (0);
var inst_30366 = (0);
var state_30503__$1 = (function (){var statearr_30557 = state_30503;
(statearr_30557[(7)] = inst_30365);

(statearr_30557[(8)] = inst_30363);

(statearr_30557[(9)] = inst_30364);

(statearr_30557[(10)] = inst_30366);

return statearr_30557;
})();
var statearr_30558_30628 = state_30503__$1;
(statearr_30558_30628[(2)] = null);

(statearr_30558_30628[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (23))){
var inst_30416 = (state_30503[(19)]);
var inst_30420 = (state_30503[(23)]);
var inst_30424 = (state_30503[(24)]);
var inst_30419 = (state_30503[(25)]);
var inst_30422 = (state_30503[(26)]);
var inst_30427 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30429 = (function (){var all_files = inst_30416;
var res_SINGLEQUOTE_ = inst_30419;
var res = inst_30420;
var files_not_loaded = inst_30422;
var dependencies_that_loaded = inst_30424;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30416,inst_30420,inst_30424,inst_30419,inst_30422,inst_30427,state_val_30504,c__27900__auto__,map__30348,map__30348__$1,opts,before_jsload,on_jsload,reload_dependents,map__30349,map__30349__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30428){
var map__30559 = p__30428;
var map__30559__$1 = ((((!((map__30559 == null)))?(((((map__30559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30559):map__30559);
var request_url = cljs.core.get.call(null,map__30559__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30416,inst_30420,inst_30424,inst_30419,inst_30422,inst_30427,state_val_30504,c__27900__auto__,map__30348,map__30348__$1,opts,before_jsload,on_jsload,reload_dependents,map__30349,map__30349__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30430 = cljs.core.reverse.call(null,inst_30424);
var inst_30431 = cljs.core.map.call(null,inst_30429,inst_30430);
var inst_30432 = cljs.core.pr_str.call(null,inst_30431);
var inst_30433 = figwheel.client.utils.log.call(null,inst_30432);
var state_30503__$1 = (function (){var statearr_30561 = state_30503;
(statearr_30561[(31)] = inst_30427);

return statearr_30561;
})();
var statearr_30562_30629 = state_30503__$1;
(statearr_30562_30629[(2)] = inst_30433);

(statearr_30562_30629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (35))){
var state_30503__$1 = state_30503;
var statearr_30563_30630 = state_30503__$1;
(statearr_30563_30630[(2)] = true);

(statearr_30563_30630[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (19))){
var inst_30406 = (state_30503[(12)]);
var inst_30412 = figwheel.client.file_reloading.expand_files.call(null,inst_30406);
var state_30503__$1 = state_30503;
var statearr_30564_30631 = state_30503__$1;
(statearr_30564_30631[(2)] = inst_30412);

(statearr_30564_30631[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (11))){
var state_30503__$1 = state_30503;
var statearr_30565_30632 = state_30503__$1;
(statearr_30565_30632[(2)] = null);

(statearr_30565_30632[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (9))){
var inst_30395 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
var statearr_30566_30633 = state_30503__$1;
(statearr_30566_30633[(2)] = inst_30395);

(statearr_30566_30633[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (5))){
var inst_30365 = (state_30503[(7)]);
var inst_30366 = (state_30503[(10)]);
var inst_30368 = (inst_30366 < inst_30365);
var inst_30369 = inst_30368;
var state_30503__$1 = state_30503;
if(cljs.core.truth_(inst_30369)){
var statearr_30567_30634 = state_30503__$1;
(statearr_30567_30634[(1)] = (7));

} else {
var statearr_30568_30635 = state_30503__$1;
(statearr_30568_30635[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (14))){
var inst_30376 = (state_30503[(22)]);
var inst_30385 = cljs.core.first.call(null,inst_30376);
var inst_30386 = figwheel.client.file_reloading.eval_body.call(null,inst_30385,opts);
var inst_30387 = cljs.core.next.call(null,inst_30376);
var inst_30363 = inst_30387;
var inst_30364 = null;
var inst_30365 = (0);
var inst_30366 = (0);
var state_30503__$1 = (function (){var statearr_30569 = state_30503;
(statearr_30569[(7)] = inst_30365);

(statearr_30569[(32)] = inst_30386);

(statearr_30569[(8)] = inst_30363);

(statearr_30569[(9)] = inst_30364);

(statearr_30569[(10)] = inst_30366);

return statearr_30569;
})();
var statearr_30570_30636 = state_30503__$1;
(statearr_30570_30636[(2)] = null);

(statearr_30570_30636[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (45))){
var state_30503__$1 = state_30503;
var statearr_30571_30637 = state_30503__$1;
(statearr_30571_30637[(2)] = null);

(statearr_30571_30637[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (26))){
var inst_30416 = (state_30503[(19)]);
var inst_30420 = (state_30503[(23)]);
var inst_30424 = (state_30503[(24)]);
var inst_30419 = (state_30503[(25)]);
var inst_30422 = (state_30503[(26)]);
var inst_30439 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30441 = (function (){var all_files = inst_30416;
var res_SINGLEQUOTE_ = inst_30419;
var res = inst_30420;
var files_not_loaded = inst_30422;
var dependencies_that_loaded = inst_30424;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30416,inst_30420,inst_30424,inst_30419,inst_30422,inst_30439,state_val_30504,c__27900__auto__,map__30348,map__30348__$1,opts,before_jsload,on_jsload,reload_dependents,map__30349,map__30349__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30440){
var map__30572 = p__30440;
var map__30572__$1 = ((((!((map__30572 == null)))?(((((map__30572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30572):map__30572);
var namespace = cljs.core.get.call(null,map__30572__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30572__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30416,inst_30420,inst_30424,inst_30419,inst_30422,inst_30439,state_val_30504,c__27900__auto__,map__30348,map__30348__$1,opts,before_jsload,on_jsload,reload_dependents,map__30349,map__30349__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30442 = cljs.core.map.call(null,inst_30441,inst_30420);
var inst_30443 = cljs.core.pr_str.call(null,inst_30442);
var inst_30444 = figwheel.client.utils.log.call(null,inst_30443);
var inst_30445 = (function (){var all_files = inst_30416;
var res_SINGLEQUOTE_ = inst_30419;
var res = inst_30420;
var files_not_loaded = inst_30422;
var dependencies_that_loaded = inst_30424;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30416,inst_30420,inst_30424,inst_30419,inst_30422,inst_30439,inst_30441,inst_30442,inst_30443,inst_30444,state_val_30504,c__27900__auto__,map__30348,map__30348__$1,opts,before_jsload,on_jsload,reload_dependents,map__30349,map__30349__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30416,inst_30420,inst_30424,inst_30419,inst_30422,inst_30439,inst_30441,inst_30442,inst_30443,inst_30444,state_val_30504,c__27900__auto__,map__30348,map__30348__$1,opts,before_jsload,on_jsload,reload_dependents,map__30349,map__30349__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30446 = setTimeout(inst_30445,(10));
var state_30503__$1 = (function (){var statearr_30574 = state_30503;
(statearr_30574[(33)] = inst_30444);

(statearr_30574[(34)] = inst_30439);

return statearr_30574;
})();
var statearr_30575_30638 = state_30503__$1;
(statearr_30575_30638[(2)] = inst_30446);

(statearr_30575_30638[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (16))){
var state_30503__$1 = state_30503;
var statearr_30576_30639 = state_30503__$1;
(statearr_30576_30639[(2)] = reload_dependents);

(statearr_30576_30639[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (38))){
var inst_30456 = (state_30503[(16)]);
var inst_30474 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30456);
var state_30503__$1 = state_30503;
var statearr_30577_30640 = state_30503__$1;
(statearr_30577_30640[(2)] = inst_30474);

(statearr_30577_30640[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (30))){
var state_30503__$1 = state_30503;
var statearr_30578_30641 = state_30503__$1;
(statearr_30578_30641[(2)] = null);

(statearr_30578_30641[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (10))){
var inst_30376 = (state_30503[(22)]);
var inst_30378 = cljs.core.chunked_seq_QMARK_.call(null,inst_30376);
var state_30503__$1 = state_30503;
if(inst_30378){
var statearr_30579_30642 = state_30503__$1;
(statearr_30579_30642[(1)] = (13));

} else {
var statearr_30580_30643 = state_30503__$1;
(statearr_30580_30643[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (18))){
var inst_30410 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
if(cljs.core.truth_(inst_30410)){
var statearr_30581_30644 = state_30503__$1;
(statearr_30581_30644[(1)] = (19));

} else {
var statearr_30582_30645 = state_30503__$1;
(statearr_30582_30645[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (42))){
var state_30503__$1 = state_30503;
var statearr_30583_30646 = state_30503__$1;
(statearr_30583_30646[(2)] = null);

(statearr_30583_30646[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (37))){
var inst_30469 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
var statearr_30584_30647 = state_30503__$1;
(statearr_30584_30647[(2)] = inst_30469);

(statearr_30584_30647[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (8))){
var inst_30376 = (state_30503[(22)]);
var inst_30363 = (state_30503[(8)]);
var inst_30376__$1 = cljs.core.seq.call(null,inst_30363);
var state_30503__$1 = (function (){var statearr_30585 = state_30503;
(statearr_30585[(22)] = inst_30376__$1);

return statearr_30585;
})();
if(inst_30376__$1){
var statearr_30586_30648 = state_30503__$1;
(statearr_30586_30648[(1)] = (10));

} else {
var statearr_30587_30649 = state_30503__$1;
(statearr_30587_30649[(1)] = (11));

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
}
});})(c__27900__auto__,map__30348,map__30348__$1,opts,before_jsload,on_jsload,reload_dependents,map__30349,map__30349__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27809__auto__,c__27900__auto__,map__30348,map__30348__$1,opts,before_jsload,on_jsload,reload_dependents,map__30349,map__30349__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27810__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27810__auto____0 = (function (){
var statearr_30588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30588[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27810__auto__);

(statearr_30588[(1)] = (1));

return statearr_30588;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27810__auto____1 = (function (state_30503){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_30503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e30589){if((e30589 instanceof Object)){
var ex__27813__auto__ = e30589;
var statearr_30590_30650 = state_30503;
(statearr_30590_30650[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30651 = state_30503;
state_30503 = G__30651;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27810__auto__ = function(state_30503){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27810__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27810__auto____1.call(this,state_30503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27810__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27810__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto__,map__30348,map__30348__$1,opts,before_jsload,on_jsload,reload_dependents,map__30349,map__30349__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27902__auto__ = (function (){var statearr_30591 = f__27901__auto__.call(null);
(statearr_30591[(6)] = c__27900__auto__);

return statearr_30591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto__,map__30348,map__30348__$1,opts,before_jsload,on_jsload,reload_dependents,map__30349,map__30349__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27900__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30654,link){
var map__30655 = p__30654;
var map__30655__$1 = ((((!((map__30655 == null)))?(((((map__30655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30655):map__30655);
var file = cljs.core.get.call(null,map__30655__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__30655,map__30655__$1,file){
return (function (p1__30652_SHARP_,p2__30653_SHARP_){
if(cljs.core._EQ_.call(null,p1__30652_SHARP_,p2__30653_SHARP_)){
return p1__30652_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__30655,map__30655__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30658){
var map__30659 = p__30658;
var map__30659__$1 = ((((!((map__30659 == null)))?(((((map__30659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30659):map__30659);
var match_length = cljs.core.get.call(null,map__30659__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30659__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30657_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30657_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30661_SHARP_,p2__30662_SHARP_){
return cljs.core.assoc.call(null,p1__30661_SHARP_,cljs.core.get.call(null,p2__30662_SHARP_,key),p2__30662_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_30663 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30663);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30663);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30664,p__30665){
var map__30666 = p__30664;
var map__30666__$1 = ((((!((map__30666 == null)))?(((((map__30666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30666):map__30666);
var on_cssload = cljs.core.get.call(null,map__30666__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30667 = p__30665;
var map__30667__$1 = ((((!((map__30667 == null)))?(((((map__30667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30667):map__30667);
var files_msg = map__30667__$1;
var files = cljs.core.get.call(null,map__30667__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1543803804939
