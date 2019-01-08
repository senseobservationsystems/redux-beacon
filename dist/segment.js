"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Segment = function () { return function (events) {
    if (!window) {
        return;
    }
    if (!window.analytics) {
        throw new Error('window.analytics is not defined, Have you forgotten to include the Segment tracking snippet?');
    }
    events.forEach(function (event) {
        switch (event.hitType) {
            case 'identify':
                analytics.identify(event.userId, event.traits, event.options);
                break;
            case 'group':
                analytics.group(event.groupId, event.traits, event.options);
                break;
            case 'pageview':
                analytics.page(event.page, event.name, event.properties, event.options);
                break;
            case 'event':
                analytics.track(event.eventAction, event.properties, event.options);
                break;
            case 'alias':
                analytics.alias(event.userId, event.previousId, event.options);
                break;
            case 'reset':
                analytics.reset();
                break;
            default:
                break;
        }
    });
}; };
exports.default = Segment;
