'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.order = exports.flex = undefined;

var _templateObject = _taggedTemplateLiteral([' \n\t', ' \n\t', '\n\t', '\n'], [' \n\t', ' \n\t', '\n\t', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var flex = exports.flex = (0, _styledSystem.responsiveStyle)('flex');
var order = exports.order = (0, _styledSystem.responsiveStyle)('order');

var Box = _styledComponents2.default.div(_templateObject, _styles.wrapperStyles, flex, order);
exports.default = Box;