

import * as testdata_Test1 from "./testdata_Test1";
import * as testdata_Test2 from "./testdata_Test2";
import * as testdata_Test3 from "./testdata_Test3";
import * as testdata_Test4 from "./testdata_Test4";
import * as testdata_Test5 from "./testdata_Test5";
import * as testdata_Test6 from "./testdata_Test6";
import * as testdata_Test7 from "./testdata_Test7";
import * as testdata_Test8 from "./testdata_Test8";
import * as testdata_Test9 from "./testdata_Test9";
import * as testdata_Test10 from "./testdata_Test10";


import * as go2flow from "./go2flow";

export function empty() {
  return { x: "" };
}

export function marshal(x) {
  return (function (x) {
    return { X: go2flow.identity(x.x) };
  })(x);
}
export function unmarshal(x) {
  return (function (x) {
    return { x: go2flow.identity(x.X) };
  })(x);
}


import * as go2flow from "./go2flow";

export function empty() {
  return { x: 0 };
}

export function marshal(x) {
  return (function (x) {
    return { X: go2flow.identity(x.x) };
  })(x);
}
export function unmarshal(x) {
  return (function (x) {
    return { x: go2flow.identity(x.X) };
  })(x);
}


import * as go2flow from "./go2flow";

export function empty() {
  return { x: 0.0 };
}

export function marshal(x) {
  return (function (x) {
    return { X: go2flow.identity(x.x) };
  })(x);
}
export function unmarshal(x) {
  return (function (x) {
    return { x: go2flow.identity(x.X) };
  })(x);
}


import * as go2flow from "./go2flow";

export function empty() {
  return { x: false };
}

export function marshal(x) {
  return (function (x) {
    return { X: go2flow.identity(x.x) };
  })(x);
}
export function unmarshal(x) {
  return (function (x) {
    return { x: go2flow.identity(x.X) };
  })(x);
}


import * as go2flow from "./go2flow";

export function empty() {
  return { x: 0 };
}

export function marshal(x) {
  return (function (x) {
    return { X: go2flow.identity(x.x) };
  })(x);
}
export function unmarshal(x) {
  return (function (x) {
    return { x: go2flow.identity(x.X) };
  })(x);
}


export function identity(x) {
  return x;
}

export function fmapArray(fn) {
  return function (x) {
    if (!x) {
      return [];
    }
    return x.map(fn);
  };
}

export function fmapObject(fn) {
  return function (x) {
    var retval = {};
    if (!x) {
      return retval;
    }
    for (var key in x) {
      retval[key] = fn(x[key]);
    }
    return retval;
  };
}


import * as go2flow from "./go2flow";

export function empty() {
  return { aString: "", aInt: 0, aFloat: 0.0, aBool: false, aByte: 0 };
}

export function marshal(x) {
  return (function (x) {
    return { aString: go2flow.identity(x.aString), aInt: go2flow.identity(x.aInt), aFloat: go2flow.identity(x.aFloat), aBool: go2flow.identity(x.aBool), aByte: go2flow.identity(x.aByte) };
  })(x);
}
export function unmarshal(x) {
  return (function (x) {
    return { aString: x.hasOwnProperty("aString") ? go2flow.identity(x.aString) : "", aInt: x.hasOwnProperty("aInt") ? go2flow.identity(x.aInt) : 0, aFloat: x.hasOwnProperty("aFloat") ? go2flow.identity(x.aFloat) : 0.0, aBool: x.hasOwnProperty("aBool") ? go2flow.identity(x.aBool) : false, aByte: x.hasOwnProperty("aByte") ? go2flow.identity(x.aByte) : 0 };
  })(x);
}


import * as go2flow from "./go2flow";

export function empty() {
  return { aString: "", aInt: 0, aFloat: 0.0, aBool: false, aByte: 0 };
}

export function marshal(x) {
  return (function (x) {
    return { aString: go2flow.identity(x.aString), aInt: go2flow.identity(x.aInt), aFloat: go2flow.identity(x.aFloat), aBool: go2flow.identity(x.aBool), aByte: go2flow.identity(x.aByte) };
  })(x);
}
export function unmarshal(x) {
  return (function (x) {
    return { aString: go2flow.identity(x.aString), aInt: go2flow.identity(x.aInt), aFloat: go2flow.identity(x.aFloat), aBool: go2flow.identity(x.aBool), aByte: go2flow.identity(x.aByte) };
  })(x);
}


import * as go2flow from "./go2flow";

export function empty() {
  return null;
}

export function marshal(x) {
  return go2flow.identity(x);
}
export function unmarshal(x) {
  return go2flow.identity(x);
}


import * as go2flow from "./go2flow";

export function empty() {
  return { aStringPtr: null, aIntPtr: null, aFloatPtr: null, aBoolPtr: null, aBytePtr: null };
}

export function marshal(x) {
  return (function (x) {
    return { aStringPtr: go2flow.identity(x.aStringPtr), aIntPtr: go2flow.identity(x.aIntPtr), aFloatPtr: go2flow.identity(x.aFloatPtr), aBoolPtr: go2flow.identity(x.aBoolPtr), aBytePtr: go2flow.identity(x.aBytePtr) };
  })(x);
}
export function unmarshal(x) {
  return (function (x) {
    return { aStringPtr: go2flow.identity(x.aStringPtr), aIntPtr: go2flow.identity(x.aIntPtr), aFloatPtr: go2flow.identity(x.aFloatPtr), aBoolPtr: go2flow.identity(x.aBoolPtr), aBytePtr: go2flow.identity(x.aBytePtr) };
  })(x);
}


import * as go2flow from "./go2flow";

export function empty() {
  return { aStringSlice: [], aIntSlice: [], aFloatSlice: [], aBoolSlice: [], aByteSlice: "" };
}

export function marshal(x) {
  return (function (x) {
    return { aStringSlice: go2flow.fmapArray(go2flow.identity)(x.aStringSlice), aIntSlice: go2flow.fmapArray(go2flow.identity)(x.aIntSlice), aFloatSlice: go2flow.fmapArray(go2flow.identity)(x.aFloatSlice), aBoolSlice: go2flow.fmapArray(go2flow.identity)(x.aBoolSlice), aByteSlice: btoa(x.aByteSlice) };
  })(x);
}
export function unmarshal(x) {
  return (function (x) {
    return { aStringSlice: go2flow.fmapArray(go2flow.identity)(x.aStringSlice), aIntSlice: go2flow.fmapArray(go2flow.identity)(x.aIntSlice), aFloatSlice: go2flow.fmapArray(go2flow.identity)(x.aFloatSlice), aBoolSlice: go2flow.fmapArray(go2flow.identity)(x.aBoolSlice), aByteSlice: atob(x.aByteSlice) };
  })(x);
}


import * as go2flow from "./go2flow";

import * as anonymous_T0 from "./anonymous_T0";
import * as anonymous_T1 from "./anonymous_T1";
import * as anonymous_T2 from "./anonymous_T2";
import * as anonymous_T3 from "./anonymous_T3";
import * as anonymous_T4 from "./anonymous_T4";

export function empty() {
  return { aStringObject: anonymous_T0.empty(), aIntObject: anonymous_T1.empty(), aFloatObject: anonymous_T2.empty(), aBoolObject: anonymous_T3.empty(), aByteObject: anonymous_T4.empty() };
}

export function marshal(x) {
  return (function (x) {
    return { aStringObject: anonymous_T0.marshal(x.aStringObject), aIntObject: anonymous_T1.marshal(x.aIntObject), aFloatObject: anonymous_T2.marshal(x.aFloatObject), aBoolObject: anonymous_T3.marshal(x.aBoolObject), aByteObject: anonymous_T4.marshal(x.aByteObject) };
  })(x);
}
export function unmarshal(x) {
  return (function (x) {
    return { aStringObject: anonymous_T0.unmarshal(x.aStringObject), aIntObject: anonymous_T1.unmarshal(x.aIntObject), aFloatObject: anonymous_T2.unmarshal(x.aFloatObject), aBoolObject: anonymous_T3.unmarshal(x.aBoolObject), aByteObject: anonymous_T4.unmarshal(x.aByteObject) };
  })(x);
}


import * as go2flow from "./go2flow";

import * as testdata_EmbeddedStruct from "./testdata_EmbeddedStruct";

export function empty() {
  return { aStringMap: new Map(), aIntMap: new Map(), aFloatMap: new Map(), aBoolMap: new Map(), aByteMap: new Map(), embeddedStruct: testdata_EmbeddedStruct.empty() };
}

export function marshal(x) {
  return (function (x) {
    return { aStringMap: go2flow.fmapObject(go2flow.identity)(x.aStringMap), aIntMap: go2flow.fmapObject(go2flow.identity)(x.aIntMap), aFloatMap: go2flow.fmapObject(go2flow.identity)(x.aFloatMap), aBoolMap: go2flow.fmapObject(go2flow.identity)(x.aBoolMap), aByteMap: go2flow.fmapObject(go2flow.identity)(x.aByteMap), EmbeddedStruct: testdata_EmbeddedStruct.marshal(x.embeddedStruct) };
  })(x);
}
export function unmarshal(x) {
  return (function (x) {
    return { aStringMap: go2flow.fmapObject(go2flow.identity)(x.aStringMap), aIntMap: go2flow.fmapObject(go2flow.identity)(x.aIntMap), aFloatMap: go2flow.fmapObject(go2flow.identity)(x.aFloatMap), aBoolMap: go2flow.fmapObject(go2flow.identity)(x.aBoolMap), aByteMap: go2flow.fmapObject(go2flow.identity)(x.aByteMap), embeddedStruct: testdata_EmbeddedStruct.unmarshal(x.EmbeddedStruct) };
  })(x);
}


import * as go2flow from "./go2flow";

import * as testdata_EmbeddedStruct from "./testdata_EmbeddedStruct";

export function empty() {
  return { embeddedStruct: testdata_EmbeddedStruct.empty() };
}

export function marshal(x) {
  return (function (x) {
    return { EmbeddedStruct: testdata_EmbeddedStruct.marshal(x.embeddedStruct) };
  })(x);
}
export function unmarshal(x) {
  return (function (x) {
    return { embeddedStruct: testdata_EmbeddedStruct.unmarshal(x.EmbeddedStruct) };
  })(x);
}


import * as go2flow from "./go2flow";

import * as testdata_Test2 from "./testdata_Test2";

export function empty() {
  return null;
}

export function marshal(x) {
  return go2flow.identity(x);
}
export function unmarshal(x) {
  return go2flow.identity(x);
}


import * as go2flow from "./go2flow";

import * as testdata_Test2 from "./testdata_Test2";

export function empty() {
  return [];
}

export function marshal(x) {
  return go2flow.fmapArray(go2flow.identity)(x);
}
export function unmarshal(x) {
  return go2flow.fmapArray(go2flow.identity)(x);
}


import * as go2flow from "./go2flow";

import * as time_Time from "./time_Time";

export function empty() {
  return { x: time_Time.empty() };
}

export function marshal(x) {
  return (function (x) {
    return { X: time_Time.marshal(x.x) };
  })(x);
}
export function unmarshal(x) {
  return (function (x) {
    return { x: time_Time.unmarshal(x.X) };
  })(x);
}


var partialTime = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{3}))?/;

var timeNumOffset = /^Z|([+-]\d{2}):(\d{2})$/;

export function empty() {
  var tmp = new window.Date(window.Date.UTC(0, 0, 1, 0, 0, 0, 0)); // 1900AD
  tmp.setUTCFullYear(0); // 0AD
  return tmp;
}

export function unmarshal(s) {
  var m = partialTime.exec(s);
  if (!m) {
    throw "unable to parse input as RFC3339";
  }

  var year = +m[1];
  var month = +m[2];
  var day = +m[3];
  var hour = +m[4];
  var minute = +m[5];
  var second = +m[6];
  var msec = +m[7] || 0;

  s = s.substr(m[0].length);
  m = timeNumOffset.exec(s);
  if (!m) {
    throw "unable to parse input as RFC3339";
  }

  var tzHour = +m[1] || 0;
  var tzMin = +m[2] || 0;

  var tzOffset = new window.Date().getTimezoneOffset() + tzHour * 60 + tzMin;
  return new window.Date(year, month - 1, day, hour, minute - tzOffset, second, msec);
}

export function marshal(d) {
  function pad(pad, n) {
    var str = "" + n;
    return pad.substring(0, pad.length - str.length) + str;
  }

  return pad("0000", d.getUTCFullYear()) + "-" + pad("00", d.getUTCMonth() + 1) + "-" + pad("00", d.getUTCDate()) + "T" + pad("00", d.getUTCHours()) + ":" + pad("00", d.getUTCMinutes()) + ":" + pad("00", d.getUTCSeconds()) + "Z";
}

//# sourceMappingURL=flow.js.map