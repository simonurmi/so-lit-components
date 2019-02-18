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
      children = props.children;
  var classes = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, _FlexModule.default.Flex, true), _defineProperty(_classNames, _FlexModule.default['Flex--alignItemsCenter'], alignItems === 'center'), _classNames));
  return _react.default.createElement("div", {
    className: classes
  }, children);
};

Flex.propTypes = {
  alignItems: _propTypes.default.string,
  children: _propTypes.default.node.isRequired
};
Flex.defaultProps = {
  alignItems: null
};
var _default = Flex;
exports.default = _default;