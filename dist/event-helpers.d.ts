import { EventDefinition } from 'redux-beacon';
import { Traits } from './types';
export declare const trackPageView: (eventDef: EventDefinition<{
    name?: string;
    properties?: any;
}, {
    [key: string]: any;
}, any>) => EventDefinition<any, {
    [key: string]: any;
}, any>;
export declare const trackEvent: (eventDef: EventDefinition<{
    name: string;
    properties?: any;
}, {
    [key: string]: any;
}, any>) => EventDefinition<any, {
    [key: string]: any;
}, any>;
export declare const setAlias: (eventDef: EventDefinition<{
    userId: string;
}, {
    [key: string]: any;
}, any>) => EventDefinition<any, {
    [key: string]: any;
}, any>;
export declare const setGroup: (eventDef: EventDefinition<{
    groupId: string;
    traits?: Traits;
}, {
    [key: string]: any;
}, any>) => EventDefinition<any, {
    [key: string]: any;
}, any>;
export declare const identifyUser: (eventDef: EventDefinition<{
    userId?: string;
    traits?: Traits;
}, {
    [key: string]: any;
}, any>) => EventDefinition<any, {
    [key: string]: any;
}, any>;
export declare const reset: (eventDef: EventDefinition<any, {
    [key: string]: any;
}, any>) => EventDefinition<any, {
    [key: string]: any;
}, any>;
