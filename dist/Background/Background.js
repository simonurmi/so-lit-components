'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _BackgroundModule = require('./Background.module.css');

var _BackgroundModule2 = _interopRequireDefault(_BackgroundModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Background = function Background(props) {
  var _classNames;

  var children = props.children,
      color = props.color;

  var classes = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, _BackgroundModule2.default.Background, true), _defineProperty(_classNames, _BackgroundModule2.default['Background--primary'], color === 'primary'), _defineProperty(_classNames, _BackgroundModule2.default['Background--light'], color === 'light'), _defineProperty(_classNames, _BackgroundModule2.default['Background--dark'], color === 'dark'), _classNames));
  return _react2.default.createElement(
    'div',
    { className: classes },
    children
  );
};

Background.propTypes = {
  children: _propTypes2.default.node.isRequired,
  color: _propTypes2.default.string
};

Background.defaultProps = {
  color: ''
};

exports.default = Background;