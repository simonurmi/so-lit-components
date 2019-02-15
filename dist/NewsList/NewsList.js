"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _NewsListModule = _interopRequireDefault(require("./NewsList.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewsList = function NewsList(props) {
  var list = props.list;
  return _react.default.createElement("ul", {
    className: _NewsListModule.default.NewsList
  }, list.map(function (item) {
    return _react.default.createElement("li", {
      className: _NewsListModule.default.NewsList__Item,
      key: item.id
    }, _react.default.createElement("p", {
      className: _NewsListModule.default.NewsList__Category
    }, item.category), _react.default.createElement("p", {
      className: _NewsListModule.default.NewsList__Title
    }, _react.default.createElement("a", {
      className: _NewsListModule.default.NewsList__Link,
      href: item.href
    }, item.title)));
  }));
};

NewsList.propTypes = {
  list: _propTypes.default.arrayOf(_propTypes.default.shape({
    category: _propTypes.default.string.isRequired,
    href: _propTypes.default.string.isRequired,
    id: _propTypes.default.number.isRequired,
    title: _propTypes.default.string.isRequired
  })).isRequired
};
var _default = NewsList;
exports.default = _default;