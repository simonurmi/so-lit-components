"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _BackgroundModule = _interopRequireDefault(require("./Background.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Background = function Background(props) {
  var _classNames;

  var children = props.children,
      color = props.color;
  var classes = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, _BackgroundModule.default.Background, true), _defineProperty(_classNames, _BackgroundModule.default['Background--primary'], color === 'primary'), _defineProperty(_classNames, _BackgroundModule.default['Background--light'], color === 'light'), _defineProperty(_classNames, _BackgroundModule.default['Background--dark'], color === 'dark'), _classNames));
  return _react.default.createElement("div", {
    className: classes
  }, children);
};

Background.propTypes = {
  children: _propTypes.default.node.isRequired,
  color: _propTypes.default.string
};
Background.defaultProps = {
  color: ''
};
var _default = Background;
exports.default = _default;