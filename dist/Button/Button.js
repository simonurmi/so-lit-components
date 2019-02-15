'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkButton = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ButtonModule = require('./Button.module.css');

var _ButtonModule2 = _interopRequireDefault(_ButtonModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
  var children = props.children,
      type = props.type;

  return _react2.default.createElement(
    'button',
    { className: _ButtonModule2.default.Button, type: type },
    children
  );
};

Button.propTypes = {
  children: _propTypes2.default.node.isRequired,
  type: _propTypes2.default.string
};

Button.defaultProps = {
  type: 'button'
};

var LinkButton = function LinkButton(props) {
  var children = props.children,
      href = props.href;

  return _react2.default.createElement(
    'a',
    { className: _ButtonModule2.default.Button, href: href },
    children
  );
};

LinkButton.propTypes = {
  children: _propTypes2.default.node.isRequired,
  href: _propTypes2.default.string.isRequired
};

exports.default = Button;
exports.LinkButton = LinkButton;