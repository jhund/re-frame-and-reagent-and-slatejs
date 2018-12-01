// Compiled by ClojureScript 1.10.339 {}
goog.provide('zprint.config');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.sutil');
goog.require('clojure.set');
goog.require('clojure.data');
goog.require('zprint.spec');
goog.require('cljs.reader');
/**
 * Return version of this program.
 */
zprint.config.about = (function zprint$config$about(){
return ["zprint-0.4.7"].join('');
});
zprint.config.zprintrc = ".zprintrc";
zprint.config.zprint_keys = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477)], null);
zprint.config.explain_hide_keys = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"configured?","configured?",642178633),new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872),new cljs.core.Keyword(null,"dbg?","dbg?",1845730771),new cljs.core.Keyword(null,"do-in-hang?","do-in-hang?",-1235364947),new cljs.core.Keyword(null,"drop?","drop?",-2009514790),new cljs.core.Keyword(null,"dbg-ge","dbg-ge",257927017),new cljs.core.Keyword(null,"file?","file?",1755223728),new cljs.core.Keyword(null,"spaces?","spaces?",1967773960),new cljs.core.Keyword(null,"process-bang-zprint?","process-bang-zprint?",-1250782024),new cljs.core.Keyword(null,"trim-comments?","trim-comments?",-1532658667),new cljs.core.Keyword(null,"zipper?","zipper?",-1061271842),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"return-cvec?","return-cvec?",1372433982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052),new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),new cljs.core.Keyword(null,"comma?","comma?",1532168963)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243),new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243),new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"dbg-local?","dbg-local?",-895545325),new cljs.core.Keyword(null,"hang-adjust","hang-adjust",-613514382),new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243),new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675)], null),new cljs.core.Keyword(null,"tuning","tuning",-48660925),new cljs.core.Keyword(null,"perf-vs-format","perf-vs-format",-1892061514)], null);
zprint.config.zfnstyle = cljs.core.PersistentHashMap.fromArrays(["map","binding","cond->","as->","with-local-vars","loop","defn","=","some->","if-not","when-first","when-some","defcc","fdef","if-let","doseq","try","with-redefs","defc","defcs","fn","for","defrecord","with-meta","catch","defexpect","with-redefs-fn","defui","s/or","swap!","apply",":require","cond","if","let","defproject","reify","defmulti","when-let",":import","not=","with-bindings","doto","if-some","extend-protocol","or","case","alt","remove","mapcat","with-open","with-bindings*","filter","condp","when","s/and","->","and","defmethod","do","some->>","fn*","interpose","deftest","extend","->>","defprotocol","extend-type","defn-","filterv","def","reduce","dotimes","proxy","assoc-in","assoc","mapv","when-not","cat","letfn","ns","deftype","defmacro"],[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"hang","hang",-1007256173),new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg1-mixin","arg1-mixin",1553512120),new cljs.core.Keyword(null,"arg1-force-nl","arg1-force-nl",-945624718),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"none-body","none-body",-171554854),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg1-mixin","arg1-mixin",1553512120),new cljs.core.Keyword(null,"arg1-mixin","arg1-mixin",1553512120),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050),new cljs.core.Keyword(null,"gt2-force-nl","gt2-force-nl",-1746243317),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),new cljs.core.Keyword(null,"hang","hang",-1007256173),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050),new cljs.core.Keyword(null,"hang","hang",-1007256173),new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2-pair","arg2-pair",-1268132126),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"gt2-force-nl","gt2-force-nl",-1746243317),new cljs.core.Keyword(null,"noarg1-body","noarg1-body",774553320),new cljs.core.Keyword(null,"hang","hang",-1007256173),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"none-body","none-body",-171554854),new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050),new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),new cljs.core.Keyword(null,"arg1-force-nl","arg1-force-nl",-945624718),new cljs.core.Keyword(null,"arg1-extend","arg1-extend",-157225050),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg2-fn","arg2-fn",1172769072),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564),new cljs.core.Keyword(null,"arg2-extend","arg2-extend",1554629186),new cljs.core.Keyword(null,"arg1-body","arg1-body",-1677449564)]);
zprint.config.default_zprint_options = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"old?","old?",-1129887872),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"max-length","max-length",-254826109),new cljs.core.Keyword(null,"tuning","tuning",-48660925),new cljs.core.Keyword(null,"fn-force-nl","fn-force-nl",1501458692),new cljs.core.Keyword(null,"max-hang-depth","max-hang-depth",-915232220),new cljs.core.Keyword(null,"future","future",1877842724),new cljs.core.Keyword(null,"user-fn-map","user-fn-map",-908243227),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"promise","promise",1767129287),new cljs.core.Keyword(null,"spaces?","spaces?",1967773960),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.Keyword(null,"configured?","configured?",642178633),new cljs.core.Keyword(null,"dbg-ge","dbg-ge",257927017),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"fn-name","fn-name",-766594004),new cljs.core.Keyword(null,"color-map","color-map",-207789684),new cljs.core.Keyword(null,"color?","color?",-1891974356),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"agent","agent",-766455027),new cljs.core.Keyword(null,"do-in-hang?","do-in-hang?",-1235364947),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"array","array",-2080713842),new cljs.core.Keyword(null,"parse-string-all?","parse-string-all?",-744455473),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"dbg-print?","dbg-print?",-660113872),new cljs.core.Keyword(null,"file?","file?",1755223728),new cljs.core.Keyword(null,"fn-obj","fn-obj",465065936),new cljs.core.Keyword(null,"fn-gt2-force-nl","fn-gt2-force-nl",1348579537),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.Keyword(null,"dbg?","dbg?",1845730771),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"trim-comments?","trim-comments?",-1532658667),new cljs.core.Keyword(null,"max-hang-span","max-hang-span",256100693),new cljs.core.Keyword(null,"record","record",-779106859),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"parse-string?","parse-string?",2006674325),new cljs.core.Keyword(null,"auto-width?","auto-width?",93515862),new cljs.core.Keyword(null,"perf-vs-format","perf-vs-format",-1892061514),new cljs.core.Keyword(null,"style-map","style-map",1488693527),new cljs.core.Keyword(null,"fn-gt3-force-nl","fn-gt3-force-nl",-58306985),new cljs.core.Keyword(null,"process-bang-zprint?","process-bang-zprint?",-1250782024),new cljs.core.Keyword(null,"additional-libraries?","additional-libraries?",-538987431),new cljs.core.Keyword(null,"max-depth","max-depth",127060793),new cljs.core.Keyword(null,"drop?","drop?",-2009514790),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"fn-map","fn-map",565481146),new cljs.core.Keyword(null,"atom","atom",-397043653),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"max-hang-count","max-hang-count",637294812),new cljs.core.Keyword(null,"parallel?","parallel?",-25273892),new cljs.core.Keyword(null,"delay","delay",-574225219),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),new cljs.core.Keyword(null,"return-cvec?","return-cvec?",1372433982),new cljs.core.Keyword(null,"zipper?","zipper?",-1061271842)],[true,new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn-force-nl","fn-force-nl",1501458692),null,new cljs.core.Keyword(null,"fn-gt2-force-nl","fn-gt2-force-nl",1348579537),null,new cljs.core.Keyword(null,"fn-gt3-force-nl","fn-gt3-force-nl",-58306985),null,new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modifiers","modifiers",50378834),null], null)], null),(0),(1000),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"hang-flow","hang-flow",428126548),1.1,new cljs.core.Keyword(null,"hang-type-flow","hang-type-flow",-1585576590),1.5,new cljs.core.Keyword(null,"hang-flow-limit","hang-flow-limit",389146586),(10),new cljs.core.Keyword(null,"general-hang-adjust","general-hang-adjust",-1631406987),(-1),new cljs.core.Keyword(null,"hang-if-equal-flow?","hang-if-equal-flow?",-1113113992),true], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"force-nl","force-nl",-755040826),null,new cljs.core.Keyword(null,"flow","flow",590489032),null,new cljs.core.Keyword(null,"noarg1","noarg1",2031519464),null,new cljs.core.Keyword(null,"noarg1-body","noarg1-body",774553320),null,new cljs.core.Keyword(null,"force-nl-body","force-nl-body",1789087439),null,new cljs.core.Keyword(null,"arg1-force-nl","arg1-force-nl",-945624718),null,new cljs.core.Keyword(null,"flow-body","flow-body",1355242804),null], null), null),(3),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object?","object?",-1313059217),false], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424),(1),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),2.0,new cljs.core.Keyword(null,"hang-size","hang-size",-347944063),(10),new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"flow?","flow?",96929057),true,new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462),true,new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424),(1),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),1000.0,new cljs.core.Keyword(null,"hang?","hang?",-579442854),true,new cljs.core.Keyword(null,"indent","indent",-148200125),(2),new cljs.core.Keyword(null,"modifiers","modifiers",50378834),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["static",null], null), null),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),false], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object?","object?",-1313059217),false], null),null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"flow?","flow?",96929057),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"justify?","justify?",294994148),new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462),new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424),new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243),new cljs.core.Keyword(null,"hang?","hang?",-579442854)],[false,false,(2),false,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hang-flow","hang-flow",428126548),(4),new cljs.core.Keyword(null,"hang-flow-limit","hang-flow-limit",389146586),(30)], null),2.0,null,(1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),(5)], null),true]),false,null,(80),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color-map","color-map",-207789684),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"hash-paren","hash-paren",-1158425562),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"brace","brace",-1705077624),new cljs.core.Keyword(null,"user-fn","user-fn",223976490),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"syntax-quote-paren","syntax-quote-paren",646342677),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"hash-brace","hash-brace",-1522139685),new cljs.core.Keyword(null,"none","none",1333468478)],[new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"yellow","yellow",-881035449)])], null),null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"hash-paren","hash-paren",-1158425562),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"brace","brace",-1705077624),new cljs.core.Keyword(null,"user-fn","user-fn",223976490),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"syntax-quote-paren","syntax-quote-paren",646342677),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"hash-brace","hash-brace",-1522139685),new cljs.core.Keyword(null,"none","none",1333468478)],[new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"black","black",1294279647)]),true,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"zloc?","zloc?",-1457193855),false,new cljs.core.Keyword(null,"surround","surround",2016177296),null], null),new cljs.core.Keyword(null,"lines","lines",-700165781),null,new cljs.core.Keyword(null,"elide","elide",-1239101386),null], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object?","object?",-1313059217),false], null),true,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"indent","indent",-148200125),(1),new cljs.core.Keyword(null,"binding?","binding?",-1071925644),false,new cljs.core.Keyword(null,"option-fn-first","option-fn-first",-1679196201),null,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),false,new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052),true,new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571),true,new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"hex?","hex?",890937870),false,new cljs.core.Keyword(null,"indent","indent",-148200125),(1),new cljs.core.Keyword(null,"object?","object?",-1313059217),false,new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),true], null),false,null,null,false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object?","object?",-1313059217),false], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),null,new cljs.core.Keyword(null,"gt2-force-nl","gt2-force-nl",-1746243317),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"docstring?","docstring?",-1820749410),true,new cljs.core.Keyword(null,"value","value",305978217),null], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"flow?","flow?",96929057),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"justify?","justify?",294994148),new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462),new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424),new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243),new cljs.core.Keyword(null,"hang?","hang?",-579442854)],[false,false,(2),false,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hang-flow","hang-flow",428126548),(4),new cljs.core.Keyword(null,"hang-flow-limit","hang-flow-limit",389146586),(30)], null),2.0,false,(1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),(5)], null),true]),null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"hang-size","hang-size",-347944063),new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874),new cljs.core.Keyword(null,"constant-pair?","constant-pair?",-1009181437),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),new cljs.core.Keyword(null,"pair-hang?","pair-hang?",-492564664),new cljs.core.Keyword(null,"constant-pair-min","constant-pair-min",1245759721),new cljs.core.Keyword(null,"hang-avoid","hang-avoid",-138703568),new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424),new cljs.core.Keyword(null,"hang?","hang?",-579442854)],[(100),null,true,(2),2.0,true,(4),0.5,(1),true]),null,(4),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true,new cljs.core.Keyword(null,"record-type?","record-type?",-1195765660),true,new cljs.core.Keyword(null,"to-string?","to-string?",1452120886),false], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"count?","count?",-122202128),false,new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),true,new cljs.core.Keyword(null,"inline?","inline?",-1674483791),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"interpose","interpose",576140629),null,new cljs.core.Keyword(null,"left-space","left-space",457574289),new cljs.core.Keyword(null,"drop","drop",364481611)], null),false,false,null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pair-nl","pair-nl",-252106299),new cljs.core.Keyword(null,"community","community",1600340198),new cljs.core.Keyword(null,"extend-nl","extend-nl",-757494042),new cljs.core.Keyword(null,"no-hang","no-hang",-667516119),new cljs.core.Keyword(null,"keyword-respect-nl","keyword-respect-nl",1810746249),new cljs.core.Keyword(null,"binding-nl","binding-nl",-1642873971),new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword(null,"map-nl","map-nl",727129906),new cljs.core.Keyword(null,"all-hang","all-hang",-1243746923),new cljs.core.Keyword(null,"justified","justified",-547284074)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent","indent",-148200125),(0),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),true], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent","indent",-148200125),(0)], null),new cljs.core.Keyword(null,"fn-map","fn-map",565481146),cljs.core.PersistentHashMap.fromArrays(["map","cond->","with-meta","apply","remove","filter","filterv","reduce","assoc","mapv"],[new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none-body","none-body",-171554854),new cljs.core.Keyword(null,"none-body","none-body",-171554854),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478)]),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent-arg","indent-arg",58691874),(1)], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent","indent",-148200125),(0)], null),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indent","indent",-148200125),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flow?","flow?",96929057),true,new cljs.core.Keyword(null,"indent","indent",-148200125),(0),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),true], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false], null),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false], null),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false], null),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false], null),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false], null),new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false], null),new cljs.core.Keyword(null,"record","record",-779106859),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),false], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"option-fn-first","option-fn-first",-1679196201),(function (p1__27808_SHARP_,p2__27807_SHARP_){
var k_QMARK_ = (p2__27807_SHARP_ instanceof cljs.core.Keyword);
if(cljs.core.not_EQ_.call(null,k_QMARK_,new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vector","vector",1902966158).cljs$core$IFn$_invoke$arity$1(p1__27808_SHARP_)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"respect-nl?","respect-nl?",604814635),k_QMARK_], null)], null);
} else {
return null;
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent","indent",-148200125),(0),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),true], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constant-pair-min","constant-pair-min",1245759721),(2)], null),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),false], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"indent","indent",-148200125),(0),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),true], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.Keyword(null,"pair-fn","pair-fn",-360146586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null),new cljs.core.Keyword(null,"record","record",-779106859),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang?","hang?",-579442854),true], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"binding","binding",539932593),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify?","justify?",294994148),true], null),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify?","justify?",294994148),true], null),new cljs.core.Keyword(null,"pair","pair",-447516312),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify?","justify?",294994148),true], null)], null)]),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gt3-force-nl","gt3-force-nl",-1297517534),null,new cljs.core.Keyword(null,"arg1-pair","arg1-pair",-38672953),null,new cljs.core.Keyword(null,"arg1-pair-body","arg1-pair-body",541801100),null], null), null),null,true,(1000),null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"indent","indent",-148200125),(1),new cljs.core.Keyword(null,"sort?","sort?",-567661924),true,new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497),false,new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052),true,new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571),true,new cljs.core.Keyword(null,"wrap?","wrap?",-1677427054),true], null),zprint.config.zfnstyle,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object?","object?",-1313059217),false], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expand?","expand?",-1744295862),true,new cljs.core.Keyword(null,"size","size",1098693007),(8)], null),(4),false,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object?","object?",-1313059217),false], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"flow?","flow?",96929057),new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497),new cljs.core.Keyword(null,"nl-separator?","nl-separator?",-758068767),new cljs.core.Keyword(null,"key-depth-color","key-depth-color",1448522819),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"comma?","comma?",1532168963),new cljs.core.Keyword(null,"justify?","justify?",294994148),new cljs.core.Keyword(null,"justify-tuning","justify-tuning",-958931675),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),new cljs.core.Keyword(null,"key-value-color","key-value-color",676042889),new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462),new cljs.core.Keyword(null,"key-ignore-silent","key-ignore-silent",-1720115060),new cljs.core.Keyword(null,"key-order","key-order",-356936372),new cljs.core.Keyword(null,"key-ignore","key-ignore",75506668),new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424),new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377),new cljs.core.Keyword(null,"hang-adjust","hang-adjust",-613514382),new cljs.core.Keyword(null,"justify-hang","justify-hang",1083292243),new cljs.core.Keyword(null,"key-color","key-color",-209002572),new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853),new cljs.core.Keyword(null,"hang?","hang?",-579442854),new cljs.core.Keyword(null,"sort?","sort?",-567661924)],[false,null,false,null,(2),true,false,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hang-flow","hang-flow",428126548),(4),new cljs.core.Keyword(null,"hang-flow-limit","hang-flow-limit",389146586),(30)], null),1000.0,null,null,null,null,null,(1),false,(-1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),(5)], null),null,true,true,true]),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"indent","indent",-148200125),(1),new cljs.core.Keyword(null,"wrap-after-multi?","wrap-after-multi?",1010808052),true,new cljs.core.Keyword(null,"wrap-coll?","wrap-coll?",908181571),true], null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"sort-in-code?","sort-in-code?",111878497),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"comma?","comma?",1532168963),new cljs.core.Keyword(null,"hang-expand","hang-expand",1086807559),new cljs.core.Keyword(null,"force-nl?","force-nl?",-1299761462),new cljs.core.Keyword(null,"key-order","key-order",-356936372),new cljs.core.Keyword(null,"hang-diff","hang-diff",-1575205424),new cljs.core.Keyword(null,"hang?","hang?",-579442854),new cljs.core.Keyword(null,"sort?","sort?",-567661924)],[null,(2),null,1000.0,true,null,(1),true,null]),false,false]);
zprint.config.no_color_map = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"hash-paren","hash-paren",-1158425562),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"brace","brace",-1705077624),new cljs.core.Keyword(null,"user-fn","user-fn",223976490),new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"paren","paren",-294107600),new cljs.core.Keyword(null,"quote","quote",-262615245),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"syntax-quote-paren","syntax-quote-paren",646342677),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"deref","deref",-145586795),new cljs.core.Keyword(null,"bracket","bracket",-600276523),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"hash-brace","hash-brace",-1522139685),new cljs.core.Keyword(null,"none","none",1333468478)],[new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"none","none",1333468478)]);
zprint.config.configured_options = cljs.core.atom.call(null,zprint.config.default_zprint_options);
zprint.config.explained_options = cljs.core.atom.call(null,zprint.config.default_zprint_options);
zprint.config.explained_sequence = cljs.core.atom.call(null,(1));
/**
 * Take two arguments of things to merge and figure it out.
 *   Works for sets too.
 */
zprint.config.merge_with_fn = (function zprint$config$merge_with_fn(val_in_result,val_in_latter){
if(((cljs.core.map_QMARK_.call(null,val_in_result)) && (cljs.core.map_QMARK_.call(null,val_in_latter)))){
return cljs.core.merge_with.call(null,zprint.config.merge_with_fn,val_in_result,val_in_latter);
} else {
if(((cljs.core.set_QMARK_.call(null,val_in_result)) && (cljs.core.set_QMARK_.call(null,val_in_latter)))){
return cljs.core.apply.call(null,cljs.core.conj,val_in_result,cljs.core.seq.call(null,val_in_latter));
} else {
return val_in_latter;

}
}
});
/**
 * Do a merge of maps all the way down.
 */
zprint.config.merge_deep = (function zprint$config$merge_deep(var_args){
var args__4534__auto__ = [];
var len__4531__auto___27810 = arguments.length;
var i__4532__auto___27811 = (0);
while(true){
if((i__4532__auto___27811 < len__4531__auto___27810)){
args__4534__auto__.push((arguments[i__4532__auto___27811]));

var G__27812 = (i__4532__auto___27811 + (1));
i__4532__auto___27811 = G__27812;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

zprint.config.merge_deep.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return cljs.core.apply.call(null,cljs.core.merge_with,zprint.config.merge_with_fn,maps);
});

zprint.config.merge_deep.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
zprint.config.merge_deep.cljs$lang$applyTo = (function (seq27809){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27809));
});

/**
 * Take two arguments of things to merge and figure it out.
 */
zprint.config.merge_with_fn_doc = (function zprint$config$merge_with_fn_doc(doc_string,val_in_result,val_in_latter){
if(((cljs.core.map_QMARK_.call(null,val_in_result)) && (cljs.core.map_QMARK_.call(null,val_in_latter)))){
return cljs.core.merge_with.call(null,cljs.core.partial.call(null,zprint.config.merge_with_fn_doc,doc_string),val_in_result,val_in_latter);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),doc_string,new cljs.core.Keyword(null,"value","value",305978217),val_in_latter], null);
}
});
/**
 * Do a merge of maps all the way down, keeping track of where every
 *   value came from.
 */
zprint.config.merge_deep_doc = (function zprint$config$merge_deep_doc(var_args){
var args__4534__auto__ = [];
var len__4531__auto___27815 = arguments.length;
var i__4532__auto___27816 = (0);
while(true){
if((i__4532__auto___27816 < len__4531__auto___27815)){
args__4534__auto__.push((arguments[i__4532__auto___27816]));

var G__27817 = (i__4532__auto___27816 + (1));
i__4532__auto___27816 = G__27817;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return zprint.config.merge_deep_doc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

zprint.config.merge_deep_doc.cljs$core$IFn$_invoke$arity$variadic = (function (doc_string,maps){
return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.partial.call(null,zprint.config.merge_with_fn_doc,doc_string),maps);
});

zprint.config.merge_deep_doc.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
zprint.config.merge_deep_doc.cljs$lang$applyTo = (function (seq27813){
var G__27814 = cljs.core.first.call(null,seq27813);
var seq27813__$1 = cljs.core.next.call(null,seq27813);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27814,seq27813__$1);
});

/**
 * Remove a single key from a map or remove a series of
 *   keys from an internal map.
 */
zprint.config.remove_key = (function zprint$config$remove_key(m,k){
if(cljs.core.coll_QMARK_.call(null,k)){
var map_key = cljs.core.first.call(null,k);
var keys_to_remove = cljs.core.next.call(null,k);
return cljs.core.assoc.call(null,m,map_key,zprint.config.remove_keys.call(null,m.call(null,map_key),keys_to_remove));
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
/**
 * Remove keys from a map at multiple levels.
 */
zprint.config.remove_keys = (function zprint$config$remove_keys(m,ks){
return cljs.core.reduce.call(null,(function (p1__27818_SHARP_,p2__27819_SHARP_){
return zprint.config.remove_key.call(null,p1__27818_SHARP_,p2__27819_SHARP_);
}),m,ks);
});
/**
 * Get the key seq for every terminal element in a map.
 */
zprint.config.key_seq = (function zprint$config$key_seq(m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.mapcat.call(null,(function (p__27821){
var vec__27822 = p__27821;
var k = cljs.core.nth.call(null,vec__27822,(0),null);
var v = cljs.core.nth.call(null,vec__27822,(1),null);
var ks = zprint.config.key_seq.call(null,v);
if(cljs.core.truth_(ks)){
return cljs.core.map.call(null,((function (ks,vec__27822,k,v){
return (function (p1__27820_SHARP_){
return cljs.core.cons.call(null,k,((cljs.core.coll_QMARK_.call(null,p1__27820_SHARP_))?p1__27820_SHARP_:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27820_SHARP_], null)));
});})(ks,vec__27822,k,v))
,ks);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)], null);
}
}),m);
} else {
return null;
}
});
/**
 * Given a key sequence and two maps, remove the elements of the set at
 *   the key sequence in the second map from set in the first map.
 */
zprint.config.remove_elements = (function zprint$config$remove_elements(map_remove,map_orig,ks){
return cljs.core.update_in.call(null,map_orig,ks,clojure.set.difference,cljs.core.get_in.call(null,map_remove,ks));
});
/**
 * Take two maps, and remove all of the elemnts in the second maps sets
 *   from equivalent places in the first map.
 */
zprint.config.remove_set_elements = (function zprint$config$remove_set_elements(map_orig,map_remove){
return cljs.core.reduce.call(null,cljs.core.partial.call(null,zprint.config.remove_elements,map_remove),map_orig,zprint.config.key_seq.call(null,map_remove));
});
/**
 * Take an options map, and remove the set elements that are at the :remove
 *   key, and also remove the :remove key.
 */
zprint.config.perform_remove = (function zprint$config$perform_remove(doc_string,doc_map,options,new_options){
var map_remove = new cljs.core.Keyword(null,"remove","remove",-131428414).cljs$core$IFn$_invoke$arity$1(new_options);
var options_out = zprint.config.remove_set_elements.call(null,options,map_remove);
var remove_ks_seq = zprint.config.key_seq.call(null,map_remove);
var new_options_out = cljs.core.dissoc.call(null,new_options,new cljs.core.Keyword(null,"remove","remove",-131428414));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [options_out,new_options_out,zprint.config.diff_deep_ks.call(null,doc_string,doc_map,remove_ks_seq,options_out)], null);
});
/**
 * Given a function and map and a key, replace the value with 
 *   (f leaf) or (map-leaves f m).
 */
zprint.config.map_leaf = (function zprint$config$map_leaf(f,m,k){
var v = m.call(null,k);
if(!(cljs.core.map_QMARK_.call(null,v))){
return cljs.core.assoc.call(null,m,k,f.call(null,v));
} else {
return cljs.core.assoc.call(null,m,k,zprint.config.map_leaves.call(null,f,v));
}
});
/**
 * Return a map of the same shape but where every leaf value
 *   (i.e., not map value) has been replaced by the (f leaf-value).
 */
zprint.config.map_leaves = (function zprint$config$map_leaves(f,m){
return cljs.core.reduce.call(null,cljs.core.partial.call(null,zprint.config.map_leaf,f),m,cljs.core.keys.call(null,m));
});
/**
 * Create a map with a :value and :set-by elements.
 */
zprint.config.value_set_by = (function zprint$config$value_set_by(set_by,_,value){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"set-by","set-by",-1411360264),set_by,new cljs.core.Keyword(null,"value","value",305978217),value], null);
});
/**
 * Update an existing doc-map with labels of everything that shows up
 *   in the ks-seq.
 */
zprint.config.diff_deep_ks = (function zprint$config$diff_deep_ks(doc_string,doc_map,changed_key_seq,existing){
return cljs.core.reduce.call(null,(function (p1__27825_SHARP_,p2__27826_SHARP_){
return cljs.core.update_in.call(null,p1__27825_SHARP_,p2__27826_SHARP_,cljs.core.partial.call(null,zprint.config.value_set_by,doc_string),cljs.core.get_in.call(null,existing,p2__27826_SHARP_));
}),doc_map,changed_key_seq);
});
/**
 * Diff two maps.
 */
zprint.config.diff_map = (function zprint$config$diff_map(before,after){
return cljs.core.second.call(null,clojure.data.diff.call(null,before,after));
});
/**
 * Return current explained-seqence and add one to it.
 */
zprint.config.inc_explained_sequence = (function zprint$config$inc_explained_sequence(){
return cljs.core.swap_BANG_.call(null,zprint.config.explained_sequence,cljs.core.inc);
});
/**
 * Do a simple dissoc-in for two levels.  Does not remove the
 *   second map if it is empty.
 */
zprint.config.dissoc_two = (function zprint$config$dissoc_two(m,p__27827){
var vec__27828 = p__27827;
var k1 = cljs.core.nth.call(null,vec__27828,(0),null);
var k2 = cljs.core.nth.call(null,vec__27828,(1),null);
return cljs.core.assoc.call(null,m,k1,cljs.core.dissoc.call(null,cljs.core.get.call(null,m,k1),k2));
});
/**
 * Take an updated-map and generate calculated options
 *   from it.  Takes the updated-map and further updates
 *   it, being smart about things that were set to nil.
 */
zprint.config.add_calculated_options = (function zprint$config$add_calculated_options(updated_map){
var G__27831 = updated_map;
var G__27831__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"key-order","key-order",-356936372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(updated_map)))?cljs.core.assoc_in.call(null,G__27831,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"key-value","key-value",-34906839)], null),cljs.core.zipmap.call(null,new cljs.core.Keyword(null,"key-order","key-order",-356936372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(updated_map)),cljs.core.range.call(null))):G__27831);
var G__27831__$2 = (((((new cljs.core.Keyword(null,"key-order","key-order",-356936372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(updated_map)) == null)) && (!((new cljs.core.Keyword(null,"key-value","key-value",-34906839).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(updated_map)) == null)))))?zprint.config.dissoc_two.call(null,G__27831__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"key-value","key-value",-34906839)], null)):G__27831__$1);
var G__27831__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"key-order","key-order",-356936372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058).cljs$core$IFn$_invoke$arity$1(updated_map)))?cljs.core.assoc_in.call(null,G__27831__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),new cljs.core.Keyword(null,"key-value","key-value",-34906839)], null),cljs.core.zipmap.call(null,new cljs.core.Keyword(null,"key-order","key-order",-356936372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058).cljs$core$IFn$_invoke$arity$1(updated_map)),cljs.core.range.call(null))):G__27831__$2);
var G__27831__$4 = (((((new cljs.core.Keyword(null,"key-order","key-order",-356936372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058).cljs$core$IFn$_invoke$arity$1(updated_map)) == null)) && (!((new cljs.core.Keyword(null,"key-value","key-value",-34906839).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058).cljs$core$IFn$_invoke$arity$1(updated_map)) == null)))))?zprint.config.dissoc_two.call(null,G__27831__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reader-cond","reader-cond",-2133265058),new cljs.core.Keyword(null,"key-value","key-value",-34906839)], null)):G__27831__$3);
var G__27831__$5 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"color?","color?",-1891974356).cljs$core$IFn$_invoke$arity$1(updated_map)))?cljs.core.assoc.call(null,G__27831__$4,new cljs.core.Keyword(null,"color-map","color-map",-207789684),zprint.config.no_color_map):G__27831__$4);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"color?","color?",-1891974356).cljs$core$IFn$_invoke$arity$1(updated_map))){
return cljs.core.assoc_in.call(null,G__27831__$5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uneval","uneval",1932037707),new cljs.core.Keyword(null,"color-map","color-map",-207789684)], null),zprint.config.no_color_map);
} else {
return G__27831__$5;
}
});
/**
 * Replace options to be used on every call.  You must have validated
 *   these options already!
 */
zprint.config.reset_options_BANG_ = (function zprint$config$reset_options_BANG_(var_args){
var G__27833 = arguments.length;
switch (G__27833) {
case 2:
return zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (updated_map,doc_map){
cljs.core.reset_BANG_.call(null,zprint.config.configured_options,zprint.config.add_calculated_options.call(null,updated_map));

if(cljs.core.truth_(doc_map)){
return cljs.core.reset_BANG_.call(null,zprint.config.explained_options,doc_map);
} else {
return null;
}
});

zprint.config.reset_options_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (updated_map){
return zprint.config.reset_options_BANG_.call(null,updated_map,null);
});

zprint.config.reset_options_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Remove any previously set options.
 */
zprint.config.reset_default_options_BANG_ = (function zprint$config$reset_default_options_BANG_(){
cljs.core.reset_BANG_.call(null,zprint.config.configured_options,zprint.config.default_zprint_options);

return cljs.core.reset_BANG_.call(null,zprint.config.explained_options,zprint.config.default_zprint_options);
});
/**
 * Return any prevsiouly set options.
 */
zprint.config.get_options = (function zprint$config$get_options(){
return cljs.core.deref.call(null,zprint.config.configured_options);
});
/**
 * Return the base default options.
 */
zprint.config.get_default_options = (function zprint$config$get_default_options(){
return zprint.config.default_zprint_options;
});
/**
 * Set options to be used on every call.
 */
zprint.config.set_explained_options_BANG_ = (function zprint$config$set_explained_options_BANG_(doc_map){
return cljs.core.reset_BANG_.call(null,zprint.config.explained_options,doc_map);
});
/**
 * Return any previously set doc-map.
 */
zprint.config.get_explained_options = (function zprint$config$get_explained_options(){
return cljs.core.assoc.call(null,zprint.config.remove_keys.call(null,cljs.core.deref.call(null,zprint.config.explained_options),zprint.config.explain_hide_keys),new cljs.core.Keyword(null,"version","version",425292698),zprint.config.about.call(null));
});
/**
 * Return any previously set doc-map complete.
 */
zprint.config.get_explained_all_options = (function zprint$config$get_explained_all_options(){
return cljs.core.assoc.call(null,cljs.core.deref.call(null,zprint.config.explained_options),new cljs.core.Keyword(null,"version","version",425292698),zprint.config.about.call(null));
});
/**
 * Return the base explained options, matches get-default-options
 */
zprint.config.get_default_explained_all_options = (function zprint$config$get_default_explained_all_options(){
return zprint.config.default_zprint_options;
});
/**
 * Validate the new options, and update both the saved options
 *   and the doc-map as well.  Will throw an exceptino for errors.
 */
zprint.config.internal_set_options_BANG_ = (function zprint$config$internal_set_options_BANG_(doc_string,doc_map,existing_options,new_options){
var vec__27835 = zprint.config.config_and_validate.call(null,doc_string,doc_map,existing_options,new_options);
var updated_map = cljs.core.nth.call(null,vec__27835,(0),null);
var new_doc_map = cljs.core.nth.call(null,vec__27835,(1),null);
var error_vec = cljs.core.nth.call(null,vec__27835,(2),null);
if(cljs.core.truth_(error_vec)){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,"set-options! for ",doc_string," found these errors: ",error_vec)));
} else {
zprint.config.reset_options_BANG_.call(null,updated_map,new_doc_map);

return null;
}
});
/**
 * Do external configuration regardless of whether or not it has
 *   already been done, replacing any internal configuration.  Returns
 *   nil if successful, a vector of errors if not.  Argument, if it
 *   exists, says whether or not to try to load additional libraries.
 *   Defaults to true, unusually enough.
 */
zprint.config.config_configure_all_BANG_ = (function zprint$config$config_configure_all_BANG_(var_args){
var G__27839 = arguments.length;
switch (G__27839) {
case 1:
return zprint.config.config_configure_all_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return zprint.config.config_configure_all_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.config.config_configure_all_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (additional_libraries_QMARK_){
if(cljs.core.truth_(additional_libraries_QMARK_)){
} else {
}

var vec__27840 = zprint.config.config_and_validate_all.call(null,null,null);
var zprint_options = cljs.core.nth.call(null,vec__27840,(0),null);
var doc_map = cljs.core.nth.call(null,vec__27840,(1),null);
var errors = cljs.core.nth.call(null,vec__27840,(2),null);
if(cljs.core.truth_(errors)){
return errors;
} else {
zprint.config.reset_options_BANG_.call(null,zprint_options,doc_map);

zprint.config.config_set_options_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"configured?","configured?",642178633),true], null),"internal");

if(cljs.core.truth_(cljs.core.find_ns.call(null,new cljs.core.Symbol(null,"clojure.repl","clojure.repl",570897595,null)))){
zprint.config.internal_set_options_BANG_.call(null,"REPL execution default",zprint.config.get_explained_all_options.call(null),zprint.config.get_options.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parallel?","parallel?",-25273892),true], null));
} else {
}

return null;
}
});

zprint.config.config_configure_all_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return zprint.config.config_configure_all_BANG_.call(null,new cljs.core.Keyword(null,"additional-libraries?","additional-libraries?",-538987431).cljs$core$IFn$_invoke$arity$1(zprint.config.get_options.call(null)));
});

zprint.config.config_configure_all_BANG_.cljs$lang$maxFixedArity = 1;

/**
 * Add some options to the current options, checking to make
 *   sure that they are correct.
 */
zprint.config.config_set_options_BANG_ = (function zprint$config$config_set_options_BANG_(var_args){
var G__27845 = arguments.length;
switch (G__27845) {
case 2:
return zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (new_options,doc_str){
if(((cljs.core.not.call(null,new cljs.core.Keyword(null,"configured?","configured?",642178633).cljs$core$IFn$_invoke$arity$1(zprint.config.get_options.call(null)))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"configured?","configured?",642178633).cljs$core$IFn$_invoke$arity$1(new_options))))){
var additional_libraries_existing_QMARK__27847 = new cljs.core.Keyword(null,"additional-libraries?","additional-libraries?",-538987431).cljs$core$IFn$_invoke$arity$1(zprint.config.get_options.call(null));
var additional_libraries_new_QMARK__27848 = cljs.core.get.call(null,new_options,new cljs.core.Keyword(null,"additional-libraries?","additional-libraries?",-538987431),new cljs.core.Keyword(null,"not-found","not-found",-629079980));
var additional_libraries_QMARK__27849 = ((cljs.core.not_EQ_.call(null,additional_libraries_new_QMARK__27848,new cljs.core.Keyword(null,"not-found","not-found",-629079980)))?additional_libraries_new_QMARK__27848:additional_libraries_existing_QMARK__27847);
zprint.config.config_configure_all_BANG_.call(null,additional_libraries_QMARK__27849);
} else {
}

return zprint.config.internal_set_options_BANG_.call(null,doc_str,zprint.config.get_explained_all_options.call(null),zprint.config.get_options.call(null),new_options);
});

zprint.config.config_set_options_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (new_options){
return zprint.config.config_set_options_BANG_.call(null,new_options,["repl or api call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.config.inc_explained_sequence.call(null))].join(''));
});

zprint.config.config_set_options_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Given a map, build a set of key-seqs that are in the map.  This
 *   will leave out the :fn-map elements, and possibly do other special
 *   processing.
 */
zprint.config.build_key_seq_set = (function zprint$config$build_key_seq_set(options){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.call(null,(function (p1__27850_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__27850_SHARP_),new cljs.core.Keyword(null,"fn-map","fn-map",565481146));
}),cljs.core.map.call(null,cljs.core.vec,zprint.config.key_seq.call(null,options))));
});
zprint.config.allowed_key_set = cljs.core.atom.call(null,null);
/**
 * Generate the allowed key-set and save it.
 */
zprint.config.set_allowed_key_set_BANG_ = (function zprint$config$set_allowed_key_set_BANG_(){
return cljs.core.reset_BANG_.call(null,zprint.config.allowed_key_set,zprint.config.build_key_seq_set.call(null,zprint.config.get_options.call(null)));
});
/**
 * Take an options map, and validate that all of the keys in the
 *   map are acceptable.  This is largely a comparison with the keys
 *   in the default options map, but includes special processing for
 *   the :fn-map, where new keys are allowed and so they are not checked.
 *   Returns nil for success and a sequence of invalid keys if failure.
 */
zprint.config.validate_incoming_keys = (function zprint$config$validate_incoming_keys(options){
var incoming_key_seq_set = zprint.config.build_key_seq_set.call(null,options);
var wrong_key_seqs = clojure.set.difference.call(null,incoming_key_seq_set,cljs.core.deref.call(null,zprint.config.allowed_key_set));
return cljs.core.seq.call(null,wrong_key_seqs);
});
/**
 * If the sequence is empty, then return nil, else return the sequence.
 */
zprint.config.empty_to_nil = (function zprint$config$empty_to_nil(empty_seq){
if(cljs.core.empty_QMARK_.call(null,empty_seq)){
return null;
} else {
return empty_seq;
}
});
/**
 * Validate an options map, source-str is a descriptive phrase 
 *   which will be included in the errors (if any). Returns nil 
 *   for success, a string with error(s) if not.
 */
zprint.config.validate_options = (function zprint$config$validate_options(var_args){
var G__27853 = arguments.length;
switch (G__27853) {
case 2:
return zprint.config.validate_options.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.config.validate_options.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.config.validate_options.cljs$core$IFn$_invoke$arity$2 = (function (options,source_str){
if(cljs.core.truth_(options)){
return zprint.config.empty_to_nil.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",cljs.core.remove.call(null,(function (p1__27851_SHARP_){
return (((p1__27851_SHARP_ == null)) || (cljs.core.empty_QMARK_.call(null,p1__27851_SHARP_)));
}),cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,zprint.spec.validate_basic.call(null,cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"style-map","style-map",1488693527)),source_str),(cljs.core.truth_(new cljs.core.Keyword(null,"style-map","style-map",1488693527).cljs$core$IFn$_invoke$arity$1(options))?zprint.config.validate_style_map.call(null,options):null))))));
} else {
return null;
}
});

zprint.config.validate_options.cljs$core$IFn$_invoke$arity$1 = (function (options){
return zprint.config.validate_options.call(null,options,null);
});

zprint.config.validate_options.cljs$lang$maxFixedArity = 2;

/**
 * Given a new style definition, validate that the new style contains
 *   an acceptable options map.  Returns nil for success, a string with
 *   error information if not.
 */
zprint.config.validate_style = (function zprint$config$validate_style(style_name,style_options){
return zprint.config.validate_options.call(null,style_options,["style ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name)].join(''));
});
/**
 * Given an options map, validate all of the styles in the style-map.
 *   Return an error string with any errors.
 */
zprint.config.validate_style_map = (function zprint$config$validate_style_map(options){
var error_seq = cljs.core.mapv.call(null,(function (p1__27855_SHARP_){
return zprint.config.validate_style.call(null,cljs.core.first.call(null,p1__27855_SHARP_),cljs.core.second.call(null,p1__27855_SHARP_));
}),new cljs.core.Keyword(null,"style-map","style-map",1488693527).cljs$core$IFn$_invoke$arity$1(options));
var error_seq__$1 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,error_seq);
var error_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",error_seq__$1));
if(cljs.core.empty_QMARK_.call(null,error_str)){
return null;
} else {
return error_str;
}
});
/**
 * Take a [doc-string [existing-map doc-map error-str] style-name]
 *   and produce a new [existing-map doc-map error-str] from the style defined
 *   in the existing map.
 */
zprint.config.apply_one_style = (function zprint$config$apply_one_style(doc_string,p__27856,style_name){
var vec__27857 = p__27856;
var existing_map = cljs.core.nth.call(null,vec__27857,(0),null);
var doc_map = cljs.core.nth.call(null,vec__27857,(1),null);
var error_str = cljs.core.nth.call(null,vec__27857,(2),null);
if(((cljs.core._EQ_.call(null,style_name,new cljs.core.Keyword(null,"not-specified","not-specified",1542080231))) || ((style_name == null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null);
} else {
var style_map = ((cljs.core._EQ_.call(null,style_name,new cljs.core.Keyword(null,"default","default",-1987822328)))?zprint.config.get_default_options.call(null):cljs.core.get_in.call(null,existing_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style-map","style-map",1488693527),style_name], null)));
if(cljs.core.truth_(style_map)){
var updated_map = zprint.config.merge_deep.call(null,existing_map,style_map);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_map,(cljs.core.truth_(doc_map)?zprint.config.diff_deep_ks.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(doc_string)," specified :style ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name)].join(''),doc_map,zprint.config.key_seq.call(null,style_map),updated_map):null),null], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,["Style '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_name),"' not found!"].join('')], null);
}
}
});
/**
 * Given an existing-map and a new-map, if the new-map specifies a
 *   style, apply it if it exists.  Otherwise do nothing. Return
 *   [updated-map new-doc-map error-string]
 */
zprint.config.apply_style = (function zprint$config$apply_style(doc_string,doc_map,existing_map,new_map){
var style_name = cljs.core.get.call(null,new_map,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"not-specified","not-specified",1542080231));
if(((cljs.core._EQ_.call(null,style_name,new cljs.core.Keyword(null,"not-specified","not-specified",1542080231))) || ((style_name == null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null);
} else {
if(!(cljs.core.coll_QMARK_.call(null,style_name))){
return zprint.config.apply_one_style.call(null,doc_string,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null),style_name);
} else {
return cljs.core.reduce.call(null,cljs.core.partial.call(null,zprint.config.apply_one_style,doc_string),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null),style_name);
}
}
});
/**
 * If there is a :config key in the opts, read in a map from that file.
 */
zprint.config.get_config_from_file = (function zprint$config$get_config_from_file(var_args){
var G__27861 = arguments.length;
switch (G__27861) {
case 2:
return zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$2 = (function (filename,optional_QMARK_){
return null;
});

zprint.config.get_config_from_file.cljs$core$IFn$_invoke$arity$1 = (function (filename){
return zprint.config.get_config_from_file.call(null,filename,null);
});

zprint.config.get_config_from_file.cljs$lang$maxFixedArity = 2;

/**
 * If there is a :config-map key in the opts, read in a map from that string.
 */
zprint.config.get_config_from_map = (function zprint$config$get_config_from_map(map_string){
if(cljs.core.truth_(map_string)){
try{var opts_map = cljs.reader.read_string.call(null,map_string);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts_map,null], null);
}catch (e27863){var e = e27863;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,["Unable to read configuration from map",cljs.core.str.cljs$core$IFn$_invoke$arity$1(map_string)," because ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join('')], null);
}} else {
return null;
}
});
/**
 * If it is a string, and it is true or false (any case), turn it
 *   into true or false, else leave it the way it is.
 */
zprint.config.strtf__GT_boolean = (function zprint$config$strtf__GT_boolean(sexpr){
if(!(typeof sexpr === 'string')){
return sexpr;
} else {
var lc_sexpr = clojure.string.lower_case.call(null,clojure.string.trim.call(null,sexpr));
if(!(((cljs.core._EQ_.call(null,lc_sexpr,"true")) || (cljs.core._EQ_.call(null,lc_sexpr,"false"))))){
return sexpr;
} else {
if(cljs.core._EQ_.call(null,lc_sexpr,"true")){
return true;
} else {
return false;
}
}
}
});
/**
 * Return true if a sequence starts with another sequence.
 */
zprint.config.starts_with_QMARK_ = (function zprint$config$starts_with_QMARK_(coll,seq){
return cljs.core.reduce.call(null,(function (p1__27864_SHARP_,p2__27865_SHARP_){
var and__3938__auto__ = p1__27864_SHARP_;
if(cljs.core.truth_(and__3938__auto__)){
return p2__27865_SHARP_;
} else {
return and__3938__auto__;
}
}),cljs.core.map.call(null,cljs.core._EQ_,coll,seq));
});
/**
 * Given a map of environment variable entries from cprop, which contain
 *   a sequence key and a keyword value, build a map to merge with the
 *   fn-map.
 */
zprint.config.build_fn_map_update = (function zprint$config$build_fn_map_update(m){
var mapseq = cljs.core.seq.call(null,m);
var fn_map_entries = cljs.core.filter.call(null,((function (mapseq){
return (function (p1__27866_SHARP_){
return zprint.config.starts_with_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zprint","zprint",1501225152),new cljs.core.Keyword(null,"fn-map","fn-map",565481146)], null),cljs.core.first.call(null,p1__27866_SHARP_));
});})(mapseq))
,mapseq);
var fn_map_keys = cljs.core.map.call(null,((function (mapseq,fn_map_entries){
return (function (p1__27867_SHARP_){
return cljs.core.name.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,p1__27867_SHARP_),(2)));
});})(mapseq,fn_map_entries))
,fn_map_entries);
var fn_map_vals = cljs.core.map.call(null,((function (mapseq,fn_map_entries,fn_map_keys){
return (function (p1__27868_SHARP_){
return cljs.core.keyword.call(null,cljs.core.second.call(null,p1__27868_SHARP_));
});})(mapseq,fn_map_entries,fn_map_keys))
,fn_map_entries);
return cljs.core.zipmap.call(null,fn_map_keys,fn_map_vals);
});
/**
 * Given the current options map and a map of environment variables
 *   from cprop, update the fn-map as described by the environment variable
 *   map.
 */
zprint.config.update_fn_map = (function zprint$config$update_fn_map(options,env_map){
var fn_map_update = zprint.config.build_fn_map_update.call(null,env_map);
if(cljs.core.empty_QMARK_.call(null,fn_map_update)){
return options;
} else {
return cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"fn-map","fn-map",565481146),cljs.core.merge.call(null,new cljs.core.Keyword(null,"fn-map","fn-map",565481146).cljs$core$IFn$_invoke$arity$1(options),fn_map_update));
}
});
/**
 * If a particular key-path exists in an existing map, replace it
 *   with a new key-path.  The existing key-path can have a nil value.
 */
zprint.config.replace_existing = (function zprint$config$replace_existing(existing,p__27869){
var vec__27870 = p__27869;
var k_path = cljs.core.nth.call(null,vec__27870,(0),null);
var v = cljs.core.nth.call(null,vec__27870,(1),null);
if(((cljs.core.seq.call(null,k_path)) && (cljs.core.not_EQ_.call(null,cljs.core.get_in.call(null,existing,k_path,new cljs.core.Keyword(null,"not-present","not-present",125254321)),new cljs.core.Keyword(null,"not-present","not-present",125254321))))){
return cljs.core.assoc_in.call(null,existing,k_path,v);
} else {
return existing;
}
});
/**
 * Takes a map with multiple levels, and merge only the value from
 *   the second map where the path of the keys already exists in the first
 *   map.  Will not add any new keys to the first map.
 */
zprint.config.merge_existing = (function zprint$config$merge_existing(existing,new$){
return cljs.core.reduce.call(null,zprint.config.replace_existing,existing,new$);
});
/**
 * Do a single new map. Returns [updated-map new-doc-map error-vec]
 *   Depends on existing-map to be the full, current options map!
 */
zprint.config.config_and_validate = (function zprint$config$config_and_validate(doc_string,doc_map,existing_map,new_map){
if(cljs.core.truth_(new_map)){
var errors = zprint.config.validate_options.call(null,new_map,doc_string);
var vec__27873 = zprint.config.perform_remove.call(null,doc_string,doc_map,existing_map,new_map);
var existing_map__$1 = cljs.core.nth.call(null,vec__27873,(0),null);
var new_ap = cljs.core.nth.call(null,vec__27873,(1),null);
var new_doc_map = cljs.core.nth.call(null,vec__27873,(2),null);
var vec__27876 = zprint.config.apply_style.call(null,doc_string,new_doc_map,existing_map__$1,new_map);
var updated_map = cljs.core.nth.call(null,vec__27876,(0),null);
var new_doc_map__$1 = cljs.core.nth.call(null,vec__27876,(1),null);
var style_errors = cljs.core.nth.call(null,vec__27876,(2),null);
var errors__$1 = (cljs.core.truth_(style_errors)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(errors)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style_errors)].join(''):errors);
var new_updated_map = zprint.config.merge_deep.call(null,updated_map,new_map);
var new_doc_map__$2 = zprint.config.diff_deep_ks.call(null,doc_string,new_doc_map__$1,zprint.config.key_seq.call(null,new_map),new_updated_map);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_updated_map,new_doc_map__$2,errors__$1], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_map,doc_map,null], null);
}
});
/**
 * Take the opts and errors from the command line arguments, if any,
 *   and do the rest of the configuration and validation along the way.  
 *   If there are no command line arguments, that's ok too. Since we
 *   took the main.clj out, there aren't going to be any soon.  Left
 *   the config map, config file, and cli processing in place in case
 *   we go replace the uberjar capability soon.  
 *   Returns [new-map doc-map errors]
 */
zprint.config.config_and_validate_all = (function zprint$config$config_and_validate_all(cli_opts,cli_errors){
var default_map = zprint.config.get_default_options.call(null);
var default_doc_map = zprint.config.get_default_explained_all_options.call(null);
var home = null;
var file_separator = null;
var zprintrc_file = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(home),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_separator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.config.zprintrc)].join('');
var vec__27879 = (cljs.core.truth_((function (){var and__3938__auto__ = home;
if(cljs.core.truth_(and__3938__auto__)){
return file_separator;
} else {
return and__3938__auto__;
}
})())?zprint.config.get_config_from_file.call(null,zprintrc_file,new cljs.core.Keyword(null,"optional","optional",2053951509)):null);
var opts_rcfile = cljs.core.nth.call(null,vec__27879,(0),null);
var errors_rcfile = cljs.core.nth.call(null,vec__27879,(1),null);
var rc_filename = cljs.core.nth.call(null,vec__27879,(2),null);
var vec__27882 = zprint.config.config_and_validate.call(null,["File: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprintrc_file)].join(''),default_doc_map,default_map,opts_rcfile);
var updated_map = cljs.core.nth.call(null,vec__27882,(0),null);
var new_doc_map = cljs.core.nth.call(null,vec__27882,(1),null);
var rc_errors = cljs.core.nth.call(null,vec__27882,(2),null);
var read_system_env_fn = null;
var env_map = (cljs.core.truth_(read_system_env_fn)?read_system_env_fn.call(null):null);
var env_and_default_map = zprint.config.merge_existing.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zprint","zprint",1501225152),default_map], null),env_map);
var new_env_map = zprint.config.diff_map.call(null,default_map,new cljs.core.Keyword(null,"zprint","zprint",1501225152).cljs$core$IFn$_invoke$arity$1(env_and_default_map));
var new_env_map__$1 = zprint.config.update_fn_map.call(null,new_env_map,env_map);
var new_env_map__$2 = zprint.config.map_leaves.call(null,zprint.config.strtf__GT_boolean,new_env_map__$1);
var vec__27885 = zprint.config.config_and_validate.call(null,["Environment variable"].join(''),new_doc_map,updated_map,new_env_map__$2);
var updated_map__$1 = cljs.core.nth.call(null,vec__27885,(0),null);
var new_doc_map__$1 = cljs.core.nth.call(null,vec__27885,(1),null);
var env_errors = cljs.core.nth.call(null,vec__27885,(2),null);
var read_system_props_fn = null;
var prop_map = (cljs.core.truth_(read_system_props_fn)?read_system_props_fn.call(null):null);
var prop_and_default_map = zprint.config.merge_existing.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zprint","zprint",1501225152),default_map], null),prop_map);
var new_prop_map = zprint.config.diff_map.call(null,default_map,new cljs.core.Keyword(null,"zprint","zprint",1501225152).cljs$core$IFn$_invoke$arity$1(prop_and_default_map));
var new_prop_map__$1 = zprint.config.update_fn_map.call(null,new_prop_map,prop_map);
var new_prop_map__$2 = zprint.config.map_leaves.call(null,zprint.config.strtf__GT_boolean,new_prop_map__$1);
var vec__27888 = zprint.config.config_and_validate.call(null,["System property"].join(''),new_doc_map__$1,updated_map__$1,new_prop_map__$2);
var updated_map__$2 = cljs.core.nth.call(null,vec__27888,(0),null);
var new_doc_map__$2 = cljs.core.nth.call(null,vec__27888,(1),null);
var prop_errors = cljs.core.nth.call(null,vec__27888,(2),null);
var config_filename = null;
var vec__27891 = (cljs.core.truth_(config_filename)?zprint.config.get_config_from_file.call(null,zprintrc_file):null);
var opts_configfile = cljs.core.nth.call(null,vec__27891,(0),null);
var errors_configfile = cljs.core.nth.call(null,vec__27891,(1),null);
var config_filename__$1 = cljs.core.nth.call(null,vec__27891,(2),null);
var vec__27894 = zprint.config.config_and_validate.call(null,["Config file: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(config_filename__$1)].join(''),new_doc_map__$2,updated_map__$2,opts_configfile);
var updated_map__$3 = cljs.core.nth.call(null,vec__27894,(0),null);
var new_doc_map__$3 = cljs.core.nth.call(null,vec__27894,(1),null);
var config_errors = cljs.core.nth.call(null,vec__27894,(2),null);
var vec__27897 = zprint.config.get_config_from_map.call(null,new cljs.core.Keyword(null,"config-map","config-map",807193777).cljs$core$IFn$_invoke$arity$1(cli_opts));
var opts_configmap = cljs.core.nth.call(null,vec__27897,(0),null);
var errors_configmap = cljs.core.nth.call(null,vec__27897,(1),null);
var vec__27900 = zprint.config.config_and_validate.call(null,["Config map:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config-map","config-map",807193777).cljs$core$IFn$_invoke$arity$1(cli_opts))].join(''),new_doc_map__$3,updated_map__$3,opts_configmap);
var updated_map__$4 = cljs.core.nth.call(null,vec__27900,(0),null);
var new_doc_map__$4 = cljs.core.nth.call(null,vec__27900,(1),null);
var config_errors__$1 = cljs.core.nth.call(null,vec__27900,(2),null);
var opts_cli = cljs.core.select_keys.call(null,cli_opts,zprint.config.zprint_keys);
var vec__27903 = zprint.config.config_and_validate.call(null,["CLI options"].join(''),new_doc_map__$4,updated_map__$4,opts_cli);
var updated_map__$5 = cljs.core.nth.call(null,vec__27903,(0),null);
var new_doc_map__$5 = cljs.core.nth.call(null,vec__27903,(1),null);
var cli_errors__$1 = cljs.core.nth.call(null,vec__27903,(2),null);
var all_errors = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n",cljs.core.filter.call(null,cljs.core.identity,(new cljs.core.List(null,errors_rcfile,(new cljs.core.List(null,rc_errors,(new cljs.core.List(null,env_errors,(new cljs.core.List(null,prop_errors,(new cljs.core.List(null,errors_configfile,(new cljs.core.List(null,config_errors__$1,(new cljs.core.List(null,cli_errors__$1,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)))));
var all_errors__$1 = ((cljs.core.empty_QMARK_.call(null,all_errors))?null:all_errors);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_map__$5,new_doc_map__$5,all_errors__$1], null);
});
/**
 * Take a vector of strings and concatenate them into one string with
 *   newlines between them.
 */
zprint.config.vec_str_to_str = (function zprint$config$vec_str_to_str(vec_str){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n",vec_str));
});
zprint.config.help_str = zprint.config.vec_str_to_str.call(null,cljs.core.PersistentVector.fromArray([zprint.config.about.call(null),""," The basic call uses defaults, prints to stdout","","   (zprint x)",""," All zprint functions also allow the following arguments:","","   (zprint x <width>)","   (zprint x <width> <options>)","   (zprint x <options>)",""," Format a function to stdout (accepts arguments as above)","","   (zprint-fn <fn-name>)",""," Output to a string instead of stdout:","","   (zprint-str x)","   (zprint-fn-str <fn-name>)",""," Colorize output for an ANSI terminal:","","   (czprint x)","   (czprint-fn <fn-name>)","   (czprint-str x)","   (czprint-fn-str <fn-name>)",""," The first time you call a zprint printing function, it configures"," itself from $HOME/.zprintrc, as well as environment variables and"," system properties.",""," Explain current configuration, shows source of non-default values:","","   (zprint nil :explain)",""," Change current configuration from running code:","","   (set-options! <options>)",""," Format a complete file (recognizing ;!zprint directives):","","   (zprint-file infile file-name outfile <options>)",""," Format a string containing multiple \"top level\" forms"," (recognizing ;!zprint directives):","","   (zprint-file-str file-str zprint-specifier <options> <doc-str>)",""," Output information to include when submitting an issue:","","   (zprint nil :support)",""], true));

//# sourceMappingURL=config.js.map?rel=1543701286324
