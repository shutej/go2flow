/* @flow */

import * as go2flow from "./go2flow";

import * as example_Test1 from "./example_Test1";

export type T = ?example_Test1.T;
export function empty(): T { return null; }
export type MarshalT = ?example_Test1.MarshalT;
export function marshal(x: T): MarshalT { return go2flow.identity(x); }
export function unmarshal(x: MarshalT): T { return go2flow.identity(x); }
