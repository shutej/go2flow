/* @flow */

import * as go2flow from "./go2flow";

export type T = { aString: string; aInt: number; aFloat: number; aBool: boolean; };
export function empty(): T { return { aString: "", aInt: 0, aFloat: 0.0, aBool: false }; }
export type MarshalT = { aString: string; aInt: number; aFloat: number; aBool: boolean; };
export function marshal(x: T): MarshalT { return (function(x) { return { aString: go2flow.identity(x.aString), aInt: go2flow.identity(x.aInt), aFloat: go2flow.identity(x.aFloat), aBool: go2flow.identity(x.aBool) }; })(x); }
export function unmarshal(x: MarshalT): T { return (function(x) { return { aString: (x.hasOwnProperty("aString") ? go2flow.identity(x.aString) : ""), aInt: (x.hasOwnProperty("aInt") ? go2flow.identity(x.aInt) : 0), aFloat: (x.hasOwnProperty("aFloat") ? go2flow.identity(x.aFloat) : 0.0), aBool: (x.hasOwnProperty("aBool") ? go2flow.identity(x.aBool) : false) }; })(x); }
