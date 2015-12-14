/* @flow */

import * as go2flow from "./go2flow";

import * as example_Test2 from "./example_Test2";

export type T = Array<?example_Test2.T>;
export function empty(): T { return []; }
export type MarshalT = Array<?example_Test2.MarshalT>;
export function marshal(x: T): MarshalT { return go2flow.fmapArray(go2flow.identity)(x); }
export function unmarshal(x: MarshalT): T { return go2flow.fmapArray(go2flow.identity)(x); }
