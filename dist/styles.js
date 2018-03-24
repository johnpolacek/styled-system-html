'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonStyles = exports.textStylesPseudo = exports.textStyles = exports.wrapperStyles = exports.left = exports.bottom = exports.right = exports.top = exports.opacity = exports.float = exports.display = exports.position = exports.overflow = exports.borderStyle = exports.fontStyle = exports.mw = exports.maxWidth = exports.h = exports.height = undefined;

var _templateObject = _taggedTemplateLiteral([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']),
    _templateObject2 = _taggedTemplateLiteral([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']),
    _templateObject3 = _taggedTemplateLiteral([' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: inline-flex;\n  text-decoration: none;\n  margin: 0;\n  padding: 8px 16px;\n  color: white;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size:16px;\n  border:none;\n  ', '\n  ', '\n'], ['\n  display: inline-flex;\n  text-decoration: none;\n  margin: 0;\n  padding: 8px 16px;\n  color: white;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size:16px;\n  border:none;\n  ', '\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _gridStyled = require('grid-styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var height = exports.height = (0, _styledSystem.responsiveStyle)({ prop: 'height', cssProperty: 'height' });
var h = exports.h = (0, _styledSystem.responsiveStyle)({ prop: 'h', cssProperty: 'height' });
var maxWidth = exports.maxWidth = (0, _styledSystem.responsiveStyle)({ prop: 'maxWidth', cssProperty: 'maxWidth' });
var mw = exports.mw = (0, _styledSystem.responsiveStyle)({ prop: 'mw', cssProperty: 'maxWidth' });
var fontStyle = exports.fontStyle = (0, _styledSystem.style)({ prop: 'fontStyle', cssProperty: 'fontStyle' });
var borderStyle = exports.borderStyle = (0, _styledSystem.style)({ prop: 'borderStyle', cssProperty: 'borderStyle' });
var overflow = exports.overflow = (0, _styledSystem.responsiveStyle)({ prop: 'overflow', cssProperty: 'overflow' });
var position = exports.position = (0, _styledSystem.responsiveStyle)({ prop: 'position', cssProperty: 'position' });
var display = exports.display = (0, _styledSystem.responsiveStyle)({ prop: 'display', cssProperty: 'display' });
var float = exports.float = (0, _styledSystem.responsiveStyle)({ prop: 'float', cssProperty: 'float' });
var opacity = exports.opacity = (0, _styledSystem.responsiveStyle)({ prop: 'opacity', cssProperty: 'opacity' });
var top = exports.top = (0, _styledSystem.responsiveStyle)({ prop: 'top', cssProperty: 'top' });
var right = exports.right = (0, _styledSystem.responsiveStyle)({ prop: 'right', cssProperty: 'right' });
var bottom = exports.bottom = (0, _styledSystem.responsiveStyle)({ prop: 'bottom', cssProperty: 'bottom' });
var left = exports.left = (0, _styledSystem.responsiveStyle)({ prop: 'left', cssProperty: 'left' });

var wrapperStyles = exports.wrapperStyles = (0, _styledComponents.css)(_templateObject, _styledSystem.space, _styledSystem.width, h, height, mw, maxWidth, fontStyle, _styledSystem.fontSize, _styledSystem.textAlign, _styledSystem.color, _styledSystem.boxShadow, _styledSystem.borderColor, _styledSystem.borderWidth, _styledSystem.borderRadius, borderStyle, overflow, position, top, right, bottom, left, display, float, opacity);
var textStyles = exports.textStyles = (0, _styledComponents.css)(_templateObject2, _styledSystem.space, _styledSystem.width, h, height, mw, maxWidth, _styledSystem.fontWeight, fontStyle, _styledSystem.fontSize, _styledSystem.textAlign, _styledSystem.color, _styledSystem.boxShadow, _styledSystem.borderColor, _styledSystem.borderWidth, position, top, right, bottom, left, display, float, opacity);
var textStylesPseudo = exports.textStylesPseudo = (0, _styledComponents.css)(_templateObject3, textStyles, _styledSystem.hover, _styledSystem.focus, _styledSystem.active, _styledSystem.disabled);
var buttonStyles = exports.buttonStyles = (0, _styledComponents.css)(_templateObject4, textStylesPseudo, borderStyle);