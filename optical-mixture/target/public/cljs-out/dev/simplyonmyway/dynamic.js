// Compiled by ClojureScript 1.10.773 {}
goog.provide('simplyonmyway.dynamic');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('simplyonmyway.randomutils');
simplyonmyway.dynamic.w = (function simplyonmyway$dynamic$w(var_args){
var G__102510 = arguments.length;
switch (G__102510) {
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
var G__102513 = arguments.length;
switch (G__102513) {
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
var G__102516 = arguments.length;
switch (G__102516) {
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
var G__102519 = arguments.length;
switch (G__102519) {
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

simplyonmyway.dynamic.bg_col = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(48),(42),(27),1.0], null);

cljs.core.apply.call(null,quil.core.background,simplyonmyway.dynamic.bg_col);

simplyonmyway.dynamic.jja_col_vec = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(208),(65),(74),1.0], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(107),(60),(45),1.0], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(79),(83),(74),1.0], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(76),(94),1.0], null)], null);

simplyonmyway.dynamic.ja_col_vec = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(100),1.0], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(141),(32),(45),1.0], null),simplyonmyway.dynamic.bg_col,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(197),(84),(45),1.0], null)], null);

var rr = (simplyonmyway.dynamic.w.call(null) / simplyonmyway.dynamic.h.call(null));
var f = new cljs.core.Keyword(null,"dim","dim",-497244536).cljs$core$IFn$_invoke$arity$1(state);
var num_rows = (f * (24));
var num_cols = (f * (10));
var num_border_cols = (f * (1));
var num_border_rows = (f * (1));
var num_rows_adj = (num_rows + ((2) * num_border_rows));
var num_cols_adj = (num_cols + ((2) * num_border_cols));
var dx = ((1) / num_cols_adj);
var xs = ((num_border_cols * dx) + (dx / (2)));
var xe = ((1) - (num_border_cols * dx));
var dy = ((1) / num_rows_adj);
var ys = ((num_border_rows * dy) + (dy / (2)));
var ye = ((1) - (num_border_rows * dy));
var r1 = dx;
var r2 = (dx * ((1) - simplyonmyway.dynamic.phi));
var div_major_1 = (ys + ((ye - ys) / (3)));
var div_major_2 = (ys + ((2) * ((ye - ys) / (3))));
var div_minor = (2);
var seq__102521 = cljs.core.seq.call(null,cljs.core.range.call(null,xs,xe,dx));
var chunk__102526 = null;
var count__102527 = (0);
var i__102528 = (0);
while(true){
if((i__102528 < count__102527)){
var xx = cljs.core._nth.call(null,chunk__102526,i__102528);
var seq__102529_102533 = cljs.core.seq.call(null,cljs.core.range.call(null,ys,ye,dy));
var chunk__102530_102534 = null;
var count__102531_102535 = (0);
var i__102532_102536 = (0);
while(true){
if((i__102532_102536 < count__102531_102535)){
var yy_102537 = cljs.core._nth.call(null,chunk__102530_102534,i__102532_102536);
var x_102538 = (xx + simplyonmyway.dynamic.gauss.call(null,(0),0.0));
var y_102539 = (yy_102537 + simplyonmyway.dynamic.gauss.call(null,(0),0.005));
if((y_102539 < div_major_1)){
var fill__15303__auto___102540 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__15304__auto___102541 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102540)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102540);
} else {
quil.core.fill.call(null,fill__15303__auto___102540);

}

var return_val__15305__auto___102542 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102538),simplyonmyway.dynamic.h.call(null,y_102539),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__15304__auto___102541 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102541);
}


if((y_102539 < ((num_border_rows * dy) + (((f * (1)) * div_minor) / num_rows_adj)))){
var fill__15303__auto___102543 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__15304__auto___102544 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102543)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102543);
} else {
quil.core.fill.call(null,fill__15303__auto___102543);

}

var return_val__15305__auto___102545 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102538),simplyonmyway.dynamic.h.call(null,y_102539),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102544 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102544);
}

} else {
if((((y_102539 > ((num_border_rows * dy) + (((f * (1)) * div_minor) / num_rows_adj)))) && ((y_102539 < ((num_border_rows * dy) + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102546 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__15304__auto___102547 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102546)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102546);
} else {
quil.core.fill.call(null,fill__15303__auto___102546);

}

var return_val__15305__auto___102548 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102538),simplyonmyway.dynamic.h.call(null,y_102539),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102547 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102547);
}

} else {
if((((y_102539 > ((num_border_rows * dy) + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_102539 < ((num_border_rows * dy) + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102549 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__15304__auto___102550 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102549)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102549);
} else {
quil.core.fill.call(null,fill__15303__auto___102549);

}

var return_val__15305__auto___102551 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102538),simplyonmyway.dynamic.h.call(null,y_102539),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102550 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102550);
}

} else {
if((((y_102539 > ((num_border_rows * dy) + (((f * (3)) * div_minor) / num_rows_adj)))) && ((y_102539 < div_major_1)))){
var fill__15303__auto___102552 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__15304__auto___102553 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102552)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102552);
} else {
quil.core.fill.call(null,fill__15303__auto___102552);

}

var return_val__15305__auto___102554 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102538),simplyonmyway.dynamic.h.call(null,y_102539),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102553 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102553);
}

} else {
}
}
}
}
} else {
if((((y_102539 > div_major_1)) && ((y_102539 < div_major_2)))){
var fill__15303__auto___102555 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__15304__auto___102556 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102555)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102555);
} else {
quil.core.fill.call(null,fill__15303__auto___102555);

}

var return_val__15305__auto___102557 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102538),simplyonmyway.dynamic.h.call(null,y_102539),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__15304__auto___102556 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102556);
}


if((((y_102539 > div_major_1)) && ((y_102539 < (div_major_1 + (((f * (1)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102558 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__15304__auto___102559 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102558)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102558);
} else {
quil.core.fill.call(null,fill__15303__auto___102558);

}

var return_val__15305__auto___102560 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102538),simplyonmyway.dynamic.h.call(null,y_102539),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102559 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102559);
}

} else {
if((((y_102539 > (div_major_1 + (((f * (1)) * div_minor) / num_rows_adj)))) && ((y_102539 < (div_major_1 + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102561 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__15304__auto___102562 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102561)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102561);
} else {
quil.core.fill.call(null,fill__15303__auto___102561);

}

var return_val__15305__auto___102563 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102538),simplyonmyway.dynamic.h.call(null,y_102539),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102562 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102562);
}

} else {
if((((y_102539 > (div_major_1 + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_102539 < (div_major_1 + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102564 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__15304__auto___102565 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102564)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102564);
} else {
quil.core.fill.call(null,fill__15303__auto___102564);

}

var return_val__15305__auto___102566 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102538),simplyonmyway.dynamic.h.call(null,y_102539),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102565 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102565);
}

} else {
if((((y_102539 > (div_major_1 + (((f * (3)) * div_minor) / num_rows_adj)))) && ((y_102539 < div_major_2)))){
var fill__15303__auto___102567 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__15304__auto___102568 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102567)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102567);
} else {
quil.core.fill.call(null,fill__15303__auto___102567);

}

var return_val__15305__auto___102569 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102538),simplyonmyway.dynamic.h.call(null,y_102539),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102568 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102568);
}

} else {
}
}
}
}
} else {
if((y_102539 > div_major_2)){
var fill__15303__auto___102570 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__15304__auto___102571 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102570)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102570);
} else {
quil.core.fill.call(null,fill__15303__auto___102570);

}

var return_val__15305__auto___102572 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102538),simplyonmyway.dynamic.h.call(null,y_102539),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__15304__auto___102571 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102571);
}


if((y_102539 < (div_major_2 + ((f * div_minor) / num_rows_adj)))){
var fill__15303__auto___102573 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__15304__auto___102574 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102573)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102573);
} else {
quil.core.fill.call(null,fill__15303__auto___102573);

}

var return_val__15305__auto___102575 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102538),simplyonmyway.dynamic.h.call(null,y_102539),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102574 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102574);
}

} else {
if((((y_102539 > (div_major_2 + ((f * div_minor) / num_rows_adj)))) && ((y_102539 < (div_major_2 + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102576 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__15304__auto___102577 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102576)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102576);
} else {
quil.core.fill.call(null,fill__15303__auto___102576);

}

var return_val__15305__auto___102578 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102538),simplyonmyway.dynamic.h.call(null,y_102539),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102577 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102577);
}

} else {
if((((y_102539 > (div_major_2 + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_102539 < (div_major_2 + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102579 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__15304__auto___102580 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102579)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102579);
} else {
quil.core.fill.call(null,fill__15303__auto___102579);

}

var return_val__15305__auto___102581 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102538),simplyonmyway.dynamic.h.call(null,y_102539),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102580 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102580);
}

} else {
if(cljs.core.truth_((((y_102539 > (div_major_2 + (((f * (3)) * div_minor) / num_rows_adj))))?(((y_102539 < (div_major_2 + ((1) / ((f * (4)) * div_minor)))))?num_rows_adj:false):false))){
var fill__15303__auto___102582 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__15304__auto___102583 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102582)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102582);
} else {
quil.core.fill.call(null,fill__15303__auto___102582);

}

var return_val__15305__auto___102584 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102538),simplyonmyway.dynamic.h.call(null,y_102539),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102583 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102583);
}

} else {
}
}
}
}
} else {
}
}
}


var G__102585 = seq__102529_102533;
var G__102586 = chunk__102530_102534;
var G__102587 = count__102531_102535;
var G__102588 = (i__102532_102536 + (1));
seq__102529_102533 = G__102585;
chunk__102530_102534 = G__102586;
count__102531_102535 = G__102587;
i__102532_102536 = G__102588;
continue;
} else {
var temp__5720__auto___102589 = cljs.core.seq.call(null,seq__102529_102533);
if(temp__5720__auto___102589){
var seq__102529_102590__$1 = temp__5720__auto___102589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__102529_102590__$1)){
var c__4556__auto___102591 = cljs.core.chunk_first.call(null,seq__102529_102590__$1);
var G__102592 = cljs.core.chunk_rest.call(null,seq__102529_102590__$1);
var G__102593 = c__4556__auto___102591;
var G__102594 = cljs.core.count.call(null,c__4556__auto___102591);
var G__102595 = (0);
seq__102529_102533 = G__102592;
chunk__102530_102534 = G__102593;
count__102531_102535 = G__102594;
i__102532_102536 = G__102595;
continue;
} else {
var yy_102596 = cljs.core.first.call(null,seq__102529_102590__$1);
var x_102597 = (xx + simplyonmyway.dynamic.gauss.call(null,(0),0.0));
var y_102598 = (yy_102596 + simplyonmyway.dynamic.gauss.call(null,(0),0.005));
if((y_102598 < div_major_1)){
var fill__15303__auto___102599 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__15304__auto___102600 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102599)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102599);
} else {
quil.core.fill.call(null,fill__15303__auto___102599);

}

var return_val__15305__auto___102601 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102597),simplyonmyway.dynamic.h.call(null,y_102598),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__15304__auto___102600 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102600);
}


if((y_102598 < ((num_border_rows * dy) + (((f * (1)) * div_minor) / num_rows_adj)))){
var fill__15303__auto___102602 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__15304__auto___102603 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102602)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102602);
} else {
quil.core.fill.call(null,fill__15303__auto___102602);

}

var return_val__15305__auto___102604 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102597),simplyonmyway.dynamic.h.call(null,y_102598),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102603 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102603);
}

} else {
if((((y_102598 > ((num_border_rows * dy) + (((f * (1)) * div_minor) / num_rows_adj)))) && ((y_102598 < ((num_border_rows * dy) + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102605 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__15304__auto___102606 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102605)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102605);
} else {
quil.core.fill.call(null,fill__15303__auto___102605);

}

var return_val__15305__auto___102607 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102597),simplyonmyway.dynamic.h.call(null,y_102598),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102606 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102606);
}

} else {
if((((y_102598 > ((num_border_rows * dy) + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_102598 < ((num_border_rows * dy) + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102608 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__15304__auto___102609 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102608)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102608);
} else {
quil.core.fill.call(null,fill__15303__auto___102608);

}

var return_val__15305__auto___102610 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102597),simplyonmyway.dynamic.h.call(null,y_102598),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102609 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102609);
}

} else {
if((((y_102598 > ((num_border_rows * dy) + (((f * (3)) * div_minor) / num_rows_adj)))) && ((y_102598 < div_major_1)))){
var fill__15303__auto___102611 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__15304__auto___102612 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102611)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102611);
} else {
quil.core.fill.call(null,fill__15303__auto___102611);

}

var return_val__15305__auto___102613 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102597),simplyonmyway.dynamic.h.call(null,y_102598),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102612 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102612);
}

} else {
}
}
}
}
} else {
if((((y_102598 > div_major_1)) && ((y_102598 < div_major_2)))){
var fill__15303__auto___102614 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__15304__auto___102615 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102614)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102614);
} else {
quil.core.fill.call(null,fill__15303__auto___102614);

}

var return_val__15305__auto___102616 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102597),simplyonmyway.dynamic.h.call(null,y_102598),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__15304__auto___102615 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102615);
}


if((((y_102598 > div_major_1)) && ((y_102598 < (div_major_1 + (((f * (1)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102617 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__15304__auto___102618 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102617)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102617);
} else {
quil.core.fill.call(null,fill__15303__auto___102617);

}

var return_val__15305__auto___102619 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102597),simplyonmyway.dynamic.h.call(null,y_102598),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102618 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102618);
}

} else {
if((((y_102598 > (div_major_1 + (((f * (1)) * div_minor) / num_rows_adj)))) && ((y_102598 < (div_major_1 + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102620 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__15304__auto___102621 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102620)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102620);
} else {
quil.core.fill.call(null,fill__15303__auto___102620);

}

var return_val__15305__auto___102622 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102597),simplyonmyway.dynamic.h.call(null,y_102598),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102621 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102621);
}

} else {
if((((y_102598 > (div_major_1 + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_102598 < (div_major_1 + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102623 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__15304__auto___102624 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102623)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102623);
} else {
quil.core.fill.call(null,fill__15303__auto___102623);

}

var return_val__15305__auto___102625 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102597),simplyonmyway.dynamic.h.call(null,y_102598),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102624 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102624);
}

} else {
if((((y_102598 > (div_major_1 + (((f * (3)) * div_minor) / num_rows_adj)))) && ((y_102598 < div_major_2)))){
var fill__15303__auto___102626 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__15304__auto___102627 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102626)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102626);
} else {
quil.core.fill.call(null,fill__15303__auto___102626);

}

var return_val__15305__auto___102628 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102597),simplyonmyway.dynamic.h.call(null,y_102598),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102627 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102627);
}

} else {
}
}
}
}
} else {
if((y_102598 > div_major_2)){
var fill__15303__auto___102629 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__15304__auto___102630 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102629)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102629);
} else {
quil.core.fill.call(null,fill__15303__auto___102629);

}

var return_val__15305__auto___102631 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102597),simplyonmyway.dynamic.h.call(null,y_102598),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__15304__auto___102630 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102630);
}


if((y_102598 < (div_major_2 + ((f * div_minor) / num_rows_adj)))){
var fill__15303__auto___102632 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__15304__auto___102633 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102632)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102632);
} else {
quil.core.fill.call(null,fill__15303__auto___102632);

}

var return_val__15305__auto___102634 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102597),simplyonmyway.dynamic.h.call(null,y_102598),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102633 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102633);
}

} else {
if((((y_102598 > (div_major_2 + ((f * div_minor) / num_rows_adj)))) && ((y_102598 < (div_major_2 + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102635 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__15304__auto___102636 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102635)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102635);
} else {
quil.core.fill.call(null,fill__15303__auto___102635);

}

var return_val__15305__auto___102637 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102597),simplyonmyway.dynamic.h.call(null,y_102598),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102636 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102636);
}

} else {
if((((y_102598 > (div_major_2 + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_102598 < (div_major_2 + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102638 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__15304__auto___102639 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102638)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102638);
} else {
quil.core.fill.call(null,fill__15303__auto___102638);

}

var return_val__15305__auto___102640 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102597),simplyonmyway.dynamic.h.call(null,y_102598),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102639 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102639);
}

} else {
if(cljs.core.truth_((((y_102598 > (div_major_2 + (((f * (3)) * div_minor) / num_rows_adj))))?(((y_102598 < (div_major_2 + ((1) / ((f * (4)) * div_minor)))))?num_rows_adj:false):false))){
var fill__15303__auto___102641 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__15304__auto___102642 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102641)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102641);
} else {
quil.core.fill.call(null,fill__15303__auto___102641);

}

var return_val__15305__auto___102643 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102597),simplyonmyway.dynamic.h.call(null,y_102598),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102642 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102642);
}

} else {
}
}
}
}
} else {
}
}
}


var G__102644 = cljs.core.next.call(null,seq__102529_102590__$1);
var G__102645 = null;
var G__102646 = (0);
var G__102647 = (0);
seq__102529_102533 = G__102644;
chunk__102530_102534 = G__102645;
count__102531_102535 = G__102646;
i__102532_102536 = G__102647;
continue;
}
} else {
}
}
break;
}

var G__102648 = seq__102521;
var G__102649 = chunk__102526;
var G__102650 = count__102527;
var G__102651 = (i__102528 + (1));
seq__102521 = G__102648;
chunk__102526 = G__102649;
count__102527 = G__102650;
i__102528 = G__102651;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__102521);
if(temp__5720__auto__){
var seq__102521__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__102521__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__102521__$1);
var G__102652 = cljs.core.chunk_rest.call(null,seq__102521__$1);
var G__102653 = c__4556__auto__;
var G__102654 = cljs.core.count.call(null,c__4556__auto__);
var G__102655 = (0);
seq__102521 = G__102652;
chunk__102526 = G__102653;
count__102527 = G__102654;
i__102528 = G__102655;
continue;
} else {
var xx = cljs.core.first.call(null,seq__102521__$1);
var seq__102522_102656 = cljs.core.seq.call(null,cljs.core.range.call(null,ys,ye,dy));
var chunk__102523_102657 = null;
var count__102524_102658 = (0);
var i__102525_102659 = (0);
while(true){
if((i__102525_102659 < count__102524_102658)){
var yy_102660 = cljs.core._nth.call(null,chunk__102523_102657,i__102525_102659);
var x_102661 = (xx + simplyonmyway.dynamic.gauss.call(null,(0),0.0));
var y_102662 = (yy_102660 + simplyonmyway.dynamic.gauss.call(null,(0),0.005));
if((y_102662 < div_major_1)){
var fill__15303__auto___102663 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__15304__auto___102664 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102663)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102663);
} else {
quil.core.fill.call(null,fill__15303__auto___102663);

}

var return_val__15305__auto___102665 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102661),simplyonmyway.dynamic.h.call(null,y_102662),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__15304__auto___102664 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102664);
}


if((y_102662 < ((num_border_rows * dy) + (((f * (1)) * div_minor) / num_rows_adj)))){
var fill__15303__auto___102666 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__15304__auto___102667 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102666)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102666);
} else {
quil.core.fill.call(null,fill__15303__auto___102666);

}

var return_val__15305__auto___102668 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102661),simplyonmyway.dynamic.h.call(null,y_102662),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102667 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102667);
}

} else {
if((((y_102662 > ((num_border_rows * dy) + (((f * (1)) * div_minor) / num_rows_adj)))) && ((y_102662 < ((num_border_rows * dy) + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102669 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__15304__auto___102670 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102669)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102669);
} else {
quil.core.fill.call(null,fill__15303__auto___102669);

}

var return_val__15305__auto___102671 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102661),simplyonmyway.dynamic.h.call(null,y_102662),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102670 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102670);
}

} else {
if((((y_102662 > ((num_border_rows * dy) + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_102662 < ((num_border_rows * dy) + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102672 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__15304__auto___102673 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102672)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102672);
} else {
quil.core.fill.call(null,fill__15303__auto___102672);

}

var return_val__15305__auto___102674 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102661),simplyonmyway.dynamic.h.call(null,y_102662),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102673 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102673);
}

} else {
if((((y_102662 > ((num_border_rows * dy) + (((f * (3)) * div_minor) / num_rows_adj)))) && ((y_102662 < div_major_1)))){
var fill__15303__auto___102675 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__15304__auto___102676 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102675)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102675);
} else {
quil.core.fill.call(null,fill__15303__auto___102675);

}

var return_val__15305__auto___102677 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102661),simplyonmyway.dynamic.h.call(null,y_102662),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102676 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102676);
}

} else {
}
}
}
}
} else {
if((((y_102662 > div_major_1)) && ((y_102662 < div_major_2)))){
var fill__15303__auto___102678 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__15304__auto___102679 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102678)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102678);
} else {
quil.core.fill.call(null,fill__15303__auto___102678);

}

var return_val__15305__auto___102680 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102661),simplyonmyway.dynamic.h.call(null,y_102662),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__15304__auto___102679 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102679);
}


if((((y_102662 > div_major_1)) && ((y_102662 < (div_major_1 + (((f * (1)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102681 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__15304__auto___102682 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102681)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102681);
} else {
quil.core.fill.call(null,fill__15303__auto___102681);

}

var return_val__15305__auto___102683 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102661),simplyonmyway.dynamic.h.call(null,y_102662),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102682 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102682);
}

} else {
if((((y_102662 > (div_major_1 + (((f * (1)) * div_minor) / num_rows_adj)))) && ((y_102662 < (div_major_1 + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102684 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__15304__auto___102685 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102684)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102684);
} else {
quil.core.fill.call(null,fill__15303__auto___102684);

}

var return_val__15305__auto___102686 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102661),simplyonmyway.dynamic.h.call(null,y_102662),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102685 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102685);
}

} else {
if((((y_102662 > (div_major_1 + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_102662 < (div_major_1 + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102687 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__15304__auto___102688 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102687)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102687);
} else {
quil.core.fill.call(null,fill__15303__auto___102687);

}

var return_val__15305__auto___102689 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102661),simplyonmyway.dynamic.h.call(null,y_102662),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102688 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102688);
}

} else {
if((((y_102662 > (div_major_1 + (((f * (3)) * div_minor) / num_rows_adj)))) && ((y_102662 < div_major_2)))){
var fill__15303__auto___102690 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__15304__auto___102691 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102690)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102690);
} else {
quil.core.fill.call(null,fill__15303__auto___102690);

}

var return_val__15305__auto___102692 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102661),simplyonmyway.dynamic.h.call(null,y_102662),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102691 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102691);
}

} else {
}
}
}
}
} else {
if((y_102662 > div_major_2)){
var fill__15303__auto___102693 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__15304__auto___102694 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102693)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102693);
} else {
quil.core.fill.call(null,fill__15303__auto___102693);

}

var return_val__15305__auto___102695 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102661),simplyonmyway.dynamic.h.call(null,y_102662),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__15304__auto___102694 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102694);
}


if((y_102662 < (div_major_2 + ((f * div_minor) / num_rows_adj)))){
var fill__15303__auto___102696 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__15304__auto___102697 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102696)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102696);
} else {
quil.core.fill.call(null,fill__15303__auto___102696);

}

var return_val__15305__auto___102698 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102661),simplyonmyway.dynamic.h.call(null,y_102662),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102697 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102697);
}

} else {
if((((y_102662 > (div_major_2 + ((f * div_minor) / num_rows_adj)))) && ((y_102662 < (div_major_2 + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102699 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__15304__auto___102700 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102699)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102699);
} else {
quil.core.fill.call(null,fill__15303__auto___102699);

}

var return_val__15305__auto___102701 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102661),simplyonmyway.dynamic.h.call(null,y_102662),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102700 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102700);
}

} else {
if((((y_102662 > (div_major_2 + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_102662 < (div_major_2 + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102702 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__15304__auto___102703 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102702)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102702);
} else {
quil.core.fill.call(null,fill__15303__auto___102702);

}

var return_val__15305__auto___102704 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102661),simplyonmyway.dynamic.h.call(null,y_102662),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102703 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102703);
}

} else {
if(cljs.core.truth_((((y_102662 > (div_major_2 + (((f * (3)) * div_minor) / num_rows_adj))))?(((y_102662 < (div_major_2 + ((1) / ((f * (4)) * div_minor)))))?num_rows_adj:false):false))){
var fill__15303__auto___102705 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__15304__auto___102706 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102705)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102705);
} else {
quil.core.fill.call(null,fill__15303__auto___102705);

}

var return_val__15305__auto___102707 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102661),simplyonmyway.dynamic.h.call(null,y_102662),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102706 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102706);
}

} else {
}
}
}
}
} else {
}
}
}


var G__102708 = seq__102522_102656;
var G__102709 = chunk__102523_102657;
var G__102710 = count__102524_102658;
var G__102711 = (i__102525_102659 + (1));
seq__102522_102656 = G__102708;
chunk__102523_102657 = G__102709;
count__102524_102658 = G__102710;
i__102525_102659 = G__102711;
continue;
} else {
var temp__5720__auto___102712__$1 = cljs.core.seq.call(null,seq__102522_102656);
if(temp__5720__auto___102712__$1){
var seq__102522_102713__$1 = temp__5720__auto___102712__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__102522_102713__$1)){
var c__4556__auto___102714 = cljs.core.chunk_first.call(null,seq__102522_102713__$1);
var G__102715 = cljs.core.chunk_rest.call(null,seq__102522_102713__$1);
var G__102716 = c__4556__auto___102714;
var G__102717 = cljs.core.count.call(null,c__4556__auto___102714);
var G__102718 = (0);
seq__102522_102656 = G__102715;
chunk__102523_102657 = G__102716;
count__102524_102658 = G__102717;
i__102525_102659 = G__102718;
continue;
} else {
var yy_102719 = cljs.core.first.call(null,seq__102522_102713__$1);
var x_102720 = (xx + simplyonmyway.dynamic.gauss.call(null,(0),0.0));
var y_102721 = (yy_102719 + simplyonmyway.dynamic.gauss.call(null,(0),0.005));
if((y_102721 < div_major_1)){
var fill__15303__auto___102722 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__15304__auto___102723 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102722)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102722);
} else {
quil.core.fill.call(null,fill__15303__auto___102722);

}

var return_val__15305__auto___102724 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102720),simplyonmyway.dynamic.h.call(null,y_102721),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__15304__auto___102723 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102723);
}


if((y_102721 < ((num_border_rows * dy) + (((f * (1)) * div_minor) / num_rows_adj)))){
var fill__15303__auto___102725 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__15304__auto___102726 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102725)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102725);
} else {
quil.core.fill.call(null,fill__15303__auto___102725);

}

var return_val__15305__auto___102727 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102720),simplyonmyway.dynamic.h.call(null,y_102721),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102726 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102726);
}

} else {
if((((y_102721 > ((num_border_rows * dy) + (((f * (1)) * div_minor) / num_rows_adj)))) && ((y_102721 < ((num_border_rows * dy) + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102728 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__15304__auto___102729 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102728)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102728);
} else {
quil.core.fill.call(null,fill__15303__auto___102728);

}

var return_val__15305__auto___102730 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102720),simplyonmyway.dynamic.h.call(null,y_102721),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102729 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102729);
}

} else {
if((((y_102721 > ((num_border_rows * dy) + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_102721 < ((num_border_rows * dy) + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102731 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__15304__auto___102732 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102731)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102731);
} else {
quil.core.fill.call(null,fill__15303__auto___102731);

}

var return_val__15305__auto___102733 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102720),simplyonmyway.dynamic.h.call(null,y_102721),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102732 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102732);
}

} else {
if((((y_102721 > ((num_border_rows * dy) + (((f * (3)) * div_minor) / num_rows_adj)))) && ((y_102721 < div_major_1)))){
var fill__15303__auto___102734 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__15304__auto___102735 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102734)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102734);
} else {
quil.core.fill.call(null,fill__15303__auto___102734);

}

var return_val__15305__auto___102736 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102720),simplyonmyway.dynamic.h.call(null,y_102721),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102735 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102735);
}

} else {
}
}
}
}
} else {
if((((y_102721 > div_major_1)) && ((y_102721 < div_major_2)))){
var fill__15303__auto___102737 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__15304__auto___102738 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102737)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102737);
} else {
quil.core.fill.call(null,fill__15303__auto___102737);

}

var return_val__15305__auto___102739 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102720),simplyonmyway.dynamic.h.call(null,y_102721),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__15304__auto___102738 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102738);
}


if((((y_102721 > div_major_1)) && ((y_102721 < (div_major_1 + (((f * (1)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102740 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__15304__auto___102741 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102740)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102740);
} else {
quil.core.fill.call(null,fill__15303__auto___102740);

}

var return_val__15305__auto___102742 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102720),simplyonmyway.dynamic.h.call(null,y_102721),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102741 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102741);
}

} else {
if((((y_102721 > (div_major_1 + (((f * (1)) * div_minor) / num_rows_adj)))) && ((y_102721 < (div_major_1 + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102743 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__15304__auto___102744 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102743)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102743);
} else {
quil.core.fill.call(null,fill__15303__auto___102743);

}

var return_val__15305__auto___102745 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102720),simplyonmyway.dynamic.h.call(null,y_102721),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102744 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102744);
}

} else {
if((((y_102721 > (div_major_1 + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_102721 < (div_major_1 + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102746 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__15304__auto___102747 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102746)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102746);
} else {
quil.core.fill.call(null,fill__15303__auto___102746);

}

var return_val__15305__auto___102748 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102720),simplyonmyway.dynamic.h.call(null,y_102721),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102747 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102747);
}

} else {
if((((y_102721 > (div_major_1 + (((f * (3)) * div_minor) / num_rows_adj)))) && ((y_102721 < div_major_2)))){
var fill__15303__auto___102749 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__15304__auto___102750 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102749)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102749);
} else {
quil.core.fill.call(null,fill__15303__auto___102749);

}

var return_val__15305__auto___102751 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102720),simplyonmyway.dynamic.h.call(null,y_102721),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102750 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102750);
}

} else {
}
}
}
}
} else {
if((y_102721 > div_major_2)){
var fill__15303__auto___102752 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__15304__auto___102753 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102752)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102752);
} else {
quil.core.fill.call(null,fill__15303__auto___102752);

}

var return_val__15305__auto___102754 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102720),simplyonmyway.dynamic.h.call(null,y_102721),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__15304__auto___102753 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102753);
}


if((y_102721 < (div_major_2 + ((f * div_minor) / num_rows_adj)))){
var fill__15303__auto___102755 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__15304__auto___102756 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102755)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102755);
} else {
quil.core.fill.call(null,fill__15303__auto___102755);

}

var return_val__15305__auto___102757 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102720),simplyonmyway.dynamic.h.call(null,y_102721),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102756 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102756);
}

} else {
if((((y_102721 > (div_major_2 + ((f * div_minor) / num_rows_adj)))) && ((y_102721 < (div_major_2 + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102758 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__15304__auto___102759 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102758)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102758);
} else {
quil.core.fill.call(null,fill__15303__auto___102758);

}

var return_val__15305__auto___102760 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102720),simplyonmyway.dynamic.h.call(null,y_102721),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102759 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102759);
}

} else {
if((((y_102721 > (div_major_2 + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_102721 < (div_major_2 + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__15303__auto___102761 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__15304__auto___102762 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102761)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102761);
} else {
quil.core.fill.call(null,fill__15303__auto___102761);

}

var return_val__15305__auto___102763 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102720),simplyonmyway.dynamic.h.call(null,y_102721),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102762 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102762);
}

} else {
if(cljs.core.truth_((((y_102721 > (div_major_2 + (((f * (3)) * div_minor) / num_rows_adj))))?(((y_102721 < (div_major_2 + ((1) / ((f * (4)) * div_minor)))))?num_rows_adj:false):false))){
var fill__15303__auto___102764 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__15304__auto___102765 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__15303__auto___102764)){
cljs.core.apply.call(null,quil.core.fill,fill__15303__auto___102764);
} else {
quil.core.fill.call(null,fill__15303__auto___102764);

}

var return_val__15305__auto___102766 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_102720),simplyonmyway.dynamic.h.call(null,y_102721),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__15304__auto___102765 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__15304__auto___102765);
}

} else {
}
}
}
}
} else {
}
}
}


var G__102767 = cljs.core.next.call(null,seq__102522_102713__$1);
var G__102768 = null;
var G__102769 = (0);
var G__102770 = (0);
seq__102522_102656 = G__102767;
chunk__102523_102657 = G__102768;
count__102524_102658 = G__102769;
i__102525_102659 = G__102770;
continue;
}
} else {
}
}
break;
}

var G__102771 = cljs.core.next.call(null,seq__102521__$1);
var G__102772 = null;
var G__102773 = (0);
var G__102774 = (0);
seq__102521 = G__102771;
chunk__102526 = G__102772;
count__102527 = G__102773;
i__102528 = G__102774;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=dynamic.js.map
