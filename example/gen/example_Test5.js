/* @flow */

import * as go2flow from "./go2flow";

import * as example_EmbeddedStruct from "./example_EmbeddedStruct";

export type T = { aStringMap: { [k: string]: string }; aIntMap: { [k: string]: number }; aFloatMap: { [k: string]: number }; aBoolMap: { [k: string]: boolean }; aByteMap: { [k: string]: number }; embeddedStruct: example_EmbeddedStruct.T; };
export function empty(): T { return { aStringMap: new Map(), aIntMap: new Map(), aFloatMap: new Map(), aBoolMap: new Map(), aByteMap: new Map(), embeddedStruct: example_EmbeddedStruct.empty() }; }
export type MarshalT = { aStringMap: { [k: string]: string }; aIntMap: { [k: string]: number }; aFloatMap: { [k: string]: number }; aBoolMap: { [k: string]: boolean }; aByteMap: { [k: string]: number }; EmbeddedStruct: example_EmbeddedStruct.MarshalT; };
export function marshal(x: T): MarshalT { return (function(x) { return { aStringMap: go2flow.fmapObject(go2flow.identity)(x.aStringMap), aIntMap: go2flow.fmapObject(go2flow.identity)(x.aIntMap), aFloatMap: go2flow.fmapObject(go2flow.identity)(x.aFloatMap), aBoolMap: go2flow.fmapObject(go2flow.identity)(x.aBoolMap), aByteMap: go2flow.fmapObject(go2flow.identity)(x.aByteMap), EmbeddedStruct: example_EmbeddedStruct.marshal(x.embeddedStruct) }; })(x); }
export function unmarshal(x: MarshalT): T { return (function(x) { return { aStringMap: go2flow.fmapObject(go2flow.identity)(x.aStringMap), aIntMap: go2flow.fmapObject(go2flow.identity)(x.aIntMap), aFloatMap: go2flow.fmapObject(go2flow.identity)(x.aFloatMap), aBoolMap: go2flow.fmapObject(go2flow.identity)(x.aBoolMap), aByteMap: go2flow.fmapObject(go2flow.identity)(x.aByteMap), embeddedStruct: example_EmbeddedStruct.unmarshal(x.EmbeddedStruct) }; })(x); }
