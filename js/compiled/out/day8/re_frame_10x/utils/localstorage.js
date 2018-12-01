// Compiled by ClojureScript 1.10.339 {}
goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.utils.localstorage.safe_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__31905 = arguments.length;
switch (G__31905) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.call(null,key,null);
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.call(null,value);
}
});

day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key),cljs.core.pr_str.call(null,value));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__31907 = cljs.core.seq.call(null,Object.keys(localStorage));
var chunk__31908 = null;
var count__31909 = (0);
var i__31910 = (0);
while(true){
if((i__31910 < count__31909)){
var k = cljs.core._nth.call(null,chunk__31908,i__31910);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__31911 = seq__31907;
var G__31912 = chunk__31908;
var G__31913 = count__31909;
var G__31914 = (i__31910 + (1));
seq__31907 = G__31911;
chunk__31908 = G__31912;
count__31909 = G__31913;
i__31910 = G__31914;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31907);
if(temp__5457__auto__){
var seq__31907__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31907__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__31907__$1);
var G__31915 = cljs.core.chunk_rest.call(null,seq__31907__$1);
var G__31916 = c__4351__auto__;
var G__31917 = cljs.core.count.call(null,c__4351__auto__);
var G__31918 = (0);
seq__31907 = G__31915;
chunk__31908 = G__31916;
count__31909 = G__31917;
i__31910 = G__31918;
continue;
} else {
var k = cljs.core.first.call(null,seq__31907__$1);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__31919 = cljs.core.next.call(null,seq__31907__$1);
var G__31920 = null;
var G__31921 = (0);
var G__31922 = (0);
seq__31907 = G__31919;
chunk__31908 = G__31920;
count__31909 = G__31921;
i__31910 = G__31922;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=localstorage.js.map?rel=1543701293066
