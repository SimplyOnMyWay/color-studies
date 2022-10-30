// Compiled by ClojureScript 1.10.773 {}
goog.provide('simplyonmyway.om');
goog.require('cljs.core');
goog.require('simplyonmyway.randomutils');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('simplyonmyway.dynamic');
simplyonmyway.om.yheight = (1000);
simplyonmyway.om.xwidth = (simplyonmyway.om.yheight * 1.5);
simplyonmyway.om.run_sketch = (function simplyonmyway$om$run_sketch(){
simplyonmyway.om.om = (function simplyonmyway$om$run_sketch_$_om(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"om",new cljs.core.Keyword(null,"settings","settings",1556144875),(function (){
return quil.core.smooth.call(null,(4));
}),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,simplyonmyway.dynamic.update_state))?(function() { 
var G__27190__delegate = function (args){
return cljs.core.apply.call(null,simplyonmyway.dynamic.update_state,args);
};
var G__27190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27191__i = 0, G__27191__a = new Array(arguments.length -  0);
while (G__27191__i < G__27191__a.length) {G__27191__a[G__27191__i] = arguments[G__27191__i + 0]; ++G__27191__i;}
  args = new cljs.core.IndexedSeq(G__27191__a,0,null);
} 
return G__27190__delegate.call(this,args);};
G__27190.cljs$lang$maxFixedArity = 0;
G__27190.cljs$lang$applyTo = (function (arglist__27192){
var args = cljs.core.seq(arglist__27192);
return G__27190__delegate(args);
});
G__27190.cljs$core$IFn$_invoke$arity$variadic = G__27190__delegate;
return G__27190;
})()
:simplyonmyway.dynamic.update_state),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"p2d","p2d",-2106175755),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simplyonmyway.om.xwidth,simplyonmyway.om.yheight], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,simplyonmyway.dynamic.setup))?(function() { 
var G__27193__delegate = function (args){
return cljs.core.apply.call(null,simplyonmyway.dynamic.setup,args);
};
var G__27193 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27194__i = 0, G__27194__a = new Array(arguments.length -  0);
while (G__27194__i < G__27194__a.length) {G__27194__a[G__27194__i] = arguments[G__27194__i + 0]; ++G__27194__i;}
  args = new cljs.core.IndexedSeq(G__27194__a,0,null);
} 
return G__27193__delegate.call(this,args);};
G__27193.cljs$lang$maxFixedArity = 0;
G__27193.cljs$lang$applyTo = (function (arglist__27195){
var args = cljs.core.seq(arglist__27195);
return G__27193__delegate(args);
});
G__27193.cljs$core$IFn$_invoke$arity$variadic = G__27193__delegate;
return G__27193;
})()
:simplyonmyway.dynamic.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,simplyonmyway.dynamic.draw))?(function() { 
var G__27196__delegate = function (args){
return cljs.core.apply.call(null,simplyonmyway.dynamic.draw,args);
};
var G__27196 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27197__i = 0, G__27197__a = new Array(arguments.length -  0);
while (G__27197__i < G__27197__a.length) {G__27197__a[G__27197__i] = arguments[G__27197__i + 0]; ++G__27197__i;}
  args = new cljs.core.IndexedSeq(G__27197__a,0,null);
} 
return G__27196__delegate.call(this,args);};
G__27196.cljs$lang$maxFixedArity = 0;
G__27196.cljs$lang$applyTo = (function (arglist__27198){
var args = cljs.core.seq(arglist__27198);
return G__27196__delegate(args);
});
G__27196.cljs$core$IFn$_invoke$arity$variadic = G__27196__delegate;
return G__27196;
})()
:simplyonmyway.dynamic.draw));
});
goog.exportSymbol('simplyonmyway.om.om', simplyonmyway.om.om);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14865__14866__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__14865__14866__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),simplyonmyway.om.om,new cljs.core.Keyword(null,"host-id","host-id",742376279),"om"], null));
}
});
goog.exportSymbol('simplyonmyway.om.run_sketch', simplyonmyway.om.run_sketch);

//# sourceMappingURL=om.js.map
