"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Section = _interopRequireDefault(require("../Section/Section"));

var _Container = _interopRequireDefault(require("../Container/Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
  var Logo = props.Logo;
  return _react.default.createElement("footer", null, _react.default.createElement(_Section.default, {
    backgroundColor: "dark",
    padding: 4
  }, _react.default.createElement(_Container.default, null, Logo)));
};

Footer.propTypes = {
  Logo: _propTypes.default.node.isRequired
};
var _default = Footer;
exports.default = _default;