'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NewsListModule = require('./NewsList.module.css');

var _NewsListModule2 = _interopRequireDefault(_NewsListModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewsList = function NewsList(props) {
  var list = props.list;

  return _react2.default.createElement(
    'ul',
    { className: _NewsListModule2.default.NewsList },
    list.map(function (item) {
      return _react2.default.createElement(
        'li',
        { className: _NewsListModule2.default.NewsList__Item, key: item.id },
        _react2.default.createElement(
          'p',
          { className: _NewsListModule2.default.NewsList__Category },
          item.category
        ),
        _react2.default.createElement(
          'p',
          { className: _NewsListModule2.default.NewsList__Title },
          _react2.default.createElement(
            'a',
            { className: _NewsListModule2.default.NewsList__Link, href: item.href },
            item.title
          )
        )
      );
    })
  );
};

NewsList.propTypes = {
  list: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    category: _propTypes2.default.string.isRequired,
    href: _propTypes2.default.string.isRequired,
    id: _propTypes2.default.number.isRequired,
    title: _propTypes2.default.string.isRequired
  })).isRequired
};

exports.default = NewsList;