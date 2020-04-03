"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Person1 = /*#__PURE__*/function () {
  function Person1() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      name: '小三',
      like: '小四'
    };
    (0, _classCallCheck2["default"])(this, Person1);
    var name = props.name,
        like = props.like;
    this.name = name;
    this.like = like;
  }

  (0, _createClass2["default"])(Person1, [{
    key: "say",
    value: function say() {
      console.log("".concat(this.name, " like ").concat(this.like));
    }
  }]);
  return Person1;
}();

new Person1().say();
