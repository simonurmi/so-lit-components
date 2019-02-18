"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _FlexModule = _interopRequireDefault(require("./Flex.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Flex = function Flex(props) {
  var _classNames;

  var alignItems = props.alignItems,
      children = props.children,
      wrap = props.wrap;
  var classes = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, _FlexModule.default.Flex, true), _defineProperty(_classNames, _FlexModule.default['Flex--alignItemsCenter'], alignItems === 'center'), _defineProperty(_classNames, _FlexModule.default['Flex--wrap'], wrap || wrap === 'wrap'), _classNames));
  return _react.default.createElement("div", {
    className: classes
  }, children);
};

Flex.propTypes = {
  alignItems: _propTypes.default.string,
  children: _propTypes.default.node.isRequired,
  wrap: _propTypes.default.string
};
Flex.defaultProps = {
  alignItems: null,
  wrap: false
};
var _default = Flex;
exports.default = _default;