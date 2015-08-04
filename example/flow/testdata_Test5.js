/* @flow */

import * as go2flow from "./go2flow";

import * as testdata_EmbeddedStruct from "./testdata_EmbeddedStruct";

export type T = { aStringMap: { [k: string]: string }; aIntMap: { [k: string]: number }; aFloatMap: { [k: string]: number }; aBoolMap: { [k: string]: boolean }; embeddedStruct: testdata_EmbeddedStruct.T; };
export function empty(): T { return { aStringMap: new Map(), aIntMap: new Map(), aFloatMap: new Map(), aBoolMap: new Map(), embeddedStruct: testdata_EmbeddedStruct.empty() }; }
export type MarshalT = { aStringMap: { [k: string]: string }; aIntMap: { [k: string]: number }; aFloatMap: { [k: string]: number }; aBoolMap: { [k: string]: boolean }; EmbeddedStruct: testdata_EmbeddedStruct.MarshalT; };
export function marshal(x: T): MarshalT { return (function(x) { return { aStringMap: go2flow.fmapObject(go2flow.identity)(x.aStringMap), aIntMap: go2flow.fmapObject(go2flow.identity)(x.aIntMap), aFloatMap: go2flow.fmapObject(go2flow.identity)(x.aFloatMap), aBoolMap: go2flow.fmapObject(go2flow.identity)(x.aBoolMap), EmbeddedStruct: testdata_EmbeddedStruct.marshal(x.embeddedStruct) }; })(x); }
export function unmarshal(x: MarshalT): T { return (function(x) { return { aStringMap: go2flow.fmapObject(go2flow.identity)(x.aStringMap), aIntMap: go2flow.fmapObject(go2flow.identity)(x.aIntMap), aFloatMap: go2flow.fmapObject(go2flow.identity)(x.aFloatMap), aBoolMap: go2flow.fmapObject(go2flow.identity)(x.aBoolMap), embeddedStruct: testdata_EmbeddedStruct.unmarshal(x.EmbeddedStruct) }; })(x); }
