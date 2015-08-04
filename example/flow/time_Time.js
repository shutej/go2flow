/* @flow */
// TODO(shutej): This package.
export type T = number;
export type MarshalT = string;
export function empty(): T { return 0; }
export function marshal(x: T): MarshalT { return ""; }
export function unmarshal(x: MarshalT): T { return 0; }
