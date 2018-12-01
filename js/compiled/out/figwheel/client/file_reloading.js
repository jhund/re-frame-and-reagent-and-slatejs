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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36001_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36001_SHARP_));
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
var seq__36002 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36003 = null;
var count__36004 = (0);
var i__36005 = (0);
while(true){
if((i__36005 < count__36004)){
var n = cljs.core._nth.call(null,chunk__36003,i__36005);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__36006 = seq__36002;
var G__36007 = chunk__36003;
var G__36008 = count__36004;
var G__36009 = (i__36005 + (1));
seq__36002 = G__36006;
chunk__36003 = G__36007;
count__36004 = G__36008;
i__36005 = G__36009;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36002);
if(temp__5457__auto__){
var seq__36002__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36002__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__36002__$1);
var G__36010 = cljs.core.chunk_rest.call(null,seq__36002__$1);
var G__36011 = c__4351__auto__;
var G__36012 = cljs.core.count.call(null,c__4351__auto__);
var G__36013 = (0);
seq__36002 = G__36010;
chunk__36003 = G__36011;
count__36004 = G__36012;
i__36005 = G__36013;
continue;
} else {
var n = cljs.core.first.call(null,seq__36002__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__36014 = cljs.core.next.call(null,seq__36002__$1);
var G__36015 = null;
var G__36016 = (0);
var G__36017 = (0);
seq__36002 = G__36014;
chunk__36003 = G__36015;
count__36004 = G__36016;
i__36005 = G__36017;
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
return cljs.core.some.call(null,(function (p__36018){
var vec__36019 = p__36018;
var _ = cljs.core.nth.call(null,vec__36019,(0),null);
var v = cljs.core.nth.call(null,vec__36019,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__36022){
var vec__36023 = p__36022;
var k = cljs.core.nth.call(null,vec__36023,(0),null);
var v = cljs.core.nth.call(null,vec__36023,(1),null);
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

var seq__36035_36043 = cljs.core.seq.call(null,deps);
var chunk__36036_36044 = null;
var count__36037_36045 = (0);
var i__36038_36046 = (0);
while(true){
if((i__36038_36046 < count__36037_36045)){
var dep_36047 = cljs.core._nth.call(null,chunk__36036_36044,i__36038_36046);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_36047;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36047));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36047,(depth + (1)),state);
} else {
}


var G__36048 = seq__36035_36043;
var G__36049 = chunk__36036_36044;
var G__36050 = count__36037_36045;
var G__36051 = (i__36038_36046 + (1));
seq__36035_36043 = G__36048;
chunk__36036_36044 = G__36049;
count__36037_36045 = G__36050;
i__36038_36046 = G__36051;
continue;
} else {
var temp__5457__auto___36052 = cljs.core.seq.call(null,seq__36035_36043);
if(temp__5457__auto___36052){
var seq__36035_36053__$1 = temp__5457__auto___36052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36035_36053__$1)){
var c__4351__auto___36054 = cljs.core.chunk_first.call(null,seq__36035_36053__$1);
var G__36055 = cljs.core.chunk_rest.call(null,seq__36035_36053__$1);
var G__36056 = c__4351__auto___36054;
var G__36057 = cljs.core.count.call(null,c__4351__auto___36054);
var G__36058 = (0);
seq__36035_36043 = G__36055;
chunk__36036_36044 = G__36056;
count__36037_36045 = G__36057;
i__36038_36046 = G__36058;
continue;
} else {
var dep_36059 = cljs.core.first.call(null,seq__36035_36053__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_36059;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36059));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36059,(depth + (1)),state);
} else {
}


var G__36060 = cljs.core.next.call(null,seq__36035_36053__$1);
var G__36061 = null;
var G__36062 = (0);
var G__36063 = (0);
seq__36035_36043 = G__36060;
chunk__36036_36044 = G__36061;
count__36037_36045 = G__36062;
i__36038_36046 = G__36063;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36039){
var vec__36040 = p__36039;
var seq__36041 = cljs.core.seq.call(null,vec__36040);
var first__36042 = cljs.core.first.call(null,seq__36041);
var seq__36041__$1 = cljs.core.next.call(null,seq__36041);
var x = first__36042;
var xs = seq__36041__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36040,seq__36041,first__36042,seq__36041__$1,x,xs,get_deps__$1){
return (function (p1__36026_SHARP_){
return clojure.set.difference.call(null,p1__36026_SHARP_,x);
});})(vec__36040,seq__36041,first__36042,seq__36041__$1,x,xs,get_deps__$1))
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
var seq__36064 = cljs.core.seq.call(null,provides);
var chunk__36065 = null;
var count__36066 = (0);
var i__36067 = (0);
while(true){
if((i__36067 < count__36066)){
var prov = cljs.core._nth.call(null,chunk__36065,i__36067);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36068_36076 = cljs.core.seq.call(null,requires);
var chunk__36069_36077 = null;
var count__36070_36078 = (0);
var i__36071_36079 = (0);
while(true){
if((i__36071_36079 < count__36070_36078)){
var req_36080 = cljs.core._nth.call(null,chunk__36069_36077,i__36071_36079);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36080,prov);


var G__36081 = seq__36068_36076;
var G__36082 = chunk__36069_36077;
var G__36083 = count__36070_36078;
var G__36084 = (i__36071_36079 + (1));
seq__36068_36076 = G__36081;
chunk__36069_36077 = G__36082;
count__36070_36078 = G__36083;
i__36071_36079 = G__36084;
continue;
} else {
var temp__5457__auto___36085 = cljs.core.seq.call(null,seq__36068_36076);
if(temp__5457__auto___36085){
var seq__36068_36086__$1 = temp__5457__auto___36085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36068_36086__$1)){
var c__4351__auto___36087 = cljs.core.chunk_first.call(null,seq__36068_36086__$1);
var G__36088 = cljs.core.chunk_rest.call(null,seq__36068_36086__$1);
var G__36089 = c__4351__auto___36087;
var G__36090 = cljs.core.count.call(null,c__4351__auto___36087);
var G__36091 = (0);
seq__36068_36076 = G__36088;
chunk__36069_36077 = G__36089;
count__36070_36078 = G__36090;
i__36071_36079 = G__36091;
continue;
} else {
var req_36092 = cljs.core.first.call(null,seq__36068_36086__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36092,prov);


var G__36093 = cljs.core.next.call(null,seq__36068_36086__$1);
var G__36094 = null;
var G__36095 = (0);
var G__36096 = (0);
seq__36068_36076 = G__36093;
chunk__36069_36077 = G__36094;
count__36070_36078 = G__36095;
i__36071_36079 = G__36096;
continue;
}
} else {
}
}
break;
}


var G__36097 = seq__36064;
var G__36098 = chunk__36065;
var G__36099 = count__36066;
var G__36100 = (i__36067 + (1));
seq__36064 = G__36097;
chunk__36065 = G__36098;
count__36066 = G__36099;
i__36067 = G__36100;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36064);
if(temp__5457__auto__){
var seq__36064__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36064__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__36064__$1);
var G__36101 = cljs.core.chunk_rest.call(null,seq__36064__$1);
var G__36102 = c__4351__auto__;
var G__36103 = cljs.core.count.call(null,c__4351__auto__);
var G__36104 = (0);
seq__36064 = G__36101;
chunk__36065 = G__36102;
count__36066 = G__36103;
i__36067 = G__36104;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36064__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36072_36105 = cljs.core.seq.call(null,requires);
var chunk__36073_36106 = null;
var count__36074_36107 = (0);
var i__36075_36108 = (0);
while(true){
if((i__36075_36108 < count__36074_36107)){
var req_36109 = cljs.core._nth.call(null,chunk__36073_36106,i__36075_36108);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36109,prov);


var G__36110 = seq__36072_36105;
var G__36111 = chunk__36073_36106;
var G__36112 = count__36074_36107;
var G__36113 = (i__36075_36108 + (1));
seq__36072_36105 = G__36110;
chunk__36073_36106 = G__36111;
count__36074_36107 = G__36112;
i__36075_36108 = G__36113;
continue;
} else {
var temp__5457__auto___36114__$1 = cljs.core.seq.call(null,seq__36072_36105);
if(temp__5457__auto___36114__$1){
var seq__36072_36115__$1 = temp__5457__auto___36114__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36072_36115__$1)){
var c__4351__auto___36116 = cljs.core.chunk_first.call(null,seq__36072_36115__$1);
var G__36117 = cljs.core.chunk_rest.call(null,seq__36072_36115__$1);
var G__36118 = c__4351__auto___36116;
var G__36119 = cljs.core.count.call(null,c__4351__auto___36116);
var G__36120 = (0);
seq__36072_36105 = G__36117;
chunk__36073_36106 = G__36118;
count__36074_36107 = G__36119;
i__36075_36108 = G__36120;
continue;
} else {
var req_36121 = cljs.core.first.call(null,seq__36072_36115__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36121,prov);


var G__36122 = cljs.core.next.call(null,seq__36072_36115__$1);
var G__36123 = null;
var G__36124 = (0);
var G__36125 = (0);
seq__36072_36105 = G__36122;
chunk__36073_36106 = G__36123;
count__36074_36107 = G__36124;
i__36075_36108 = G__36125;
continue;
}
} else {
}
}
break;
}


var G__36126 = cljs.core.next.call(null,seq__36064__$1);
var G__36127 = null;
var G__36128 = (0);
var G__36129 = (0);
seq__36064 = G__36126;
chunk__36065 = G__36127;
count__36066 = G__36128;
i__36067 = G__36129;
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
var seq__36130_36134 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36131_36135 = null;
var count__36132_36136 = (0);
var i__36133_36137 = (0);
while(true){
if((i__36133_36137 < count__36132_36136)){
var ns_36138 = cljs.core._nth.call(null,chunk__36131_36135,i__36133_36137);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36138);


var G__36139 = seq__36130_36134;
var G__36140 = chunk__36131_36135;
var G__36141 = count__36132_36136;
var G__36142 = (i__36133_36137 + (1));
seq__36130_36134 = G__36139;
chunk__36131_36135 = G__36140;
count__36132_36136 = G__36141;
i__36133_36137 = G__36142;
continue;
} else {
var temp__5457__auto___36143 = cljs.core.seq.call(null,seq__36130_36134);
if(temp__5457__auto___36143){
var seq__36130_36144__$1 = temp__5457__auto___36143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36130_36144__$1)){
var c__4351__auto___36145 = cljs.core.chunk_first.call(null,seq__36130_36144__$1);
var G__36146 = cljs.core.chunk_rest.call(null,seq__36130_36144__$1);
var G__36147 = c__4351__auto___36145;
var G__36148 = cljs.core.count.call(null,c__4351__auto___36145);
var G__36149 = (0);
seq__36130_36134 = G__36146;
chunk__36131_36135 = G__36147;
count__36132_36136 = G__36148;
i__36133_36137 = G__36149;
continue;
} else {
var ns_36150 = cljs.core.first.call(null,seq__36130_36144__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36150);


var G__36151 = cljs.core.next.call(null,seq__36130_36144__$1);
var G__36152 = null;
var G__36153 = (0);
var G__36154 = (0);
seq__36130_36134 = G__36151;
chunk__36131_36135 = G__36152;
count__36132_36136 = G__36153;
i__36133_36137 = G__36154;
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
var G__36155__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36156__i = 0, G__36156__a = new Array(arguments.length -  0);
while (G__36156__i < G__36156__a.length) {G__36156__a[G__36156__i] = arguments[G__36156__i + 0]; ++G__36156__i;}
  args = new cljs.core.IndexedSeq(G__36156__a,0,null);
} 
return G__36155__delegate.call(this,args);};
G__36155.cljs$lang$maxFixedArity = 0;
G__36155.cljs$lang$applyTo = (function (arglist__36157){
var args = cljs.core.seq(arglist__36157);
return G__36155__delegate(args);
});
G__36155.cljs$core$IFn$_invoke$arity$variadic = G__36155__delegate;
return G__36155;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__36158_SHARP_,p2__36159_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36158_SHARP_)].join('')),p2__36159_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__36160_SHARP_,p2__36161_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36160_SHARP_)].join(''),p2__36161_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36162 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36162.addCallback(((function (G__36162){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36162))
);

G__36162.addErrback(((function (G__36162){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36162))
);

return G__36162;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36163){if((e36163 instanceof Error)){
var e = e36163;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36163;

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
}catch (e36164){if((e36164 instanceof Error)){
var e = e36164;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36164;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36165 = cljs.core._EQ_;
var expr__36166 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36165.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36166))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__36165.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36166))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__36165.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36166))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__36165,expr__36166){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36165,expr__36166))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36168,callback){
var map__36169 = p__36168;
var map__36169__$1 = ((((!((map__36169 == null)))?(((((map__36169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36169):map__36169);
var file_msg = map__36169__$1;
var request_url = cljs.core.get.call(null,map__36169__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__36169,map__36169__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36169,map__36169__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__33999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto__){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto__){
return (function (state_36207){
var state_val_36208 = (state_36207[(1)]);
if((state_val_36208 === (7))){
var inst_36203 = (state_36207[(2)]);
var state_36207__$1 = state_36207;
var statearr_36209_36235 = state_36207__$1;
(statearr_36209_36235[(2)] = inst_36203);

(statearr_36209_36235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36208 === (1))){
var state_36207__$1 = state_36207;
var statearr_36210_36236 = state_36207__$1;
(statearr_36210_36236[(2)] = null);

(statearr_36210_36236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36208 === (4))){
var inst_36173 = (state_36207[(7)]);
var inst_36173__$1 = (state_36207[(2)]);
var state_36207__$1 = (function (){var statearr_36211 = state_36207;
(statearr_36211[(7)] = inst_36173__$1);

return statearr_36211;
})();
if(cljs.core.truth_(inst_36173__$1)){
var statearr_36212_36237 = state_36207__$1;
(statearr_36212_36237[(1)] = (5));

} else {
var statearr_36213_36238 = state_36207__$1;
(statearr_36213_36238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36208 === (15))){
var inst_36188 = (state_36207[(8)]);
var inst_36186 = (state_36207[(9)]);
var inst_36190 = inst_36188.call(null,inst_36186);
var state_36207__$1 = state_36207;
var statearr_36214_36239 = state_36207__$1;
(statearr_36214_36239[(2)] = inst_36190);

(statearr_36214_36239[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36208 === (13))){
var inst_36197 = (state_36207[(2)]);
var state_36207__$1 = state_36207;
var statearr_36215_36240 = state_36207__$1;
(statearr_36215_36240[(2)] = inst_36197);

(statearr_36215_36240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36208 === (6))){
var state_36207__$1 = state_36207;
var statearr_36216_36241 = state_36207__$1;
(statearr_36216_36241[(2)] = null);

(statearr_36216_36241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36208 === (17))){
var inst_36194 = (state_36207[(2)]);
var state_36207__$1 = state_36207;
var statearr_36217_36242 = state_36207__$1;
(statearr_36217_36242[(2)] = inst_36194);

(statearr_36217_36242[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36208 === (3))){
var inst_36205 = (state_36207[(2)]);
var state_36207__$1 = state_36207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36207__$1,inst_36205);
} else {
if((state_val_36208 === (12))){
var state_36207__$1 = state_36207;
var statearr_36218_36243 = state_36207__$1;
(statearr_36218_36243[(2)] = null);

(statearr_36218_36243[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36208 === (2))){
var state_36207__$1 = state_36207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36207__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36208 === (11))){
var inst_36178 = (state_36207[(10)]);
var inst_36184 = figwheel.client.file_reloading.blocking_load.call(null,inst_36178);
var state_36207__$1 = state_36207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36207__$1,(14),inst_36184);
} else {
if((state_val_36208 === (9))){
var inst_36178 = (state_36207[(10)]);
var state_36207__$1 = state_36207;
if(cljs.core.truth_(inst_36178)){
var statearr_36219_36244 = state_36207__$1;
(statearr_36219_36244[(1)] = (11));

} else {
var statearr_36220_36245 = state_36207__$1;
(statearr_36220_36245[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36208 === (5))){
var inst_36173 = (state_36207[(7)]);
var inst_36179 = (state_36207[(11)]);
var inst_36178 = cljs.core.nth.call(null,inst_36173,(0),null);
var inst_36179__$1 = cljs.core.nth.call(null,inst_36173,(1),null);
var state_36207__$1 = (function (){var statearr_36221 = state_36207;
(statearr_36221[(10)] = inst_36178);

(statearr_36221[(11)] = inst_36179__$1);

return statearr_36221;
})();
if(cljs.core.truth_(inst_36179__$1)){
var statearr_36222_36246 = state_36207__$1;
(statearr_36222_36246[(1)] = (8));

} else {
var statearr_36223_36247 = state_36207__$1;
(statearr_36223_36247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36208 === (14))){
var inst_36188 = (state_36207[(8)]);
var inst_36178 = (state_36207[(10)]);
var inst_36186 = (state_36207[(2)]);
var inst_36187 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36188__$1 = cljs.core.get.call(null,inst_36187,inst_36178);
var state_36207__$1 = (function (){var statearr_36224 = state_36207;
(statearr_36224[(8)] = inst_36188__$1);

(statearr_36224[(9)] = inst_36186);

return statearr_36224;
})();
if(cljs.core.truth_(inst_36188__$1)){
var statearr_36225_36248 = state_36207__$1;
(statearr_36225_36248[(1)] = (15));

} else {
var statearr_36226_36249 = state_36207__$1;
(statearr_36226_36249[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36208 === (16))){
var inst_36186 = (state_36207[(9)]);
var inst_36192 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36186);
var state_36207__$1 = state_36207;
var statearr_36227_36250 = state_36207__$1;
(statearr_36227_36250[(2)] = inst_36192);

(statearr_36227_36250[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36208 === (10))){
var inst_36199 = (state_36207[(2)]);
var state_36207__$1 = (function (){var statearr_36228 = state_36207;
(statearr_36228[(12)] = inst_36199);

return statearr_36228;
})();
var statearr_36229_36251 = state_36207__$1;
(statearr_36229_36251[(2)] = null);

(statearr_36229_36251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36208 === (8))){
var inst_36179 = (state_36207[(11)]);
var inst_36181 = eval(inst_36179);
var state_36207__$1 = state_36207;
var statearr_36230_36252 = state_36207__$1;
(statearr_36230_36252[(2)] = inst_36181);

(statearr_36230_36252[(1)] = (10));


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
});})(c__33999__auto__))
;
return ((function (switch__33908__auto__,c__33999__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33909__auto__ = null;
var figwheel$client$file_reloading$state_machine__33909__auto____0 = (function (){
var statearr_36231 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36231[(0)] = figwheel$client$file_reloading$state_machine__33909__auto__);

(statearr_36231[(1)] = (1));

return statearr_36231;
});
var figwheel$client$file_reloading$state_machine__33909__auto____1 = (function (state_36207){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_36207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e36232){if((e36232 instanceof Object)){
var ex__33912__auto__ = e36232;
var statearr_36233_36253 = state_36207;
(statearr_36233_36253[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36254 = state_36207;
state_36207 = G__36254;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33909__auto__ = function(state_36207){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33909__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33909__auto____1.call(this,state_36207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33909__auto____0;
figwheel$client$file_reloading$state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33909__auto____1;
return figwheel$client$file_reloading$state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto__))
})();
var state__34001__auto__ = (function (){var statearr_36234 = f__34000__auto__.call(null);
(statearr_36234[(6)] = c__33999__auto__);

return statearr_36234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto__))
);

return c__33999__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__36256 = arguments.length;
switch (G__36256) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36258,callback){
var map__36259 = p__36258;
var map__36259__$1 = ((((!((map__36259 == null)))?(((((map__36259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36259):map__36259);
var file_msg = map__36259__$1;
var namespace = cljs.core.get.call(null,map__36259__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36259,map__36259__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36259,map__36259__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36261){
var map__36262 = p__36261;
var map__36262__$1 = ((((!((map__36262 == null)))?(((((map__36262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36262):map__36262);
var file_msg = map__36262__$1;
var namespace = cljs.core.get.call(null,map__36262__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36264){
var map__36265 = p__36264;
var map__36265__$1 = ((((!((map__36265 == null)))?(((((map__36265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36265):map__36265);
var file_msg = map__36265__$1;
var namespace = cljs.core.get.call(null,map__36265__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36267,callback){
var map__36268 = p__36267;
var map__36268__$1 = ((((!((map__36268 == null)))?(((((map__36268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36268):map__36268);
var file_msg = map__36268__$1;
var request_url = cljs.core.get.call(null,map__36268__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36268__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__33999__auto___36318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto___36318,out){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto___36318,out){
return (function (state_36303){
var state_val_36304 = (state_36303[(1)]);
if((state_val_36304 === (1))){
var inst_36277 = cljs.core.seq.call(null,files);
var inst_36278 = cljs.core.first.call(null,inst_36277);
var inst_36279 = cljs.core.next.call(null,inst_36277);
var inst_36280 = files;
var state_36303__$1 = (function (){var statearr_36305 = state_36303;
(statearr_36305[(7)] = inst_36278);

(statearr_36305[(8)] = inst_36279);

(statearr_36305[(9)] = inst_36280);

return statearr_36305;
})();
var statearr_36306_36319 = state_36303__$1;
(statearr_36306_36319[(2)] = null);

(statearr_36306_36319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (2))){
var inst_36286 = (state_36303[(10)]);
var inst_36280 = (state_36303[(9)]);
var inst_36285 = cljs.core.seq.call(null,inst_36280);
var inst_36286__$1 = cljs.core.first.call(null,inst_36285);
var inst_36287 = cljs.core.next.call(null,inst_36285);
var inst_36288 = (inst_36286__$1 == null);
var inst_36289 = cljs.core.not.call(null,inst_36288);
var state_36303__$1 = (function (){var statearr_36307 = state_36303;
(statearr_36307[(10)] = inst_36286__$1);

(statearr_36307[(11)] = inst_36287);

return statearr_36307;
})();
if(inst_36289){
var statearr_36308_36320 = state_36303__$1;
(statearr_36308_36320[(1)] = (4));

} else {
var statearr_36309_36321 = state_36303__$1;
(statearr_36309_36321[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (3))){
var inst_36301 = (state_36303[(2)]);
var state_36303__$1 = state_36303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36303__$1,inst_36301);
} else {
if((state_val_36304 === (4))){
var inst_36286 = (state_36303[(10)]);
var inst_36291 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36286);
var state_36303__$1 = state_36303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36303__$1,(7),inst_36291);
} else {
if((state_val_36304 === (5))){
var inst_36297 = cljs.core.async.close_BANG_.call(null,out);
var state_36303__$1 = state_36303;
var statearr_36310_36322 = state_36303__$1;
(statearr_36310_36322[(2)] = inst_36297);

(statearr_36310_36322[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (6))){
var inst_36299 = (state_36303[(2)]);
var state_36303__$1 = state_36303;
var statearr_36311_36323 = state_36303__$1;
(statearr_36311_36323[(2)] = inst_36299);

(statearr_36311_36323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (7))){
var inst_36287 = (state_36303[(11)]);
var inst_36293 = (state_36303[(2)]);
var inst_36294 = cljs.core.async.put_BANG_.call(null,out,inst_36293);
var inst_36280 = inst_36287;
var state_36303__$1 = (function (){var statearr_36312 = state_36303;
(statearr_36312[(12)] = inst_36294);

(statearr_36312[(9)] = inst_36280);

return statearr_36312;
})();
var statearr_36313_36324 = state_36303__$1;
(statearr_36313_36324[(2)] = null);

(statearr_36313_36324[(1)] = (2));


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
});})(c__33999__auto___36318,out))
;
return ((function (switch__33908__auto__,c__33999__auto___36318,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33909__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33909__auto____0 = (function (){
var statearr_36314 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36314[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33909__auto__);

(statearr_36314[(1)] = (1));

return statearr_36314;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33909__auto____1 = (function (state_36303){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_36303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e36315){if((e36315 instanceof Object)){
var ex__33912__auto__ = e36315;
var statearr_36316_36325 = state_36303;
(statearr_36316_36325[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36326 = state_36303;
state_36303 = G__36326;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33909__auto__ = function(state_36303){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33909__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33909__auto____1.call(this,state_36303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33909__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33909__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto___36318,out))
})();
var state__34001__auto__ = (function (){var statearr_36317 = f__34000__auto__.call(null);
(statearr_36317[(6)] = c__33999__auto___36318);

return statearr_36317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto___36318,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36327,opts){
var map__36328 = p__36327;
var map__36328__$1 = ((((!((map__36328 == null)))?(((((map__36328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36328):map__36328);
var eval_body = cljs.core.get.call(null,map__36328__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36328__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e36330){var e = e36330;
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
return (function (p1__36331_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36331_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36332){
var vec__36333 = p__36332;
var k = cljs.core.nth.call(null,vec__36333,(0),null);
var v = cljs.core.nth.call(null,vec__36333,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36336){
var vec__36337 = p__36336;
var k = cljs.core.nth.call(null,vec__36337,(0),null);
var v = cljs.core.nth.call(null,vec__36337,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36343,p__36344){
var map__36345 = p__36343;
var map__36345__$1 = ((((!((map__36345 == null)))?(((((map__36345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36345):map__36345);
var opts = map__36345__$1;
var before_jsload = cljs.core.get.call(null,map__36345__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36345__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36345__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36346 = p__36344;
var map__36346__$1 = ((((!((map__36346 == null)))?(((((map__36346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36346):map__36346);
var msg = map__36346__$1;
var files = cljs.core.get.call(null,map__36346__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36346__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36346__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto__,map__36345,map__36345__$1,opts,before_jsload,on_jsload,reload_dependents,map__36346,map__36346__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto__,map__36345,map__36345__$1,opts,before_jsload,on_jsload,reload_dependents,map__36346,map__36346__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36500){
var state_val_36501 = (state_36500[(1)]);
if((state_val_36501 === (7))){
var inst_36360 = (state_36500[(7)]);
var inst_36363 = (state_36500[(8)]);
var inst_36362 = (state_36500[(9)]);
var inst_36361 = (state_36500[(10)]);
var inst_36368 = cljs.core._nth.call(null,inst_36361,inst_36363);
var inst_36369 = figwheel.client.file_reloading.eval_body.call(null,inst_36368,opts);
var inst_36370 = (inst_36363 + (1));
var tmp36502 = inst_36360;
var tmp36503 = inst_36362;
var tmp36504 = inst_36361;
var inst_36360__$1 = tmp36502;
var inst_36361__$1 = tmp36504;
var inst_36362__$1 = tmp36503;
var inst_36363__$1 = inst_36370;
var state_36500__$1 = (function (){var statearr_36505 = state_36500;
(statearr_36505[(7)] = inst_36360__$1);

(statearr_36505[(11)] = inst_36369);

(statearr_36505[(8)] = inst_36363__$1);

(statearr_36505[(9)] = inst_36362__$1);

(statearr_36505[(10)] = inst_36361__$1);

return statearr_36505;
})();
var statearr_36506_36589 = state_36500__$1;
(statearr_36506_36589[(2)] = null);

(statearr_36506_36589[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (20))){
var inst_36403 = (state_36500[(12)]);
var inst_36411 = figwheel.client.file_reloading.sort_files.call(null,inst_36403);
var state_36500__$1 = state_36500;
var statearr_36507_36590 = state_36500__$1;
(statearr_36507_36590[(2)] = inst_36411);

(statearr_36507_36590[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (27))){
var state_36500__$1 = state_36500;
var statearr_36508_36591 = state_36500__$1;
(statearr_36508_36591[(2)] = null);

(statearr_36508_36591[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (1))){
var inst_36352 = (state_36500[(13)]);
var inst_36349 = before_jsload.call(null,files);
var inst_36350 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36351 = (function (){return ((function (inst_36352,inst_36349,inst_36350,state_val_36501,c__33999__auto__,map__36345,map__36345__$1,opts,before_jsload,on_jsload,reload_dependents,map__36346,map__36346__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36340_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36340_SHARP_);
});
;})(inst_36352,inst_36349,inst_36350,state_val_36501,c__33999__auto__,map__36345,map__36345__$1,opts,before_jsload,on_jsload,reload_dependents,map__36346,map__36346__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36352__$1 = cljs.core.filter.call(null,inst_36351,files);
var inst_36353 = cljs.core.not_empty.call(null,inst_36352__$1);
var state_36500__$1 = (function (){var statearr_36509 = state_36500;
(statearr_36509[(14)] = inst_36349);

(statearr_36509[(13)] = inst_36352__$1);

(statearr_36509[(15)] = inst_36350);

return statearr_36509;
})();
if(cljs.core.truth_(inst_36353)){
var statearr_36510_36592 = state_36500__$1;
(statearr_36510_36592[(1)] = (2));

} else {
var statearr_36511_36593 = state_36500__$1;
(statearr_36511_36593[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (24))){
var state_36500__$1 = state_36500;
var statearr_36512_36594 = state_36500__$1;
(statearr_36512_36594[(2)] = null);

(statearr_36512_36594[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (39))){
var inst_36453 = (state_36500[(16)]);
var state_36500__$1 = state_36500;
var statearr_36513_36595 = state_36500__$1;
(statearr_36513_36595[(2)] = inst_36453);

(statearr_36513_36595[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (46))){
var inst_36495 = (state_36500[(2)]);
var state_36500__$1 = state_36500;
var statearr_36514_36596 = state_36500__$1;
(statearr_36514_36596[(2)] = inst_36495);

(statearr_36514_36596[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (4))){
var inst_36397 = (state_36500[(2)]);
var inst_36398 = cljs.core.List.EMPTY;
var inst_36399 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36398);
var inst_36400 = (function (){return ((function (inst_36397,inst_36398,inst_36399,state_val_36501,c__33999__auto__,map__36345,map__36345__$1,opts,before_jsload,on_jsload,reload_dependents,map__36346,map__36346__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36341_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36341_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36341_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36341_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_36397,inst_36398,inst_36399,state_val_36501,c__33999__auto__,map__36345,map__36345__$1,opts,before_jsload,on_jsload,reload_dependents,map__36346,map__36346__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36401 = cljs.core.filter.call(null,inst_36400,files);
var inst_36402 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36403 = cljs.core.concat.call(null,inst_36401,inst_36402);
var state_36500__$1 = (function (){var statearr_36515 = state_36500;
(statearr_36515[(12)] = inst_36403);

(statearr_36515[(17)] = inst_36399);

(statearr_36515[(18)] = inst_36397);

return statearr_36515;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36516_36597 = state_36500__$1;
(statearr_36516_36597[(1)] = (16));

} else {
var statearr_36517_36598 = state_36500__$1;
(statearr_36517_36598[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (15))){
var inst_36387 = (state_36500[(2)]);
var state_36500__$1 = state_36500;
var statearr_36518_36599 = state_36500__$1;
(statearr_36518_36599[(2)] = inst_36387);

(statearr_36518_36599[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (21))){
var inst_36413 = (state_36500[(19)]);
var inst_36413__$1 = (state_36500[(2)]);
var inst_36414 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36413__$1);
var state_36500__$1 = (function (){var statearr_36519 = state_36500;
(statearr_36519[(19)] = inst_36413__$1);

return statearr_36519;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36500__$1,(22),inst_36414);
} else {
if((state_val_36501 === (31))){
var inst_36498 = (state_36500[(2)]);
var state_36500__$1 = state_36500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36500__$1,inst_36498);
} else {
if((state_val_36501 === (32))){
var inst_36453 = (state_36500[(16)]);
var inst_36458 = inst_36453.cljs$lang$protocol_mask$partition0$;
var inst_36459 = (inst_36458 & (64));
var inst_36460 = inst_36453.cljs$core$ISeq$;
var inst_36461 = (cljs.core.PROTOCOL_SENTINEL === inst_36460);
var inst_36462 = ((inst_36459) || (inst_36461));
var state_36500__$1 = state_36500;
if(cljs.core.truth_(inst_36462)){
var statearr_36520_36600 = state_36500__$1;
(statearr_36520_36600[(1)] = (35));

} else {
var statearr_36521_36601 = state_36500__$1;
(statearr_36521_36601[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (40))){
var inst_36475 = (state_36500[(20)]);
var inst_36474 = (state_36500[(2)]);
var inst_36475__$1 = cljs.core.get.call(null,inst_36474,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36476 = cljs.core.get.call(null,inst_36474,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36477 = cljs.core.not_empty.call(null,inst_36475__$1);
var state_36500__$1 = (function (){var statearr_36522 = state_36500;
(statearr_36522[(21)] = inst_36476);

(statearr_36522[(20)] = inst_36475__$1);

return statearr_36522;
})();
if(cljs.core.truth_(inst_36477)){
var statearr_36523_36602 = state_36500__$1;
(statearr_36523_36602[(1)] = (41));

} else {
var statearr_36524_36603 = state_36500__$1;
(statearr_36524_36603[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (33))){
var state_36500__$1 = state_36500;
var statearr_36525_36604 = state_36500__$1;
(statearr_36525_36604[(2)] = false);

(statearr_36525_36604[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (13))){
var inst_36373 = (state_36500[(22)]);
var inst_36377 = cljs.core.chunk_first.call(null,inst_36373);
var inst_36378 = cljs.core.chunk_rest.call(null,inst_36373);
var inst_36379 = cljs.core.count.call(null,inst_36377);
var inst_36360 = inst_36378;
var inst_36361 = inst_36377;
var inst_36362 = inst_36379;
var inst_36363 = (0);
var state_36500__$1 = (function (){var statearr_36526 = state_36500;
(statearr_36526[(7)] = inst_36360);

(statearr_36526[(8)] = inst_36363);

(statearr_36526[(9)] = inst_36362);

(statearr_36526[(10)] = inst_36361);

return statearr_36526;
})();
var statearr_36527_36605 = state_36500__$1;
(statearr_36527_36605[(2)] = null);

(statearr_36527_36605[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (22))){
var inst_36413 = (state_36500[(19)]);
var inst_36421 = (state_36500[(23)]);
var inst_36416 = (state_36500[(24)]);
var inst_36417 = (state_36500[(25)]);
var inst_36416__$1 = (state_36500[(2)]);
var inst_36417__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36416__$1);
var inst_36418 = (function (){var all_files = inst_36413;
var res_SINGLEQUOTE_ = inst_36416__$1;
var res = inst_36417__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36413,inst_36421,inst_36416,inst_36417,inst_36416__$1,inst_36417__$1,state_val_36501,c__33999__auto__,map__36345,map__36345__$1,opts,before_jsload,on_jsload,reload_dependents,map__36346,map__36346__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36342_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36342_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36413,inst_36421,inst_36416,inst_36417,inst_36416__$1,inst_36417__$1,state_val_36501,c__33999__auto__,map__36345,map__36345__$1,opts,before_jsload,on_jsload,reload_dependents,map__36346,map__36346__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36419 = cljs.core.filter.call(null,inst_36418,inst_36416__$1);
var inst_36420 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36421__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36420);
var inst_36422 = cljs.core.not_empty.call(null,inst_36421__$1);
var state_36500__$1 = (function (){var statearr_36528 = state_36500;
(statearr_36528[(23)] = inst_36421__$1);

(statearr_36528[(26)] = inst_36419);

(statearr_36528[(24)] = inst_36416__$1);

(statearr_36528[(25)] = inst_36417__$1);

return statearr_36528;
})();
if(cljs.core.truth_(inst_36422)){
var statearr_36529_36606 = state_36500__$1;
(statearr_36529_36606[(1)] = (23));

} else {
var statearr_36530_36607 = state_36500__$1;
(statearr_36530_36607[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (36))){
var state_36500__$1 = state_36500;
var statearr_36531_36608 = state_36500__$1;
(statearr_36531_36608[(2)] = false);

(statearr_36531_36608[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (41))){
var inst_36475 = (state_36500[(20)]);
var inst_36479 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36480 = cljs.core.map.call(null,inst_36479,inst_36475);
var inst_36481 = cljs.core.pr_str.call(null,inst_36480);
var inst_36482 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36481)].join('');
var inst_36483 = figwheel.client.utils.log.call(null,inst_36482);
var state_36500__$1 = state_36500;
var statearr_36532_36609 = state_36500__$1;
(statearr_36532_36609[(2)] = inst_36483);

(statearr_36532_36609[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (43))){
var inst_36476 = (state_36500[(21)]);
var inst_36486 = (state_36500[(2)]);
var inst_36487 = cljs.core.not_empty.call(null,inst_36476);
var state_36500__$1 = (function (){var statearr_36533 = state_36500;
(statearr_36533[(27)] = inst_36486);

return statearr_36533;
})();
if(cljs.core.truth_(inst_36487)){
var statearr_36534_36610 = state_36500__$1;
(statearr_36534_36610[(1)] = (44));

} else {
var statearr_36535_36611 = state_36500__$1;
(statearr_36535_36611[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (29))){
var inst_36413 = (state_36500[(19)]);
var inst_36421 = (state_36500[(23)]);
var inst_36419 = (state_36500[(26)]);
var inst_36453 = (state_36500[(16)]);
var inst_36416 = (state_36500[(24)]);
var inst_36417 = (state_36500[(25)]);
var inst_36449 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36452 = (function (){var all_files = inst_36413;
var res_SINGLEQUOTE_ = inst_36416;
var res = inst_36417;
var files_not_loaded = inst_36419;
var dependencies_that_loaded = inst_36421;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36413,inst_36421,inst_36419,inst_36453,inst_36416,inst_36417,inst_36449,state_val_36501,c__33999__auto__,map__36345,map__36345__$1,opts,before_jsload,on_jsload,reload_dependents,map__36346,map__36346__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36451){
var map__36536 = p__36451;
var map__36536__$1 = ((((!((map__36536 == null)))?(((((map__36536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36536):map__36536);
var namespace = cljs.core.get.call(null,map__36536__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36413,inst_36421,inst_36419,inst_36453,inst_36416,inst_36417,inst_36449,state_val_36501,c__33999__auto__,map__36345,map__36345__$1,opts,before_jsload,on_jsload,reload_dependents,map__36346,map__36346__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36453__$1 = cljs.core.group_by.call(null,inst_36452,inst_36419);
var inst_36455 = (inst_36453__$1 == null);
var inst_36456 = cljs.core.not.call(null,inst_36455);
var state_36500__$1 = (function (){var statearr_36538 = state_36500;
(statearr_36538[(16)] = inst_36453__$1);

(statearr_36538[(28)] = inst_36449);

return statearr_36538;
})();
if(inst_36456){
var statearr_36539_36612 = state_36500__$1;
(statearr_36539_36612[(1)] = (32));

} else {
var statearr_36540_36613 = state_36500__$1;
(statearr_36540_36613[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (44))){
var inst_36476 = (state_36500[(21)]);
var inst_36489 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36476);
var inst_36490 = cljs.core.pr_str.call(null,inst_36489);
var inst_36491 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36490)].join('');
var inst_36492 = figwheel.client.utils.log.call(null,inst_36491);
var state_36500__$1 = state_36500;
var statearr_36541_36614 = state_36500__$1;
(statearr_36541_36614[(2)] = inst_36492);

(statearr_36541_36614[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (6))){
var inst_36394 = (state_36500[(2)]);
var state_36500__$1 = state_36500;
var statearr_36542_36615 = state_36500__$1;
(statearr_36542_36615[(2)] = inst_36394);

(statearr_36542_36615[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (28))){
var inst_36419 = (state_36500[(26)]);
var inst_36446 = (state_36500[(2)]);
var inst_36447 = cljs.core.not_empty.call(null,inst_36419);
var state_36500__$1 = (function (){var statearr_36543 = state_36500;
(statearr_36543[(29)] = inst_36446);

return statearr_36543;
})();
if(cljs.core.truth_(inst_36447)){
var statearr_36544_36616 = state_36500__$1;
(statearr_36544_36616[(1)] = (29));

} else {
var statearr_36545_36617 = state_36500__$1;
(statearr_36545_36617[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (25))){
var inst_36417 = (state_36500[(25)]);
var inst_36433 = (state_36500[(2)]);
var inst_36434 = cljs.core.not_empty.call(null,inst_36417);
var state_36500__$1 = (function (){var statearr_36546 = state_36500;
(statearr_36546[(30)] = inst_36433);

return statearr_36546;
})();
if(cljs.core.truth_(inst_36434)){
var statearr_36547_36618 = state_36500__$1;
(statearr_36547_36618[(1)] = (26));

} else {
var statearr_36548_36619 = state_36500__$1;
(statearr_36548_36619[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (34))){
var inst_36469 = (state_36500[(2)]);
var state_36500__$1 = state_36500;
if(cljs.core.truth_(inst_36469)){
var statearr_36549_36620 = state_36500__$1;
(statearr_36549_36620[(1)] = (38));

} else {
var statearr_36550_36621 = state_36500__$1;
(statearr_36550_36621[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (17))){
var state_36500__$1 = state_36500;
var statearr_36551_36622 = state_36500__$1;
(statearr_36551_36622[(2)] = recompile_dependents);

(statearr_36551_36622[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (3))){
var state_36500__$1 = state_36500;
var statearr_36552_36623 = state_36500__$1;
(statearr_36552_36623[(2)] = null);

(statearr_36552_36623[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (12))){
var inst_36390 = (state_36500[(2)]);
var state_36500__$1 = state_36500;
var statearr_36553_36624 = state_36500__$1;
(statearr_36553_36624[(2)] = inst_36390);

(statearr_36553_36624[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (2))){
var inst_36352 = (state_36500[(13)]);
var inst_36359 = cljs.core.seq.call(null,inst_36352);
var inst_36360 = inst_36359;
var inst_36361 = null;
var inst_36362 = (0);
var inst_36363 = (0);
var state_36500__$1 = (function (){var statearr_36554 = state_36500;
(statearr_36554[(7)] = inst_36360);

(statearr_36554[(8)] = inst_36363);

(statearr_36554[(9)] = inst_36362);

(statearr_36554[(10)] = inst_36361);

return statearr_36554;
})();
var statearr_36555_36625 = state_36500__$1;
(statearr_36555_36625[(2)] = null);

(statearr_36555_36625[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (23))){
var inst_36413 = (state_36500[(19)]);
var inst_36421 = (state_36500[(23)]);
var inst_36419 = (state_36500[(26)]);
var inst_36416 = (state_36500[(24)]);
var inst_36417 = (state_36500[(25)]);
var inst_36424 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36426 = (function (){var all_files = inst_36413;
var res_SINGLEQUOTE_ = inst_36416;
var res = inst_36417;
var files_not_loaded = inst_36419;
var dependencies_that_loaded = inst_36421;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36413,inst_36421,inst_36419,inst_36416,inst_36417,inst_36424,state_val_36501,c__33999__auto__,map__36345,map__36345__$1,opts,before_jsload,on_jsload,reload_dependents,map__36346,map__36346__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36425){
var map__36556 = p__36425;
var map__36556__$1 = ((((!((map__36556 == null)))?(((((map__36556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36556):map__36556);
var request_url = cljs.core.get.call(null,map__36556__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36413,inst_36421,inst_36419,inst_36416,inst_36417,inst_36424,state_val_36501,c__33999__auto__,map__36345,map__36345__$1,opts,before_jsload,on_jsload,reload_dependents,map__36346,map__36346__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36427 = cljs.core.reverse.call(null,inst_36421);
var inst_36428 = cljs.core.map.call(null,inst_36426,inst_36427);
var inst_36429 = cljs.core.pr_str.call(null,inst_36428);
var inst_36430 = figwheel.client.utils.log.call(null,inst_36429);
var state_36500__$1 = (function (){var statearr_36558 = state_36500;
(statearr_36558[(31)] = inst_36424);

return statearr_36558;
})();
var statearr_36559_36626 = state_36500__$1;
(statearr_36559_36626[(2)] = inst_36430);

(statearr_36559_36626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (35))){
var state_36500__$1 = state_36500;
var statearr_36560_36627 = state_36500__$1;
(statearr_36560_36627[(2)] = true);

(statearr_36560_36627[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (19))){
var inst_36403 = (state_36500[(12)]);
var inst_36409 = figwheel.client.file_reloading.expand_files.call(null,inst_36403);
var state_36500__$1 = state_36500;
var statearr_36561_36628 = state_36500__$1;
(statearr_36561_36628[(2)] = inst_36409);

(statearr_36561_36628[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (11))){
var state_36500__$1 = state_36500;
var statearr_36562_36629 = state_36500__$1;
(statearr_36562_36629[(2)] = null);

(statearr_36562_36629[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (9))){
var inst_36392 = (state_36500[(2)]);
var state_36500__$1 = state_36500;
var statearr_36563_36630 = state_36500__$1;
(statearr_36563_36630[(2)] = inst_36392);

(statearr_36563_36630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (5))){
var inst_36363 = (state_36500[(8)]);
var inst_36362 = (state_36500[(9)]);
var inst_36365 = (inst_36363 < inst_36362);
var inst_36366 = inst_36365;
var state_36500__$1 = state_36500;
if(cljs.core.truth_(inst_36366)){
var statearr_36564_36631 = state_36500__$1;
(statearr_36564_36631[(1)] = (7));

} else {
var statearr_36565_36632 = state_36500__$1;
(statearr_36565_36632[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (14))){
var inst_36373 = (state_36500[(22)]);
var inst_36382 = cljs.core.first.call(null,inst_36373);
var inst_36383 = figwheel.client.file_reloading.eval_body.call(null,inst_36382,opts);
var inst_36384 = cljs.core.next.call(null,inst_36373);
var inst_36360 = inst_36384;
var inst_36361 = null;
var inst_36362 = (0);
var inst_36363 = (0);
var state_36500__$1 = (function (){var statearr_36566 = state_36500;
(statearr_36566[(7)] = inst_36360);

(statearr_36566[(8)] = inst_36363);

(statearr_36566[(9)] = inst_36362);

(statearr_36566[(10)] = inst_36361);

(statearr_36566[(32)] = inst_36383);

return statearr_36566;
})();
var statearr_36567_36633 = state_36500__$1;
(statearr_36567_36633[(2)] = null);

(statearr_36567_36633[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (45))){
var state_36500__$1 = state_36500;
var statearr_36568_36634 = state_36500__$1;
(statearr_36568_36634[(2)] = null);

(statearr_36568_36634[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (26))){
var inst_36413 = (state_36500[(19)]);
var inst_36421 = (state_36500[(23)]);
var inst_36419 = (state_36500[(26)]);
var inst_36416 = (state_36500[(24)]);
var inst_36417 = (state_36500[(25)]);
var inst_36436 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36438 = (function (){var all_files = inst_36413;
var res_SINGLEQUOTE_ = inst_36416;
var res = inst_36417;
var files_not_loaded = inst_36419;
var dependencies_that_loaded = inst_36421;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36413,inst_36421,inst_36419,inst_36416,inst_36417,inst_36436,state_val_36501,c__33999__auto__,map__36345,map__36345__$1,opts,before_jsload,on_jsload,reload_dependents,map__36346,map__36346__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36437){
var map__36569 = p__36437;
var map__36569__$1 = ((((!((map__36569 == null)))?(((((map__36569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36569):map__36569);
var namespace = cljs.core.get.call(null,map__36569__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36569__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36413,inst_36421,inst_36419,inst_36416,inst_36417,inst_36436,state_val_36501,c__33999__auto__,map__36345,map__36345__$1,opts,before_jsload,on_jsload,reload_dependents,map__36346,map__36346__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36439 = cljs.core.map.call(null,inst_36438,inst_36417);
var inst_36440 = cljs.core.pr_str.call(null,inst_36439);
var inst_36441 = figwheel.client.utils.log.call(null,inst_36440);
var inst_36442 = (function (){var all_files = inst_36413;
var res_SINGLEQUOTE_ = inst_36416;
var res = inst_36417;
var files_not_loaded = inst_36419;
var dependencies_that_loaded = inst_36421;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36413,inst_36421,inst_36419,inst_36416,inst_36417,inst_36436,inst_36438,inst_36439,inst_36440,inst_36441,state_val_36501,c__33999__auto__,map__36345,map__36345__$1,opts,before_jsload,on_jsload,reload_dependents,map__36346,map__36346__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36413,inst_36421,inst_36419,inst_36416,inst_36417,inst_36436,inst_36438,inst_36439,inst_36440,inst_36441,state_val_36501,c__33999__auto__,map__36345,map__36345__$1,opts,before_jsload,on_jsload,reload_dependents,map__36346,map__36346__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36443 = setTimeout(inst_36442,(10));
var state_36500__$1 = (function (){var statearr_36571 = state_36500;
(statearr_36571[(33)] = inst_36436);

(statearr_36571[(34)] = inst_36441);

return statearr_36571;
})();
var statearr_36572_36635 = state_36500__$1;
(statearr_36572_36635[(2)] = inst_36443);

(statearr_36572_36635[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (16))){
var state_36500__$1 = state_36500;
var statearr_36573_36636 = state_36500__$1;
(statearr_36573_36636[(2)] = reload_dependents);

(statearr_36573_36636[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (38))){
var inst_36453 = (state_36500[(16)]);
var inst_36471 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36453);
var state_36500__$1 = state_36500;
var statearr_36574_36637 = state_36500__$1;
(statearr_36574_36637[(2)] = inst_36471);

(statearr_36574_36637[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (30))){
var state_36500__$1 = state_36500;
var statearr_36575_36638 = state_36500__$1;
(statearr_36575_36638[(2)] = null);

(statearr_36575_36638[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (10))){
var inst_36373 = (state_36500[(22)]);
var inst_36375 = cljs.core.chunked_seq_QMARK_.call(null,inst_36373);
var state_36500__$1 = state_36500;
if(inst_36375){
var statearr_36576_36639 = state_36500__$1;
(statearr_36576_36639[(1)] = (13));

} else {
var statearr_36577_36640 = state_36500__$1;
(statearr_36577_36640[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (18))){
var inst_36407 = (state_36500[(2)]);
var state_36500__$1 = state_36500;
if(cljs.core.truth_(inst_36407)){
var statearr_36578_36641 = state_36500__$1;
(statearr_36578_36641[(1)] = (19));

} else {
var statearr_36579_36642 = state_36500__$1;
(statearr_36579_36642[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (42))){
var state_36500__$1 = state_36500;
var statearr_36580_36643 = state_36500__$1;
(statearr_36580_36643[(2)] = null);

(statearr_36580_36643[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (37))){
var inst_36466 = (state_36500[(2)]);
var state_36500__$1 = state_36500;
var statearr_36581_36644 = state_36500__$1;
(statearr_36581_36644[(2)] = inst_36466);

(statearr_36581_36644[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36501 === (8))){
var inst_36360 = (state_36500[(7)]);
var inst_36373 = (state_36500[(22)]);
var inst_36373__$1 = cljs.core.seq.call(null,inst_36360);
var state_36500__$1 = (function (){var statearr_36582 = state_36500;
(statearr_36582[(22)] = inst_36373__$1);

return statearr_36582;
})();
if(inst_36373__$1){
var statearr_36583_36645 = state_36500__$1;
(statearr_36583_36645[(1)] = (10));

} else {
var statearr_36584_36646 = state_36500__$1;
(statearr_36584_36646[(1)] = (11));

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
});})(c__33999__auto__,map__36345,map__36345__$1,opts,before_jsload,on_jsload,reload_dependents,map__36346,map__36346__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33908__auto__,c__33999__auto__,map__36345,map__36345__$1,opts,before_jsload,on_jsload,reload_dependents,map__36346,map__36346__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33909__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33909__auto____0 = (function (){
var statearr_36585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36585[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33909__auto__);

(statearr_36585[(1)] = (1));

return statearr_36585;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33909__auto____1 = (function (state_36500){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_36500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e36586){if((e36586 instanceof Object)){
var ex__33912__auto__ = e36586;
var statearr_36587_36647 = state_36500;
(statearr_36587_36647[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36648 = state_36500;
state_36500 = G__36648;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33909__auto__ = function(state_36500){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33909__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33909__auto____1.call(this,state_36500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33909__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33909__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto__,map__36345,map__36345__$1,opts,before_jsload,on_jsload,reload_dependents,map__36346,map__36346__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34001__auto__ = (function (){var statearr_36588 = f__34000__auto__.call(null);
(statearr_36588[(6)] = c__33999__auto__);

return statearr_36588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto__,map__36345,map__36345__$1,opts,before_jsload,on_jsload,reload_dependents,map__36346,map__36346__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33999__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36651,link){
var map__36652 = p__36651;
var map__36652__$1 = ((((!((map__36652 == null)))?(((((map__36652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36652):map__36652);
var file = cljs.core.get.call(null,map__36652__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__36652,map__36652__$1,file){
return (function (p1__36649_SHARP_,p2__36650_SHARP_){
if(cljs.core._EQ_.call(null,p1__36649_SHARP_,p2__36650_SHARP_)){
return p1__36649_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__36652,map__36652__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36655){
var map__36656 = p__36655;
var map__36656__$1 = ((((!((map__36656 == null)))?(((((map__36656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36656):map__36656);
var match_length = cljs.core.get.call(null,map__36656__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36656__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36654_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36654_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36658_SHARP_,p2__36659_SHARP_){
return cljs.core.assoc.call(null,p1__36658_SHARP_,cljs.core.get.call(null,p2__36659_SHARP_,key),p2__36659_SHARP_);
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
var loaded_f_datas_36660 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36660);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36660);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36661,p__36662){
var map__36663 = p__36661;
var map__36663__$1 = ((((!((map__36663 == null)))?(((((map__36663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36663):map__36663);
var on_cssload = cljs.core.get.call(null,map__36663__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36664 = p__36662;
var map__36664__$1 = ((((!((map__36664 == null)))?(((((map__36664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36664):map__36664);
var files_msg = map__36664__$1;
var files = cljs.core.get.call(null,map__36664__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1543701297207
