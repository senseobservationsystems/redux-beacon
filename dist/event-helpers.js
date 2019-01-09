"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackPageView = function (eventDef) { return function (action, prevState, nextState) {
    var _a = eventDef(action, prevState, nextState), name = _a.name, properties = _a.properties;
    return {
        hitType: 'pageview',
        name: name,
        properties: properties,
    };
}; };
exports.trackEvent = function (eventDef) { return function (action, prevState, nextState) {
    var _a = eventDef(action, prevState, nextState), name = _a.name, properties = _a.properties;
    return {
        hitType: 'event',
        eventAction: name,
        properties: properties,
    };
}; };
exports.setAlias = function (eventDef) { return function (action, prevState, nextState) {
    var userId = eventDef(action, prevState, nextState).userId;
    return {
        hitType: 'alias',
        userId: userId,
    };
}; };
exports.setGroup = function (eventDef) { return function (action, prevState, nextState) {
    var _a = eventDef(action, prevState, nextState), groupId = _a.groupId, traits = _a.traits;
    return {
        hitType: 'group',
        groupId: groupId,
        traits: traits,
    };
}; };
exports.identifyUser = function (eventDef) { return function (action, prevState, nextState) {
    var _a = eventDef(action, prevState, nextState), userId = _a.userId, traits = _a.traits;
    return {
        hitType: 'identify',
        userId: userId,
        traits: traits,
    };
}; };
exports.reset = function (eventDef) { return function (action, prevState, nextState) {
    eventDef(action, prevState, nextState);
    return {
        hitType: 'reset',
    };
}; };
