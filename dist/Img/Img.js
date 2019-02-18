"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ImgModule = _interopRequireDefault(require("./Img.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var lazyloadImage =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(src, callback) {
    var image;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            image = new Image();

            image.onload = function () {
              console.log('onload');
              callback();
            };

            image.src = src;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function lazyloadImage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var Img = function Img(props) {
  var _classNames;

  var alt = props.alt,
      lazyload = props.lazyload,
      src = props.src;

  var _useState = (0, _react.useState)({
    src: '',
    loaded: !lazyload
  }),
      _useState2 = _slicedToArray(_useState, 2),
      loadState = _useState2[0],
      setLoadState = _useState2[1];

  (0, _react.useEffect)(function () {
    var image = new Image();

    image.onload = function () {
      console.log('??');
      setLoadState({
        src: src,
        loaded: true
      });
    };

    image.src = src;
  }, [lazyload]);
  var classes = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, _ImgModule.default.Img, true), _defineProperty(_classNames, _ImgModule.default['Img--lazyload'], lazyload), _defineProperty(_classNames, _ImgModule.default['Img--lazyloaded'], loadState.loaded), _classNames));
  console.log(loadState.loaded);
  return _react.default.createElement("img", {
    alt: alt,
    className: classes,
    src: loadState.src
  });
};

Img.propTypes = {
  alt: _propTypes.default.string.isRequired,
  lazyload: _propTypes.default.bool,
  src: _propTypes.default.string.isRequired
};
Img.defaultProps = {
  lazyload: false
};
var _default = Img;
exports.default = _default;