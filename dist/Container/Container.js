"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ContainerModule = _interopRequireDefault(require("./Container.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function Container(props) {
  var children = props.children;
  return _react.default.createElement("div", {
    className: _ContainerModule.default.Container
  }, children);
};

Container.propTypes = {
  children: _propTypes.default.node.isRequired
};
var _default = Container;
exports.default = _default;