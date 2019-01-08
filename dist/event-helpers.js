"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackPageView = function (eventDef) { return function (action, prevState, nextState) {
    var _a = eventDef(action, prevState, nextState), category = _a.category, name = _a.name, properties = _a.properties, options = _a.options;
    return {
        hitType: 'pageview',
        page: category,
        name: name,
        properties: properties,
        options: options,
    };
}; };
exports.trackEvent = function (eventDef) { return function (action, prevState, nextState) {
    var _a = eventDef(action, prevState, nextState), name = _a.name, properties = _a.properties, options = _a.options;
    return {
        hitType: 'event',
        eventAction: name,
        properties: properties,
        options: options,
    };
}; };
exports.setAlias = function (eventDef) { return function (action, prevState, nextState) {
    var _a = eventDef(action, prevState, nextState), userId = _a.userId, previousId = _a.previousId, options = _a.options;
    return {
        hitType: 'alias',
        userId: userId,
        previousId: previousId,
        options: options,
    };
}; };
exports.setGroup = function (eventDef) { return function (action, prevState, nextState) {
    var _a = eventDef(action, prevState, nextState), groupId = _a.groupId, traits = _a.traits, options = _a.options;
    return {
        hitType: 'group',
        groupId: groupId,
        traits: traits,
        options: options,
    };
}; };
exports.identifyUser = function (eventDef) { return function (action, prevState, nextState) {
    var _a = eventDef(action, prevState, nextState), userId = _a.userId, traits = _a.traits, options = _a.options;
    return {
        hitType: 'identify',
        userId: userId,
        traits: traits,
        options: options,
    };
}; };
exports.reset = function () {
    return {
        hitType: 'reset',
    };
};
