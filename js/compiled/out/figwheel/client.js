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
}catch (e31756){if((e31756 instanceof Error)){
var e = e31756;
return "Error: Unable to stringify";
} else {
throw e31756;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31759 = arguments.length;
switch (G__31759) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31757_SHARP_){
if(typeof p1__31757_SHARP_ === 'string'){
return p1__31757_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31757_SHARP_);
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
var len__4531__auto___31762 = arguments.length;
var i__4532__auto___31763 = (0);
while(true){
if((i__4532__auto___31763 < len__4531__auto___31762)){
args__4534__auto__.push((arguments[i__4532__auto___31763]));

var G__31764 = (i__4532__auto___31763 + (1));
i__4532__auto___31763 = G__31764;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31761){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31761));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31766 = arguments.length;
var i__4532__auto___31767 = (0);
while(true){
if((i__4532__auto___31767 < len__4531__auto___31766)){
args__4534__auto__.push((arguments[i__4532__auto___31767]));

var G__31768 = (i__4532__auto___31767 + (1));
i__4532__auto___31767 = G__31768;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31765){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31765));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31769){
var map__31770 = p__31769;
var map__31770__$1 = ((((!((map__31770 == null)))?(((((map__31770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31770):map__31770);
var message = cljs.core.get.call(null,map__31770__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31770__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__27900__auto___31849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___31849,ch){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto___31849,ch){
return (function (state_31821){
var state_val_31822 = (state_31821[(1)]);
if((state_val_31822 === (7))){
var inst_31817 = (state_31821[(2)]);
var state_31821__$1 = state_31821;
var statearr_31823_31850 = state_31821__$1;
(statearr_31823_31850[(2)] = inst_31817);

(statearr_31823_31850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (1))){
var state_31821__$1 = state_31821;
var statearr_31824_31851 = state_31821__$1;
(statearr_31824_31851[(2)] = null);

(statearr_31824_31851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (4))){
var inst_31774 = (state_31821[(7)]);
var inst_31774__$1 = (state_31821[(2)]);
var state_31821__$1 = (function (){var statearr_31825 = state_31821;
(statearr_31825[(7)] = inst_31774__$1);

return statearr_31825;
})();
if(cljs.core.truth_(inst_31774__$1)){
var statearr_31826_31852 = state_31821__$1;
(statearr_31826_31852[(1)] = (5));

} else {
var statearr_31827_31853 = state_31821__$1;
(statearr_31827_31853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (15))){
var inst_31781 = (state_31821[(8)]);
var inst_31796 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31781);
var inst_31797 = cljs.core.first.call(null,inst_31796);
var inst_31798 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31797);
var inst_31799 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31798)].join('');
var inst_31800 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31799);
var state_31821__$1 = state_31821;
var statearr_31828_31854 = state_31821__$1;
(statearr_31828_31854[(2)] = inst_31800);

(statearr_31828_31854[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (13))){
var inst_31805 = (state_31821[(2)]);
var state_31821__$1 = state_31821;
var statearr_31829_31855 = state_31821__$1;
(statearr_31829_31855[(2)] = inst_31805);

(statearr_31829_31855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (6))){
var state_31821__$1 = state_31821;
var statearr_31830_31856 = state_31821__$1;
(statearr_31830_31856[(2)] = null);

(statearr_31830_31856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (17))){
var inst_31803 = (state_31821[(2)]);
var state_31821__$1 = state_31821;
var statearr_31831_31857 = state_31821__$1;
(statearr_31831_31857[(2)] = inst_31803);

(statearr_31831_31857[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (3))){
var inst_31819 = (state_31821[(2)]);
var state_31821__$1 = state_31821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31821__$1,inst_31819);
} else {
if((state_val_31822 === (12))){
var inst_31780 = (state_31821[(9)]);
var inst_31794 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31780,opts);
var state_31821__$1 = state_31821;
if(cljs.core.truth_(inst_31794)){
var statearr_31832_31858 = state_31821__$1;
(statearr_31832_31858[(1)] = (15));

} else {
var statearr_31833_31859 = state_31821__$1;
(statearr_31833_31859[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (2))){
var state_31821__$1 = state_31821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31821__$1,(4),ch);
} else {
if((state_val_31822 === (11))){
var inst_31781 = (state_31821[(8)]);
var inst_31786 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31787 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31781);
var inst_31788 = cljs.core.async.timeout.call(null,(1000));
var inst_31789 = [inst_31787,inst_31788];
var inst_31790 = (new cljs.core.PersistentVector(null,2,(5),inst_31786,inst_31789,null));
var state_31821__$1 = state_31821;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31821__$1,(14),inst_31790);
} else {
if((state_val_31822 === (9))){
var inst_31781 = (state_31821[(8)]);
var inst_31807 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31808 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31781);
var inst_31809 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31808);
var inst_31810 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31809)].join('');
var inst_31811 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31810);
var state_31821__$1 = (function (){var statearr_31834 = state_31821;
(statearr_31834[(10)] = inst_31807);

return statearr_31834;
})();
var statearr_31835_31860 = state_31821__$1;
(statearr_31835_31860[(2)] = inst_31811);

(statearr_31835_31860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (5))){
var inst_31774 = (state_31821[(7)]);
var inst_31776 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31777 = (new cljs.core.PersistentArrayMap(null,2,inst_31776,null));
var inst_31778 = (new cljs.core.PersistentHashSet(null,inst_31777,null));
var inst_31779 = figwheel.client.focus_msgs.call(null,inst_31778,inst_31774);
var inst_31780 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31779);
var inst_31781 = cljs.core.first.call(null,inst_31779);
var inst_31782 = figwheel.client.autoload_QMARK_.call(null);
var state_31821__$1 = (function (){var statearr_31836 = state_31821;
(statearr_31836[(9)] = inst_31780);

(statearr_31836[(8)] = inst_31781);

return statearr_31836;
})();
if(cljs.core.truth_(inst_31782)){
var statearr_31837_31861 = state_31821__$1;
(statearr_31837_31861[(1)] = (8));

} else {
var statearr_31838_31862 = state_31821__$1;
(statearr_31838_31862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (14))){
var inst_31792 = (state_31821[(2)]);
var state_31821__$1 = state_31821;
var statearr_31839_31863 = state_31821__$1;
(statearr_31839_31863[(2)] = inst_31792);

(statearr_31839_31863[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (16))){
var state_31821__$1 = state_31821;
var statearr_31840_31864 = state_31821__$1;
(statearr_31840_31864[(2)] = null);

(statearr_31840_31864[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (10))){
var inst_31813 = (state_31821[(2)]);
var state_31821__$1 = (function (){var statearr_31841 = state_31821;
(statearr_31841[(11)] = inst_31813);

return statearr_31841;
})();
var statearr_31842_31865 = state_31821__$1;
(statearr_31842_31865[(2)] = null);

(statearr_31842_31865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (8))){
var inst_31780 = (state_31821[(9)]);
var inst_31784 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31780,opts);
var state_31821__$1 = state_31821;
if(cljs.core.truth_(inst_31784)){
var statearr_31843_31866 = state_31821__$1;
(statearr_31843_31866[(1)] = (11));

} else {
var statearr_31844_31867 = state_31821__$1;
(statearr_31844_31867[(1)] = (12));

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
});})(c__27900__auto___31849,ch))
;
return ((function (switch__27809__auto__,c__27900__auto___31849,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27810__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27810__auto____0 = (function (){
var statearr_31845 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31845[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27810__auto__);

(statearr_31845[(1)] = (1));

return statearr_31845;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27810__auto____1 = (function (state_31821){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_31821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e31846){if((e31846 instanceof Object)){
var ex__27813__auto__ = e31846;
var statearr_31847_31868 = state_31821;
(statearr_31847_31868[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31869 = state_31821;
state_31821 = G__31869;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27810__auto__ = function(state_31821){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27810__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27810__auto____1.call(this,state_31821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27810__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27810__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto___31849,ch))
})();
var state__27902__auto__ = (function (){var statearr_31848 = f__27901__auto__.call(null);
(statearr_31848[(6)] = c__27900__auto___31849);

return statearr_31848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___31849,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31870_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31870_SHARP_));
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
var base_path_31874 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31874){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31872 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31873 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31872,_STAR_print_fn_STAR_31873,sb,base_path_31874){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_31872,_STAR_print_fn_STAR_31873,sb,base_path_31874))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31873;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31872;
}}catch (e31871){if((e31871 instanceof Error)){
var e = e31871;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31874], null));
} else {
var e = e31871;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31874))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31875){
var map__31876 = p__31875;
var map__31876__$1 = ((((!((map__31876 == null)))?(((((map__31876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31876):map__31876);
var opts = map__31876__$1;
var build_id = cljs.core.get.call(null,map__31876__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31876,map__31876__$1,opts,build_id){
return (function (p__31878){
var vec__31879 = p__31878;
var seq__31880 = cljs.core.seq.call(null,vec__31879);
var first__31881 = cljs.core.first.call(null,seq__31880);
var seq__31880__$1 = cljs.core.next.call(null,seq__31880);
var map__31882 = first__31881;
var map__31882__$1 = ((((!((map__31882 == null)))?(((((map__31882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31882):map__31882);
var msg = map__31882__$1;
var msg_name = cljs.core.get.call(null,map__31882__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31880__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31879,seq__31880,first__31881,seq__31880__$1,map__31882,map__31882__$1,msg,msg_name,_,map__31876,map__31876__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31879,seq__31880,first__31881,seq__31880__$1,map__31882,map__31882__$1,msg,msg_name,_,map__31876,map__31876__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31876,map__31876__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31884){
var vec__31885 = p__31884;
var seq__31886 = cljs.core.seq.call(null,vec__31885);
var first__31887 = cljs.core.first.call(null,seq__31886);
var seq__31886__$1 = cljs.core.next.call(null,seq__31886);
var map__31888 = first__31887;
var map__31888__$1 = ((((!((map__31888 == null)))?(((((map__31888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31888):map__31888);
var msg = map__31888__$1;
var msg_name = cljs.core.get.call(null,map__31888__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31886__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31890){
var map__31891 = p__31890;
var map__31891__$1 = ((((!((map__31891 == null)))?(((((map__31891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31891):map__31891);
var on_compile_warning = cljs.core.get.call(null,map__31891__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31891__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31891,map__31891__$1,on_compile_warning,on_compile_fail){
return (function (p__31893){
var vec__31894 = p__31893;
var seq__31895 = cljs.core.seq.call(null,vec__31894);
var first__31896 = cljs.core.first.call(null,seq__31895);
var seq__31895__$1 = cljs.core.next.call(null,seq__31895);
var map__31897 = first__31896;
var map__31897__$1 = ((((!((map__31897 == null)))?(((((map__31897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31897):map__31897);
var msg = map__31897__$1;
var msg_name = cljs.core.get.call(null,map__31897__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31895__$1;
var pred__31899 = cljs.core._EQ_;
var expr__31900 = msg_name;
if(cljs.core.truth_(pred__31899.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31900))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31899.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31900))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31891,map__31891__$1,on_compile_warning,on_compile_fail))
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
var c__27900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto__,msg_hist,msg_names,msg){
return (function (state_31989){
var state_val_31990 = (state_31989[(1)]);
if((state_val_31990 === (7))){
var inst_31909 = (state_31989[(2)]);
var state_31989__$1 = state_31989;
if(cljs.core.truth_(inst_31909)){
var statearr_31991_32038 = state_31989__$1;
(statearr_31991_32038[(1)] = (8));

} else {
var statearr_31992_32039 = state_31989__$1;
(statearr_31992_32039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (20))){
var inst_31983 = (state_31989[(2)]);
var state_31989__$1 = state_31989;
var statearr_31993_32040 = state_31989__$1;
(statearr_31993_32040[(2)] = inst_31983);

(statearr_31993_32040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (27))){
var inst_31979 = (state_31989[(2)]);
var state_31989__$1 = state_31989;
var statearr_31994_32041 = state_31989__$1;
(statearr_31994_32041[(2)] = inst_31979);

(statearr_31994_32041[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (1))){
var inst_31902 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31989__$1 = state_31989;
if(cljs.core.truth_(inst_31902)){
var statearr_31995_32042 = state_31989__$1;
(statearr_31995_32042[(1)] = (2));

} else {
var statearr_31996_32043 = state_31989__$1;
(statearr_31996_32043[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (24))){
var inst_31981 = (state_31989[(2)]);
var state_31989__$1 = state_31989;
var statearr_31997_32044 = state_31989__$1;
(statearr_31997_32044[(2)] = inst_31981);

(statearr_31997_32044[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (4))){
var inst_31987 = (state_31989[(2)]);
var state_31989__$1 = state_31989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31989__$1,inst_31987);
} else {
if((state_val_31990 === (15))){
var inst_31985 = (state_31989[(2)]);
var state_31989__$1 = state_31989;
var statearr_31998_32045 = state_31989__$1;
(statearr_31998_32045[(2)] = inst_31985);

(statearr_31998_32045[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (21))){
var inst_31938 = (state_31989[(2)]);
var inst_31939 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31940 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31939);
var state_31989__$1 = (function (){var statearr_31999 = state_31989;
(statearr_31999[(7)] = inst_31938);

return statearr_31999;
})();
var statearr_32000_32046 = state_31989__$1;
(statearr_32000_32046[(2)] = inst_31940);

(statearr_32000_32046[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (31))){
var inst_31968 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31989__$1 = state_31989;
if(cljs.core.truth_(inst_31968)){
var statearr_32001_32047 = state_31989__$1;
(statearr_32001_32047[(1)] = (34));

} else {
var statearr_32002_32048 = state_31989__$1;
(statearr_32002_32048[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (32))){
var inst_31977 = (state_31989[(2)]);
var state_31989__$1 = state_31989;
var statearr_32003_32049 = state_31989__$1;
(statearr_32003_32049[(2)] = inst_31977);

(statearr_32003_32049[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (33))){
var inst_31964 = (state_31989[(2)]);
var inst_31965 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31966 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31965);
var state_31989__$1 = (function (){var statearr_32004 = state_31989;
(statearr_32004[(8)] = inst_31964);

return statearr_32004;
})();
var statearr_32005_32050 = state_31989__$1;
(statearr_32005_32050[(2)] = inst_31966);

(statearr_32005_32050[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (13))){
var inst_31923 = figwheel.client.heads_up.clear.call(null);
var state_31989__$1 = state_31989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31989__$1,(16),inst_31923);
} else {
if((state_val_31990 === (22))){
var inst_31944 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31945 = figwheel.client.heads_up.append_warning_message.call(null,inst_31944);
var state_31989__$1 = state_31989;
var statearr_32006_32051 = state_31989__$1;
(statearr_32006_32051[(2)] = inst_31945);

(statearr_32006_32051[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (36))){
var inst_31975 = (state_31989[(2)]);
var state_31989__$1 = state_31989;
var statearr_32007_32052 = state_31989__$1;
(statearr_32007_32052[(2)] = inst_31975);

(statearr_32007_32052[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (29))){
var inst_31955 = (state_31989[(2)]);
var inst_31956 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31957 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31956);
var state_31989__$1 = (function (){var statearr_32008 = state_31989;
(statearr_32008[(9)] = inst_31955);

return statearr_32008;
})();
var statearr_32009_32053 = state_31989__$1;
(statearr_32009_32053[(2)] = inst_31957);

(statearr_32009_32053[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (6))){
var inst_31904 = (state_31989[(10)]);
var state_31989__$1 = state_31989;
var statearr_32010_32054 = state_31989__$1;
(statearr_32010_32054[(2)] = inst_31904);

(statearr_32010_32054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (28))){
var inst_31951 = (state_31989[(2)]);
var inst_31952 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31953 = figwheel.client.heads_up.display_warning.call(null,inst_31952);
var state_31989__$1 = (function (){var statearr_32011 = state_31989;
(statearr_32011[(11)] = inst_31951);

return statearr_32011;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31989__$1,(29),inst_31953);
} else {
if((state_val_31990 === (25))){
var inst_31949 = figwheel.client.heads_up.clear.call(null);
var state_31989__$1 = state_31989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31989__$1,(28),inst_31949);
} else {
if((state_val_31990 === (34))){
var inst_31970 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31989__$1 = state_31989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31989__$1,(37),inst_31970);
} else {
if((state_val_31990 === (17))){
var inst_31929 = (state_31989[(2)]);
var inst_31930 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31931 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31930);
var state_31989__$1 = (function (){var statearr_32012 = state_31989;
(statearr_32012[(12)] = inst_31929);

return statearr_32012;
})();
var statearr_32013_32055 = state_31989__$1;
(statearr_32013_32055[(2)] = inst_31931);

(statearr_32013_32055[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (3))){
var inst_31921 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31989__$1 = state_31989;
if(cljs.core.truth_(inst_31921)){
var statearr_32014_32056 = state_31989__$1;
(statearr_32014_32056[(1)] = (13));

} else {
var statearr_32015_32057 = state_31989__$1;
(statearr_32015_32057[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (12))){
var inst_31917 = (state_31989[(2)]);
var state_31989__$1 = state_31989;
var statearr_32016_32058 = state_31989__$1;
(statearr_32016_32058[(2)] = inst_31917);

(statearr_32016_32058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (2))){
var inst_31904 = (state_31989[(10)]);
var inst_31904__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31989__$1 = (function (){var statearr_32017 = state_31989;
(statearr_32017[(10)] = inst_31904__$1);

return statearr_32017;
})();
if(cljs.core.truth_(inst_31904__$1)){
var statearr_32018_32059 = state_31989__$1;
(statearr_32018_32059[(1)] = (5));

} else {
var statearr_32019_32060 = state_31989__$1;
(statearr_32019_32060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (23))){
var inst_31947 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31989__$1 = state_31989;
if(cljs.core.truth_(inst_31947)){
var statearr_32020_32061 = state_31989__$1;
(statearr_32020_32061[(1)] = (25));

} else {
var statearr_32021_32062 = state_31989__$1;
(statearr_32021_32062[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (35))){
var state_31989__$1 = state_31989;
var statearr_32022_32063 = state_31989__$1;
(statearr_32022_32063[(2)] = null);

(statearr_32022_32063[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (19))){
var inst_31942 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31989__$1 = state_31989;
if(cljs.core.truth_(inst_31942)){
var statearr_32023_32064 = state_31989__$1;
(statearr_32023_32064[(1)] = (22));

} else {
var statearr_32024_32065 = state_31989__$1;
(statearr_32024_32065[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (11))){
var inst_31913 = (state_31989[(2)]);
var state_31989__$1 = state_31989;
var statearr_32025_32066 = state_31989__$1;
(statearr_32025_32066[(2)] = inst_31913);

(statearr_32025_32066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (9))){
var inst_31915 = figwheel.client.heads_up.clear.call(null);
var state_31989__$1 = state_31989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31989__$1,(12),inst_31915);
} else {
if((state_val_31990 === (5))){
var inst_31906 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31989__$1 = state_31989;
var statearr_32026_32067 = state_31989__$1;
(statearr_32026_32067[(2)] = inst_31906);

(statearr_32026_32067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (14))){
var inst_31933 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31989__$1 = state_31989;
if(cljs.core.truth_(inst_31933)){
var statearr_32027_32068 = state_31989__$1;
(statearr_32027_32068[(1)] = (18));

} else {
var statearr_32028_32069 = state_31989__$1;
(statearr_32028_32069[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (26))){
var inst_31959 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31989__$1 = state_31989;
if(cljs.core.truth_(inst_31959)){
var statearr_32029_32070 = state_31989__$1;
(statearr_32029_32070[(1)] = (30));

} else {
var statearr_32030_32071 = state_31989__$1;
(statearr_32030_32071[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (16))){
var inst_31925 = (state_31989[(2)]);
var inst_31926 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31927 = figwheel.client.heads_up.display_exception.call(null,inst_31926);
var state_31989__$1 = (function (){var statearr_32031 = state_31989;
(statearr_32031[(13)] = inst_31925);

return statearr_32031;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31989__$1,(17),inst_31927);
} else {
if((state_val_31990 === (30))){
var inst_31961 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31962 = figwheel.client.heads_up.display_warning.call(null,inst_31961);
var state_31989__$1 = state_31989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31989__$1,(33),inst_31962);
} else {
if((state_val_31990 === (10))){
var inst_31919 = (state_31989[(2)]);
var state_31989__$1 = state_31989;
var statearr_32032_32072 = state_31989__$1;
(statearr_32032_32072[(2)] = inst_31919);

(statearr_32032_32072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (18))){
var inst_31935 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31936 = figwheel.client.heads_up.display_exception.call(null,inst_31935);
var state_31989__$1 = state_31989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31989__$1,(21),inst_31936);
} else {
if((state_val_31990 === (37))){
var inst_31972 = (state_31989[(2)]);
var state_31989__$1 = state_31989;
var statearr_32033_32073 = state_31989__$1;
(statearr_32033_32073[(2)] = inst_31972);

(statearr_32033_32073[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31990 === (8))){
var inst_31911 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31989__$1 = state_31989;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31989__$1,(11),inst_31911);
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
});})(c__27900__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27809__auto__,c__27900__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27810__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27810__auto____0 = (function (){
var statearr_32034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32034[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27810__auto__);

(statearr_32034[(1)] = (1));

return statearr_32034;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27810__auto____1 = (function (state_31989){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_31989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e32035){if((e32035 instanceof Object)){
var ex__27813__auto__ = e32035;
var statearr_32036_32074 = state_31989;
(statearr_32036_32074[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32075 = state_31989;
state_31989 = G__32075;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27810__auto__ = function(state_31989){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27810__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27810__auto____1.call(this,state_31989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27810__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27810__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto__,msg_hist,msg_names,msg))
})();
var state__27902__auto__ = (function (){var statearr_32037 = f__27901__auto__.call(null);
(statearr_32037[(6)] = c__27900__auto__);

return statearr_32037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto__,msg_hist,msg_names,msg))
);

return c__27900__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27900__auto___32104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto___32104,ch){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto___32104,ch){
return (function (state_32090){
var state_val_32091 = (state_32090[(1)]);
if((state_val_32091 === (1))){
var state_32090__$1 = state_32090;
var statearr_32092_32105 = state_32090__$1;
(statearr_32092_32105[(2)] = null);

(statearr_32092_32105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (2))){
var state_32090__$1 = state_32090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32090__$1,(4),ch);
} else {
if((state_val_32091 === (3))){
var inst_32088 = (state_32090[(2)]);
var state_32090__$1 = state_32090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32090__$1,inst_32088);
} else {
if((state_val_32091 === (4))){
var inst_32078 = (state_32090[(7)]);
var inst_32078__$1 = (state_32090[(2)]);
var state_32090__$1 = (function (){var statearr_32093 = state_32090;
(statearr_32093[(7)] = inst_32078__$1);

return statearr_32093;
})();
if(cljs.core.truth_(inst_32078__$1)){
var statearr_32094_32106 = state_32090__$1;
(statearr_32094_32106[(1)] = (5));

} else {
var statearr_32095_32107 = state_32090__$1;
(statearr_32095_32107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (5))){
var inst_32078 = (state_32090[(7)]);
var inst_32080 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32078);
var state_32090__$1 = state_32090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32090__$1,(8),inst_32080);
} else {
if((state_val_32091 === (6))){
var state_32090__$1 = state_32090;
var statearr_32096_32108 = state_32090__$1;
(statearr_32096_32108[(2)] = null);

(statearr_32096_32108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (7))){
var inst_32086 = (state_32090[(2)]);
var state_32090__$1 = state_32090;
var statearr_32097_32109 = state_32090__$1;
(statearr_32097_32109[(2)] = inst_32086);

(statearr_32097_32109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32091 === (8))){
var inst_32082 = (state_32090[(2)]);
var state_32090__$1 = (function (){var statearr_32098 = state_32090;
(statearr_32098[(8)] = inst_32082);

return statearr_32098;
})();
var statearr_32099_32110 = state_32090__$1;
(statearr_32099_32110[(2)] = null);

(statearr_32099_32110[(1)] = (2));


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
});})(c__27900__auto___32104,ch))
;
return ((function (switch__27809__auto__,c__27900__auto___32104,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27810__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27810__auto____0 = (function (){
var statearr_32100 = [null,null,null,null,null,null,null,null,null];
(statearr_32100[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27810__auto__);

(statearr_32100[(1)] = (1));

return statearr_32100;
});
var figwheel$client$heads_up_plugin_$_state_machine__27810__auto____1 = (function (state_32090){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_32090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e32101){if((e32101 instanceof Object)){
var ex__27813__auto__ = e32101;
var statearr_32102_32111 = state_32090;
(statearr_32102_32111[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32112 = state_32090;
state_32090 = G__32112;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27810__auto__ = function(state_32090){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27810__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27810__auto____1.call(this,state_32090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27810__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27810__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto___32104,ch))
})();
var state__27902__auto__ = (function (){var statearr_32103 = f__27901__auto__.call(null);
(statearr_32103[(6)] = c__27900__auto___32104);

return statearr_32103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto___32104,ch))
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
var c__27900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto__){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto__){
return (function (state_32118){
var state_val_32119 = (state_32118[(1)]);
if((state_val_32119 === (1))){
var inst_32113 = cljs.core.async.timeout.call(null,(3000));
var state_32118__$1 = state_32118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32118__$1,(2),inst_32113);
} else {
if((state_val_32119 === (2))){
var inst_32115 = (state_32118[(2)]);
var inst_32116 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32118__$1 = (function (){var statearr_32120 = state_32118;
(statearr_32120[(7)] = inst_32115);

return statearr_32120;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32118__$1,inst_32116);
} else {
return null;
}
}
});})(c__27900__auto__))
;
return ((function (switch__27809__auto__,c__27900__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27810__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27810__auto____0 = (function (){
var statearr_32121 = [null,null,null,null,null,null,null,null];
(statearr_32121[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27810__auto__);

(statearr_32121[(1)] = (1));

return statearr_32121;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27810__auto____1 = (function (state_32118){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_32118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e32122){if((e32122 instanceof Object)){
var ex__27813__auto__ = e32122;
var statearr_32123_32125 = state_32118;
(statearr_32123_32125[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32126 = state_32118;
state_32118 = G__32126;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27810__auto__ = function(state_32118){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27810__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27810__auto____1.call(this,state_32118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27810__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27810__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto__))
})();
var state__27902__auto__ = (function (){var statearr_32124 = f__27901__auto__.call(null);
(statearr_32124[(6)] = c__27900__auto__);

return statearr_32124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto__))
);

return c__27900__auto__;
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
var c__27900__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27900__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__27901__auto__ = (function (){var switch__27809__auto__ = ((function (c__27900__auto__,figwheel_version,temp__5457__auto__){
return (function (state_32133){
var state_val_32134 = (state_32133[(1)]);
if((state_val_32134 === (1))){
var inst_32127 = cljs.core.async.timeout.call(null,(2000));
var state_32133__$1 = state_32133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32133__$1,(2),inst_32127);
} else {
if((state_val_32134 === (2))){
var inst_32129 = (state_32133[(2)]);
var inst_32130 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_32131 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32130);
var state_32133__$1 = (function (){var statearr_32135 = state_32133;
(statearr_32135[(7)] = inst_32129);

return statearr_32135;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32133__$1,inst_32131);
} else {
return null;
}
}
});})(c__27900__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__27809__auto__,c__27900__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27810__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27810__auto____0 = (function (){
var statearr_32136 = [null,null,null,null,null,null,null,null];
(statearr_32136[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27810__auto__);

(statearr_32136[(1)] = (1));

return statearr_32136;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27810__auto____1 = (function (state_32133){
while(true){
var ret_value__27811__auto__ = (function (){try{while(true){
var result__27812__auto__ = switch__27809__auto__.call(null,state_32133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27812__auto__;
}
break;
}
}catch (e32137){if((e32137 instanceof Object)){
var ex__27813__auto__ = e32137;
var statearr_32138_32140 = state_32133;
(statearr_32138_32140[(5)] = ex__27813__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32141 = state_32133;
state_32133 = G__32141;
continue;
} else {
return ret_value__27811__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27810__auto__ = function(state_32133){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27810__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27810__auto____1.call(this,state_32133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27810__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27810__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27810__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27810__auto__;
})()
;})(switch__27809__auto__,c__27900__auto__,figwheel_version,temp__5457__auto__))
})();
var state__27902__auto__ = (function (){var statearr_32139 = f__27901__auto__.call(null);
(statearr_32139[(6)] = c__27900__auto__);

return statearr_32139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27902__auto__);
});})(c__27900__auto__,figwheel_version,temp__5457__auto__))
);

return c__27900__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32142){
var map__32143 = p__32142;
var map__32143__$1 = ((((!((map__32143 == null)))?(((((map__32143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32143):map__32143);
var file = cljs.core.get.call(null,map__32143__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32143__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32143__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32145 = "";
var G__32145__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32145),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__32145);
var G__32145__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32145__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__32145__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32145__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__32145__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32146){
var map__32147 = p__32146;
var map__32147__$1 = ((((!((map__32147 == null)))?(((((map__32147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32147):map__32147);
var ed = map__32147__$1;
var formatted_exception = cljs.core.get.call(null,map__32147__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32147__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32147__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32149_32153 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32150_32154 = null;
var count__32151_32155 = (0);
var i__32152_32156 = (0);
while(true){
if((i__32152_32156 < count__32151_32155)){
var msg_32157 = cljs.core._nth.call(null,chunk__32150_32154,i__32152_32156);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32157);


var G__32158 = seq__32149_32153;
var G__32159 = chunk__32150_32154;
var G__32160 = count__32151_32155;
var G__32161 = (i__32152_32156 + (1));
seq__32149_32153 = G__32158;
chunk__32150_32154 = G__32159;
count__32151_32155 = G__32160;
i__32152_32156 = G__32161;
continue;
} else {
var temp__5457__auto___32162 = cljs.core.seq.call(null,seq__32149_32153);
if(temp__5457__auto___32162){
var seq__32149_32163__$1 = temp__5457__auto___32162;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32149_32163__$1)){
var c__4351__auto___32164 = cljs.core.chunk_first.call(null,seq__32149_32163__$1);
var G__32165 = cljs.core.chunk_rest.call(null,seq__32149_32163__$1);
var G__32166 = c__4351__auto___32164;
var G__32167 = cljs.core.count.call(null,c__4351__auto___32164);
var G__32168 = (0);
seq__32149_32153 = G__32165;
chunk__32150_32154 = G__32166;
count__32151_32155 = G__32167;
i__32152_32156 = G__32168;
continue;
} else {
var msg_32169 = cljs.core.first.call(null,seq__32149_32163__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32169);


var G__32170 = cljs.core.next.call(null,seq__32149_32163__$1);
var G__32171 = null;
var G__32172 = (0);
var G__32173 = (0);
seq__32149_32153 = G__32170;
chunk__32150_32154 = G__32171;
count__32151_32155 = G__32172;
i__32152_32156 = G__32173;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32174){
var map__32175 = p__32174;
var map__32175__$1 = ((((!((map__32175 == null)))?(((((map__32175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32175):map__32175);
var w = map__32175__$1;
var message = cljs.core.get.call(null,map__32175__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__32177 = cljs.core.seq.call(null,plugins);
var chunk__32178 = null;
var count__32179 = (0);
var i__32180 = (0);
while(true){
if((i__32180 < count__32179)){
var vec__32181 = cljs.core._nth.call(null,chunk__32178,i__32180);
var k = cljs.core.nth.call(null,vec__32181,(0),null);
var plugin = cljs.core.nth.call(null,vec__32181,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32187 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32177,chunk__32178,count__32179,i__32180,pl_32187,vec__32181,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32187.call(null,msg_hist);
});})(seq__32177,chunk__32178,count__32179,i__32180,pl_32187,vec__32181,k,plugin))
);
} else {
}


var G__32188 = seq__32177;
var G__32189 = chunk__32178;
var G__32190 = count__32179;
var G__32191 = (i__32180 + (1));
seq__32177 = G__32188;
chunk__32178 = G__32189;
count__32179 = G__32190;
i__32180 = G__32191;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32177);
if(temp__5457__auto__){
var seq__32177__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32177__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__32177__$1);
var G__32192 = cljs.core.chunk_rest.call(null,seq__32177__$1);
var G__32193 = c__4351__auto__;
var G__32194 = cljs.core.count.call(null,c__4351__auto__);
var G__32195 = (0);
seq__32177 = G__32192;
chunk__32178 = G__32193;
count__32179 = G__32194;
i__32180 = G__32195;
continue;
} else {
var vec__32184 = cljs.core.first.call(null,seq__32177__$1);
var k = cljs.core.nth.call(null,vec__32184,(0),null);
var plugin = cljs.core.nth.call(null,vec__32184,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32196 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32177,chunk__32178,count__32179,i__32180,pl_32196,vec__32184,k,plugin,seq__32177__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32196.call(null,msg_hist);
});})(seq__32177,chunk__32178,count__32179,i__32180,pl_32196,vec__32184,k,plugin,seq__32177__$1,temp__5457__auto__))
);
} else {
}


var G__32197 = cljs.core.next.call(null,seq__32177__$1);
var G__32198 = null;
var G__32199 = (0);
var G__32200 = (0);
seq__32177 = G__32197;
chunk__32178 = G__32198;
count__32179 = G__32199;
i__32180 = G__32200;
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
var G__32202 = arguments.length;
switch (G__32202) {
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

var seq__32203_32208 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32204_32209 = null;
var count__32205_32210 = (0);
var i__32206_32211 = (0);
while(true){
if((i__32206_32211 < count__32205_32210)){
var msg_32212 = cljs.core._nth.call(null,chunk__32204_32209,i__32206_32211);
figwheel.client.socket.handle_incoming_message.call(null,msg_32212);


var G__32213 = seq__32203_32208;
var G__32214 = chunk__32204_32209;
var G__32215 = count__32205_32210;
var G__32216 = (i__32206_32211 + (1));
seq__32203_32208 = G__32213;
chunk__32204_32209 = G__32214;
count__32205_32210 = G__32215;
i__32206_32211 = G__32216;
continue;
} else {
var temp__5457__auto___32217 = cljs.core.seq.call(null,seq__32203_32208);
if(temp__5457__auto___32217){
var seq__32203_32218__$1 = temp__5457__auto___32217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32203_32218__$1)){
var c__4351__auto___32219 = cljs.core.chunk_first.call(null,seq__32203_32218__$1);
var G__32220 = cljs.core.chunk_rest.call(null,seq__32203_32218__$1);
var G__32221 = c__4351__auto___32219;
var G__32222 = cljs.core.count.call(null,c__4351__auto___32219);
var G__32223 = (0);
seq__32203_32208 = G__32220;
chunk__32204_32209 = G__32221;
count__32205_32210 = G__32222;
i__32206_32211 = G__32223;
continue;
} else {
var msg_32224 = cljs.core.first.call(null,seq__32203_32218__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32224);


var G__32225 = cljs.core.next.call(null,seq__32203_32218__$1);
var G__32226 = null;
var G__32227 = (0);
var G__32228 = (0);
seq__32203_32208 = G__32225;
chunk__32204_32209 = G__32226;
count__32205_32210 = G__32227;
i__32206_32211 = G__32228;
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
var len__4531__auto___32233 = arguments.length;
var i__4532__auto___32234 = (0);
while(true){
if((i__4532__auto___32234 < len__4531__auto___32233)){
args__4534__auto__.push((arguments[i__4532__auto___32234]));

var G__32235 = (i__4532__auto___32234 + (1));
i__4532__auto___32234 = G__32235;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32230){
var map__32231 = p__32230;
var map__32231__$1 = ((((!((map__32231 == null)))?(((((map__32231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32231):map__32231);
var opts = map__32231__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32229){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32229));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32236){if((e32236 instanceof Error)){
var e = e32236;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32236;

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
return (function (p__32237){
var map__32238 = p__32237;
var map__32238__$1 = ((((!((map__32238 == null)))?(((((map__32238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32238):map__32238);
var msg_name = cljs.core.get.call(null,map__32238__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1543803807036
