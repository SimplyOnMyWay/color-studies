// Compiled by ClojureScript 1.10.773 {}
goog.provide('simplyonmyway.dynamic');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('simplyonmyway.randomutils');
simplyonmyway.dynamic.w = (function simplyonmyway$dynamic$w(var_args){
var G__27162 = arguments.length;
switch (G__27162) {
case 1:
return simplyonmyway.dynamic.w.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return simplyonmyway.dynamic.w.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(simplyonmyway.dynamic.w.cljs$core$IFn$_invoke$arity$1 = (function (val){
return (quil.core.width.call(null) * val);
}));

(simplyonmyway.dynamic.w.cljs$core$IFn$_invoke$arity$0 = (function (){
return (simplyonmyway.dynamic.w.call(null,1.0));
}));

(simplyonmyway.dynamic.w.cljs$lang$maxFixedArity = 1);

simplyonmyway.dynamic.h = (function simplyonmyway$dynamic$h(var_args){
var G__27165 = arguments.length;
switch (G__27165) {
case 1:
return simplyonmyway.dynamic.h.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return simplyonmyway.dynamic.h.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(simplyonmyway.dynamic.h.cljs$core$IFn$_invoke$arity$1 = (function (val){
return (quil.core.height.call(null) * val);
}));

(simplyonmyway.dynamic.h.cljs$core$IFn$_invoke$arity$0 = (function (){
return (simplyonmyway.dynamic.h.call(null,1.0));
}));

(simplyonmyway.dynamic.h.cljs$lang$maxFixedArity = 1);

simplyonmyway.dynamic.hw = (function simplyonmyway$dynamic$hw(p){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simplyonmyway.dynamic.w.call(null,p.call(null,(0))),simplyonmyway.dynamic.h.call(null,p.call(null,(1)))], null);
});
simplyonmyway.dynamic.R = (new simplyonmyway.randomutils.random());
simplyonmyway.dynamic.gauss = (function simplyonmyway$dynamic$gauss(var_args){
var G__27168 = arguments.length;
switch (G__27168) {
case 2:
return simplyonmyway.dynamic.gauss.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 0:
return simplyonmyway.dynamic.gauss.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(simplyonmyway.dynamic.gauss.cljs$core$IFn$_invoke$arity$2 = (function (mean,sd){
return simplyonmyway.dynamic.R.random_gaussian(mean,sd);
}));

(simplyonmyway.dynamic.gauss.cljs$core$IFn$_invoke$arity$0 = (function (){
return simplyonmyway.dynamic.gauss.call(null,(0),(1));
}));

(simplyonmyway.dynamic.gauss.cljs$lang$maxFixedArity = 2);

simplyonmyway.dynamic.random_int = (function simplyonmyway$dynamic$random_int(var_args){
var G__27171 = arguments.length;
switch (G__27171) {
case 2:
return simplyonmyway.dynamic.random_int.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return simplyonmyway.dynamic.random_int.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(simplyonmyway.dynamic.random_int.cljs$core$IFn$_invoke$arity$2 = (function (l,u){
return simplyonmyway.dynamic.R.random_int(l,u);
}));

(simplyonmyway.dynamic.random_int.cljs$core$IFn$_invoke$arity$1 = (function (u){
return simplyonmyway.dynamic.R.random_int((0),u);
}));

(simplyonmyway.dynamic.random_int.cljs$lang$maxFixedArity = 2);

simplyonmyway.dynamic.pareto = (function simplyonmyway$dynamic$pareto(l,u,shape){
return simplyonmyway.dynamic.R.random_pareto_bounded(l,u,shape);
});
simplyonmyway.dynamic.phi = (((1) + Math.sqrt((5))) / (2));
simplyonmyway.dynamic.PI = Math.PI;
simplyonmyway.dynamic.col_vec_mess = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(79),(0),0.1], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(354),(48),(0),0.1], null)], null);
simplyonmyway.dynamic.setup = (function simplyonmyway$dynamic$setup(){
quil.core.no_stroke.call(null);

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031),(360),(100),(100),1.0);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dim","dim",-497244536),(7)], null);
});
simplyonmyway.dynamic.update_state = (function simplyonmyway$dynamic$update_state(state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dim","dim",-497244536),(new cljs.core.Keyword(null,"dim","dim",-497244536).cljs$core$IFn$_invoke$arity$1(state) - 0.1)], null);
});
simplyonmyway.dynamic.draw = (function simplyonmyway$dynamic$draw(state){
quil.core.no_loop.call(null);

quil.core.no_fill.call(null);

simplyonmyway.dynamic.bg_col = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(100),1.0], null);

cljs.core.apply.call(null,quil.core.background,simplyonmyway.dynamic.bg_col);

simplyonmyway.dynamic.col_pal_1 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(188),(45),(44),1.0], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(26),(4),(94),1.0], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(26),(30),(44),1.0], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(26),(38),(80),1.0], null)], null);

simplyonmyway.dynamic.col_pal_2 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(91),(55),1.0], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(45),(40),(100),1.0], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(22),(92),(50),1.0], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(39),(65),(64),1.0], null)], null);

simplyonmyway.dynamic.col_pal_3 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(203),(48),(15),1.0], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(100),1.0], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(165),(3),(20),1.0], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(165),(3),(70),1.0], null)], null);


var col_vec = simplyonmyway.dynamic.col_pal_3;
var rr = (simplyonmyway.dynamic.w.call(null) / simplyonmyway.dynamic.h.call(null));
var bx = 0.1;
var by = (rr * bx);
var g_width = ((1.0 - ((2) * bx)) / (2));
var g_height = (1.0 - ((2) * by));
var g_height__$1 = g_height;
var inner_rect_width = (g_width * 0.415);
var inner_rect_height = (g_height__$1 * 0.415);
var l_inner_rect_x = (bx + ((g_width / (2)) - (inner_rect_width / (2))));
var r_inner_rect_x = (l_inner_rect_x + g_width);
var inner_rect_y = (by + ((g_height__$1 / (2)) - (inner_rect_height / (2))));
var stripe_width = (g_width * 0.667);
var stripe_height = 0.05;
var stripe_x = (bx + (g_width * 0.667));
var top_stripe_y = ((by + g_height__$1) + (stripe_height / (2)));
var bot_stripe_y = (top_stripe_y + stripe_height);
var fill__16031__auto___27173 = col_vec.call(null,(0));
var previous_fill__16032__auto___27174 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___27173)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___27173);
} else {
quil.core.fill.call(null,fill__16031__auto___27173);

}

var return_val__16033__auto___27175 = quil.core.rect.call(null,simplyonmyway.dynamic.w.call(null,bx),simplyonmyway.dynamic.h.call(null,by),simplyonmyway.dynamic.w.call(null,g_width),simplyonmyway.dynamic.h.call(null,g_height__$1));
if((previous_fill__16032__auto___27174 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___27174);
}


var fill__16031__auto___27176 = col_vec.call(null,(1));
var previous_fill__16032__auto___27177 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___27176)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___27176);
} else {
quil.core.fill.call(null,fill__16031__auto___27176);

}

var return_val__16033__auto___27178 = quil.core.rect.call(null,simplyonmyway.dynamic.w.call(null,0.5),simplyonmyway.dynamic.h.call(null,by),simplyonmyway.dynamic.w.call(null,g_width),simplyonmyway.dynamic.h.call(null,g_height__$1));
if((previous_fill__16032__auto___27177 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___27177);
}


var fill__16031__auto___27179 = col_vec.call(null,(2));
var previous_fill__16032__auto___27180 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___27179)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___27179);
} else {
quil.core.fill.call(null,fill__16031__auto___27179);

}

var return_val__16033__auto___27181 = quil.core.rect.call(null,simplyonmyway.dynamic.w.call(null,l_inner_rect_x),simplyonmyway.dynamic.h.call(null,inner_rect_y),simplyonmyway.dynamic.w.call(null,inner_rect_width),simplyonmyway.dynamic.h.call(null,inner_rect_height));
if((previous_fill__16032__auto___27180 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___27180);
}


var fill__16031__auto___27182 = col_vec.call(null,(3));
var previous_fill__16032__auto___27183 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___27182)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___27182);
} else {
quil.core.fill.call(null,fill__16031__auto___27182);

}

var return_val__16033__auto___27184 = quil.core.rect.call(null,simplyonmyway.dynamic.w.call(null,r_inner_rect_x),simplyonmyway.dynamic.h.call(null,inner_rect_y),simplyonmyway.dynamic.w.call(null,inner_rect_width),simplyonmyway.dynamic.h.call(null,inner_rect_height));
if((previous_fill__16032__auto___27183 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___27183);
}


var fill__16031__auto___27185 = col_vec.call(null,(2));
var previous_fill__16032__auto___27186 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___27185)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___27185);
} else {
quil.core.fill.call(null,fill__16031__auto___27185);

}

var return_val__16033__auto___27187 = quil.core.rect.call(null,simplyonmyway.dynamic.w.call(null,stripe_x),simplyonmyway.dynamic.h.call(null,top_stripe_y),simplyonmyway.dynamic.w.call(null,stripe_width),simplyonmyway.dynamic.h.call(null,stripe_height));
if((previous_fill__16032__auto___27186 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___27186);
}


var fill__16031__auto__ = col_vec.call(null,(3));
var previous_fill__16032__auto__ = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto__)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto__);
} else {
quil.core.fill.call(null,fill__16031__auto__);

}

var return_val__16033__auto__ = quil.core.rect.call(null,simplyonmyway.dynamic.w.call(null,stripe_x),simplyonmyway.dynamic.h.call(null,bot_stripe_y),simplyonmyway.dynamic.w.call(null,stripe_width),simplyonmyway.dynamic.h.call(null,stripe_height));
if((previous_fill__16032__auto__ == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto__);
}

return return_val__16033__auto__;
});

//# sourceMappingURL=dynamic.js.map
