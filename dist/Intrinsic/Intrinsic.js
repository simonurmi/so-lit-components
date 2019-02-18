"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IntrinsicModule = _interopRequireDefault(require("./Intrinsic.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Intrinsic = function Intrinsic(props) {
  var children = props.children,
      ratioX = props.ratioX,
      ratioY = props.ratioY;
  return _react.default.createElement("div", {
    className: _IntrinsicModule.default.Intrinsic
  }, _react.default.createElement("div", {
    className: _IntrinsicModule.default.Intrinsic__Padding,
    style: {
      paddingTop: "".concat(ratioY / ratioX * 100, "%")
    }
  }), _react.default.createElement("div", {
    className: _IntrinsicModule.default.Intrinsic__Item
  }, children));
};

Intrinsic.propTypes = {
  children: _propTypes.default.node.isRequired,
  ratioX: _propTypes.default.number.isRequired,
  ratioY: _propTypes.default.number.isRequired
};
var _default = Intrinsic;
exports.default = _default;