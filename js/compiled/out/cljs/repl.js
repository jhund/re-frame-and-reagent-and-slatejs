// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36669){
var map__36670 = p__36669;
var map__36670__$1 = ((((!((map__36670 == null)))?(((((map__36670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36670):map__36670);
var m = map__36670__$1;
var n = cljs.core.get.call(null,map__36670__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36670__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36672_36694 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36673_36695 = null;
var count__36674_36696 = (0);
var i__36675_36697 = (0);
while(true){
if((i__36675_36697 < count__36674_36696)){
var f_36698 = cljs.core._nth.call(null,chunk__36673_36695,i__36675_36697);
cljs.core.println.call(null,"  ",f_36698);


var G__36699 = seq__36672_36694;
var G__36700 = chunk__36673_36695;
var G__36701 = count__36674_36696;
var G__36702 = (i__36675_36697 + (1));
seq__36672_36694 = G__36699;
chunk__36673_36695 = G__36700;
count__36674_36696 = G__36701;
i__36675_36697 = G__36702;
continue;
} else {
var temp__5457__auto___36703 = cljs.core.seq.call(null,seq__36672_36694);
if(temp__5457__auto___36703){
var seq__36672_36704__$1 = temp__5457__auto___36703;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36672_36704__$1)){
var c__4351__auto___36705 = cljs.core.chunk_first.call(null,seq__36672_36704__$1);
var G__36706 = cljs.core.chunk_rest.call(null,seq__36672_36704__$1);
var G__36707 = c__4351__auto___36705;
var G__36708 = cljs.core.count.call(null,c__4351__auto___36705);
var G__36709 = (0);
seq__36672_36694 = G__36706;
chunk__36673_36695 = G__36707;
count__36674_36696 = G__36708;
i__36675_36697 = G__36709;
continue;
} else {
var f_36710 = cljs.core.first.call(null,seq__36672_36704__$1);
cljs.core.println.call(null,"  ",f_36710);


var G__36711 = cljs.core.next.call(null,seq__36672_36704__$1);
var G__36712 = null;
var G__36713 = (0);
var G__36714 = (0);
seq__36672_36694 = G__36711;
chunk__36673_36695 = G__36712;
count__36674_36696 = G__36713;
i__36675_36697 = G__36714;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36715 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36715);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36715)))?cljs.core.second.call(null,arglists_36715):arglists_36715));
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
var seq__36676_36716 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36677_36717 = null;
var count__36678_36718 = (0);
var i__36679_36719 = (0);
while(true){
if((i__36679_36719 < count__36678_36718)){
var vec__36680_36720 = cljs.core._nth.call(null,chunk__36677_36717,i__36679_36719);
var name_36721 = cljs.core.nth.call(null,vec__36680_36720,(0),null);
var map__36683_36722 = cljs.core.nth.call(null,vec__36680_36720,(1),null);
var map__36683_36723__$1 = ((((!((map__36683_36722 == null)))?(((((map__36683_36722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36683_36722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36683_36722):map__36683_36722);
var doc_36724 = cljs.core.get.call(null,map__36683_36723__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36725 = cljs.core.get.call(null,map__36683_36723__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36721);

cljs.core.println.call(null," ",arglists_36725);

if(cljs.core.truth_(doc_36724)){
cljs.core.println.call(null," ",doc_36724);
} else {
}


var G__36726 = seq__36676_36716;
var G__36727 = chunk__36677_36717;
var G__36728 = count__36678_36718;
var G__36729 = (i__36679_36719 + (1));
seq__36676_36716 = G__36726;
chunk__36677_36717 = G__36727;
count__36678_36718 = G__36728;
i__36679_36719 = G__36729;
continue;
} else {
var temp__5457__auto___36730 = cljs.core.seq.call(null,seq__36676_36716);
if(temp__5457__auto___36730){
var seq__36676_36731__$1 = temp__5457__auto___36730;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36676_36731__$1)){
var c__4351__auto___36732 = cljs.core.chunk_first.call(null,seq__36676_36731__$1);
var G__36733 = cljs.core.chunk_rest.call(null,seq__36676_36731__$1);
var G__36734 = c__4351__auto___36732;
var G__36735 = cljs.core.count.call(null,c__4351__auto___36732);
var G__36736 = (0);
seq__36676_36716 = G__36733;
chunk__36677_36717 = G__36734;
count__36678_36718 = G__36735;
i__36679_36719 = G__36736;
continue;
} else {
var vec__36685_36737 = cljs.core.first.call(null,seq__36676_36731__$1);
var name_36738 = cljs.core.nth.call(null,vec__36685_36737,(0),null);
var map__36688_36739 = cljs.core.nth.call(null,vec__36685_36737,(1),null);
var map__36688_36740__$1 = ((((!((map__36688_36739 == null)))?(((((map__36688_36739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36688_36739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36688_36739):map__36688_36739);
var doc_36741 = cljs.core.get.call(null,map__36688_36740__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36742 = cljs.core.get.call(null,map__36688_36740__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36738);

cljs.core.println.call(null," ",arglists_36742);

if(cljs.core.truth_(doc_36741)){
cljs.core.println.call(null," ",doc_36741);
} else {
}


var G__36743 = cljs.core.next.call(null,seq__36676_36731__$1);
var G__36744 = null;
var G__36745 = (0);
var G__36746 = (0);
seq__36676_36716 = G__36743;
chunk__36677_36717 = G__36744;
count__36678_36718 = G__36745;
i__36679_36719 = G__36746;
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

var seq__36690 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36691 = null;
var count__36692 = (0);
var i__36693 = (0);
while(true){
if((i__36693 < count__36692)){
var role = cljs.core._nth.call(null,chunk__36691,i__36693);
var temp__5457__auto___36747__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___36747__$1)){
var spec_36748 = temp__5457__auto___36747__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36748));
} else {
}


var G__36749 = seq__36690;
var G__36750 = chunk__36691;
var G__36751 = count__36692;
var G__36752 = (i__36693 + (1));
seq__36690 = G__36749;
chunk__36691 = G__36750;
count__36692 = G__36751;
i__36693 = G__36752;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__36690);
if(temp__5457__auto____$1){
var seq__36690__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36690__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__36690__$1);
var G__36753 = cljs.core.chunk_rest.call(null,seq__36690__$1);
var G__36754 = c__4351__auto__;
var G__36755 = cljs.core.count.call(null,c__4351__auto__);
var G__36756 = (0);
seq__36690 = G__36753;
chunk__36691 = G__36754;
count__36692 = G__36755;
i__36693 = G__36756;
continue;
} else {
var role = cljs.core.first.call(null,seq__36690__$1);
var temp__5457__auto___36757__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___36757__$2)){
var spec_36758 = temp__5457__auto___36757__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36758));
} else {
}


var G__36759 = cljs.core.next.call(null,seq__36690__$1);
var G__36760 = null;
var G__36761 = (0);
var G__36762 = (0);
seq__36690 = G__36759;
chunk__36691 = G__36760;
count__36692 = G__36761;
i__36693 = G__36762;
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

//# sourceMappingURL=repl.js.map?rel=1543701297306
