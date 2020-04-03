"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

require('@babel/polyfill');

var arr = [1, 2, 3];
var x = arr[0],
    y = arr[1],
    z = arr[2],
    k = arr[3];

Array.prototype.aaa = function () {
  console.log('aaa');
};

var length = arr.length,
    pop = arr.pop,
    push = arr.push,
    slice = arr.slice,
    indexOf = arr.indexOf,
    aaa = arr.aaa;
console.log(k); //null  undefined []

console.log(pop); //null  undefined []

console.log(push); //null  undefined []

console.log(slice); //null  undefined []

console.log(indexOf); //null  undefined []

console.log(aaa); //null  undefined []

aaa();

var Person = /*#__PURE__*/function () {
  function Person() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      name: '小三',
      like: '小四'
    };
    (0, _classCallCheck2["default"])(this, Person);
    var name = props.name,
        like = props.like;
    this.name = name;
    this.like = like;
  }

  (0, _createClass2["default"])(Person, [{
    key: "say",
    value: function say() {
      console.log("".concat(this.name, " like ").concat(this.like));
    }
  }]);
  return Person;
}();

new Person().say();
var res = arr.reduce(function (pre, next) {
  return pre + next;
});
console.log(res);

function fn() {
  return _fn.apply(this, arguments);
}

function _fn() {
  _fn = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var res;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve, reject) {// resolve(aaa )
            });

          case 2:
            res = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fn.apply(this, arguments);
}
