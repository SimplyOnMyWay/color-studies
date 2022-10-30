// Compiled by ClojureScript 1.10.773 {}
goog.provide('simplyonmyway.dynamic');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('simplyonmyway.randomutils');
simplyonmyway.dynamic.w = (function simplyonmyway$dynamic$w(var_args){
var G__16144 = arguments.length;
switch (G__16144) {
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
var G__16147 = arguments.length;
switch (G__16147) {
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
var G__16150 = arguments.length;
switch (G__16150) {
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
var G__16153 = arguments.length;
switch (G__16153) {
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
var seq__16155 = cljs.core.seq.call(null,cljs.core.range.call(null,xs,xe,dx));
var chunk__16160 = null;
var count__16161 = (0);
var i__16162 = (0);
while(true){
if((i__16162 < count__16161)){
var xx = cljs.core._nth.call(null,chunk__16160,i__16162);
var seq__16163_16167 = cljs.core.seq.call(null,cljs.core.range.call(null,ys,ye,dy));
var chunk__16164_16168 = null;
var count__16165_16169 = (0);
var i__16166_16170 = (0);
while(true){
if((i__16166_16170 < count__16165_16169)){
var yy_16171 = cljs.core._nth.call(null,chunk__16164_16168,i__16166_16170);
var x_16172 = (xx + simplyonmyway.dynamic.gauss.call(null,(0),0.0));
var y_16173 = (yy_16171 + simplyonmyway.dynamic.gauss.call(null,(0),0.005));
if((y_16173 < div_major_1)){
var fill__16031__auto___16174 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__16032__auto___16175 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16174)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16174);
} else {
quil.core.fill.call(null,fill__16031__auto___16174);

}

var return_val__16033__auto___16176 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16172),simplyonmyway.dynamic.h.call(null,y_16173),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__16032__auto___16175 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16175);
}


if((y_16173 < ((num_border_rows * dy) + (((f * (1)) * div_minor) / num_rows_adj)))){
var fill__16031__auto___16177 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__16032__auto___16178 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16177)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16177);
} else {
quil.core.fill.call(null,fill__16031__auto___16177);

}

var return_val__16033__auto___16179 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16172),simplyonmyway.dynamic.h.call(null,y_16173),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16178 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16178);
}

} else {
if((((y_16173 > ((num_border_rows * dy) + (((f * (1)) * div_minor) / num_rows_adj)))) && ((y_16173 < ((num_border_rows * dy) + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16180 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__16032__auto___16181 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16180)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16180);
} else {
quil.core.fill.call(null,fill__16031__auto___16180);

}

var return_val__16033__auto___16182 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16172),simplyonmyway.dynamic.h.call(null,y_16173),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16181 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16181);
}

} else {
if((((y_16173 > ((num_border_rows * dy) + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_16173 < ((num_border_rows * dy) + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16183 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__16032__auto___16184 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16183)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16183);
} else {
quil.core.fill.call(null,fill__16031__auto___16183);

}

var return_val__16033__auto___16185 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16172),simplyonmyway.dynamic.h.call(null,y_16173),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16184 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16184);
}

} else {
if((((y_16173 > ((num_border_rows * dy) + (((f * (3)) * div_minor) / num_rows_adj)))) && ((y_16173 < div_major_1)))){
var fill__16031__auto___16186 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__16032__auto___16187 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16186)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16186);
} else {
quil.core.fill.call(null,fill__16031__auto___16186);

}

var return_val__16033__auto___16188 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16172),simplyonmyway.dynamic.h.call(null,y_16173),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16187 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16187);
}

} else {
}
}
}
}
} else {
if((((y_16173 > div_major_1)) && ((y_16173 < div_major_2)))){
var fill__16031__auto___16189 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__16032__auto___16190 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16189)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16189);
} else {
quil.core.fill.call(null,fill__16031__auto___16189);

}

var return_val__16033__auto___16191 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16172),simplyonmyway.dynamic.h.call(null,y_16173),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__16032__auto___16190 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16190);
}


if((((y_16173 > div_major_1)) && ((y_16173 < (div_major_1 + (((f * (1)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16192 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__16032__auto___16193 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16192)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16192);
} else {
quil.core.fill.call(null,fill__16031__auto___16192);

}

var return_val__16033__auto___16194 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16172),simplyonmyway.dynamic.h.call(null,y_16173),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16193 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16193);
}

} else {
if((((y_16173 > (div_major_1 + (((f * (1)) * div_minor) / num_rows_adj)))) && ((y_16173 < (div_major_1 + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16195 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__16032__auto___16196 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16195)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16195);
} else {
quil.core.fill.call(null,fill__16031__auto___16195);

}

var return_val__16033__auto___16197 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16172),simplyonmyway.dynamic.h.call(null,y_16173),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16196 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16196);
}

} else {
if((((y_16173 > (div_major_1 + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_16173 < (div_major_1 + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16198 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__16032__auto___16199 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16198)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16198);
} else {
quil.core.fill.call(null,fill__16031__auto___16198);

}

var return_val__16033__auto___16200 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16172),simplyonmyway.dynamic.h.call(null,y_16173),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16199 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16199);
}

} else {
if((((y_16173 > (div_major_1 + (((f * (3)) * div_minor) / num_rows_adj)))) && ((y_16173 < div_major_2)))){
var fill__16031__auto___16201 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__16032__auto___16202 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16201)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16201);
} else {
quil.core.fill.call(null,fill__16031__auto___16201);

}

var return_val__16033__auto___16203 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16172),simplyonmyway.dynamic.h.call(null,y_16173),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16202 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16202);
}

} else {
}
}
}
}
} else {
if((y_16173 > div_major_2)){
var fill__16031__auto___16204 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__16032__auto___16205 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16204)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16204);
} else {
quil.core.fill.call(null,fill__16031__auto___16204);

}

var return_val__16033__auto___16206 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16172),simplyonmyway.dynamic.h.call(null,y_16173),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__16032__auto___16205 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16205);
}


if((y_16173 < (div_major_2 + ((f * div_minor) / num_rows_adj)))){
var fill__16031__auto___16207 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__16032__auto___16208 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16207)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16207);
} else {
quil.core.fill.call(null,fill__16031__auto___16207);

}

var return_val__16033__auto___16209 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16172),simplyonmyway.dynamic.h.call(null,y_16173),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16208 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16208);
}

} else {
if((((y_16173 > (div_major_2 + ((f * div_minor) / num_rows_adj)))) && ((y_16173 < (div_major_2 + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16210 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__16032__auto___16211 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16210)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16210);
} else {
quil.core.fill.call(null,fill__16031__auto___16210);

}

var return_val__16033__auto___16212 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16172),simplyonmyway.dynamic.h.call(null,y_16173),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16211 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16211);
}

} else {
if((((y_16173 > (div_major_2 + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_16173 < (div_major_2 + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16213 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__16032__auto___16214 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16213)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16213);
} else {
quil.core.fill.call(null,fill__16031__auto___16213);

}

var return_val__16033__auto___16215 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16172),simplyonmyway.dynamic.h.call(null,y_16173),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16214 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16214);
}

} else {
if(cljs.core.truth_((((y_16173 > (div_major_2 + (((f * (3)) * div_minor) / num_rows_adj))))?(((y_16173 < (div_major_2 + ((1) / ((f * (4)) * div_minor)))))?num_rows_adj:false):false))){
var fill__16031__auto___16216 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__16032__auto___16217 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16216)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16216);
} else {
quil.core.fill.call(null,fill__16031__auto___16216);

}

var return_val__16033__auto___16218 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16172),simplyonmyway.dynamic.h.call(null,y_16173),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16217 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16217);
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


var G__16219 = seq__16163_16167;
var G__16220 = chunk__16164_16168;
var G__16221 = count__16165_16169;
var G__16222 = (i__16166_16170 + (1));
seq__16163_16167 = G__16219;
chunk__16164_16168 = G__16220;
count__16165_16169 = G__16221;
i__16166_16170 = G__16222;
continue;
} else {
var temp__5720__auto___16223 = cljs.core.seq.call(null,seq__16163_16167);
if(temp__5720__auto___16223){
var seq__16163_16224__$1 = temp__5720__auto___16223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16163_16224__$1)){
var c__4556__auto___16225 = cljs.core.chunk_first.call(null,seq__16163_16224__$1);
var G__16226 = cljs.core.chunk_rest.call(null,seq__16163_16224__$1);
var G__16227 = c__4556__auto___16225;
var G__16228 = cljs.core.count.call(null,c__4556__auto___16225);
var G__16229 = (0);
seq__16163_16167 = G__16226;
chunk__16164_16168 = G__16227;
count__16165_16169 = G__16228;
i__16166_16170 = G__16229;
continue;
} else {
var yy_16230 = cljs.core.first.call(null,seq__16163_16224__$1);
var x_16231 = (xx + simplyonmyway.dynamic.gauss.call(null,(0),0.0));
var y_16232 = (yy_16230 + simplyonmyway.dynamic.gauss.call(null,(0),0.005));
if((y_16232 < div_major_1)){
var fill__16031__auto___16233 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__16032__auto___16234 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16233)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16233);
} else {
quil.core.fill.call(null,fill__16031__auto___16233);

}

var return_val__16033__auto___16235 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16231),simplyonmyway.dynamic.h.call(null,y_16232),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__16032__auto___16234 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16234);
}


if((y_16232 < ((num_border_rows * dy) + (((f * (1)) * div_minor) / num_rows_adj)))){
var fill__16031__auto___16236 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__16032__auto___16237 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16236)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16236);
} else {
quil.core.fill.call(null,fill__16031__auto___16236);

}

var return_val__16033__auto___16238 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16231),simplyonmyway.dynamic.h.call(null,y_16232),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16237 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16237);
}

} else {
if((((y_16232 > ((num_border_rows * dy) + (((f * (1)) * div_minor) / num_rows_adj)))) && ((y_16232 < ((num_border_rows * dy) + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16239 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__16032__auto___16240 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16239)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16239);
} else {
quil.core.fill.call(null,fill__16031__auto___16239);

}

var return_val__16033__auto___16241 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16231),simplyonmyway.dynamic.h.call(null,y_16232),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16240 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16240);
}

} else {
if((((y_16232 > ((num_border_rows * dy) + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_16232 < ((num_border_rows * dy) + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16242 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__16032__auto___16243 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16242)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16242);
} else {
quil.core.fill.call(null,fill__16031__auto___16242);

}

var return_val__16033__auto___16244 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16231),simplyonmyway.dynamic.h.call(null,y_16232),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16243 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16243);
}

} else {
if((((y_16232 > ((num_border_rows * dy) + (((f * (3)) * div_minor) / num_rows_adj)))) && ((y_16232 < div_major_1)))){
var fill__16031__auto___16245 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__16032__auto___16246 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16245)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16245);
} else {
quil.core.fill.call(null,fill__16031__auto___16245);

}

var return_val__16033__auto___16247 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16231),simplyonmyway.dynamic.h.call(null,y_16232),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16246 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16246);
}

} else {
}
}
}
}
} else {
if((((y_16232 > div_major_1)) && ((y_16232 < div_major_2)))){
var fill__16031__auto___16248 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__16032__auto___16249 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16248)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16248);
} else {
quil.core.fill.call(null,fill__16031__auto___16248);

}

var return_val__16033__auto___16250 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16231),simplyonmyway.dynamic.h.call(null,y_16232),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__16032__auto___16249 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16249);
}


if((((y_16232 > div_major_1)) && ((y_16232 < (div_major_1 + (((f * (1)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16251 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__16032__auto___16252 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16251)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16251);
} else {
quil.core.fill.call(null,fill__16031__auto___16251);

}

var return_val__16033__auto___16253 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16231),simplyonmyway.dynamic.h.call(null,y_16232),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16252 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16252);
}

} else {
if((((y_16232 > (div_major_1 + (((f * (1)) * div_minor) / num_rows_adj)))) && ((y_16232 < (div_major_1 + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16254 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__16032__auto___16255 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16254)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16254);
} else {
quil.core.fill.call(null,fill__16031__auto___16254);

}

var return_val__16033__auto___16256 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16231),simplyonmyway.dynamic.h.call(null,y_16232),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16255 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16255);
}

} else {
if((((y_16232 > (div_major_1 + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_16232 < (div_major_1 + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16257 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__16032__auto___16258 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16257)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16257);
} else {
quil.core.fill.call(null,fill__16031__auto___16257);

}

var return_val__16033__auto___16259 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16231),simplyonmyway.dynamic.h.call(null,y_16232),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16258 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16258);
}

} else {
if((((y_16232 > (div_major_1 + (((f * (3)) * div_minor) / num_rows_adj)))) && ((y_16232 < div_major_2)))){
var fill__16031__auto___16260 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__16032__auto___16261 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16260)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16260);
} else {
quil.core.fill.call(null,fill__16031__auto___16260);

}

var return_val__16033__auto___16262 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16231),simplyonmyway.dynamic.h.call(null,y_16232),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16261 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16261);
}

} else {
}
}
}
}
} else {
if((y_16232 > div_major_2)){
var fill__16031__auto___16263 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__16032__auto___16264 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16263)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16263);
} else {
quil.core.fill.call(null,fill__16031__auto___16263);

}

var return_val__16033__auto___16265 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16231),simplyonmyway.dynamic.h.call(null,y_16232),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__16032__auto___16264 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16264);
}


if((y_16232 < (div_major_2 + ((f * div_minor) / num_rows_adj)))){
var fill__16031__auto___16266 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__16032__auto___16267 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16266)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16266);
} else {
quil.core.fill.call(null,fill__16031__auto___16266);

}

var return_val__16033__auto___16268 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16231),simplyonmyway.dynamic.h.call(null,y_16232),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16267 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16267);
}

} else {
if((((y_16232 > (div_major_2 + ((f * div_minor) / num_rows_adj)))) && ((y_16232 < (div_major_2 + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16269 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__16032__auto___16270 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16269)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16269);
} else {
quil.core.fill.call(null,fill__16031__auto___16269);

}

var return_val__16033__auto___16271 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16231),simplyonmyway.dynamic.h.call(null,y_16232),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16270 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16270);
}

} else {
if((((y_16232 > (div_major_2 + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_16232 < (div_major_2 + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16272 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__16032__auto___16273 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16272)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16272);
} else {
quil.core.fill.call(null,fill__16031__auto___16272);

}

var return_val__16033__auto___16274 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16231),simplyonmyway.dynamic.h.call(null,y_16232),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16273 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16273);
}

} else {
if(cljs.core.truth_((((y_16232 > (div_major_2 + (((f * (3)) * div_minor) / num_rows_adj))))?(((y_16232 < (div_major_2 + ((1) / ((f * (4)) * div_minor)))))?num_rows_adj:false):false))){
var fill__16031__auto___16275 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__16032__auto___16276 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16275)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16275);
} else {
quil.core.fill.call(null,fill__16031__auto___16275);

}

var return_val__16033__auto___16277 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16231),simplyonmyway.dynamic.h.call(null,y_16232),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16276 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16276);
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


var G__16278 = cljs.core.next.call(null,seq__16163_16224__$1);
var G__16279 = null;
var G__16280 = (0);
var G__16281 = (0);
seq__16163_16167 = G__16278;
chunk__16164_16168 = G__16279;
count__16165_16169 = G__16280;
i__16166_16170 = G__16281;
continue;
}
} else {
}
}
break;
}

var G__16282 = seq__16155;
var G__16283 = chunk__16160;
var G__16284 = count__16161;
var G__16285 = (i__16162 + (1));
seq__16155 = G__16282;
chunk__16160 = G__16283;
count__16161 = G__16284;
i__16162 = G__16285;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__16155);
if(temp__5720__auto__){
var seq__16155__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16155__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__16155__$1);
var G__16286 = cljs.core.chunk_rest.call(null,seq__16155__$1);
var G__16287 = c__4556__auto__;
var G__16288 = cljs.core.count.call(null,c__4556__auto__);
var G__16289 = (0);
seq__16155 = G__16286;
chunk__16160 = G__16287;
count__16161 = G__16288;
i__16162 = G__16289;
continue;
} else {
var xx = cljs.core.first.call(null,seq__16155__$1);
var seq__16156_16290 = cljs.core.seq.call(null,cljs.core.range.call(null,ys,ye,dy));
var chunk__16157_16291 = null;
var count__16158_16292 = (0);
var i__16159_16293 = (0);
while(true){
if((i__16159_16293 < count__16158_16292)){
var yy_16294 = cljs.core._nth.call(null,chunk__16157_16291,i__16159_16293);
var x_16295 = (xx + simplyonmyway.dynamic.gauss.call(null,(0),0.0));
var y_16296 = (yy_16294 + simplyonmyway.dynamic.gauss.call(null,(0),0.005));
if((y_16296 < div_major_1)){
var fill__16031__auto___16297 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__16032__auto___16298 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16297)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16297);
} else {
quil.core.fill.call(null,fill__16031__auto___16297);

}

var return_val__16033__auto___16299 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16295),simplyonmyway.dynamic.h.call(null,y_16296),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__16032__auto___16298 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16298);
}


if((y_16296 < ((num_border_rows * dy) + (((f * (1)) * div_minor) / num_rows_adj)))){
var fill__16031__auto___16300 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__16032__auto___16301 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16300)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16300);
} else {
quil.core.fill.call(null,fill__16031__auto___16300);

}

var return_val__16033__auto___16302 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16295),simplyonmyway.dynamic.h.call(null,y_16296),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16301 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16301);
}

} else {
if((((y_16296 > ((num_border_rows * dy) + (((f * (1)) * div_minor) / num_rows_adj)))) && ((y_16296 < ((num_border_rows * dy) + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16303 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__16032__auto___16304 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16303)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16303);
} else {
quil.core.fill.call(null,fill__16031__auto___16303);

}

var return_val__16033__auto___16305 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16295),simplyonmyway.dynamic.h.call(null,y_16296),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16304 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16304);
}

} else {
if((((y_16296 > ((num_border_rows * dy) + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_16296 < ((num_border_rows * dy) + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16306 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__16032__auto___16307 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16306)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16306);
} else {
quil.core.fill.call(null,fill__16031__auto___16306);

}

var return_val__16033__auto___16308 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16295),simplyonmyway.dynamic.h.call(null,y_16296),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16307 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16307);
}

} else {
if((((y_16296 > ((num_border_rows * dy) + (((f * (3)) * div_minor) / num_rows_adj)))) && ((y_16296 < div_major_1)))){
var fill__16031__auto___16309 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__16032__auto___16310 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16309)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16309);
} else {
quil.core.fill.call(null,fill__16031__auto___16309);

}

var return_val__16033__auto___16311 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16295),simplyonmyway.dynamic.h.call(null,y_16296),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16310 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16310);
}

} else {
}
}
}
}
} else {
if((((y_16296 > div_major_1)) && ((y_16296 < div_major_2)))){
var fill__16031__auto___16312 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__16032__auto___16313 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16312)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16312);
} else {
quil.core.fill.call(null,fill__16031__auto___16312);

}

var return_val__16033__auto___16314 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16295),simplyonmyway.dynamic.h.call(null,y_16296),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__16032__auto___16313 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16313);
}


if((((y_16296 > div_major_1)) && ((y_16296 < (div_major_1 + (((f * (1)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16315 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__16032__auto___16316 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16315)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16315);
} else {
quil.core.fill.call(null,fill__16031__auto___16315);

}

var return_val__16033__auto___16317 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16295),simplyonmyway.dynamic.h.call(null,y_16296),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16316 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16316);
}

} else {
if((((y_16296 > (div_major_1 + (((f * (1)) * div_minor) / num_rows_adj)))) && ((y_16296 < (div_major_1 + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16318 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__16032__auto___16319 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16318)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16318);
} else {
quil.core.fill.call(null,fill__16031__auto___16318);

}

var return_val__16033__auto___16320 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16295),simplyonmyway.dynamic.h.call(null,y_16296),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16319 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16319);
}

} else {
if((((y_16296 > (div_major_1 + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_16296 < (div_major_1 + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16321 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__16032__auto___16322 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16321)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16321);
} else {
quil.core.fill.call(null,fill__16031__auto___16321);

}

var return_val__16033__auto___16323 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16295),simplyonmyway.dynamic.h.call(null,y_16296),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16322 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16322);
}

} else {
if((((y_16296 > (div_major_1 + (((f * (3)) * div_minor) / num_rows_adj)))) && ((y_16296 < div_major_2)))){
var fill__16031__auto___16324 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__16032__auto___16325 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16324)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16324);
} else {
quil.core.fill.call(null,fill__16031__auto___16324);

}

var return_val__16033__auto___16326 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16295),simplyonmyway.dynamic.h.call(null,y_16296),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16325 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16325);
}

} else {
}
}
}
}
} else {
if((y_16296 > div_major_2)){
var fill__16031__auto___16327 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__16032__auto___16328 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16327)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16327);
} else {
quil.core.fill.call(null,fill__16031__auto___16327);

}

var return_val__16033__auto___16329 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16295),simplyonmyway.dynamic.h.call(null,y_16296),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__16032__auto___16328 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16328);
}


if((y_16296 < (div_major_2 + ((f * div_minor) / num_rows_adj)))){
var fill__16031__auto___16330 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__16032__auto___16331 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16330)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16330);
} else {
quil.core.fill.call(null,fill__16031__auto___16330);

}

var return_val__16033__auto___16332 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16295),simplyonmyway.dynamic.h.call(null,y_16296),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16331 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16331);
}

} else {
if((((y_16296 > (div_major_2 + ((f * div_minor) / num_rows_adj)))) && ((y_16296 < (div_major_2 + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16333 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__16032__auto___16334 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16333)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16333);
} else {
quil.core.fill.call(null,fill__16031__auto___16333);

}

var return_val__16033__auto___16335 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16295),simplyonmyway.dynamic.h.call(null,y_16296),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16334 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16334);
}

} else {
if((((y_16296 > (div_major_2 + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_16296 < (div_major_2 + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16336 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__16032__auto___16337 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16336)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16336);
} else {
quil.core.fill.call(null,fill__16031__auto___16336);

}

var return_val__16033__auto___16338 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16295),simplyonmyway.dynamic.h.call(null,y_16296),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16337 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16337);
}

} else {
if(cljs.core.truth_((((y_16296 > (div_major_2 + (((f * (3)) * div_minor) / num_rows_adj))))?(((y_16296 < (div_major_2 + ((1) / ((f * (4)) * div_minor)))))?num_rows_adj:false):false))){
var fill__16031__auto___16339 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__16032__auto___16340 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16339)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16339);
} else {
quil.core.fill.call(null,fill__16031__auto___16339);

}

var return_val__16033__auto___16341 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16295),simplyonmyway.dynamic.h.call(null,y_16296),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16340 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16340);
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


var G__16342 = seq__16156_16290;
var G__16343 = chunk__16157_16291;
var G__16344 = count__16158_16292;
var G__16345 = (i__16159_16293 + (1));
seq__16156_16290 = G__16342;
chunk__16157_16291 = G__16343;
count__16158_16292 = G__16344;
i__16159_16293 = G__16345;
continue;
} else {
var temp__5720__auto___16346__$1 = cljs.core.seq.call(null,seq__16156_16290);
if(temp__5720__auto___16346__$1){
var seq__16156_16347__$1 = temp__5720__auto___16346__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16156_16347__$1)){
var c__4556__auto___16348 = cljs.core.chunk_first.call(null,seq__16156_16347__$1);
var G__16349 = cljs.core.chunk_rest.call(null,seq__16156_16347__$1);
var G__16350 = c__4556__auto___16348;
var G__16351 = cljs.core.count.call(null,c__4556__auto___16348);
var G__16352 = (0);
seq__16156_16290 = G__16349;
chunk__16157_16291 = G__16350;
count__16158_16292 = G__16351;
i__16159_16293 = G__16352;
continue;
} else {
var yy_16353 = cljs.core.first.call(null,seq__16156_16347__$1);
var x_16354 = (xx + simplyonmyway.dynamic.gauss.call(null,(0),0.0));
var y_16355 = (yy_16353 + simplyonmyway.dynamic.gauss.call(null,(0),0.005));
if((y_16355 < div_major_1)){
var fill__16031__auto___16356 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__16032__auto___16357 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16356)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16356);
} else {
quil.core.fill.call(null,fill__16031__auto___16356);

}

var return_val__16033__auto___16358 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16354),simplyonmyway.dynamic.h.call(null,y_16355),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__16032__auto___16357 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16357);
}


if((y_16355 < ((num_border_rows * dy) + (((f * (1)) * div_minor) / num_rows_adj)))){
var fill__16031__auto___16359 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__16032__auto___16360 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16359)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16359);
} else {
quil.core.fill.call(null,fill__16031__auto___16359);

}

var return_val__16033__auto___16361 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16354),simplyonmyway.dynamic.h.call(null,y_16355),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16360 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16360);
}

} else {
if((((y_16355 > ((num_border_rows * dy) + (((f * (1)) * div_minor) / num_rows_adj)))) && ((y_16355 < ((num_border_rows * dy) + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16362 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__16032__auto___16363 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16362)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16362);
} else {
quil.core.fill.call(null,fill__16031__auto___16362);

}

var return_val__16033__auto___16364 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16354),simplyonmyway.dynamic.h.call(null,y_16355),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16363 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16363);
}

} else {
if((((y_16355 > ((num_border_rows * dy) + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_16355 < ((num_border_rows * dy) + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16365 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__16032__auto___16366 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16365)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16365);
} else {
quil.core.fill.call(null,fill__16031__auto___16365);

}

var return_val__16033__auto___16367 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16354),simplyonmyway.dynamic.h.call(null,y_16355),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16366 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16366);
}

} else {
if((((y_16355 > ((num_border_rows * dy) + (((f * (3)) * div_minor) / num_rows_adj)))) && ((y_16355 < div_major_1)))){
var fill__16031__auto___16368 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__16032__auto___16369 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16368)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16368);
} else {
quil.core.fill.call(null,fill__16031__auto___16368);

}

var return_val__16033__auto___16370 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16354),simplyonmyway.dynamic.h.call(null,y_16355),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16369 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16369);
}

} else {
}
}
}
}
} else {
if((((y_16355 > div_major_1)) && ((y_16355 < div_major_2)))){
var fill__16031__auto___16371 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__16032__auto___16372 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16371)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16371);
} else {
quil.core.fill.call(null,fill__16031__auto___16371);

}

var return_val__16033__auto___16373 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16354),simplyonmyway.dynamic.h.call(null,y_16355),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__16032__auto___16372 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16372);
}


if((((y_16355 > div_major_1)) && ((y_16355 < (div_major_1 + (((f * (1)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16374 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__16032__auto___16375 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16374)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16374);
} else {
quil.core.fill.call(null,fill__16031__auto___16374);

}

var return_val__16033__auto___16376 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16354),simplyonmyway.dynamic.h.call(null,y_16355),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16375 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16375);
}

} else {
if((((y_16355 > (div_major_1 + (((f * (1)) * div_minor) / num_rows_adj)))) && ((y_16355 < (div_major_1 + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16377 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__16032__auto___16378 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16377)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16377);
} else {
quil.core.fill.call(null,fill__16031__auto___16377);

}

var return_val__16033__auto___16379 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16354),simplyonmyway.dynamic.h.call(null,y_16355),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16378 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16378);
}

} else {
if((((y_16355 > (div_major_1 + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_16355 < (div_major_1 + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16380 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__16032__auto___16381 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16380)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16380);
} else {
quil.core.fill.call(null,fill__16031__auto___16380);

}

var return_val__16033__auto___16382 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16354),simplyonmyway.dynamic.h.call(null,y_16355),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16381 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16381);
}

} else {
if((((y_16355 > (div_major_1 + (((f * (3)) * div_minor) / num_rows_adj)))) && ((y_16355 < div_major_2)))){
var fill__16031__auto___16383 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__16032__auto___16384 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16383)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16383);
} else {
quil.core.fill.call(null,fill__16031__auto___16383);

}

var return_val__16033__auto___16385 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16354),simplyonmyway.dynamic.h.call(null,y_16355),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16384 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16384);
}

} else {
}
}
}
}
} else {
if((y_16355 > div_major_2)){
var fill__16031__auto___16386 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__16032__auto___16387 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16386)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16386);
} else {
quil.core.fill.call(null,fill__16031__auto___16386);

}

var return_val__16033__auto___16388 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16354),simplyonmyway.dynamic.h.call(null,y_16355),simplyonmyway.dynamic.w.call(null,r1),simplyonmyway.dynamic.w.call(null,r1));
if((previous_fill__16032__auto___16387 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16387);
}


if((y_16355 < (div_major_2 + ((f * div_minor) / num_rows_adj)))){
var fill__16031__auto___16389 = simplyonmyway.dynamic.ja_col_vec.call(null,(0));
var previous_fill__16032__auto___16390 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16389)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16389);
} else {
quil.core.fill.call(null,fill__16031__auto___16389);

}

var return_val__16033__auto___16391 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16354),simplyonmyway.dynamic.h.call(null,y_16355),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16390 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16390);
}

} else {
if((((y_16355 > (div_major_2 + ((f * div_minor) / num_rows_adj)))) && ((y_16355 < (div_major_2 + (((f * (2)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16392 = simplyonmyway.dynamic.ja_col_vec.call(null,(1));
var previous_fill__16032__auto___16393 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16392)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16392);
} else {
quil.core.fill.call(null,fill__16031__auto___16392);

}

var return_val__16033__auto___16394 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16354),simplyonmyway.dynamic.h.call(null,y_16355),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16393 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16393);
}

} else {
if((((y_16355 > (div_major_2 + (((f * (2)) * div_minor) / num_rows_adj)))) && ((y_16355 < (div_major_2 + (((f * (3)) * div_minor) / num_rows_adj)))))){
var fill__16031__auto___16395 = simplyonmyway.dynamic.ja_col_vec.call(null,(2));
var previous_fill__16032__auto___16396 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16395)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16395);
} else {
quil.core.fill.call(null,fill__16031__auto___16395);

}

var return_val__16033__auto___16397 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16354),simplyonmyway.dynamic.h.call(null,y_16355),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16396 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16396);
}

} else {
if(cljs.core.truth_((((y_16355 > (div_major_2 + (((f * (3)) * div_minor) / num_rows_adj))))?(((y_16355 < (div_major_2 + ((1) / ((f * (4)) * div_minor)))))?num_rows_adj:false):false))){
var fill__16031__auto___16398 = simplyonmyway.dynamic.ja_col_vec.call(null,(3));
var previous_fill__16032__auto___16399 = quil.core.current_fill.call(null);
if(cljs.core.sequential_QMARK_.call(null,fill__16031__auto___16398)){
cljs.core.apply.call(null,quil.core.fill,fill__16031__auto___16398);
} else {
quil.core.fill.call(null,fill__16031__auto___16398);

}

var return_val__16033__auto___16400 = quil.core.ellipse.call(null,simplyonmyway.dynamic.w.call(null,x_16354),simplyonmyway.dynamic.h.call(null,y_16355),simplyonmyway.dynamic.w.call(null,r2),simplyonmyway.dynamic.w.call(null,r2));
if((previous_fill__16032__auto___16399 == null)){
quil.core.no_fill.call(null);
} else {
quil.core.fill.call(null,previous_fill__16032__auto___16399);
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


var G__16401 = cljs.core.next.call(null,seq__16156_16347__$1);
var G__16402 = null;
var G__16403 = (0);
var G__16404 = (0);
seq__16156_16290 = G__16401;
chunk__16157_16291 = G__16402;
count__16158_16292 = G__16403;
i__16159_16293 = G__16404;
continue;
}
} else {
}
}
break;
}

var G__16405 = cljs.core.next.call(null,seq__16155__$1);
var G__16406 = null;
var G__16407 = (0);
var G__16408 = (0);
seq__16155 = G__16405;
chunk__16160 = G__16406;
count__16161 = G__16407;
i__16162 = G__16408;
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
