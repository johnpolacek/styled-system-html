'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral([' ', ' white-space:pre;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;word-wrap:normal;word-break:normal;word-spacing:normal;'], [' ', ' white-space:pre;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;word-wrap:normal;word-break:normal;word-spacing:normal;']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Pre = _styledComponents2.default.pre(_templateObject, _styles.textStyles);
exports.default = Pre;