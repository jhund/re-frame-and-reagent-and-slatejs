// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31468){
var map__31469 = p__31468;
var map__31469__$1 = ((((!((map__31469 == null)))?(((((map__31469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31469):map__31469);
var m = map__31469__$1;
var n = cljs.core.get.call(null,map__31469__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31469__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31471_31493 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31472_31494 = null;
var count__31473_31495 = (0);
var i__31474_31496 = (0);
while(true){
if((i__31474_31496 < count__31473_31495)){
var f_31497 = cljs.core._nth.call(null,chunk__31472_31494,i__31474_31496);
cljs.core.println.call(null,"  ",f_31497);


var G__31498 = seq__31471_31493;
var G__31499 = chunk__31472_31494;
var G__31500 = count__31473_31495;
var G__31501 = (i__31474_31496 + (1));
seq__31471_31493 = G__31498;
chunk__31472_31494 = G__31499;
count__31473_31495 = G__31500;
i__31474_31496 = G__31501;
continue;
} else {
var temp__5457__auto___31502 = cljs.core.seq.call(null,seq__31471_31493);
if(temp__5457__auto___31502){
var seq__31471_31503__$1 = temp__5457__auto___31502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31471_31503__$1)){
var c__4351__auto___31504 = cljs.core.chunk_first.call(null,seq__31471_31503__$1);
var G__31505 = cljs.core.chunk_rest.call(null,seq__31471_31503__$1);
var G__31506 = c__4351__auto___31504;
var G__31507 = cljs.core.count.call(null,c__4351__auto___31504);
var G__31508 = (0);
seq__31471_31493 = G__31505;
chunk__31472_31494 = G__31506;
count__31473_31495 = G__31507;
i__31474_31496 = G__31508;
continue;
} else {
var f_31509 = cljs.core.first.call(null,seq__31471_31503__$1);
cljs.core.println.call(null,"  ",f_31509);


var G__31510 = cljs.core.next.call(null,seq__31471_31503__$1);
var G__31511 = null;
var G__31512 = (0);
var G__31513 = (0);
seq__31471_31493 = G__31510;
chunk__31472_31494 = G__31511;
count__31473_31495 = G__31512;
i__31474_31496 = G__31513;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31514 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31514);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31514)))?cljs.core.second.call(null,arglists_31514):arglists_31514));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31475_31515 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31476_31516 = null;
var count__31477_31517 = (0);
var i__31478_31518 = (0);
while(true){
if((i__31478_31518 < count__31477_31517)){
var vec__31479_31519 = cljs.core._nth.call(null,chunk__31476_31516,i__31478_31518);
var name_31520 = cljs.core.nth.call(null,vec__31479_31519,(0),null);
var map__31482_31521 = cljs.core.nth.call(null,vec__31479_31519,(1),null);
var map__31482_31522__$1 = ((((!((map__31482_31521 == null)))?(((((map__31482_31521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31482_31521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31482_31521):map__31482_31521);
var doc_31523 = cljs.core.get.call(null,map__31482_31522__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31524 = cljs.core.get.call(null,map__31482_31522__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31520);

cljs.core.println.call(null," ",arglists_31524);

if(cljs.core.truth_(doc_31523)){
cljs.core.println.call(null," ",doc_31523);
} else {
}


var G__31525 = seq__31475_31515;
var G__31526 = chunk__31476_31516;
var G__31527 = count__31477_31517;
var G__31528 = (i__31478_31518 + (1));
seq__31475_31515 = G__31525;
chunk__31476_31516 = G__31526;
count__31477_31517 = G__31527;
i__31478_31518 = G__31528;
continue;
} else {
var temp__5457__auto___31529 = cljs.core.seq.call(null,seq__31475_31515);
if(temp__5457__auto___31529){
var seq__31475_31530__$1 = temp__5457__auto___31529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31475_31530__$1)){
var c__4351__auto___31531 = cljs.core.chunk_first.call(null,seq__31475_31530__$1);
var G__31532 = cljs.core.chunk_rest.call(null,seq__31475_31530__$1);
var G__31533 = c__4351__auto___31531;
var G__31534 = cljs.core.count.call(null,c__4351__auto___31531);
var G__31535 = (0);
seq__31475_31515 = G__31532;
chunk__31476_31516 = G__31533;
count__31477_31517 = G__31534;
i__31478_31518 = G__31535;
continue;
} else {
var vec__31484_31536 = cljs.core.first.call(null,seq__31475_31530__$1);
var name_31537 = cljs.core.nth.call(null,vec__31484_31536,(0),null);
var map__31487_31538 = cljs.core.nth.call(null,vec__31484_31536,(1),null);
var map__31487_31539__$1 = ((((!((map__31487_31538 == null)))?(((((map__31487_31538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31487_31538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31487_31538):map__31487_31538);
var doc_31540 = cljs.core.get.call(null,map__31487_31539__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31541 = cljs.core.get.call(null,map__31487_31539__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31537);

cljs.core.println.call(null," ",arglists_31541);

if(cljs.core.truth_(doc_31540)){
cljs.core.println.call(null," ",doc_31540);
} else {
}


var G__31542 = cljs.core.next.call(null,seq__31475_31530__$1);
var G__31543 = null;
var G__31544 = (0);
var G__31545 = (0);
seq__31475_31515 = G__31542;
chunk__31476_31516 = G__31543;
count__31477_31517 = G__31544;
i__31478_31518 = G__31545;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__31489 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31490 = null;
var count__31491 = (0);
var i__31492 = (0);
while(true){
if((i__31492 < count__31491)){
var role = cljs.core._nth.call(null,chunk__31490,i__31492);
var temp__5457__auto___31546__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31546__$1)){
var spec_31547 = temp__5457__auto___31546__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31547));
} else {
}


var G__31548 = seq__31489;
var G__31549 = chunk__31490;
var G__31550 = count__31491;
var G__31551 = (i__31492 + (1));
seq__31489 = G__31548;
chunk__31490 = G__31549;
count__31491 = G__31550;
i__31492 = G__31551;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__31489);
if(temp__5457__auto____$1){
var seq__31489__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31489__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__31489__$1);
var G__31552 = cljs.core.chunk_rest.call(null,seq__31489__$1);
var G__31553 = c__4351__auto__;
var G__31554 = cljs.core.count.call(null,c__4351__auto__);
var G__31555 = (0);
seq__31489 = G__31552;
chunk__31490 = G__31553;
count__31491 = G__31554;
i__31492 = G__31555;
continue;
} else {
var role = cljs.core.first.call(null,seq__31489__$1);
var temp__5457__auto___31556__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31556__$2)){
var spec_31557 = temp__5457__auto___31556__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31557));
} else {
}


var G__31558 = cljs.core.next.call(null,seq__31489__$1);
var G__31559 = null;
var G__31560 = (0);
var G__31561 = (0);
seq__31489 = G__31558;
chunk__31490 = G__31559;
count__31491 = G__31560;
i__31492 = G__31561;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1543803806492
