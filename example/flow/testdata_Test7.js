/* @flow */

import * as go2flow from "./go2flow";

import * as testdata_Test2 from "./testdata_Test2";

export type T = ?testdata_Test2.T;
export function empty(): T { return null; }
export type MarshalT = ?testdata_Test2.MarshalT;
export function marshal(x: T): MarshalT { return go2flow.identity(x); }
export function unmarshal(x: MarshalT): T { return go2flow.identity(x); }
