"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkButton = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ButtonModule = _interopRequireDefault(require("./Button.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button = function Button(props) {
  var _classNames;

  var children = props.children,
      color = props.color,
      type = props.type;
  var classes = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, _ButtonModule.default.Button, true), _defineProperty(_classNames, _ButtonModule.default['Button--light'], color === 'light'), _classNames));
  return (// eslint-disable-next-line react/button-has-type
    _react.default.createElement("button", {
      className: classes,
      type: type
    }, children)
  );
};

Button.propTypes = {
  children: _propTypes.default.node.isRequired,
  color: _propTypes.default.node,
  type: _propTypes.default.string
};
Button.defaultProps = {
  color: 'dark',
  type: 'button'
};

var LinkButton = function LinkButton(props) {
  var children = props.children,
      href = props.href;
  return _react.default.createElement("a", {
    className: _ButtonModule.default.Button,
    href: href
  }, children);
};

exports.LinkButton = LinkButton;
LinkButton.propTypes = {
  children: _propTypes.default.node.isRequired,
  href: _propTypes.default.string.isRequired
};
var _default = Button;
exports.default = _default;