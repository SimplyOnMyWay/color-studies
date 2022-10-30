// Compiled by ClojureScript 1.10.773 {}
goog.provide('simplyonmyway.om');
goog.require('cljs.core');
goog.require('simplyonmyway.randomutils');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('simplyonmyway.dynamic');
simplyonmyway.om.yheight = (1000);
simplyonmyway.om.xwidth = (simplyonmyway.om.yheight / 2.2);
simplyonmyway.om.run_sketch = (function simplyonmyway$om$run_sketch(){
simplyonmyway.om.om = (function simplyonmyway$om$run_sketch_$_om(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"om",new cljs.core.Keyword(null,"settings","settings",1556144875),(function (){
return quil.core.smooth.call(null,(4));
}),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,simplyonmyway.dynamic.update_state))?(function() { 
var G__102777__delegate = function (args){
return cljs.core.apply.call(null,simplyonmyway.dynamic.update_state,args);
};
var G__102777 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__102778__i = 0, G__102778__a = new Array(arguments.length -  0);
while (G__102778__i < G__102778__a.length) {G__102778__a[G__102778__i] = arguments[G__102778__i + 0]; ++G__102778__i;}
  args = new cljs.core.IndexedSeq(G__102778__a,0,null);
} 
return G__102777__delegate.call(this,args);};
G__102777.cljs$lang$maxFixedArity = 0;
G__102777.cljs$lang$applyTo = (function (arglist__102779){
var args = cljs.core.seq(arglist__102779);
return G__102777__delegate(args);
});
G__102777.cljs$core$IFn$_invoke$arity$variadic = G__102777__delegate;
return G__102777;
})()
:simplyonmyway.dynamic.update_state),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"p2d","p2d",-2106175755),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simplyonmyway.om.xwidth,simplyonmyway.om.yheight], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,simplyonmyway.dynamic.setup))?(function() { 
var G__102780__delegate = function (args){
return cljs.core.apply.call(null,simplyonmyway.dynamic.setup,args);
};
var G__102780 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__102781__i = 0, G__102781__a = new Array(arguments.length -  0);
while (G__102781__i < G__102781__a.length) {G__102781__a[G__102781__i] = arguments[G__102781__i + 0]; ++G__102781__i;}
  args = new cljs.core.IndexedSeq(G__102781__a,0,null);
} 
return G__102780__delegate.call(this,args);};
G__102780.cljs$lang$maxFixedArity = 0;
G__102780.cljs$lang$applyTo = (function (arglist__102782){
var args = cljs.core.seq(arglist__102782);
return G__102780__delegate(args);
});
G__102780.cljs$core$IFn$_invoke$arity$variadic = G__102780__delegate;
return G__102780;
})()
:simplyonmyway.dynamic.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,simplyonmyway.dynamic.draw))?(function() { 
var G__102783__delegate = function (args){
return cljs.core.apply.call(null,simplyonmyway.dynamic.draw,args);
};
var G__102783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__102784__i = 0, G__102784__a = new Array(arguments.length -  0);
while (G__102784__i < G__102784__a.length) {G__102784__a[G__102784__i] = arguments[G__102784__i + 0]; ++G__102784__i;}
  args = new cljs.core.IndexedSeq(G__102784__a,0,null);
} 
return G__102783__delegate.call(this,args);};
G__102783.cljs$lang$maxFixedArity = 0;
G__102783.cljs$lang$applyTo = (function (arglist__102785){
var args = cljs.core.seq(arglist__102785);
return G__102783__delegate(args);
});
G__102783.cljs$core$IFn$_invoke$arity$variadic = G__102783__delegate;
return G__102783;
})()
:simplyonmyway.dynamic.draw));
});
goog.exportSymbol('simplyonmyway.om.om', simplyonmyway.om.om);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__14913__14914__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__14913__14914__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),simplyonmyway.om.om,new cljs.core.Keyword(null,"host-id","host-id",742376279),"om"], null));
}
});
goog.exportSymbol('simplyonmyway.om.run_sketch', simplyonmyway.om.run_sketch);

//# sourceMappingURL=om.js.map
