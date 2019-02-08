"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.El = void 0;

var _react = _interopRequireDefault(require("react"));

var _htmlTags = _interopRequireDefault(require("html-tags"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var themed = function themed(key) {
  return function (props) {
    return props.theme[key];
  };
};

var El = (0, _styledComponents.default)('div')({
  boxSizing: 'border-box'
}, _styledSystem.space, _styledSystem.width, _styledSystem.fontSize, _styledSystem.color, _styledSystem.flex, _styledSystem.order, _styledSystem.alignSelf, themed('El'));
exports.El = El;
El.propTypes = _objectSpread({}, _styledSystem.space.propTypes, _styledSystem.width.propTypes, _styledSystem.fontSize.propTypes, _styledSystem.color.propTypes, _styledSystem.flex.propTypes, _styledSystem.order.propTypes, _styledSystem.alignSelf.propTypes);

_htmlTags.default.forEach(function (tag) {
  module.exports[tag.charAt(0).toUpperCase() + tag.slice(1)] = function (props) {
    return _react.default.createElement(El, _extends({
      as: tag
    }, props));
  };
});

module.exports['Text'] = function (props) {
  return _react.default.createElement(El, _extends({
    as: "p",
    m: 0
  }, props));
};

module.exports['Image'] = function (props) {
  return _react.default.createElement(El, _extends({
    as: "img"
  }, props));
};

module.exports['UL'] = function (props) {
  return _react.default.createElement(El, _extends({
    as: "ul"
  }, props));
};

module.exports['OL'] = function (props) {
  return _react.default.createElement(El, _extends({
    as: "ol"
  }, props));
};

module.exports['LI'] = function (props) {
  return _react.default.createElement(El, _extends({
    as: "li"
  }, props));
};

module.exports['DL'] = function (props) {
  return _react.default.createElement(El, _extends({
    as: "dl"
  }, props));
};

module.exports['DT'] = function (props) {
  return _react.default.createElement(El, _extends({
    as: "dt"
  }, props));
};

module.exports['THead'] = function (props) {
  return _react.default.createElement(El, _extends({
    as: "thead"
  }, props));
};

module.exports['TBody'] = function (props) {
  return _react.default.createElement(El, _extends({
    as: "tbody"
  }, props));
};

module.exports['TH'] = function (props) {
  return _react.default.createElement(El, _extends({
    as: "th"
  }, props));
};

module.exports['TR'] = function (props) {
  return _react.default.createElement(El, _extends({
    as: "tr"
  }, props));
};

module.exports['TD'] = function (props) {
  return _react.default.createElement(El, _extends({
    as: "td"
  }, props));
};

module.exports['TextArea'] = function (props) {
  return _react.default.createElement(El, _extends({
    as: "textarea"
  }, props));
};

module.exports['FigCaption'] = function (props) {
  return _react.default.createElement(El, _extends({
    as: "figcaption"
  }, props));
};