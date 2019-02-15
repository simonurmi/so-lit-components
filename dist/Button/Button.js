"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkButton = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ButtonModule = _interopRequireDefault(require("./Button.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
  var children = props.children,
      type = props.type;
  return _react.default.createElement("button", {
    className: _ButtonModule.default.Button,
    type: type
  }, children);
};

Button.propTypes = {
  children: _propTypes.default.node.isRequired,
  type: _propTypes.default.string
};
Button.defaultProps = {
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