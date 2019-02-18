"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _HighlightModule = _interopRequireDefault(require("./Highlight.module.css"));

var _Intrinsic = _interopRequireDefault(require("../Intrinsic/Intrinsic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Highlight = function Highlight(props) {
  var alt = props.alt,
      callToAction = props.callToAction,
      img = props.img,
      title = props.title,
      text = props.text;
  return _react.default.createElement("div", {
    className: _HighlightModule.default.Highlight
  }, _react.default.createElement("div", {
    className: _HighlightModule.default.Highlight__Image
  }, _react.default.createElement(_Intrinsic.default, {
    ratioX: 16,
    ratioY: 9
  }, _react.default.createElement("img", {
    alt: alt,
    src: img
  }))), _react.default.createElement("h3", {
    className: _HighlightModule.default.Highlight__Title
  }, title), _react.default.createElement("p", {
    className: _HighlightModule.default.Highlight__Text
  }, text), _react.default.createElement(_Button.default, null, callToAction));
};

Highlight.propTypes = {
  alt: _propTypes.default.string.isRequired,
  callToAction: _propTypes.default.string.isRequired,
  img: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired,
  text: _propTypes.default.string.isRequired
};
var _default = Highlight;
exports.default = _default;