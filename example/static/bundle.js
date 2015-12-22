/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _getPrototypeOf = __webpack_require__(1);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _possibleConstructorReturn2 = __webpack_require__(13);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _get2 = __webpack_require__(39);
	
	var _get3 = _interopRequireDefault(_get2);
	
	var _inherits2 = __webpack_require__(43);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _stringify = __webpack_require__(50);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _classCallCheck2 = __webpack_require__(52);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(53);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _example_Test = __webpack_require__(56);
	
	var example_Test1 = _interopRequireWildcard(_example_Test);
	
	var _example_Test2 = __webpack_require__(58);
	
	var example_Test2 = _interopRequireWildcard(_example_Test2);
	
	var _example_Test3 = __webpack_require__(59);
	
	var example_Test3 = _interopRequireWildcard(_example_Test3);
	
	var _example_Test4 = __webpack_require__(60);
	
	var example_Test4 = _interopRequireWildcard(_example_Test4);
	
	var _example_Test5 = __webpack_require__(66);
	
	var example_Test5 = _interopRequireWildcard(_example_Test5);
	
	var _example_Test6 = __webpack_require__(94);
	
	var example_Test6 = _interopRequireWildcard(_example_Test6);
	
	var _example_Test7 = __webpack_require__(95);
	
	var example_Test7 = _interopRequireWildcard(_example_Test7);
	
	var _example_Test8 = __webpack_require__(96);
	
	var example_Test8 = _interopRequireWildcard(_example_Test8);
	
	var _example_Test9 = __webpack_require__(97);
	
	var example_Test9 = _interopRequireWildcard(_example_Test9);
	
	var _example_Test10 = __webpack_require__(99);
	
	var example_Test10 = _interopRequireWildcard(_example_Test10);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Wrapper provides type-safe GET and POST methods so far.
	
	var Wrapper = (function () {
	  function Wrapper() {
	    (0, _classCallCheck3.default)(this, Wrapper);
	  }
	
	  (0, _createClass3.default)(Wrapper, [{
	    key: "_GET",
	    value: function _GET(done, fail) {
	      var request = $.ajax({
	        method: "GET",
	        dataType: "json",
	        url: this.url
	      });
	      request.done((function (data) {
	        done(this.unmarshal(data));
	      }).bind(this));
	      request.fail(fail);
	    }
	  }, {
	    key: "_POST",
	    value: function _POST(data, done, fail) {
	      var request = $.ajax({
	        method: "POST",
	        contentType: "application/json",
	        dataType: "json",
	        url: this.url,
	        data: (0, _stringify2.default)(this.marshal(data))
	      });
	      request.done(done);
	      request.fail(fail);
	    }
	  }]);
	  return Wrapper;
	})();
	
	// IntegrationTest exercises _GET and _POST methods against an expected object.
	
	var IntegrationTest = (function (_Wrapper) {
	  (0, _inherits3.default)(IntegrationTest, _Wrapper);
	
	  function IntegrationTest() {
	    (0, _classCallCheck3.default)(this, IntegrationTest);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(IntegrationTest).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(IntegrationTest, [{
	    key: "get",
	    value: function get() {
	      (0, _get3.default)((0, _getPrototypeOf2.default)(IntegrationTest.prototype), "_GET", this).call(this, (function (x) {
	        if (_.isEqual(x, this.expected)) {
	          console.log("[ OK ] get(%o)", this.url);
	        } else {
	          console.log("[FAIL] get(%o): %o vs. %o", this.url, x, this.expected);
	        }
	      }).bind(this), (function () {
	        console.log("[FAIL] get(%o)", this.url);
	      }).bind(this));
	    }
	  }, {
	    key: "post",
	    value: function post() {
	      (0, _get3.default)((0, _getPrototypeOf2.default)(IntegrationTest.prototype), "_POST", this).call(this, this.expected, (function () {
	        console.log("[ OK ] post(%o)", this.url);
	      }).bind(this), (function () {
	        console.log("[FAIL] post(%o)", this.url);
	      }).bind(this));
	    }
	  }, {
	    key: "run",
	    value: function run() {
	      this.get();
	      this.post();
	    }
	  }]);
	  return IntegrationTest;
	})(Wrapper);
	
	var tests = [];
	
	(function test1_empty() {
	  var test1 = new IntegrationTest();
	  test1.url = "/test1_empty";
	  test1.marshal = example_Test1.marshal;
	  test1.unmarshal = example_Test1.unmarshal;
	  test1.empty = example_Test1.empty;
	  test1.expected = example_Test1.empty();
	  tests.push(test1);
	})();
	
	(function test1_full() {
	  var test1 = new IntegrationTest();
	  test1.url = "/test1_full";
	  test1.marshal = example_Test1.marshal;
	  test1.unmarshal = example_Test1.unmarshal;
	  test1.empty = example_Test1.empty;
	  test1.expected = {
	    aString: "a string",
	    aInt: 1,
	    aFloat: 1.2,
	    aBool: true,
	    aByte: 65
	  };
	  tests.push(test1);
	})();
	
	(function test2_empty() {
	  var test2 = new IntegrationTest();
	  test2.url = "/test2_empty";
	  test2.marshal = example_Test2.marshal;
	  test2.unmarshal = example_Test2.unmarshal;
	  test2.empty = example_Test2.empty;
	  test2.expected = example_Test2.empty();
	  tests.push(test2);
	})();
	
	(function test2_full() {
	  var test2 = new IntegrationTest();
	  test2.url = "/test2_full";
	  test2.marshal = example_Test2.marshal;
	  test2.unmarshal = example_Test2.unmarshal;
	  test2.empty = example_Test2.empty;
	  test2.expected = {
	    aStringPtr: "a string",
	    aIntPtr: 1,
	    aFloatPtr: 1.2,
	    aBoolPtr: true,
	    aBytePtr: 65
	  };
	  tests.push(test2);
	})();
	
	(function test3_empty() {
	  var test3 = new IntegrationTest();
	  test3.url = "/test3_empty";
	  test3.marshal = example_Test3.marshal;
	  test3.unmarshal = example_Test3.unmarshal;
	  test3.empty = example_Test3.empty;
	  test3.expected = example_Test3.empty();
	  tests.push(test3);
	})();
	
	(function test3_full() {
	  var test3 = new IntegrationTest();
	  test3.url = "/test3_full";
	  test3.marshal = example_Test3.marshal;
	  test3.unmarshal = example_Test3.unmarshal;
	  test3.empty = example_Test3.empty;
	  test3.expected = {
	    aStringSlice: ["a string"],
	    aIntSlice: [1],
	    aFloatSlice: [1.2],
	    aBoolSlice: [true],
	    aByteSlice: "A"
	  };
	  tests.push(test3);
	})();
	
	(function test4_empty() {
	  var test4 = new IntegrationTest();
	  test4.url = "/test4_empty";
	  test4.marshal = example_Test4.marshal;
	  test4.unmarshal = example_Test4.unmarshal;
	  test4.empty = example_Test4.empty;
	  test4.expected = example_Test4.empty();
	  tests.push(test4);
	})();
	
	(function test4_full() {
	  var test4 = new IntegrationTest();
	  test4.url = "/test4_full";
	  test4.marshal = example_Test4.marshal;
	  test4.unmarshal = example_Test4.unmarshal;
	  test4.empty = example_Test4.empty;
	  test4.expected = {
	    aStringObject: { x: "a string" },
	    aIntObject: { x: 1 },
	    aFloatObject: { x: 1.2 },
	    aBoolObject: { x: true },
	    aByteObject: { x: 65 }
	  };
	  tests.push(test4);
	})();
	
	// Runs all tests.
	tests.forEach(function (test) {
	  test.run();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(9).Object.getPrototypeOf;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(4);
	
	__webpack_require__(6)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(5);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(7)
	  , core    = __webpack_require__(9)
	  , fails   = __webpack_require__(12);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(8)
	  , core      = __webpack_require__(9)
	  , ctx       = __webpack_require__(10)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 8 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 9 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(11);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof2 = __webpack_require__(14);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};
	
	exports.__esModule = true;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Symbol = __webpack_require__(15)["default"];
	
	exports["default"] = function (obj) {
	  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
	};
	
	exports.__esModule = true;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(16), __esModule: true };

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(17);
	__webpack_require__(38);
	module.exports = __webpack_require__(9).Symbol;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(18)
	  , global         = __webpack_require__(8)
	  , has            = __webpack_require__(19)
	  , DESCRIPTORS    = __webpack_require__(20)
	  , $export        = __webpack_require__(7)
	  , redefine       = __webpack_require__(21)
	  , $fails         = __webpack_require__(12)
	  , shared         = __webpack_require__(24)
	  , setToStringTag = __webpack_require__(25)
	  , uid            = __webpack_require__(27)
	  , wks            = __webpack_require__(26)
	  , keyOf          = __webpack_require__(28)
	  , $names         = __webpack_require__(32)
	  , enumKeys       = __webpack_require__(33)
	  , isArray        = __webpack_require__(34)
	  , anObject       = __webpack_require__(35)
	  , toIObject      = __webpack_require__(29)
	  , createDesc     = __webpack_require__(23)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(37)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 18 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(12)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(22);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(18)
	  , createDesc = __webpack_require__(23);
	module.exports = __webpack_require__(20) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(8)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(18).setDesc
	  , has = __webpack_require__(19)
	  , TAG = __webpack_require__(26)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(24)('wks')
	  , uid    = __webpack_require__(27)
	  , Symbol = __webpack_require__(8).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(18)
	  , toIObject = __webpack_require__(29);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(30)
	  , defined = __webpack_require__(5);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(31);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(29)
	  , getNames  = __webpack_require__(18).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(18);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(31);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(36);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 38 */
/***/ function(module, exports) {



/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(40)["default"];
	
	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;
	
	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    _again = false;
	    if (object === null) object = Function.prototype;
	
	    var desc = _Object$getOwnPropertyDescriptor(object, property);
	
	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);
	
	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        desc = parent = undefined;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;
	
	      if (getter === undefined) {
	        return undefined;
	      }
	
	      return getter.call(receiver);
	    }
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(41), __esModule: true };

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(18);
	__webpack_require__(42);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(29);
	
	__webpack_require__(6)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$create = __webpack_require__(44)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(46)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(45), __esModule: true };

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(18);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(47), __esModule: true };

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48);
	module.exports = __webpack_require__(9).Object.setPrototypeOf;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(7);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(49).set});

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(18).getDesc
	  , isObject = __webpack_require__(36)
	  , anObject = __webpack_require__(35);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(10)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(51), __esModule: true };

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(9);
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	"use strict";
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _defineProperty = __webpack_require__(54);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(55), __esModule: true };

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(18);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.empty = empty;
	exports.marshal = marshal;
	exports.unmarshal = unmarshal;
	
	var _go2flow = __webpack_require__(57);
	
	var go2flow = _interopRequireWildcard(_go2flow);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function empty() {
	  return { aString: "", aInt: 0, aFloat: 0.0, aBool: false, aByte: 0 };
	}
	function marshal(x) {
	  return (function (x) {
	    return { aString: go2flow.identity(x.aString), aInt: go2flow.identity(x.aInt), aFloat: go2flow.identity(x.aFloat), aBool: go2flow.identity(x.aBool), aByte: go2flow.identity(x.aByte) };
	  })(x);
	}
	function unmarshal(x) {
	  return (function (x) {
	    return { aString: go2flow.identity(x.aString), aInt: go2flow.identity(x.aInt), aFloat: go2flow.identity(x.aFloat), aBool: go2flow.identity(x.aBool), aByte: go2flow.identity(x.aByte) };
	  })(x);
	}

/***/ },
/* 57 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.identity = identity;
	exports.fmapArray = fmapArray;
	exports.fmapObject = fmapObject;
	exports.bytesUnmarshal = bytesUnmarshal;
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
	
	function bytesUnmarshal(x) {
	  if (!x) {
	    return "";
	  }
	  return atob(x);
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.empty = empty;
	exports.marshal = marshal;
	exports.unmarshal = unmarshal;
	
	var _go2flow = __webpack_require__(57);
	
	var go2flow = _interopRequireWildcard(_go2flow);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function empty() {
	  return { aStringPtr: null, aIntPtr: null, aFloatPtr: null, aBoolPtr: null, aBytePtr: null };
	}
	function marshal(x) {
	  return (function (x) {
	    return { aStringPtr: go2flow.identity(x.aStringPtr), aIntPtr: go2flow.identity(x.aIntPtr), aFloatPtr: go2flow.identity(x.aFloatPtr), aBoolPtr: go2flow.identity(x.aBoolPtr), aBytePtr: go2flow.identity(x.aBytePtr) };
	  })(x);
	}
	function unmarshal(x) {
	  return (function (x) {
	    return { aStringPtr: go2flow.identity(x.aStringPtr), aIntPtr: go2flow.identity(x.aIntPtr), aFloatPtr: go2flow.identity(x.aFloatPtr), aBoolPtr: go2flow.identity(x.aBoolPtr), aBytePtr: go2flow.identity(x.aBytePtr) };
	  })(x);
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.empty = empty;
	exports.marshal = marshal;
	exports.unmarshal = unmarshal;
	
	var _go2flow = __webpack_require__(57);
	
	var go2flow = _interopRequireWildcard(_go2flow);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function empty() {
	  return { aStringSlice: [], aIntSlice: [], aFloatSlice: [], aBoolSlice: [], aByteSlice: "" };
	}
	function marshal(x) {
	  return (function (x) {
	    return { aStringSlice: go2flow.fmapArray(go2flow.identity)(x.aStringSlice), aIntSlice: go2flow.fmapArray(go2flow.identity)(x.aIntSlice), aFloatSlice: go2flow.fmapArray(go2flow.identity)(x.aFloatSlice), aBoolSlice: go2flow.fmapArray(go2flow.identity)(x.aBoolSlice), aByteSlice: btoa(x.aByteSlice) };
	  })(x);
	}
	function unmarshal(x) {
	  return (function (x) {
	    return { aStringSlice: go2flow.fmapArray(go2flow.identity)(x.aStringSlice), aIntSlice: go2flow.fmapArray(go2flow.identity)(x.aIntSlice), aFloatSlice: go2flow.fmapArray(go2flow.identity)(x.aFloatSlice), aBoolSlice: go2flow.fmapArray(go2flow.identity)(x.aBoolSlice), aByteSlice: go2flow.bytesUnmarshal(x.aByteSlice) };
	  })(x);
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.empty = empty;
	exports.marshal = marshal;
	exports.unmarshal = unmarshal;
	
	var _go2flow = __webpack_require__(57);
	
	var go2flow = _interopRequireWildcard(_go2flow);
	
	var _anonymous_T = __webpack_require__(61);
	
	var anonymous_T1 = _interopRequireWildcard(_anonymous_T);
	
	var _anonymous_T2 = __webpack_require__(62);
	
	var anonymous_T2 = _interopRequireWildcard(_anonymous_T2);
	
	var _anonymous_T3 = __webpack_require__(63);
	
	var anonymous_T3 = _interopRequireWildcard(_anonymous_T3);
	
	var _anonymous_T4 = __webpack_require__(64);
	
	var anonymous_T4 = _interopRequireWildcard(_anonymous_T4);
	
	var _anonymous_T5 = __webpack_require__(65);
	
	var anonymous_T0 = _interopRequireWildcard(_anonymous_T5);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function empty() {
	  return { aStringObject: anonymous_T0.empty(), aIntObject: anonymous_T1.empty(), aFloatObject: anonymous_T2.empty(), aBoolObject: anonymous_T3.empty(), aByteObject: anonymous_T4.empty() };
	}
	function marshal(x) {
	  return (function (x) {
	    return { aStringObject: anonymous_T0.marshal(x.aStringObject), aIntObject: anonymous_T1.marshal(x.aIntObject), aFloatObject: anonymous_T2.marshal(x.aFloatObject), aBoolObject: anonymous_T3.marshal(x.aBoolObject), aByteObject: anonymous_T4.marshal(x.aByteObject) };
	  })(x);
	}
	function unmarshal(x) {
	  return (function (x) {
	    return { aStringObject: anonymous_T0.unmarshal(x.aStringObject), aIntObject: anonymous_T1.unmarshal(x.aIntObject), aFloatObject: anonymous_T2.unmarshal(x.aFloatObject), aBoolObject: anonymous_T3.unmarshal(x.aBoolObject), aByteObject: anonymous_T4.unmarshal(x.aByteObject) };
	  })(x);
	}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.empty = empty;
	exports.marshal = marshal;
	exports.unmarshal = unmarshal;
	
	var _go2flow = __webpack_require__(57);
	
	var go2flow = _interopRequireWildcard(_go2flow);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.empty = empty;
	exports.marshal = marshal;
	exports.unmarshal = unmarshal;
	
	var _go2flow = __webpack_require__(57);
	
	var go2flow = _interopRequireWildcard(_go2flow);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.empty = empty;
	exports.marshal = marshal;
	exports.unmarshal = unmarshal;
	
	var _go2flow = __webpack_require__(57);
	
	var go2flow = _interopRequireWildcard(_go2flow);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.empty = empty;
	exports.marshal = marshal;
	exports.unmarshal = unmarshal;
	
	var _go2flow = __webpack_require__(57);
	
	var go2flow = _interopRequireWildcard(_go2flow);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.empty = empty;
	exports.marshal = marshal;
	exports.unmarshal = unmarshal;
	
	var _go2flow = __webpack_require__(57);
	
	var go2flow = _interopRequireWildcard(_go2flow);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.empty = empty;
	exports.marshal = marshal;
	exports.unmarshal = unmarshal;
	
	var _map = __webpack_require__(67);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _go2flow = __webpack_require__(57);
	
	var go2flow = _interopRequireWildcard(_go2flow);
	
	var _example_EmbeddedStruct = __webpack_require__(93);
	
	var example_EmbeddedStruct = _interopRequireWildcard(_example_EmbeddedStruct);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function empty() {
	  return { aStringMap: new _map2.default(), aIntMap: new _map2.default(), aFloatMap: new _map2.default(), aBoolMap: new _map2.default(), aByteMap: new _map2.default(), embeddedStruct: example_EmbeddedStruct.empty() };
	}
	function marshal(x) {
	  return (function (x) {
	    return { aStringMap: go2flow.fmapObject(go2flow.identity)(x.aStringMap), aIntMap: go2flow.fmapObject(go2flow.identity)(x.aIntMap), aFloatMap: go2flow.fmapObject(go2flow.identity)(x.aFloatMap), aBoolMap: go2flow.fmapObject(go2flow.identity)(x.aBoolMap), aByteMap: go2flow.fmapObject(go2flow.identity)(x.aByteMap), EmbeddedStruct: example_EmbeddedStruct.marshal(x.embeddedStruct) };
	  })(x);
	}
	function unmarshal(x) {
	  return (function (x) {
	    return { aStringMap: go2flow.fmapObject(go2flow.identity)(x.aStringMap), aIntMap: go2flow.fmapObject(go2flow.identity)(x.aIntMap), aFloatMap: go2flow.fmapObject(go2flow.identity)(x.aFloatMap), aBoolMap: go2flow.fmapObject(go2flow.identity)(x.aBoolMap), aByteMap: go2flow.fmapObject(go2flow.identity)(x.aByteMap), embeddedStruct: example_EmbeddedStruct.unmarshal(x.EmbeddedStruct) };
	  })(x);
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(38);
	__webpack_require__(69);
	__webpack_require__(75);
	__webpack_require__(79);
	__webpack_require__(91);
	module.exports = __webpack_require__(9).Map;

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(70)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(72)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(71)
	  , defined   = __webpack_require__(5);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(37)
	  , $export        = __webpack_require__(7)
	  , redefine       = __webpack_require__(21)
	  , hide           = __webpack_require__(22)
	  , has            = __webpack_require__(19)
	  , Iterators      = __webpack_require__(73)
	  , $iterCreate    = __webpack_require__(74)
	  , setToStringTag = __webpack_require__(25)
	  , getProto       = __webpack_require__(18).getProto
	  , ITERATOR       = __webpack_require__(26)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(18)
	  , descriptor     = __webpack_require__(23)
	  , setToStringTag = __webpack_require__(25)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(22)(IteratorPrototype, __webpack_require__(26)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(76);
	var Iterators = __webpack_require__(73);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(77)
	  , step             = __webpack_require__(78)
	  , Iterators        = __webpack_require__(73)
	  , toIObject        = __webpack_require__(29);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(72)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(80);
	
	// 23.1 Map Objects
	__webpack_require__(90)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(18)
	  , hide         = __webpack_require__(22)
	  , redefineAll  = __webpack_require__(81)
	  , ctx          = __webpack_require__(10)
	  , strictNew    = __webpack_require__(82)
	  , defined      = __webpack_require__(5)
	  , forOf        = __webpack_require__(83)
	  , $iterDefine  = __webpack_require__(72)
	  , step         = __webpack_require__(78)
	  , ID           = __webpack_require__(27)('id')
	  , $has         = __webpack_require__(19)
	  , isObject     = __webpack_require__(36)
	  , setSpecies   = __webpack_require__(89)
	  , DESCRIPTORS  = __webpack_require__(20)
	  , isExtensible = Object.isExtensible || isObject
	  , SIZE         = DESCRIPTORS ? '_s' : 'size'
	  , id           = 0;
	
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	};
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(21);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(10)
	  , call        = __webpack_require__(84)
	  , isArrayIter = __webpack_require__(85)
	  , anObject    = __webpack_require__(35)
	  , toLength    = __webpack_require__(86)
	  , getIterFn   = __webpack_require__(87);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(35);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(73)
	  , ITERATOR   = __webpack_require__(26)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(71)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(88)
	  , ITERATOR  = __webpack_require__(26)('iterator')
	  , Iterators = __webpack_require__(73);
	module.exports = __webpack_require__(9).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(31)
	  , TAG = __webpack_require__(26)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var core        = __webpack_require__(9)
	  , $           = __webpack_require__(18)
	  , DESCRIPTORS = __webpack_require__(20)
	  , SPECIES     = __webpack_require__(26)('species');
	
	module.exports = function(KEY){
	  var C = core[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(18)
	  , global         = __webpack_require__(8)
	  , $export        = __webpack_require__(7)
	  , fails          = __webpack_require__(12)
	  , hide           = __webpack_require__(22)
	  , redefineAll    = __webpack_require__(81)
	  , forOf          = __webpack_require__(83)
	  , strictNew      = __webpack_require__(82)
	  , isObject       = __webpack_require__(36)
	  , setToStringTag = __webpack_require__(25)
	  , DESCRIPTORS    = __webpack_require__(20);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	  } else {
	    C = wrapper(function(target, iterable){
	      strictNew(target, C, NAME);
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(7);
	
	$export($export.P, 'Map', {toJSON: __webpack_require__(92)('Map')});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(83)
	  , classof = __webpack_require__(88);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.empty = empty;
	exports.marshal = marshal;
	exports.unmarshal = unmarshal;
	
	var _go2flow = __webpack_require__(57);
	
	var go2flow = _interopRequireWildcard(_go2flow);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function empty() {
	  return { aString: "", aInt: 0, aFloat: 0.0, aBool: false, aByte: 0 };
	}
	function marshal(x) {
	  return (function (x) {
	    return { aString: go2flow.identity(x.aString), aInt: go2flow.identity(x.aInt), aFloat: go2flow.identity(x.aFloat), aBool: go2flow.identity(x.aBool), aByte: go2flow.identity(x.aByte) };
	  })(x);
	}
	function unmarshal(x) {
	  return (function (x) {
	    return { aString: x.hasOwnProperty("aString") ? go2flow.identity(x.aString) : "", aInt: x.hasOwnProperty("aInt") ? go2flow.identity(x.aInt) : 0, aFloat: x.hasOwnProperty("aFloat") ? go2flow.identity(x.aFloat) : 0.0, aBool: x.hasOwnProperty("aBool") ? go2flow.identity(x.aBool) : false, aByte: x.hasOwnProperty("aByte") ? go2flow.identity(x.aByte) : 0 };
	  })(x);
	}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.empty = empty;
	exports.marshal = marshal;
	exports.unmarshal = unmarshal;
	
	var _go2flow = __webpack_require__(57);
	
	var go2flow = _interopRequireWildcard(_go2flow);
	
	var _example_EmbeddedStruct = __webpack_require__(93);
	
	var example_EmbeddedStruct = _interopRequireWildcard(_example_EmbeddedStruct);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function empty() {
	  return { embeddedStruct: example_EmbeddedStruct.empty() };
	}
	function marshal(x) {
	  return (function (x) {
	    return { EmbeddedStruct: example_EmbeddedStruct.marshal(x.embeddedStruct) };
	  })(x);
	}
	function unmarshal(x) {
	  return (function (x) {
	    return { embeddedStruct: example_EmbeddedStruct.unmarshal(x.EmbeddedStruct) };
	  })(x);
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.empty = empty;
	exports.marshal = marshal;
	exports.unmarshal = unmarshal;
	
	var _go2flow = __webpack_require__(57);
	
	var go2flow = _interopRequireWildcard(_go2flow);
	
	var _example_Test = __webpack_require__(58);
	
	var example_Test2 = _interopRequireWildcard(_example_Test);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function empty() {
	  return null;
	}
	function marshal(x) {
	  return go2flow.identity(x);
	}
	function unmarshal(x) {
	  return go2flow.identity(x);
	}

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.empty = empty;
	exports.marshal = marshal;
	exports.unmarshal = unmarshal;
	
	var _go2flow = __webpack_require__(57);
	
	var go2flow = _interopRequireWildcard(_go2flow);
	
	var _example_Test = __webpack_require__(58);
	
	var example_Test2 = _interopRequireWildcard(_example_Test);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function empty() {
	  return [];
	}
	function marshal(x) {
	  return go2flow.fmapArray(go2flow.identity)(x);
	}
	function unmarshal(x) {
	  return go2flow.fmapArray(go2flow.identity)(x);
	}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.empty = empty;
	exports.marshal = marshal;
	exports.unmarshal = unmarshal;
	
	var _go2flow = __webpack_require__(57);
	
	var go2flow = _interopRequireWildcard(_go2flow);
	
	var _time_Time = __webpack_require__(98);
	
	var time_Time = _interopRequireWildcard(_time_Time);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
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

/***/ },
/* 98 */
/***/ function(module, exports) {

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

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.empty = empty;
	exports.marshal = marshal;
	exports.unmarshal = unmarshal;
	
	var _go2flow = __webpack_require__(57);
	
	var go2flow = _interopRequireWildcard(_go2flow);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function empty() {
	  return null;
	}
	function marshal(x) {
	  return go2flow.identity(x);
	}
	function unmarshal(x) {
	  return go2flow.identity(x);
	}

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map