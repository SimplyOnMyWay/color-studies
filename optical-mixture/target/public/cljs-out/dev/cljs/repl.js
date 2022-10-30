// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20509){
var map__20510 = p__20509;
var map__20510__$1 = (((((!((map__20510 == null))))?(((((map__20510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20510):map__20510);
var m = map__20510__$1;
var n = cljs.core.get.call(null,map__20510__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__20510__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__20512_20544 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20513_20545 = null;
var count__20514_20546 = (0);
var i__20515_20547 = (0);
while(true){
if((i__20515_20547 < count__20514_20546)){
var f_20548 = cljs.core._nth.call(null,chunk__20513_20545,i__20515_20547);
cljs.core.println.call(null,"  ",f_20548);


var G__20549 = seq__20512_20544;
var G__20550 = chunk__20513_20545;
var G__20551 = count__20514_20546;
var G__20552 = (i__20515_20547 + (1));
seq__20512_20544 = G__20549;
chunk__20513_20545 = G__20550;
count__20514_20546 = G__20551;
i__20515_20547 = G__20552;
continue;
} else {
var temp__5720__auto___20553 = cljs.core.seq.call(null,seq__20512_20544);
if(temp__5720__auto___20553){
var seq__20512_20554__$1 = temp__5720__auto___20553;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20512_20554__$1)){
var c__4556__auto___20555 = cljs.core.chunk_first.call(null,seq__20512_20554__$1);
var G__20556 = cljs.core.chunk_rest.call(null,seq__20512_20554__$1);
var G__20557 = c__4556__auto___20555;
var G__20558 = cljs.core.count.call(null,c__4556__auto___20555);
var G__20559 = (0);
seq__20512_20544 = G__20556;
chunk__20513_20545 = G__20557;
count__20514_20546 = G__20558;
i__20515_20547 = G__20559;
continue;
} else {
var f_20560 = cljs.core.first.call(null,seq__20512_20554__$1);
cljs.core.println.call(null,"  ",f_20560);


var G__20561 = cljs.core.next.call(null,seq__20512_20554__$1);
var G__20562 = null;
var G__20563 = (0);
var G__20564 = (0);
seq__20512_20544 = G__20561;
chunk__20513_20545 = G__20562;
count__20514_20546 = G__20563;
i__20515_20547 = G__20564;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20565 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_20565);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_20565)))?cljs.core.second.call(null,arglists_20565):arglists_20565));
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
var seq__20516_20566 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20517_20567 = null;
var count__20518_20568 = (0);
var i__20519_20569 = (0);
while(true){
if((i__20519_20569 < count__20518_20568)){
var vec__20530_20570 = cljs.core._nth.call(null,chunk__20517_20567,i__20519_20569);
var name_20571 = cljs.core.nth.call(null,vec__20530_20570,(0),null);
var map__20533_20572 = cljs.core.nth.call(null,vec__20530_20570,(1),null);
var map__20533_20573__$1 = (((((!((map__20533_20572 == null))))?(((((map__20533_20572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20533_20572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20533_20572):map__20533_20572);
var doc_20574 = cljs.core.get.call(null,map__20533_20573__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20575 = cljs.core.get.call(null,map__20533_20573__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20571);

cljs.core.println.call(null," ",arglists_20575);

if(cljs.core.truth_(doc_20574)){
cljs.core.println.call(null," ",doc_20574);
} else {
}


var G__20576 = seq__20516_20566;
var G__20577 = chunk__20517_20567;
var G__20578 = count__20518_20568;
var G__20579 = (i__20519_20569 + (1));
seq__20516_20566 = G__20576;
chunk__20517_20567 = G__20577;
count__20518_20568 = G__20578;
i__20519_20569 = G__20579;
continue;
} else {
var temp__5720__auto___20580 = cljs.core.seq.call(null,seq__20516_20566);
if(temp__5720__auto___20580){
var seq__20516_20581__$1 = temp__5720__auto___20580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20516_20581__$1)){
var c__4556__auto___20582 = cljs.core.chunk_first.call(null,seq__20516_20581__$1);
var G__20583 = cljs.core.chunk_rest.call(null,seq__20516_20581__$1);
var G__20584 = c__4556__auto___20582;
var G__20585 = cljs.core.count.call(null,c__4556__auto___20582);
var G__20586 = (0);
seq__20516_20566 = G__20583;
chunk__20517_20567 = G__20584;
count__20518_20568 = G__20585;
i__20519_20569 = G__20586;
continue;
} else {
var vec__20535_20587 = cljs.core.first.call(null,seq__20516_20581__$1);
var name_20588 = cljs.core.nth.call(null,vec__20535_20587,(0),null);
var map__20538_20589 = cljs.core.nth.call(null,vec__20535_20587,(1),null);
var map__20538_20590__$1 = (((((!((map__20538_20589 == null))))?(((((map__20538_20589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20538_20589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20538_20589):map__20538_20589);
var doc_20591 = cljs.core.get.call(null,map__20538_20590__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20592 = cljs.core.get.call(null,map__20538_20590__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20588);

cljs.core.println.call(null," ",arglists_20592);

if(cljs.core.truth_(doc_20591)){
cljs.core.println.call(null," ",doc_20591);
} else {
}


var G__20593 = cljs.core.next.call(null,seq__20516_20581__$1);
var G__20594 = null;
var G__20595 = (0);
var G__20596 = (0);
seq__20516_20566 = G__20593;
chunk__20517_20567 = G__20594;
count__20518_20568 = G__20595;
i__20519_20569 = G__20596;
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

var seq__20540 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20541 = null;
var count__20542 = (0);
var i__20543 = (0);
while(true){
if((i__20543 < count__20542)){
var role = cljs.core._nth.call(null,chunk__20541,i__20543);
var temp__5720__auto___20597__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___20597__$1)){
var spec_20598 = temp__5720__auto___20597__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20598));
} else {
}


var G__20599 = seq__20540;
var G__20600 = chunk__20541;
var G__20601 = count__20542;
var G__20602 = (i__20543 + (1));
seq__20540 = G__20599;
chunk__20541 = G__20600;
count__20542 = G__20601;
i__20543 = G__20602;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__20540);
if(temp__5720__auto____$1){
var seq__20540__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20540__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__20540__$1);
var G__20603 = cljs.core.chunk_rest.call(null,seq__20540__$1);
var G__20604 = c__4556__auto__;
var G__20605 = cljs.core.count.call(null,c__4556__auto__);
var G__20606 = (0);
seq__20540 = G__20603;
chunk__20541 = G__20604;
count__20542 = G__20605;
i__20543 = G__20606;
continue;
} else {
var role = cljs.core.first.call(null,seq__20540__$1);
var temp__5720__auto___20607__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___20607__$2)){
var spec_20608 = temp__5720__auto___20607__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20608));
} else {
}


var G__20609 = cljs.core.next.call(null,seq__20540__$1);
var G__20610 = null;
var G__20611 = (0);
var G__20612 = (0);
seq__20540 = G__20609;
chunk__20541 = G__20610;
count__20542 = G__20611;
i__20543 = G__20612;
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
var G__20613 = cljs.core.conj.call(null,via,t);
var G__20614 = cljs.core.ex_cause.call(null,t);
via = G__20613;
t = G__20614;
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
var map__20617 = datafied_throwable;
var map__20617__$1 = (((((!((map__20617 == null))))?(((((map__20617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20617):map__20617);
var via = cljs.core.get.call(null,map__20617__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__20617__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__20617__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20618 = cljs.core.last.call(null,via);
var map__20618__$1 = (((((!((map__20618 == null))))?(((((map__20618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20618):map__20618);
var type = cljs.core.get.call(null,map__20618__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__20618__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__20618__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20619 = data;
var map__20619__$1 = (((((!((map__20619 == null))))?(((((map__20619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20619):map__20619);
var problems = cljs.core.get.call(null,map__20619__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__20619__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__20619__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20620 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__20620__$1 = (((((!((map__20620 == null))))?(((((map__20620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20620):map__20620);
var top_data = map__20620__$1;
var source = cljs.core.get.call(null,map__20620__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__20625 = phase;
var G__20625__$1 = (((G__20625 instanceof cljs.core.Keyword))?G__20625.fqn:null);
switch (G__20625__$1) {
case "read-source":
var map__20626 = data;
var map__20626__$1 = (((((!((map__20626 == null))))?(((((map__20626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20626):map__20626);
var line = cljs.core.get.call(null,map__20626__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__20626__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20628 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__20628__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__20628,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20628);
var G__20628__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__20628__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20628__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__20628__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20628__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20629 = top_data;
var G__20629__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__20629,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20629);
var G__20629__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__20629__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20629__$1);
var G__20629__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__20629__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20629__$2);
var G__20629__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__20629__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20629__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__20629__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20629__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20630 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__20630,(0),null);
var method = cljs.core.nth.call(null,vec__20630,(1),null);
var file = cljs.core.nth.call(null,vec__20630,(2),null);
var line = cljs.core.nth.call(null,vec__20630,(3),null);
var G__20633 = top_data;
var G__20633__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__20633,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20633);
var G__20633__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__20633__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20633__$1);
var G__20633__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__20633__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20633__$2);
var G__20633__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__20633__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20633__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__20633__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20633__$4;
}

break;
case "execution":
var vec__20634 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__20634,(0),null);
var method = cljs.core.nth.call(null,vec__20634,(1),null);
var file = cljs.core.nth.call(null,vec__20634,(2),null);
var line = cljs.core.nth.call(null,vec__20634,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__20616_SHARP_){
var or__4126__auto__ = (p1__20616_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__20616_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__20637 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20637__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__20637,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20637);
var G__20637__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__20637__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20637__$1);
var G__20637__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__20637__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20637__$2);
var G__20637__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__20637__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20637__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__20637__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20637__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20625__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20641){
var map__20642 = p__20641;
var map__20642__$1 = (((((!((map__20642 == null))))?(((((map__20642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20642.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20642):map__20642);
var triage_data = map__20642__$1;
var phase = cljs.core.get.call(null,map__20642__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__20642__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__20642__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__20642__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__20642__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__20642__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__20642__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__20642__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__20644 = phase;
var G__20644__$1 = (((G__20644 instanceof cljs.core.Keyword))?G__20644.fqn:null);
switch (G__20644__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20645_20654 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20646_20655 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20647_20656 = true;
var _STAR_print_fn_STAR__temp_val__20648_20657 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20647_20656);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20648_20657);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__20639_SHARP_){
return cljs.core.dissoc.call(null,p1__20639_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20646_20655);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20645_20654);
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
var _STAR_print_newline_STAR__orig_val__20649_20658 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20650_20659 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20651_20660 = true;
var _STAR_print_fn_STAR__temp_val__20652_20661 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20651_20660);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20652_20661);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__20640_SHARP_){
return cljs.core.dissoc.call(null,p1__20640_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20650_20659);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20649_20658);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20644__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
