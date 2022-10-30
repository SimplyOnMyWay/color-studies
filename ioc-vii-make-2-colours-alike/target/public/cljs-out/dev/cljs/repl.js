// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23804){
var map__23805 = p__23804;
var map__23805__$1 = (((((!((map__23805 == null))))?(((((map__23805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23805):map__23805);
var m = map__23805__$1;
var n = cljs.core.get.call(null,map__23805__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__23805__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23807_23839 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23808_23840 = null;
var count__23809_23841 = (0);
var i__23810_23842 = (0);
while(true){
if((i__23810_23842 < count__23809_23841)){
var f_23843 = cljs.core._nth.call(null,chunk__23808_23840,i__23810_23842);
cljs.core.println.call(null,"  ",f_23843);


var G__23844 = seq__23807_23839;
var G__23845 = chunk__23808_23840;
var G__23846 = count__23809_23841;
var G__23847 = (i__23810_23842 + (1));
seq__23807_23839 = G__23844;
chunk__23808_23840 = G__23845;
count__23809_23841 = G__23846;
i__23810_23842 = G__23847;
continue;
} else {
var temp__5720__auto___23848 = cljs.core.seq.call(null,seq__23807_23839);
if(temp__5720__auto___23848){
var seq__23807_23849__$1 = temp__5720__auto___23848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23807_23849__$1)){
var c__4556__auto___23850 = cljs.core.chunk_first.call(null,seq__23807_23849__$1);
var G__23851 = cljs.core.chunk_rest.call(null,seq__23807_23849__$1);
var G__23852 = c__4556__auto___23850;
var G__23853 = cljs.core.count.call(null,c__4556__auto___23850);
var G__23854 = (0);
seq__23807_23839 = G__23851;
chunk__23808_23840 = G__23852;
count__23809_23841 = G__23853;
i__23810_23842 = G__23854;
continue;
} else {
var f_23855 = cljs.core.first.call(null,seq__23807_23849__$1);
cljs.core.println.call(null,"  ",f_23855);


var G__23856 = cljs.core.next.call(null,seq__23807_23849__$1);
var G__23857 = null;
var G__23858 = (0);
var G__23859 = (0);
seq__23807_23839 = G__23856;
chunk__23808_23840 = G__23857;
count__23809_23841 = G__23858;
i__23810_23842 = G__23859;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23860 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23860);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23860)))?cljs.core.second.call(null,arglists_23860):arglists_23860));
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23811_23861 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23812_23862 = null;
var count__23813_23863 = (0);
var i__23814_23864 = (0);
while(true){
if((i__23814_23864 < count__23813_23863)){
var vec__23825_23865 = cljs.core._nth.call(null,chunk__23812_23862,i__23814_23864);
var name_23866 = cljs.core.nth.call(null,vec__23825_23865,(0),null);
var map__23828_23867 = cljs.core.nth.call(null,vec__23825_23865,(1),null);
var map__23828_23868__$1 = (((((!((map__23828_23867 == null))))?(((((map__23828_23867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23828_23867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23828_23867):map__23828_23867);
var doc_23869 = cljs.core.get.call(null,map__23828_23868__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23870 = cljs.core.get.call(null,map__23828_23868__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23866);

cljs.core.println.call(null," ",arglists_23870);

if(cljs.core.truth_(doc_23869)){
cljs.core.println.call(null," ",doc_23869);
} else {
}


var G__23871 = seq__23811_23861;
var G__23872 = chunk__23812_23862;
var G__23873 = count__23813_23863;
var G__23874 = (i__23814_23864 + (1));
seq__23811_23861 = G__23871;
chunk__23812_23862 = G__23872;
count__23813_23863 = G__23873;
i__23814_23864 = G__23874;
continue;
} else {
var temp__5720__auto___23875 = cljs.core.seq.call(null,seq__23811_23861);
if(temp__5720__auto___23875){
var seq__23811_23876__$1 = temp__5720__auto___23875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23811_23876__$1)){
var c__4556__auto___23877 = cljs.core.chunk_first.call(null,seq__23811_23876__$1);
var G__23878 = cljs.core.chunk_rest.call(null,seq__23811_23876__$1);
var G__23879 = c__4556__auto___23877;
var G__23880 = cljs.core.count.call(null,c__4556__auto___23877);
var G__23881 = (0);
seq__23811_23861 = G__23878;
chunk__23812_23862 = G__23879;
count__23813_23863 = G__23880;
i__23814_23864 = G__23881;
continue;
} else {
var vec__23830_23882 = cljs.core.first.call(null,seq__23811_23876__$1);
var name_23883 = cljs.core.nth.call(null,vec__23830_23882,(0),null);
var map__23833_23884 = cljs.core.nth.call(null,vec__23830_23882,(1),null);
var map__23833_23885__$1 = (((((!((map__23833_23884 == null))))?(((((map__23833_23884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23833_23884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23833_23884):map__23833_23884);
var doc_23886 = cljs.core.get.call(null,map__23833_23885__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23887 = cljs.core.get.call(null,map__23833_23885__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23883);

cljs.core.println.call(null," ",arglists_23887);

if(cljs.core.truth_(doc_23886)){
cljs.core.println.call(null," ",doc_23886);
} else {
}


var G__23888 = cljs.core.next.call(null,seq__23811_23876__$1);
var G__23889 = null;
var G__23890 = (0);
var G__23891 = (0);
seq__23811_23861 = G__23888;
chunk__23812_23862 = G__23889;
count__23813_23863 = G__23890;
i__23814_23864 = G__23891;
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
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__23835 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__23836 = null;
var count__23837 = (0);
var i__23838 = (0);
while(true){
if((i__23838 < count__23837)){
var role = cljs.core._nth.call(null,chunk__23836,i__23838);
var temp__5720__auto___23892__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___23892__$1)){
var spec_23893 = temp__5720__auto___23892__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23893));
} else {
}


var G__23894 = seq__23835;
var G__23895 = chunk__23836;
var G__23896 = count__23837;
var G__23897 = (i__23838 + (1));
seq__23835 = G__23894;
chunk__23836 = G__23895;
count__23837 = G__23896;
i__23838 = G__23897;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__23835);
if(temp__5720__auto____$1){
var seq__23835__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23835__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__23835__$1);
var G__23898 = cljs.core.chunk_rest.call(null,seq__23835__$1);
var G__23899 = c__4556__auto__;
var G__23900 = cljs.core.count.call(null,c__4556__auto__);
var G__23901 = (0);
seq__23835 = G__23898;
chunk__23836 = G__23899;
count__23837 = G__23900;
i__23838 = G__23901;
continue;
} else {
var role = cljs.core.first.call(null,seq__23835__$1);
var temp__5720__auto___23902__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___23902__$2)){
var spec_23903 = temp__5720__auto___23902__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_23903));
} else {
}


var G__23904 = cljs.core.next.call(null,seq__23835__$1);
var G__23905 = null;
var G__23906 = (0);
var G__23907 = (0);
seq__23835 = G__23904;
chunk__23836 = G__23905;
count__23837 = G__23906;
i__23838 = G__23907;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__23908 = cljs.core.conj.call(null,via,t);
var G__23909 = cljs.core.ex_cause.call(null,t);
via = G__23908;
t = G__23909;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__23912 = datafied_throwable;
var map__23912__$1 = (((((!((map__23912 == null))))?(((((map__23912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23912):map__23912);
var via = cljs.core.get.call(null,map__23912__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__23912__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__23912__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__23913 = cljs.core.last.call(null,via);
var map__23913__$1 = (((((!((map__23913 == null))))?(((((map__23913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23913):map__23913);
var type = cljs.core.get.call(null,map__23913__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__23913__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__23913__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__23914 = data;
var map__23914__$1 = (((((!((map__23914 == null))))?(((((map__23914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23914):map__23914);
var problems = cljs.core.get.call(null,map__23914__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__23914__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__23914__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__23915 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__23915__$1 = (((((!((map__23915 == null))))?(((((map__23915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23915):map__23915);
var top_data = map__23915__$1;
var source = cljs.core.get.call(null,map__23915__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__23920 = phase;
var G__23920__$1 = (((G__23920 instanceof cljs.core.Keyword))?G__23920.fqn:null);
switch (G__23920__$1) {
case "read-source":
var map__23921 = data;
var map__23921__$1 = (((((!((map__23921 == null))))?(((((map__23921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23921):map__23921);
var line = cljs.core.get.call(null,map__23921__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__23921__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__23923 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__23923__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__23923,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__23923);
var G__23923__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__23923__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__23923__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__23923__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__23923__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__23924 = top_data;
var G__23924__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__23924,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__23924);
var G__23924__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__23924__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__23924__$1);
var G__23924__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__23924__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__23924__$2);
var G__23924__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__23924__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__23924__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__23924__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__23924__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__23925 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__23925,(0),null);
var method = cljs.core.nth.call(null,vec__23925,(1),null);
var file = cljs.core.nth.call(null,vec__23925,(2),null);
var line = cljs.core.nth.call(null,vec__23925,(3),null);
var G__23928 = top_data;
var G__23928__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__23928,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__23928);
var G__23928__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__23928__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__23928__$1);
var G__23928__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__23928__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__23928__$2);
var G__23928__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__23928__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__23928__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__23928__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__23928__$4;
}

break;
case "execution":
var vec__23929 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__23929,(0),null);
var method = cljs.core.nth.call(null,vec__23929,(1),null);
var file = cljs.core.nth.call(null,vec__23929,(2),null);
var line = cljs.core.nth.call(null,vec__23929,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__23911_SHARP_){
var or__4126__auto__ = (p1__23911_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__23911_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__23932 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__23932__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__23932,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__23932);
var G__23932__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__23932__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__23932__$1);
var G__23932__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__23932__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__23932__$2);
var G__23932__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__23932__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__23932__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__23932__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__23932__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23920__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__23936){
var map__23937 = p__23936;
var map__23937__$1 = (((((!((map__23937 == null))))?(((((map__23937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23937):map__23937);
var triage_data = map__23937__$1;
var phase = cljs.core.get.call(null,map__23937__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__23937__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__23937__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__23937__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__23937__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__23937__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__23937__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__23937__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__23939 = phase;
var G__23939__$1 = (((G__23939 instanceof cljs.core.Keyword))?G__23939.fqn:null);
switch (G__23939__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23940_23949 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23941_23950 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23942_23951 = true;
var _STAR_print_fn_STAR__temp_val__23943_23952 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23942_23951);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23943_23952);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__23934_SHARP_){
return cljs.core.dissoc.call(null,p1__23934_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23941_23950);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23940_23949);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23944_23953 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23945_23954 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23946_23955 = true;
var _STAR_print_fn_STAR__temp_val__23947_23956 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23946_23955);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23947_23956);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__23935_SHARP_){
return cljs.core.dissoc.call(null,p1__23935_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23945_23954);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23944_23953);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23939__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
