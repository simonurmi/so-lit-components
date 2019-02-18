"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SectionModule = _interopRequireDefault(require("./Section.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Section = function Section(props) {
  var _classNames;

  var backgroundColor = props.backgroundColor,
      backgroundImage = props.backgroundImage,
      children = props.children,
      padding = props.padding;
  var classes = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, _SectionModule.default.Section, true), _defineProperty(_classNames, _SectionModule.default['Section--bg-primary'], backgroundColor === 'primary'), _defineProperty(_classNames, _SectionModule.default['Section--bg-light'], backgroundColor === 'light'), _defineProperty(_classNames, _SectionModule.default['Section--bg-dark'], backgroundColor === 'dark'), _defineProperty(_classNames, _SectionModule.default['Section--bg-image'], !!backgroundImage), _defineProperty(_classNames, _SectionModule.default['Section--padding-1'], padding === 1), _defineProperty(_classNames, _SectionModule.default['Section--padding-2'], padding === 2), _defineProperty(_classNames, _SectionModule.default['Section--padding-3'], padding === 3), _defineProperty(_classNames, _SectionModule.default['Section--padding-4'], padding === 4), _defineProperty(_classNames, _SectionModule.default['Section--padding-5'], padding === 5), _classNames));
  return _react.default.createElement("div", {
    className: classes,
    style: {
      backgroundImage: "url(".concat(backgroundImage, ")")
    }
  }, children);
};

Section.propTypes = {
  backgroundColor: _propTypes.default.string,
  backgroundImage: _propTypes.default.string,
  children: _propTypes.default.node.isRequired,
  padding: _propTypes.default.number
};
Section.defaultProps = {
  backgroundColor: undefined,
  backgroundImage: undefined,
  padding: 0
};
var _default = Section;
exports.default = _default;