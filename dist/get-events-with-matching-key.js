"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getEventsWithMatchingKey(eventsMap, actionType) {
    return Object.keys(eventsMap)
        .filter(function (key) { return key === '*' || key === actionType; })
        .map(function (matchingKey) { return eventsMap[matchingKey]; });
}
exports.default = getEventsWithMatchingKey;
