'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.column = exports.justify = exports.align = exports.direction = exports.wrap = exports.order = exports.flex = undefined;

var _templateObject = _taggedTemplateLiteral([' \n\tdisplay:flex;\n\t', ' \n\t', '\n\t', '\n\t', '\n\t', '\n\t', '\n\t', '\n\t', '\n\t', '\n\t', '\n'], [' \n\tdisplay:flex;\n\t', ' \n\t', '\n\t', '\n\t', '\n\t', '\n\t', '\n\t', '\n\t', '\n\t', '\n\t', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var flex = exports.flex = (0, _styledSystem.responsiveStyle)('flex');
var order = exports.order = (0, _styledSystem.responsiveStyle)('order');
var wrap = exports.wrap = (0, _styledSystem.responsiveStyle)('flex-wrap', 'wrap', 'wrap');
var direction = exports.direction = (0, _styledSystem.responsiveStyle)('flex-direction', 'direction');
var align = exports.align = function align(props) {
	return (0, _styledSystem.responsiveStyle)('align-items', 'align');
};
var justify = exports.justify = function justify(props) {
	return (0, _styledSystem.responsiveStyle)('justify-content', 'justify');
};
var column = exports.column = function column(props) {
	return props.column ? 'flex-direction:column;' : null;
};

var Flex = _styledComponents2.default.div(_templateObject, _styles.wrapperStyles, flex, order, flex, order, wrap, direction, align, justify, column);
exports.default = Flex;