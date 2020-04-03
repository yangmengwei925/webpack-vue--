"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.z = exports.y = exports.x = void 0;
var a = {
  x: 3,
  y: 6,
  z: 9
};
var x = a.x,
    y = a.y,
    z = a.z;
/*
*
* */

exports.z = z;
exports.y = y;
exports.x = x;
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import {x, y, z} from './a';
var a = function a() {
  console.log('hello'); // console.log(x);
  // console.log(y);
  // console.log(z);
};

var arr = [1, 2, 3, 4, 5];
var q = arr[0],
    w = arr[1],
    e = arr[2];
var b = 10;

var Person = /*#__PURE__*/function () {
  function Person() {
    _classCallCheck(this, Person);
  }

  _createClass(Person, [{
    key: "say",
    value: function say() {
      console.log('say');
    }
  }]);

  return Person;
}();

var person = new Person();
person.say();
