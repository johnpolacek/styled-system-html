"use strict";

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

var El = (0, _styledComponents.default)('div')(_styledSystem.space, _styledSystem.color, _styledSystem.display, _styledSystem.minWidth, _styledSystem.minHeight, _styledSystem.width, _styledSystem.height, _styledSystem.flex, _styledSystem.order, _styledSystem.flexWrap, _styledSystem.flexDirection, _styledSystem.flexBasis, _styledSystem.alignItems, _styledSystem.alignContent, _styledSystem.alignSelf, _styledSystem.justifyItems, _styledSystem.justifyContent, _styledSystem.justifySelf, _styledSystem.fontSize, _styledSystem.fontFamily, _styledSystem.fontWeight, _styledSystem.fontStyle, _styledSystem.textAlign, _styledSystem.lineHeight, _styledSystem.letterSpacing, _styledSystem.borders, _styledSystem.borderTop, _styledSystem.borderRight, _styledSystem.borderBottom, _styledSystem.borderLeft, _styledSystem.borderColor, _styledSystem.borderRadius, _styledSystem.buttonStyle, _styledSystem.boxShadow, _styledSystem.backgroundImage, _styledSystem.backgroundSize, _styledSystem.backgroundPosition, _styledSystem.backgroundRepeat, _styledSystem.opacity, _styledSystem.overflow, _styledSystem.position, _styledSystem.top, _styledSystem.right, _styledSystem.bottom, _styledSystem.left, themed('El'));
El.propTypes = _objectSpread({}, _styledSystem.space.propTypes, _styledSystem.color.propTypes, _styledSystem.display.propTypes, _styledSystem.minWidth.propTypes, _styledSystem.minHeight.propTypes, _styledSystem.width.propTypes, _styledSystem.height.propTypes, _styledSystem.flex.propTypes, _styledSystem.order.propTypes, _styledSystem.flexWrap.propTypes, _styledSystem.flexDirection.propTypes, _styledSystem.flexBasis.propTypes, _styledSystem.alignItems.propTypes, _styledSystem.alignContent.propTypes, _styledSystem.alignSelf.propTypes, _styledSystem.justifyItems.propTypes, _styledSystem.justifyContent.propTypes, _styledSystem.justifySelf.propTypes, _styledSystem.fontSize.propTypes, _styledSystem.fontFamily.propTypes, _styledSystem.fontWeight.propTypes, _styledSystem.fontStyle.propTypes, _styledSystem.textAlign.propTypes, _styledSystem.lineHeight.propTypes, _styledSystem.letterSpacing.propTypes, _styledSystem.borders.propTypes, _styledSystem.borderTop.propTypes, _styledSystem.borderRight.propTypes, _styledSystem.borderBottom.propTypes, _styledSystem.borderLeft.propTypes, _styledSystem.borderColor.propTypes, _styledSystem.borderRadius.propTypes, _styledSystem.buttonStyle.propTypes, _styledSystem.boxShadow.propTypes, _styledSystem.backgroundImage.propTypes, _styledSystem.backgroundSize.propTypes, _styledSystem.backgroundPosition.propTypes, _styledSystem.backgroundRepeat.propTypes, _styledSystem.opacity.propTypes, _styledSystem.overflow.propTypes, _styledSystem.position.propTypes, _styledSystem.top.propTypes, _styledSystem.right.propTypes, _styledSystem.bottom.propTypes, _styledSystem.left.propTypes);

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