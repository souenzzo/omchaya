// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.controllers.controls');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
omchaya.controllers.controls.control_event = (function (){var method_table__4261__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4262__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__4263__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4264__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4265__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$553,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("control-event",(function (target,message,args,state){return message;
}),cljs.core.constant$keyword$308,hierarchy__4265__auto__,method_table__4261__auto__,prefer_table__4262__auto__,method_cache__4263__auto__,cached_hierarchy__4264__auto__));
})();
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$308,(function (target,message,args,state){return state;
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$592,(function (target,message,p__21436,state){var vec__21437 = p__21436;var activity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21437,0,null);var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21437,1,null);return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(activity),cljs.core.constant$keyword$355,cljs.core.constant$keyword$359], null),url);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$499,(function (target,message,args,state){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$375,cljs.core.constant$keyword$380,cljs.core.constant$keyword$381], null),cljs.core.not);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$532,(function (target,message,args,state){var old_channel = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,cljs.core.constant$keyword$367.cljs$core$IFn$_invoke$arity$1(state)], null));var new_channel = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,args], null));return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$367,args),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(old_channel),cljs.core.constant$keyword$358], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,args,cljs.core.constant$keyword$358], null),true);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$541,(function (target,message,args,state){return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$374,cljs.core.constant$keyword$377,cljs.core.constant$keyword$379], null),true);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$542,(function (target,message,args,state){return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$374,cljs.core.constant$keyword$377,cljs.core.constant$keyword$379], null),false);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$543,(function (target,message,new_value,state){return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$374,cljs.core.constant$keyword$377,cljs.core.constant$keyword$312], null),new_value);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$467,(function (target,message,args,state){return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$374,cljs.core.constant$keyword$378,cljs.core.constant$keyword$379], null),true);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$468,(function (target,message,args,state){return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$374,cljs.core.constant$keyword$378,cljs.core.constant$keyword$379], null),false);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$470,(function (target,message,args,state){return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$374,cljs.core.constant$keyword$378,cljs.core.constant$keyword$312], null),args);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$506,(function (target,message,channel_id,state){return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,channel_id,cljs.core.constant$keyword$350,cljs.core.constant$keyword$361], null),cljs.core.constant$keyword$364);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$504,(function (target,message,channel_id,state){return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,channel_id,cljs.core.constant$keyword$350,cljs.core.constant$keyword$361], null),cljs.core.constant$keyword$593);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$556,(function (target,message,args,state){return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$365,cljs.core.constant$keyword$372], null),true);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$557,(function (target,message,args,state){return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$365,cljs.core.constant$keyword$372], null),false);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$557,(function (target,message,args,state){return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$365,cljs.core.constant$keyword$372], null),false);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$554,(function (target,message,p__21438,state){var vec__21439 = p__21438;var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21439,0,null);var channel_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21439,1,null);return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,channel_id,cljs.core.constant$keyword$350,cljs.core.constant$keyword$359], null),src);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$557,(function (target,message,args,state){return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$365,cljs.core.constant$keyword$372], null),false);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$555,(function (target,message,args,state){var vec__21440 = args;var channel_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21440,0,null);var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21440,1,null);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,channel_id,cljs.core.constant$keyword$350,cljs.core.constant$keyword$363], null),(function (playlist){return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(playlist,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$356,(cljs.core.count(playlist) + 1),cljs.core.constant$keyword$344,url], null));
}));
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$501,(function (target,message,p__21441,state){var vec__21442 = p__21441;var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21442,0,null);var channel_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21442,1,null);return cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,channel_id,cljs.core.constant$keyword$350,cljs.core.constant$keyword$360], null),order),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,channel_id,cljs.core.constant$keyword$350,cljs.core.constant$keyword$362], null),true);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$469,(function (target,message,args,state){if(cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$374,cljs.core.constant$keyword$378,cljs.core.constant$keyword$312], null))))
{return state;
} else
{var content = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$374,cljs.core.constant$keyword$378,cljs.core.constant$keyword$312], null));var user = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$351,cljs.core.constant$keyword$369.cljs$core$IFn$_invoke$arity$1(state)], null));var channel = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,cljs.core.constant$keyword$367.cljs$core$IFn$_invoke$arity$1(state)], null));var activity = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$347,content,cljs.core.constant$keyword$346,cljs.core.constant$keyword$385.cljs$core$IFn$_invoke$arity$1(user),cljs.core.constant$keyword$345,(new Date())], null);return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$374,cljs.core.constant$keyword$378,cljs.core.constant$keyword$312], null),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(channel),cljs.core.constant$keyword$354], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.sort_by,cljs.core.constant$keyword$345),cljs.core.conj),activity),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(channel),cljs.core.constant$keyword$354], null),cljs.core.vec);
}
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$524,(function (target,message,args,state){return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$375,cljs.core.constant$keyword$380,cljs.core.constant$keyword$381], null),false);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$526,(function (target,message,args,state){return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$375,cljs.core.constant$keyword$380,cljs.core.constant$keyword$381], null),false);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$527,(function (target,message,args,state){return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$375,cljs.core.constant$keyword$380,cljs.core.constant$keyword$381], null),false);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$525,(function (target,message,args,state){return cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$375,cljs.core.constant$keyword$380,cljs.core.constant$keyword$381], null),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$369], null),null);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$594,(function (target,message,channel_id,state){return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,channel_id,cljs.core.constant$keyword$350,cljs.core.constant$keyword$362], null),false);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$595,(function (target,message,channel_id,state){return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,channel_id,cljs.core.constant$keyword$362], null),true);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$482,(function (target,message,channel_id,state){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$376,cljs.core.constant$keyword$383,cljs.core.constant$keyword$381], null),cljs.core.not);
}));
omchaya.controllers.controls.control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$479,(function (target,message,channel_id,state){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$376,cljs.core.constant$keyword$382,cljs.core.constant$keyword$381], null),cljs.core.not);
}));
