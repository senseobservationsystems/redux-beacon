import { EventDefinition } from 'redux-beacon';
import { Traits } from './types';
export declare const trackPageView: (eventDef: EventDefinition<{
    category?: string;
    name?: string;
    properties?: any;
    options?: any;
}, {
    [key: string]: any;
}, any>) => EventDefinition<any, {
    [key: string]: any;
}, any>;
export declare const trackEvent: (eventDef: EventDefinition<{
    name: string;
    properties?: any;
    options?: any;
}, {
    [key: string]: any;
}, any>) => EventDefinition<any, {
    [key: string]: any;
}, any>;
export declare const setAlias: (eventDef: EventDefinition<{
    userId: string;
    previousId?: string;
    options?: any;
}, {
    [key: string]: any;
}, any>) => EventDefinition<any, {
    [key: string]: any;
}, any>;
export declare const setGroup: (eventDef: EventDefinition<{
    groupId: string;
    traits?: Traits;
    options?: any;
}, {
    [key: string]: any;
}, any>) => EventDefinition<any, {
    [key: string]: any;
}, any>;
export declare const identifyUser: (eventDef: EventDefinition<{
    userId?: string;
    traits?: Traits;
    options?: any;
}, {
    [key: string]: any;
}, any>) => EventDefinition<any, {
    [key: string]: any;
}, any>;
export declare const reset: () => {
    hitType: string;
};
