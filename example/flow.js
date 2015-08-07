"use strict";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _testdata_Test1 = require("./testdata_Test1");

var testdata_Test1 = _interopRequireWildcard(_testdata_Test1);

var _testdata_Test2 = require("./testdata_Test2");

var testdata_Test2 = _interopRequireWildcard(_testdata_Test2);

var _testdata_Test3 = require("./testdata_Test3");

var testdata_Test3 = _interopRequireWildcard(_testdata_Test3);

var _testdata_Test4 = require("./testdata_Test4");

var testdata_Test4 = _interopRequireWildcard(_testdata_Test4);

var _testdata_Test5 = require("./testdata_Test5");

var testdata_Test5 = _interopRequireWildcard(_testdata_Test5);

var _testdata_Test6 = require("./testdata_Test6");

var testdata_Test6 = _interopRequireWildcard(_testdata_Test6);

var _testdata_Test7 = require("./testdata_Test7");

var testdata_Test7 = _interopRequireWildcard(_testdata_Test7);

var _testdata_Test8 = require("./testdata_Test8");

var testdata_Test8 = _interopRequireWildcard(_testdata_Test8);

var _testdata_Test9 = require("./testdata_Test9");

var testdata_Test9 = _interopRequireWildcard(_testdata_Test9);

var _testdata_Test10 = require("./testdata_Test10");

var testdata_Test10 = _interopRequireWildcard(_testdata_Test10);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.marshal = marshal;
exports.unmarshal = unmarshal;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _go2flow = require("./go2flow");

var go2flow = _interopRequireWildcard(_go2flow);

function empty() {
  return { x: "" };
}

function marshal(x) {
  return (function (x) {
    return { X: go2flow.identity(x.x) };
  })(x);
}

function unmarshal(x) {
  return (function (x) {
    return { x: go2flow.identity(x.X) };
  })(x);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.marshal = marshal;
exports.unmarshal = unmarshal;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _go2flow = require("./go2flow");

var go2flow = _interopRequireWildcard(_go2flow);

function empty() {
  return { x: 0 };
}

function marshal(x) {
  return (function (x) {
    return { X: go2flow.identity(x.x) };
  })(x);
}

function unmarshal(x) {
  return (function (x) {
    return { x: go2flow.identity(x.X) };
  })(x);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.marshal = marshal;
exports.unmarshal = unmarshal;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _go2flow = require("./go2flow");

var go2flow = _interopRequireWildcard(_go2flow);

function empty() {
  return { x: 0.0 };
}

function marshal(x) {
  return (function (x) {
    return { X: go2flow.identity(x.x) };
  })(x);
}

function unmarshal(x) {
  return (function (x) {
    return { x: go2flow.identity(x.X) };
  })(x);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.marshal = marshal;
exports.unmarshal = unmarshal;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _go2flow = require("./go2flow");

var go2flow = _interopRequireWildcard(_go2flow);

function empty() {
  return { x: false };
}

function marshal(x) {
  return (function (x) {
    return { X: go2flow.identity(x.x) };
  })(x);
}

function unmarshal(x) {
  return (function (x) {
    return { x: go2flow.identity(x.X) };
  })(x);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identity = identity;
exports.fmapArray = fmapArray;
exports.fmapObject = fmapObject;

function identity(x) {
  return x;
}

function fmapArray(fn) {
  return function (x) {
    if (!x) {
      return [];
    }
    return x.map(fn);
  };
}

function fmapObject(fn) {
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.marshal = marshal;
exports.unmarshal = unmarshal;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _go2flow = require("./go2flow");

var go2flow = _interopRequireWildcard(_go2flow);

function empty() {
  return { aString: "", aInt: 0, aFloat: 0.0, aBool: false };
}

function marshal(x) {
  return (function (x) {
    return { aString: go2flow.identity(x.aString), aInt: go2flow.identity(x.aInt), aFloat: go2flow.identity(x.aFloat), aBool: go2flow.identity(x.aBool) };
  })(x);
}

function unmarshal(x) {
  return (function (x) {
    return { aString: x.hasOwnProperty("aString") ? go2flow.identity(x.aString) : "", aInt: x.hasOwnProperty("aInt") ? go2flow.identity(x.aInt) : 0, aFloat: x.hasOwnProperty("aFloat") ? go2flow.identity(x.aFloat) : 0.0, aBool: x.hasOwnProperty("aBool") ? go2flow.identity(x.aBool) : false };
  })(x);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.marshal = marshal;
exports.unmarshal = unmarshal;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _go2flow = require("./go2flow");

var go2flow = _interopRequireWildcard(_go2flow);

function empty() {
  return { aString: "", aInt: 0, aFloat: 0.0, aBool: false };
}

function marshal(x) {
  return (function (x) {
    return { aString: go2flow.identity(x.aString), aInt: go2flow.identity(x.aInt), aFloat: go2flow.identity(x.aFloat), aBool: go2flow.identity(x.aBool) };
  })(x);
}

function unmarshal(x) {
  return (function (x) {
    return { aString: go2flow.identity(x.aString), aInt: go2flow.identity(x.aInt), aFloat: go2flow.identity(x.aFloat), aBool: go2flow.identity(x.aBool) };
  })(x);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.marshal = marshal;
exports.unmarshal = unmarshal;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _go2flow = require("./go2flow");

var go2flow = _interopRequireWildcard(_go2flow);

function empty() {
  return null;
}

function marshal(x) {
  return go2flow.identity(x);
}

function unmarshal(x) {
  return go2flow.identity(x);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.marshal = marshal;
exports.unmarshal = unmarshal;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _go2flow = require("./go2flow");

var go2flow = _interopRequireWildcard(_go2flow);

function empty() {
  return { aStringPtr: null, aIntPtr: null, aFloatPtr: null, aBoolPtr: null };
}

function marshal(x) {
  return (function (x) {
    return { aStringPtr: go2flow.identity(x.aStringPtr), aIntPtr: go2flow.identity(x.aIntPtr), aFloatPtr: go2flow.identity(x.aFloatPtr), aBoolPtr: go2flow.identity(x.aBoolPtr) };
  })(x);
}

function unmarshal(x) {
  return (function (x) {
    return { aStringPtr: go2flow.identity(x.aStringPtr), aIntPtr: go2flow.identity(x.aIntPtr), aFloatPtr: go2flow.identity(x.aFloatPtr), aBoolPtr: go2flow.identity(x.aBoolPtr) };
  })(x);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.marshal = marshal;
exports.unmarshal = unmarshal;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _go2flow = require("./go2flow");

var go2flow = _interopRequireWildcard(_go2flow);

function empty() {
  return { aStringSlice: [], aIntSlice: [], aFloatSlice: [], aBoolSlice: [] };
}

function marshal(x) {
  return (function (x) {
    return { aStringSlice: go2flow.fmapArray(go2flow.identity)(x.aStringSlice), aIntSlice: go2flow.fmapArray(go2flow.identity)(x.aIntSlice), aFloatSlice: go2flow.fmapArray(go2flow.identity)(x.aFloatSlice), aBoolSlice: go2flow.fmapArray(go2flow.identity)(x.aBoolSlice) };
  })(x);
}

function unmarshal(x) {
  return (function (x) {
    return { aStringSlice: go2flow.fmapArray(go2flow.identity)(x.aStringSlice), aIntSlice: go2flow.fmapArray(go2flow.identity)(x.aIntSlice), aFloatSlice: go2flow.fmapArray(go2flow.identity)(x.aFloatSlice), aBoolSlice: go2flow.fmapArray(go2flow.identity)(x.aBoolSlice) };
  })(x);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.marshal = marshal;
exports.unmarshal = unmarshal;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _go2flow = require("./go2flow");

var go2flow = _interopRequireWildcard(_go2flow);

var _anonymous_T0 = require("./anonymous_T0");

var anonymous_T0 = _interopRequireWildcard(_anonymous_T0);

var _anonymous_T1 = require("./anonymous_T1");

var anonymous_T1 = _interopRequireWildcard(_anonymous_T1);

var _anonymous_T2 = require("./anonymous_T2");

var anonymous_T2 = _interopRequireWildcard(_anonymous_T2);

var _anonymous_T3 = require("./anonymous_T3");

var anonymous_T3 = _interopRequireWildcard(_anonymous_T3);

function empty() {
  return { aStringObject: anonymous_T0.empty(), aIntObject: anonymous_T1.empty(), aFloatObject: anonymous_T2.empty(), aBoolObject: anonymous_T3.empty() };
}

function marshal(x) {
  return (function (x) {
    return { aStringObject: anonymous_T0.marshal(x.aStringObject), aIntObject: anonymous_T1.marshal(x.aIntObject), aFloatObject: anonymous_T2.marshal(x.aFloatObject), aBoolObject: anonymous_T3.marshal(x.aBoolObject) };
  })(x);
}

function unmarshal(x) {
  return (function (x) {
    return { aStringObject: anonymous_T0.unmarshal(x.aStringObject), aIntObject: anonymous_T1.unmarshal(x.aIntObject), aFloatObject: anonymous_T2.unmarshal(x.aFloatObject), aBoolObject: anonymous_T3.unmarshal(x.aBoolObject) };
  })(x);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.marshal = marshal;
exports.unmarshal = unmarshal;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _go2flow = require("./go2flow");

var go2flow = _interopRequireWildcard(_go2flow);

var _testdata_EmbeddedStruct = require("./testdata_EmbeddedStruct");

var testdata_EmbeddedStruct = _interopRequireWildcard(_testdata_EmbeddedStruct);

function empty() {
  return { aStringMap: new Map(), aIntMap: new Map(), aFloatMap: new Map(), aBoolMap: new Map(), embeddedStruct: testdata_EmbeddedStruct.empty() };
}

function marshal(x) {
  return (function (x) {
    return { aStringMap: go2flow.fmapObject(go2flow.identity)(x.aStringMap), aIntMap: go2flow.fmapObject(go2flow.identity)(x.aIntMap), aFloatMap: go2flow.fmapObject(go2flow.identity)(x.aFloatMap), aBoolMap: go2flow.fmapObject(go2flow.identity)(x.aBoolMap), EmbeddedStruct: testdata_EmbeddedStruct.marshal(x.embeddedStruct) };
  })(x);
}

function unmarshal(x) {
  return (function (x) {
    return { aStringMap: go2flow.fmapObject(go2flow.identity)(x.aStringMap), aIntMap: go2flow.fmapObject(go2flow.identity)(x.aIntMap), aFloatMap: go2flow.fmapObject(go2flow.identity)(x.aFloatMap), aBoolMap: go2flow.fmapObject(go2flow.identity)(x.aBoolMap), embeddedStruct: testdata_EmbeddedStruct.unmarshal(x.EmbeddedStruct) };
  })(x);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.marshal = marshal;
exports.unmarshal = unmarshal;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _go2flow = require("./go2flow");

var go2flow = _interopRequireWildcard(_go2flow);

var _testdata_EmbeddedStruct = require("./testdata_EmbeddedStruct");

var testdata_EmbeddedStruct = _interopRequireWildcard(_testdata_EmbeddedStruct);

function empty() {
  return { embeddedStruct: testdata_EmbeddedStruct.empty() };
}

function marshal(x) {
  return (function (x) {
    return { EmbeddedStruct: testdata_EmbeddedStruct.marshal(x.embeddedStruct) };
  })(x);
}

function unmarshal(x) {
  return (function (x) {
    return { embeddedStruct: testdata_EmbeddedStruct.unmarshal(x.EmbeddedStruct) };
  })(x);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.marshal = marshal;
exports.unmarshal = unmarshal;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _go2flow = require("./go2flow");

var go2flow = _interopRequireWildcard(_go2flow);

var _testdata_Test2 = require("./testdata_Test2");

var testdata_Test2 = _interopRequireWildcard(_testdata_Test2);

function empty() {
  return null;
}

function marshal(x) {
  return go2flow.identity(x);
}

function unmarshal(x) {
  return go2flow.identity(x);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.marshal = marshal;
exports.unmarshal = unmarshal;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _go2flow = require("./go2flow");

var go2flow = _interopRequireWildcard(_go2flow);

var _testdata_Test2 = require("./testdata_Test2");

var testdata_Test2 = _interopRequireWildcard(_testdata_Test2);

function empty() {
  return [];
}

function marshal(x) {
  return go2flow.fmapArray(go2flow.identity)(x);
}

function unmarshal(x) {
  return go2flow.fmapArray(go2flow.identity)(x);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.marshal = marshal;
exports.unmarshal = unmarshal;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _go2flow = require("./go2flow");

var go2flow = _interopRequireWildcard(_go2flow);

var _time_Time = require("./time_Time");

var time_Time = _interopRequireWildcard(_time_Time);

function empty() {
  return { x: time_Time.empty() };
}

function marshal(x) {
  return (function (x) {
    return { X: time_Time.marshal(x.x) };
  })(x);
}

function unmarshal(x) {
  return (function (x) {
    return { x: time_Time.unmarshal(x.X) };
  })(x);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = empty;
exports.unmarshal = unmarshal;
exports.marshal = marshal;

var partialTime = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{3}))?/;

var timeNumOffset = /^Z|([+-]\d{2}):(\d{2})$/;

function empty() {
  var tmp = new window.Date(window.Date.UTC(0, 0, 1, 0, 0, 0, 0)); // 1900AD
  tmp.setUTCFullYear(0); // 0AD
  return tmp;
}

function unmarshal(s) {
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

function marshal(d) {
  function pad(pad, n) {
    var str = "" + n;
    return pad.substring(0, pad.length - str.length) + str;
  }

  return pad("0000", d.getUTCFullYear()) + "-" + pad("00", d.getUTCMonth() + 1) + "-" + pad("00", d.getUTCDate()) + "T" + pad("00", d.getUTCHours()) + ":" + pad("00", d.getUTCMinutes()) + ":" + pad("00", d.getUTCSeconds()) + "Z";
}

//# sourceMappingURL=flow.js.map