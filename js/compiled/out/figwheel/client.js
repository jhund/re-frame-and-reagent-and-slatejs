// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.15";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e36957){if((e36957 instanceof Error)){
var e = e36957;
return "Error: Unable to stringify";
} else {
throw e36957;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__36960 = arguments.length;
switch (G__36960) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__36958_SHARP_){
if(typeof p1__36958_SHARP_ === 'string'){
return p1__36958_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__36958_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___36963 = arguments.length;
var i__4532__auto___36964 = (0);
while(true){
if((i__4532__auto___36964 < len__4531__auto___36963)){
args__4534__auto__.push((arguments[i__4532__auto___36964]));

var G__36965 = (i__4532__auto___36964 + (1));
i__4532__auto___36964 = G__36965;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36962){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36962));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___36967 = arguments.length;
var i__4532__auto___36968 = (0);
while(true){
if((i__4532__auto___36968 < len__4531__auto___36967)){
args__4534__auto__.push((arguments[i__4532__auto___36968]));

var G__36969 = (i__4532__auto___36968 + (1));
i__4532__auto___36968 = G__36969;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36966){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36966));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36970){
var map__36971 = p__36970;
var map__36971__$1 = ((((!((map__36971 == null)))?(((((map__36971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36971):map__36971);
var message = cljs.core.get.call(null,map__36971__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36971__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33999__auto___37050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto___37050,ch){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto___37050,ch){
return (function (state_37022){
var state_val_37023 = (state_37022[(1)]);
if((state_val_37023 === (7))){
var inst_37018 = (state_37022[(2)]);
var state_37022__$1 = state_37022;
var statearr_37024_37051 = state_37022__$1;
(statearr_37024_37051[(2)] = inst_37018);

(statearr_37024_37051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37023 === (1))){
var state_37022__$1 = state_37022;
var statearr_37025_37052 = state_37022__$1;
(statearr_37025_37052[(2)] = null);

(statearr_37025_37052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37023 === (4))){
var inst_36975 = (state_37022[(7)]);
var inst_36975__$1 = (state_37022[(2)]);
var state_37022__$1 = (function (){var statearr_37026 = state_37022;
(statearr_37026[(7)] = inst_36975__$1);

return statearr_37026;
})();
if(cljs.core.truth_(inst_36975__$1)){
var statearr_37027_37053 = state_37022__$1;
(statearr_37027_37053[(1)] = (5));

} else {
var statearr_37028_37054 = state_37022__$1;
(statearr_37028_37054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37023 === (15))){
var inst_36982 = (state_37022[(8)]);
var inst_36997 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36982);
var inst_36998 = cljs.core.first.call(null,inst_36997);
var inst_36999 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36998);
var inst_37000 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36999)].join('');
var inst_37001 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37000);
var state_37022__$1 = state_37022;
var statearr_37029_37055 = state_37022__$1;
(statearr_37029_37055[(2)] = inst_37001);

(statearr_37029_37055[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37023 === (13))){
var inst_37006 = (state_37022[(2)]);
var state_37022__$1 = state_37022;
var statearr_37030_37056 = state_37022__$1;
(statearr_37030_37056[(2)] = inst_37006);

(statearr_37030_37056[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37023 === (6))){
var state_37022__$1 = state_37022;
var statearr_37031_37057 = state_37022__$1;
(statearr_37031_37057[(2)] = null);

(statearr_37031_37057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37023 === (17))){
var inst_37004 = (state_37022[(2)]);
var state_37022__$1 = state_37022;
var statearr_37032_37058 = state_37022__$1;
(statearr_37032_37058[(2)] = inst_37004);

(statearr_37032_37058[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37023 === (3))){
var inst_37020 = (state_37022[(2)]);
var state_37022__$1 = state_37022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37022__$1,inst_37020);
} else {
if((state_val_37023 === (12))){
var inst_36981 = (state_37022[(9)]);
var inst_36995 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36981,opts);
var state_37022__$1 = state_37022;
if(cljs.core.truth_(inst_36995)){
var statearr_37033_37059 = state_37022__$1;
(statearr_37033_37059[(1)] = (15));

} else {
var statearr_37034_37060 = state_37022__$1;
(statearr_37034_37060[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37023 === (2))){
var state_37022__$1 = state_37022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37022__$1,(4),ch);
} else {
if((state_val_37023 === (11))){
var inst_36982 = (state_37022[(8)]);
var inst_36987 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36988 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36982);
var inst_36989 = cljs.core.async.timeout.call(null,(1000));
var inst_36990 = [inst_36988,inst_36989];
var inst_36991 = (new cljs.core.PersistentVector(null,2,(5),inst_36987,inst_36990,null));
var state_37022__$1 = state_37022;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37022__$1,(14),inst_36991);
} else {
if((state_val_37023 === (9))){
var inst_36982 = (state_37022[(8)]);
var inst_37008 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37009 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36982);
var inst_37010 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37009);
var inst_37011 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37010)].join('');
var inst_37012 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37011);
var state_37022__$1 = (function (){var statearr_37035 = state_37022;
(statearr_37035[(10)] = inst_37008);

return statearr_37035;
})();
var statearr_37036_37061 = state_37022__$1;
(statearr_37036_37061[(2)] = inst_37012);

(statearr_37036_37061[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37023 === (5))){
var inst_36975 = (state_37022[(7)]);
var inst_36977 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36978 = (new cljs.core.PersistentArrayMap(null,2,inst_36977,null));
var inst_36979 = (new cljs.core.PersistentHashSet(null,inst_36978,null));
var inst_36980 = figwheel.client.focus_msgs.call(null,inst_36979,inst_36975);
var inst_36981 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36980);
var inst_36982 = cljs.core.first.call(null,inst_36980);
var inst_36983 = figwheel.client.autoload_QMARK_.call(null);
var state_37022__$1 = (function (){var statearr_37037 = state_37022;
(statearr_37037[(8)] = inst_36982);

(statearr_37037[(9)] = inst_36981);

return statearr_37037;
})();
if(cljs.core.truth_(inst_36983)){
var statearr_37038_37062 = state_37022__$1;
(statearr_37038_37062[(1)] = (8));

} else {
var statearr_37039_37063 = state_37022__$1;
(statearr_37039_37063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37023 === (14))){
var inst_36993 = (state_37022[(2)]);
var state_37022__$1 = state_37022;
var statearr_37040_37064 = state_37022__$1;
(statearr_37040_37064[(2)] = inst_36993);

(statearr_37040_37064[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37023 === (16))){
var state_37022__$1 = state_37022;
var statearr_37041_37065 = state_37022__$1;
(statearr_37041_37065[(2)] = null);

(statearr_37041_37065[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37023 === (10))){
var inst_37014 = (state_37022[(2)]);
var state_37022__$1 = (function (){var statearr_37042 = state_37022;
(statearr_37042[(11)] = inst_37014);

return statearr_37042;
})();
var statearr_37043_37066 = state_37022__$1;
(statearr_37043_37066[(2)] = null);

(statearr_37043_37066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37023 === (8))){
var inst_36981 = (state_37022[(9)]);
var inst_36985 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36981,opts);
var state_37022__$1 = state_37022;
if(cljs.core.truth_(inst_36985)){
var statearr_37044_37067 = state_37022__$1;
(statearr_37044_37067[(1)] = (11));

} else {
var statearr_37045_37068 = state_37022__$1;
(statearr_37045_37068[(1)] = (12));

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
});})(c__33999__auto___37050,ch))
;
return ((function (switch__33908__auto__,c__33999__auto___37050,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33909__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33909__auto____0 = (function (){
var statearr_37046 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37046[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33909__auto__);

(statearr_37046[(1)] = (1));

return statearr_37046;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33909__auto____1 = (function (state_37022){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_37022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e37047){if((e37047 instanceof Object)){
var ex__33912__auto__ = e37047;
var statearr_37048_37069 = state_37022;
(statearr_37048_37069[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37070 = state_37022;
state_37022 = G__37070;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33909__auto__ = function(state_37022){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33909__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33909__auto____1.call(this,state_37022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33909__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33909__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto___37050,ch))
})();
var state__34001__auto__ = (function (){var statearr_37049 = f__34000__auto__.call(null);
(statearr_37049[(6)] = c__33999__auto___37050);

return statearr_37049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto___37050,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37071_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37071_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37075 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37075){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_37073 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_37074 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_37073,_STAR_print_fn_STAR_37074,sb,base_path_37075){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_37073,_STAR_print_fn_STAR_37074,sb,base_path_37075))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37074;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_37073;
}}catch (e37072){if((e37072 instanceof Error)){
var e = e37072;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37075], null));
} else {
var e = e37072;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_37075))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37076){
var map__37077 = p__37076;
var map__37077__$1 = ((((!((map__37077 == null)))?(((((map__37077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37077):map__37077);
var opts = map__37077__$1;
var build_id = cljs.core.get.call(null,map__37077__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37077,map__37077__$1,opts,build_id){
return (function (p__37079){
var vec__37080 = p__37079;
var seq__37081 = cljs.core.seq.call(null,vec__37080);
var first__37082 = cljs.core.first.call(null,seq__37081);
var seq__37081__$1 = cljs.core.next.call(null,seq__37081);
var map__37083 = first__37082;
var map__37083__$1 = ((((!((map__37083 == null)))?(((((map__37083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37083):map__37083);
var msg = map__37083__$1;
var msg_name = cljs.core.get.call(null,map__37083__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37081__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37080,seq__37081,first__37082,seq__37081__$1,map__37083,map__37083__$1,msg,msg_name,_,map__37077,map__37077__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37080,seq__37081,first__37082,seq__37081__$1,map__37083,map__37083__$1,msg,msg_name,_,map__37077,map__37077__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37077,map__37077__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37085){
var vec__37086 = p__37085;
var seq__37087 = cljs.core.seq.call(null,vec__37086);
var first__37088 = cljs.core.first.call(null,seq__37087);
var seq__37087__$1 = cljs.core.next.call(null,seq__37087);
var map__37089 = first__37088;
var map__37089__$1 = ((((!((map__37089 == null)))?(((((map__37089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37089):map__37089);
var msg = map__37089__$1;
var msg_name = cljs.core.get.call(null,map__37089__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37087__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37091){
var map__37092 = p__37091;
var map__37092__$1 = ((((!((map__37092 == null)))?(((((map__37092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37092):map__37092);
var on_compile_warning = cljs.core.get.call(null,map__37092__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37092__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37092,map__37092__$1,on_compile_warning,on_compile_fail){
return (function (p__37094){
var vec__37095 = p__37094;
var seq__37096 = cljs.core.seq.call(null,vec__37095);
var first__37097 = cljs.core.first.call(null,seq__37096);
var seq__37096__$1 = cljs.core.next.call(null,seq__37096);
var map__37098 = first__37097;
var map__37098__$1 = ((((!((map__37098 == null)))?(((((map__37098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37098):map__37098);
var msg = map__37098__$1;
var msg_name = cljs.core.get.call(null,map__37098__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37096__$1;
var pred__37100 = cljs.core._EQ_;
var expr__37101 = msg_name;
if(cljs.core.truth_(pred__37100.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37101))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37100.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37101))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37092,map__37092__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto__,msg_hist,msg_names,msg){
return (function (state_37190){
var state_val_37191 = (state_37190[(1)]);
if((state_val_37191 === (7))){
var inst_37110 = (state_37190[(2)]);
var state_37190__$1 = state_37190;
if(cljs.core.truth_(inst_37110)){
var statearr_37192_37239 = state_37190__$1;
(statearr_37192_37239[(1)] = (8));

} else {
var statearr_37193_37240 = state_37190__$1;
(statearr_37193_37240[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (20))){
var inst_37184 = (state_37190[(2)]);
var state_37190__$1 = state_37190;
var statearr_37194_37241 = state_37190__$1;
(statearr_37194_37241[(2)] = inst_37184);

(statearr_37194_37241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (27))){
var inst_37180 = (state_37190[(2)]);
var state_37190__$1 = state_37190;
var statearr_37195_37242 = state_37190__$1;
(statearr_37195_37242[(2)] = inst_37180);

(statearr_37195_37242[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (1))){
var inst_37103 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37190__$1 = state_37190;
if(cljs.core.truth_(inst_37103)){
var statearr_37196_37243 = state_37190__$1;
(statearr_37196_37243[(1)] = (2));

} else {
var statearr_37197_37244 = state_37190__$1;
(statearr_37197_37244[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (24))){
var inst_37182 = (state_37190[(2)]);
var state_37190__$1 = state_37190;
var statearr_37198_37245 = state_37190__$1;
(statearr_37198_37245[(2)] = inst_37182);

(statearr_37198_37245[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (4))){
var inst_37188 = (state_37190[(2)]);
var state_37190__$1 = state_37190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37190__$1,inst_37188);
} else {
if((state_val_37191 === (15))){
var inst_37186 = (state_37190[(2)]);
var state_37190__$1 = state_37190;
var statearr_37199_37246 = state_37190__$1;
(statearr_37199_37246[(2)] = inst_37186);

(statearr_37199_37246[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (21))){
var inst_37139 = (state_37190[(2)]);
var inst_37140 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37141 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37140);
var state_37190__$1 = (function (){var statearr_37200 = state_37190;
(statearr_37200[(7)] = inst_37139);

return statearr_37200;
})();
var statearr_37201_37247 = state_37190__$1;
(statearr_37201_37247[(2)] = inst_37141);

(statearr_37201_37247[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (31))){
var inst_37169 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37190__$1 = state_37190;
if(cljs.core.truth_(inst_37169)){
var statearr_37202_37248 = state_37190__$1;
(statearr_37202_37248[(1)] = (34));

} else {
var statearr_37203_37249 = state_37190__$1;
(statearr_37203_37249[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (32))){
var inst_37178 = (state_37190[(2)]);
var state_37190__$1 = state_37190;
var statearr_37204_37250 = state_37190__$1;
(statearr_37204_37250[(2)] = inst_37178);

(statearr_37204_37250[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (33))){
var inst_37165 = (state_37190[(2)]);
var inst_37166 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37167 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37166);
var state_37190__$1 = (function (){var statearr_37205 = state_37190;
(statearr_37205[(8)] = inst_37165);

return statearr_37205;
})();
var statearr_37206_37251 = state_37190__$1;
(statearr_37206_37251[(2)] = inst_37167);

(statearr_37206_37251[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (13))){
var inst_37124 = figwheel.client.heads_up.clear.call(null);
var state_37190__$1 = state_37190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37190__$1,(16),inst_37124);
} else {
if((state_val_37191 === (22))){
var inst_37145 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37146 = figwheel.client.heads_up.append_warning_message.call(null,inst_37145);
var state_37190__$1 = state_37190;
var statearr_37207_37252 = state_37190__$1;
(statearr_37207_37252[(2)] = inst_37146);

(statearr_37207_37252[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (36))){
var inst_37176 = (state_37190[(2)]);
var state_37190__$1 = state_37190;
var statearr_37208_37253 = state_37190__$1;
(statearr_37208_37253[(2)] = inst_37176);

(statearr_37208_37253[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (29))){
var inst_37156 = (state_37190[(2)]);
var inst_37157 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37158 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37157);
var state_37190__$1 = (function (){var statearr_37209 = state_37190;
(statearr_37209[(9)] = inst_37156);

return statearr_37209;
})();
var statearr_37210_37254 = state_37190__$1;
(statearr_37210_37254[(2)] = inst_37158);

(statearr_37210_37254[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (6))){
var inst_37105 = (state_37190[(10)]);
var state_37190__$1 = state_37190;
var statearr_37211_37255 = state_37190__$1;
(statearr_37211_37255[(2)] = inst_37105);

(statearr_37211_37255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (28))){
var inst_37152 = (state_37190[(2)]);
var inst_37153 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37154 = figwheel.client.heads_up.display_warning.call(null,inst_37153);
var state_37190__$1 = (function (){var statearr_37212 = state_37190;
(statearr_37212[(11)] = inst_37152);

return statearr_37212;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37190__$1,(29),inst_37154);
} else {
if((state_val_37191 === (25))){
var inst_37150 = figwheel.client.heads_up.clear.call(null);
var state_37190__$1 = state_37190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37190__$1,(28),inst_37150);
} else {
if((state_val_37191 === (34))){
var inst_37171 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37190__$1 = state_37190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37190__$1,(37),inst_37171);
} else {
if((state_val_37191 === (17))){
var inst_37130 = (state_37190[(2)]);
var inst_37131 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37132 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37131);
var state_37190__$1 = (function (){var statearr_37213 = state_37190;
(statearr_37213[(12)] = inst_37130);

return statearr_37213;
})();
var statearr_37214_37256 = state_37190__$1;
(statearr_37214_37256[(2)] = inst_37132);

(statearr_37214_37256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (3))){
var inst_37122 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37190__$1 = state_37190;
if(cljs.core.truth_(inst_37122)){
var statearr_37215_37257 = state_37190__$1;
(statearr_37215_37257[(1)] = (13));

} else {
var statearr_37216_37258 = state_37190__$1;
(statearr_37216_37258[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (12))){
var inst_37118 = (state_37190[(2)]);
var state_37190__$1 = state_37190;
var statearr_37217_37259 = state_37190__$1;
(statearr_37217_37259[(2)] = inst_37118);

(statearr_37217_37259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (2))){
var inst_37105 = (state_37190[(10)]);
var inst_37105__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37190__$1 = (function (){var statearr_37218 = state_37190;
(statearr_37218[(10)] = inst_37105__$1);

return statearr_37218;
})();
if(cljs.core.truth_(inst_37105__$1)){
var statearr_37219_37260 = state_37190__$1;
(statearr_37219_37260[(1)] = (5));

} else {
var statearr_37220_37261 = state_37190__$1;
(statearr_37220_37261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (23))){
var inst_37148 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37190__$1 = state_37190;
if(cljs.core.truth_(inst_37148)){
var statearr_37221_37262 = state_37190__$1;
(statearr_37221_37262[(1)] = (25));

} else {
var statearr_37222_37263 = state_37190__$1;
(statearr_37222_37263[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (35))){
var state_37190__$1 = state_37190;
var statearr_37223_37264 = state_37190__$1;
(statearr_37223_37264[(2)] = null);

(statearr_37223_37264[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (19))){
var inst_37143 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37190__$1 = state_37190;
if(cljs.core.truth_(inst_37143)){
var statearr_37224_37265 = state_37190__$1;
(statearr_37224_37265[(1)] = (22));

} else {
var statearr_37225_37266 = state_37190__$1;
(statearr_37225_37266[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (11))){
var inst_37114 = (state_37190[(2)]);
var state_37190__$1 = state_37190;
var statearr_37226_37267 = state_37190__$1;
(statearr_37226_37267[(2)] = inst_37114);

(statearr_37226_37267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (9))){
var inst_37116 = figwheel.client.heads_up.clear.call(null);
var state_37190__$1 = state_37190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37190__$1,(12),inst_37116);
} else {
if((state_val_37191 === (5))){
var inst_37107 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37190__$1 = state_37190;
var statearr_37227_37268 = state_37190__$1;
(statearr_37227_37268[(2)] = inst_37107);

(statearr_37227_37268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (14))){
var inst_37134 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37190__$1 = state_37190;
if(cljs.core.truth_(inst_37134)){
var statearr_37228_37269 = state_37190__$1;
(statearr_37228_37269[(1)] = (18));

} else {
var statearr_37229_37270 = state_37190__$1;
(statearr_37229_37270[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (26))){
var inst_37160 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37190__$1 = state_37190;
if(cljs.core.truth_(inst_37160)){
var statearr_37230_37271 = state_37190__$1;
(statearr_37230_37271[(1)] = (30));

} else {
var statearr_37231_37272 = state_37190__$1;
(statearr_37231_37272[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (16))){
var inst_37126 = (state_37190[(2)]);
var inst_37127 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37128 = figwheel.client.heads_up.display_exception.call(null,inst_37127);
var state_37190__$1 = (function (){var statearr_37232 = state_37190;
(statearr_37232[(13)] = inst_37126);

return statearr_37232;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37190__$1,(17),inst_37128);
} else {
if((state_val_37191 === (30))){
var inst_37162 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37163 = figwheel.client.heads_up.display_warning.call(null,inst_37162);
var state_37190__$1 = state_37190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37190__$1,(33),inst_37163);
} else {
if((state_val_37191 === (10))){
var inst_37120 = (state_37190[(2)]);
var state_37190__$1 = state_37190;
var statearr_37233_37273 = state_37190__$1;
(statearr_37233_37273[(2)] = inst_37120);

(statearr_37233_37273[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (18))){
var inst_37136 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37137 = figwheel.client.heads_up.display_exception.call(null,inst_37136);
var state_37190__$1 = state_37190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37190__$1,(21),inst_37137);
} else {
if((state_val_37191 === (37))){
var inst_37173 = (state_37190[(2)]);
var state_37190__$1 = state_37190;
var statearr_37234_37274 = state_37190__$1;
(statearr_37234_37274[(2)] = inst_37173);

(statearr_37234_37274[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37191 === (8))){
var inst_37112 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37190__$1 = state_37190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37190__$1,(11),inst_37112);
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
});})(c__33999__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33908__auto__,c__33999__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33909__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33909__auto____0 = (function (){
var statearr_37235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37235[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33909__auto__);

(statearr_37235[(1)] = (1));

return statearr_37235;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33909__auto____1 = (function (state_37190){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_37190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e37236){if((e37236 instanceof Object)){
var ex__33912__auto__ = e37236;
var statearr_37237_37275 = state_37190;
(statearr_37237_37275[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37276 = state_37190;
state_37190 = G__37276;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33909__auto__ = function(state_37190){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33909__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33909__auto____1.call(this,state_37190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33909__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33909__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto__,msg_hist,msg_names,msg))
})();
var state__34001__auto__ = (function (){var statearr_37238 = f__34000__auto__.call(null);
(statearr_37238[(6)] = c__33999__auto__);

return statearr_37238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto__,msg_hist,msg_names,msg))
);

return c__33999__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33999__auto___37305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto___37305,ch){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto___37305,ch){
return (function (state_37291){
var state_val_37292 = (state_37291[(1)]);
if((state_val_37292 === (1))){
var state_37291__$1 = state_37291;
var statearr_37293_37306 = state_37291__$1;
(statearr_37293_37306[(2)] = null);

(statearr_37293_37306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (2))){
var state_37291__$1 = state_37291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37291__$1,(4),ch);
} else {
if((state_val_37292 === (3))){
var inst_37289 = (state_37291[(2)]);
var state_37291__$1 = state_37291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37291__$1,inst_37289);
} else {
if((state_val_37292 === (4))){
var inst_37279 = (state_37291[(7)]);
var inst_37279__$1 = (state_37291[(2)]);
var state_37291__$1 = (function (){var statearr_37294 = state_37291;
(statearr_37294[(7)] = inst_37279__$1);

return statearr_37294;
})();
if(cljs.core.truth_(inst_37279__$1)){
var statearr_37295_37307 = state_37291__$1;
(statearr_37295_37307[(1)] = (5));

} else {
var statearr_37296_37308 = state_37291__$1;
(statearr_37296_37308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (5))){
var inst_37279 = (state_37291[(7)]);
var inst_37281 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37279);
var state_37291__$1 = state_37291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37291__$1,(8),inst_37281);
} else {
if((state_val_37292 === (6))){
var state_37291__$1 = state_37291;
var statearr_37297_37309 = state_37291__$1;
(statearr_37297_37309[(2)] = null);

(statearr_37297_37309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (7))){
var inst_37287 = (state_37291[(2)]);
var state_37291__$1 = state_37291;
var statearr_37298_37310 = state_37291__$1;
(statearr_37298_37310[(2)] = inst_37287);

(statearr_37298_37310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37292 === (8))){
var inst_37283 = (state_37291[(2)]);
var state_37291__$1 = (function (){var statearr_37299 = state_37291;
(statearr_37299[(8)] = inst_37283);

return statearr_37299;
})();
var statearr_37300_37311 = state_37291__$1;
(statearr_37300_37311[(2)] = null);

(statearr_37300_37311[(1)] = (2));


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
});})(c__33999__auto___37305,ch))
;
return ((function (switch__33908__auto__,c__33999__auto___37305,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33909__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33909__auto____0 = (function (){
var statearr_37301 = [null,null,null,null,null,null,null,null,null];
(statearr_37301[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33909__auto__);

(statearr_37301[(1)] = (1));

return statearr_37301;
});
var figwheel$client$heads_up_plugin_$_state_machine__33909__auto____1 = (function (state_37291){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_37291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e37302){if((e37302 instanceof Object)){
var ex__33912__auto__ = e37302;
var statearr_37303_37312 = state_37291;
(statearr_37303_37312[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37313 = state_37291;
state_37291 = G__37313;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33909__auto__ = function(state_37291){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33909__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33909__auto____1.call(this,state_37291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33909__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33909__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto___37305,ch))
})();
var state__34001__auto__ = (function (){var statearr_37304 = f__34000__auto__.call(null);
(statearr_37304[(6)] = c__33999__auto___37305);

return statearr_37304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto___37305,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto__){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto__){
return (function (state_37319){
var state_val_37320 = (state_37319[(1)]);
if((state_val_37320 === (1))){
var inst_37314 = cljs.core.async.timeout.call(null,(3000));
var state_37319__$1 = state_37319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37319__$1,(2),inst_37314);
} else {
if((state_val_37320 === (2))){
var inst_37316 = (state_37319[(2)]);
var inst_37317 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37319__$1 = (function (){var statearr_37321 = state_37319;
(statearr_37321[(7)] = inst_37316);

return statearr_37321;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37319__$1,inst_37317);
} else {
return null;
}
}
});})(c__33999__auto__))
;
return ((function (switch__33908__auto__,c__33999__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33909__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33909__auto____0 = (function (){
var statearr_37322 = [null,null,null,null,null,null,null,null];
(statearr_37322[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33909__auto__);

(statearr_37322[(1)] = (1));

return statearr_37322;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33909__auto____1 = (function (state_37319){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_37319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e37323){if((e37323 instanceof Object)){
var ex__33912__auto__ = e37323;
var statearr_37324_37326 = state_37319;
(statearr_37324_37326[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37327 = state_37319;
state_37319 = G__37327;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33909__auto__ = function(state_37319){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33909__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33909__auto____1.call(this,state_37319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33909__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33909__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto__))
})();
var state__34001__auto__ = (function (){var statearr_37325 = f__34000__auto__.call(null);
(statearr_37325[(6)] = c__33999__auto__);

return statearr_37325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto__))
);

return c__33999__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33999__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33999__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__34000__auto__ = (function (){var switch__33908__auto__ = ((function (c__33999__auto__,figwheel_version,temp__5457__auto__){
return (function (state_37334){
var state_val_37335 = (state_37334[(1)]);
if((state_val_37335 === (1))){
var inst_37328 = cljs.core.async.timeout.call(null,(2000));
var state_37334__$1 = state_37334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37334__$1,(2),inst_37328);
} else {
if((state_val_37335 === (2))){
var inst_37330 = (state_37334[(2)]);
var inst_37331 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37332 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37331);
var state_37334__$1 = (function (){var statearr_37336 = state_37334;
(statearr_37336[(7)] = inst_37330);

return statearr_37336;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37334__$1,inst_37332);
} else {
return null;
}
}
});})(c__33999__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__33908__auto__,c__33999__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33909__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33909__auto____0 = (function (){
var statearr_37337 = [null,null,null,null,null,null,null,null];
(statearr_37337[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33909__auto__);

(statearr_37337[(1)] = (1));

return statearr_37337;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33909__auto____1 = (function (state_37334){
while(true){
var ret_value__33910__auto__ = (function (){try{while(true){
var result__33911__auto__ = switch__33908__auto__.call(null,state_37334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33911__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33911__auto__;
}
break;
}
}catch (e37338){if((e37338 instanceof Object)){
var ex__33912__auto__ = e37338;
var statearr_37339_37341 = state_37334;
(statearr_37339_37341[(5)] = ex__33912__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33910__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37342 = state_37334;
state_37334 = G__37342;
continue;
} else {
return ret_value__33910__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33909__auto__ = function(state_37334){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33909__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33909__auto____1.call(this,state_37334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33909__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33909__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33909__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33909__auto__;
})()
;})(switch__33908__auto__,c__33999__auto__,figwheel_version,temp__5457__auto__))
})();
var state__34001__auto__ = (function (){var statearr_37340 = f__34000__auto__.call(null);
(statearr_37340[(6)] = c__33999__auto__);

return statearr_37340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34001__auto__);
});})(c__33999__auto__,figwheel_version,temp__5457__auto__))
);

return c__33999__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37343){
var map__37344 = p__37343;
var map__37344__$1 = ((((!((map__37344 == null)))?(((((map__37344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37344):map__37344);
var file = cljs.core.get.call(null,map__37344__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37344__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37344__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37346 = "";
var G__37346__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37346),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37346);
var G__37346__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37346__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37346__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37346__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37346__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37347){
var map__37348 = p__37347;
var map__37348__$1 = ((((!((map__37348 == null)))?(((((map__37348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37348):map__37348);
var ed = map__37348__$1;
var formatted_exception = cljs.core.get.call(null,map__37348__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37348__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37348__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37350_37354 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37351_37355 = null;
var count__37352_37356 = (0);
var i__37353_37357 = (0);
while(true){
if((i__37353_37357 < count__37352_37356)){
var msg_37358 = cljs.core._nth.call(null,chunk__37351_37355,i__37353_37357);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37358);


var G__37359 = seq__37350_37354;
var G__37360 = chunk__37351_37355;
var G__37361 = count__37352_37356;
var G__37362 = (i__37353_37357 + (1));
seq__37350_37354 = G__37359;
chunk__37351_37355 = G__37360;
count__37352_37356 = G__37361;
i__37353_37357 = G__37362;
continue;
} else {
var temp__5457__auto___37363 = cljs.core.seq.call(null,seq__37350_37354);
if(temp__5457__auto___37363){
var seq__37350_37364__$1 = temp__5457__auto___37363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37350_37364__$1)){
var c__4351__auto___37365 = cljs.core.chunk_first.call(null,seq__37350_37364__$1);
var G__37366 = cljs.core.chunk_rest.call(null,seq__37350_37364__$1);
var G__37367 = c__4351__auto___37365;
var G__37368 = cljs.core.count.call(null,c__4351__auto___37365);
var G__37369 = (0);
seq__37350_37354 = G__37366;
chunk__37351_37355 = G__37367;
count__37352_37356 = G__37368;
i__37353_37357 = G__37369;
continue;
} else {
var msg_37370 = cljs.core.first.call(null,seq__37350_37364__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37370);


var G__37371 = cljs.core.next.call(null,seq__37350_37364__$1);
var G__37372 = null;
var G__37373 = (0);
var G__37374 = (0);
seq__37350_37354 = G__37371;
chunk__37351_37355 = G__37372;
count__37352_37356 = G__37373;
i__37353_37357 = G__37374;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37375){
var map__37376 = p__37375;
var map__37376__$1 = ((((!((map__37376 == null)))?(((((map__37376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37376):map__37376);
var w = map__37376__$1;
var message = cljs.core.get.call(null,map__37376__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37378 = cljs.core.seq.call(null,plugins);
var chunk__37379 = null;
var count__37380 = (0);
var i__37381 = (0);
while(true){
if((i__37381 < count__37380)){
var vec__37382 = cljs.core._nth.call(null,chunk__37379,i__37381);
var k = cljs.core.nth.call(null,vec__37382,(0),null);
var plugin = cljs.core.nth.call(null,vec__37382,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37388 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37378,chunk__37379,count__37380,i__37381,pl_37388,vec__37382,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37388.call(null,msg_hist);
});})(seq__37378,chunk__37379,count__37380,i__37381,pl_37388,vec__37382,k,plugin))
);
} else {
}


var G__37389 = seq__37378;
var G__37390 = chunk__37379;
var G__37391 = count__37380;
var G__37392 = (i__37381 + (1));
seq__37378 = G__37389;
chunk__37379 = G__37390;
count__37380 = G__37391;
i__37381 = G__37392;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37378);
if(temp__5457__auto__){
var seq__37378__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37378__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__37378__$1);
var G__37393 = cljs.core.chunk_rest.call(null,seq__37378__$1);
var G__37394 = c__4351__auto__;
var G__37395 = cljs.core.count.call(null,c__4351__auto__);
var G__37396 = (0);
seq__37378 = G__37393;
chunk__37379 = G__37394;
count__37380 = G__37395;
i__37381 = G__37396;
continue;
} else {
var vec__37385 = cljs.core.first.call(null,seq__37378__$1);
var k = cljs.core.nth.call(null,vec__37385,(0),null);
var plugin = cljs.core.nth.call(null,vec__37385,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37397 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37378,chunk__37379,count__37380,i__37381,pl_37397,vec__37385,k,plugin,seq__37378__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37397.call(null,msg_hist);
});})(seq__37378,chunk__37379,count__37380,i__37381,pl_37397,vec__37385,k,plugin,seq__37378__$1,temp__5457__auto__))
);
} else {
}


var G__37398 = cljs.core.next.call(null,seq__37378__$1);
var G__37399 = null;
var G__37400 = (0);
var G__37401 = (0);
seq__37378 = G__37398;
chunk__37379 = G__37399;
count__37380 = G__37400;
i__37381 = G__37401;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37403 = arguments.length;
switch (G__37403) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37404_37409 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37405_37410 = null;
var count__37406_37411 = (0);
var i__37407_37412 = (0);
while(true){
if((i__37407_37412 < count__37406_37411)){
var msg_37413 = cljs.core._nth.call(null,chunk__37405_37410,i__37407_37412);
figwheel.client.socket.handle_incoming_message.call(null,msg_37413);


var G__37414 = seq__37404_37409;
var G__37415 = chunk__37405_37410;
var G__37416 = count__37406_37411;
var G__37417 = (i__37407_37412 + (1));
seq__37404_37409 = G__37414;
chunk__37405_37410 = G__37415;
count__37406_37411 = G__37416;
i__37407_37412 = G__37417;
continue;
} else {
var temp__5457__auto___37418 = cljs.core.seq.call(null,seq__37404_37409);
if(temp__5457__auto___37418){
var seq__37404_37419__$1 = temp__5457__auto___37418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37404_37419__$1)){
var c__4351__auto___37420 = cljs.core.chunk_first.call(null,seq__37404_37419__$1);
var G__37421 = cljs.core.chunk_rest.call(null,seq__37404_37419__$1);
var G__37422 = c__4351__auto___37420;
var G__37423 = cljs.core.count.call(null,c__4351__auto___37420);
var G__37424 = (0);
seq__37404_37409 = G__37421;
chunk__37405_37410 = G__37422;
count__37406_37411 = G__37423;
i__37407_37412 = G__37424;
continue;
} else {
var msg_37425 = cljs.core.first.call(null,seq__37404_37419__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37425);


var G__37426 = cljs.core.next.call(null,seq__37404_37419__$1);
var G__37427 = null;
var G__37428 = (0);
var G__37429 = (0);
seq__37404_37409 = G__37426;
chunk__37405_37410 = G__37427;
count__37406_37411 = G__37428;
i__37407_37412 = G__37429;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___37434 = arguments.length;
var i__4532__auto___37435 = (0);
while(true){
if((i__4532__auto___37435 < len__4531__auto___37434)){
args__4534__auto__.push((arguments[i__4532__auto___37435]));

var G__37436 = (i__4532__auto___37435 + (1));
i__4532__auto___37435 = G__37436;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37431){
var map__37432 = p__37431;
var map__37432__$1 = ((((!((map__37432 == null)))?(((((map__37432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37432):map__37432);
var opts = map__37432__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37430){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37430));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37437){if((e37437 instanceof Error)){
var e = e37437;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37437;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37438){
var map__37439 = p__37438;
var map__37439__$1 = ((((!((map__37439 == null)))?(((((map__37439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37439):map__37439);
var msg_name = cljs.core.get.call(null,map__37439__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1543701297971
