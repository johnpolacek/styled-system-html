'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonStyles = exports.textStylesPseudo = exports.textStyles = exports.wrapperStyles = exports.float = exports.display = exports.position = exports.overflow = exports.borderStyle = exports.fontStyle = exports.maxWidth = exports.height = undefined;

var _templateObject = _taggedTemplateLiteral([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']),
    _templateObject2 = _taggedTemplateLiteral([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']),
    _templateObject3 = _taggedTemplateLiteral([' ', ' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ', ' ']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: inline-flex;\n  text-decoration: none;\n  margin: 0;\n  padding: 8px 16px;\n  color: white;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size:16px;\n  border:none;\n  ', '\n  ', '\n'], ['\n  display: inline-flex;\n  text-decoration: none;\n  margin: 0;\n  padding: 8px 16px;\n  color: white;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size:16px;\n  border:none;\n  ', '\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _gridStyled = require('grid-styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var height = exports.height = (0, _styledSystem.responsiveStyle)({ prop: 'height', cssProperty: 'height' });
var maxWidth = exports.maxWidth = (0, _styledSystem.responsiveStyle)({ prop: 'mw', cssProperty: 'maxWidth' });
var fontStyle = exports.fontStyle = (0, _styledSystem.style)({ prop: 'fontStyle', cssProperty: 'fontStyle' });
var borderStyle = exports.borderStyle = (0, _styledSystem.style)({ prop: 'borderStyle', cssProperty: 'borderStyle' });
var overflow = exports.overflow = (0, _styledSystem.responsiveStyle)({ prop: 'overflow', cssProperty: 'overflow' });
var position = exports.position = (0, _styledSystem.responsiveStyle)({ prop: 'position', cssProperty: 'position' });
var display = exports.display = (0, _styledSystem.responsiveStyle)({ prop: 'display', cssProperty: 'display' });
var float = exports.float = (0, _styledSystem.responsiveStyle)({ prop: 'float', cssProperty: 'float' });

var wrapperStyles = exports.wrapperStyles = (0, _styledComponents.css)(_templateObject, _styledSystem.space, _styledSystem.width, height, fontStyle, _styledSystem.fontSize, _styledSystem.textAlign, _styledSystem.color, maxWidth, height, _styledSystem.boxShadow, _styledSystem.borderColor, _styledSystem.borderWidth, borderStyle, overflow, position, display, float);
var textStyles = exports.textStyles = (0, _styledComponents.css)(_templateObject2, _styledSystem.space, _styledSystem.width, _styledSystem.fontWeight, fontStyle, _styledSystem.fontSize, _styledSystem.textAlign, _styledSystem.color, _styledSystem.boxShadow, _styledSystem.borderColor, _styledSystem.borderWidth, position, display, float);
var textStylesPseudo = exports.textStylesPseudo = (0, _styledComponents.css)(_templateObject3, textStyles, _styledSystem.hover, _styledSystem.focus, _styledSystem.active, _styledSystem.disabled);
var buttonStyles = exports.buttonStyles = (0, _styledComponents.css)(_templateObject4, textStylesPseudo, borderStyle);