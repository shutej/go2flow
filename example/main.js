/* @flow */

import * as example_Test1 from "./gen/example_Test1";
import * as example_Test2 from "./gen/example_Test2";
import * as example_Test3 from "./gen/example_Test3";
import * as example_Test4 from "./gen/example_Test4";
import * as example_Test5 from "./gen/example_Test5";
import * as example_Test6 from "./gen/example_Test6";
import * as example_Test7 from "./gen/example_Test7";
import * as example_Test8 from "./gen/example_Test8";
import * as example_Test9 from "./gen/example_Test9";
import * as example_Test10 from "./gen/example_Test10";

declare function $(obj: Object): Object;
declare var _: Object;

// Wrapper provides type-safe GET and POST methods so far.
class Wrapper<T, MarshalT> {
  url: string;
  empty: () => T;
  marshal: (x: T) => MarshalT;
  unmarshal: (x: MarshalT) => T;

  _GET(done: (x: T) => void, fail: () => void) {
    let request = $.ajax({
      method: "GET",
      dataType: "json",
      url: this.url,
    });
    request.done(function(data) {
      done(this.unmarshal(data));
    }.bind(this));
    request.fail(fail);
  }

  _POST(data: T, done: () => void, fail: () => void) {
    let request = $.ajax({
      method: "POST",
      contentType: "application/json",
      dataType: "json",
      url: this.url,
      data: JSON.stringify(this.marshal(data)),
    });
    request.done(done);
    request.fail(fail);
  }
}

// IntegrationTest exercises _GET and _POST methods against an expected object.
class IntegrationTest<T, MarshalT> extends Wrapper<T, MarshalT> {
  expected: T;

  get() {
    super._GET(
      function(x: T) {
        if (_.isEqual(x, this.expected)) {
          console.log("[ OK ] get(%o)", this.url);
        } else {
          console.log("[FAIL] get(%o): %o vs. %o", this.url, x, this.expected);
        }
      }.bind(this),
      function() {
        console.log("[FAIL] get(%o)", this.url);
      }.bind(this)
    );
  }

  post() {
    super._POST(
      this.expected,
      function() {
        console.log("[ OK ] post(%o)", this.url);
      }.bind(this),
      function() {
        console.log("[FAIL] post(%o)", this.url);
      }.bind(this)
    );
  }

  run() {
    this.get();
    this.post();
  }
}

var tests: Array<{ run: () => void }> = [];

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
    aInt:    1,
    aFloat:  1.2,
    aBool:   true,
    aByte:   65,
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
    aIntPtr:    1,
    aFloatPtr:  1.2,
    aBoolPtr:   true,
    aBytePtr:   65,
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
    aIntSlice:    [1],
    aFloatSlice:  [1.2],
    aBoolSlice:   [true],
    aByteSlice:   "A",
  };
  tests.push(test3);
})();

// Runs all tests.
tests.forEach(function(test) {
  test.run();
});
