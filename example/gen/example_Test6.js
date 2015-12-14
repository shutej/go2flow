/* @flow */

import * as go2flow from "./go2flow";

import * as example_EmbeddedStruct from "./example_EmbeddedStruct";

export type T = { embeddedStruct: example_EmbeddedStruct.T; };
export function empty(): T { return { embeddedStruct: example_EmbeddedStruct.empty() }; }
export type MarshalT = { EmbeddedStruct: example_EmbeddedStruct.MarshalT; };
export function marshal(x: T): MarshalT { return (function(x) { return { EmbeddedStruct: example_EmbeddedStruct.marshal(x.embeddedStruct) }; })(x); }
export function unmarshal(x: MarshalT): T { return (function(x) { return { embeddedStruct: example_EmbeddedStruct.unmarshal(x.EmbeddedStruct) }; })(x); }
