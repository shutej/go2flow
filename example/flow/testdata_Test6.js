/* @flow */

import * as go2flow from "./go2flow";

import * as testdata_EmbeddedStruct from "./testdata_EmbeddedStruct";

export type T = { embeddedStruct: testdata_EmbeddedStruct.T; };
export function empty(): T { return { embeddedStruct: testdata_EmbeddedStruct.empty() }; }
export type MarshalT = { EmbeddedStruct: testdata_EmbeddedStruct.MarshalT; };
export function marshal(x: T): MarshalT { return (function(x) { return { EmbeddedStruct: testdata_EmbeddedStruct.marshal(x.embeddedStruct) }; })(x); }
export function unmarshal(x: MarshalT): T { return (function(x) { return { embeddedStruct: testdata_EmbeddedStruct.unmarshal(x.EmbeddedStruct) }; })(x); }
