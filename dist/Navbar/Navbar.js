"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Flex = _interopRequireDefault(require("../Flex/Flex"));

var _NavbarModule = _interopRequireDefault(require("./Navbar.module.css"));

var _Container = _interopRequireDefault(require("../Container/Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function Navbar(props) {
  var items = props.items,
      Logo = props.Logo;
  var logoClasses = (0, _classnames.default)([_NavbarModule.default.Navbar__Logo, _NavbarModule.default.Navbar__Link]);
  return _react.default.createElement("nav", {
    className: _NavbarModule.default.Navbar
  }, _react.default.createElement(_Container.default, null, _react.default.createElement(_Flex.default, {
    alignItems: "center"
  }, _react.default.createElement("a", {
    className: logoClasses,
    href: "/"
  }, Logo), _react.default.createElement("ul", {
    className: _NavbarModule.default.Navbar__List
  }, items.map(function (item) {
    return _react.default.createElement("li", {
      key: item.url
    }, _react.default.createElement("a", {
      className: _NavbarModule.default.Navbar__Link,
      href: item.url
    }, item.text));
  })))));
};

Navbar.propTypes = {
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    text: _propTypes.default.string.isRequired,
    url: _propTypes.default.string.isRequired
  })).isRequired,
  Logo: _propTypes.default.node.isRequired
};
var _default = Navbar;
exports.default = _default;