/* @flow */

import * as go2flow from "./go2flow";

export type T = { aStringPtr: ?string; aIntPtr: ?number; aFloatPtr: ?number; aBoolPtr: ?boolean; };
export function empty(): T { return { aStringPtr: null, aIntPtr: null, aFloatPtr: null, aBoolPtr: null }; }
export type MarshalT = { aStringPtr: ?string; aIntPtr: ?number; aFloatPtr: ?number; aBoolPtr: ?boolean; };
export function marshal(x: T): MarshalT { return (function(x) { return { aStringPtr: go2flow.identity(x.aStringPtr), aIntPtr: go2flow.identity(x.aIntPtr), aFloatPtr: go2flow.identity(x.aFloatPtr), aBoolPtr: go2flow.identity(x.aBoolPtr) }; })(x); }
export function unmarshal(x: MarshalT): T { return (function(x) { return { aStringPtr: go2flow.identity(x.aStringPtr), aIntPtr: go2flow.identity(x.aIntPtr), aFloatPtr: go2flow.identity(x.aFloatPtr), aBoolPtr: go2flow.identity(x.aBoolPtr) }; })(x); }
