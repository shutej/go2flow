/* @flow */

import * as go2flow from "./go2flow";

export type T = { aStringSlice: Array<string>; aIntSlice: Array<number>; aFloatSlice: Array<number>; aBoolSlice: Array<boolean>; };
export function empty(): T { return { aStringSlice: [], aIntSlice: [], aFloatSlice: [], aBoolSlice: [] }; }
export type MarshalT = { aStringSlice: Array<string>; aIntSlice: Array<number>; aFloatSlice: Array<number>; aBoolSlice: Array<boolean>; };
export function marshal(x: T): MarshalT { return (function(x) { return { aStringSlice: go2flow.fmapArray(go2flow.identity)(x.aStringSlice), aIntSlice: go2flow.fmapArray(go2flow.identity)(x.aIntSlice), aFloatSlice: go2flow.fmapArray(go2flow.identity)(x.aFloatSlice), aBoolSlice: go2flow.fmapArray(go2flow.identity)(x.aBoolSlice) }; })(x); }
export function unmarshal(x: MarshalT): T { return (function(x) { return { aStringSlice: go2flow.fmapArray(go2flow.identity)(x.aStringSlice), aIntSlice: go2flow.fmapArray(go2flow.identity)(x.aIntSlice), aFloatSlice: go2flow.fmapArray(go2flow.identity)(x.aFloatSlice), aBoolSlice: go2flow.fmapArray(go2flow.identity)(x.aBoolSlice) }; })(x); }
