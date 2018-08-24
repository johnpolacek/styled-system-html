'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _htmlTags = require('html-tags');

var _htmlTags2 = _interopRequireDefault(_htmlTags);

var _systemComponents = require('system-components');

var _systemComponents2 = _interopRequireDefault(_systemComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var El = (0, _systemComponents2.default)('space', 'width', 'fontSize', 'textColor', 'bgColor', 'color',
// typography
'fontFamily', 'textAlign', 'lineHeight', 'fontWeight', 'letterSpacing',
// layout
'display', 'maxWidth', 'minWidth', 'height', 'maxHeight', 'minHeight', 'size', 'ratio', 'verticalAlign',
// flexbox
'alignItems', 'alignContent', 'justifyContent', 'flexWrap', 'flexDirection', 'flex', 'flexBasis', 'justifySelf', 'alignSelf', 'order',
// grid
'gridGap', 'gridColumnGap', 'gridRowGap', 'gridColumn', 'gridRow', 'gridAutoFlow', 'gridAutoColumns', 'gridAutoRows', 'gridTemplateColumns', 'gridTemplateRows',
// borders
'border', 'borderTop', 'borderRight', 'borderBottom', 'borderLeft', 'borders', 'borderColor', 'borderRadius',
// misc
'boxShadow', 'opacity', 'background', 'backgroundImage', 'backgroundSize', 'backgroundPosition', 'backgroundRepeat',
// position
'position', 'zIndex', 'top', 'right', 'bottom', 'left',
// variants
'textStyle', 'colorStyle', 'buttonStyle');

_htmlTags2.default.forEach(function (tag) {
	module.exports[tag.charAt(0).toUpperCase() + tag.slice(1)] = function (props) {
		return _react2.default.createElement(El, _extends({ is: tag }, props));
	};
});

module.exports['Text'] = function (props) {
	return _react2.default.createElement(El, _extends({ is: 'p' }, props));
};
module.exports['UL'] = function (props) {
	return _react2.default.createElement(El, _extends({ is: 'ul' }, props));
};
module.exports['OL'] = function (props) {
	return _react2.default.createElement(El, _extends({ is: 'ol' }, props));
};
module.exports['LI'] = function (props) {
	return _react2.default.createElement(El, _extends({ is: 'li' }, props));
};
module.exports['DL'] = function (props) {
	return _react2.default.createElement(El, _extends({ is: 'dl' }, props));
};
module.exports['DT'] = function (props) {
	return _react2.default.createElement(El, _extends({ is: 'dt' }, props));
};
module.exports['THead'] = function (props) {
	return _react2.default.createElement(El, _extends({ is: 'thead' }, props));
};
module.exports['TBody'] = function (props) {
	return _react2.default.createElement(El, _extends({ is: 'tbody' }, props));
};
module.exports['TH'] = function (props) {
	return _react2.default.createElement(El, _extends({ is: 'th' }, props));
};
module.exports['TR'] = function (props) {
	return _react2.default.createElement(El, _extends({ is: 'tr' }, props));
};
module.exports['TD'] = function (props) {
	return _react2.default.createElement(El, _extends({ is: 'td' }, props));
};
module.exports['TextArea'] = function (props) {
	return _react2.default.createElement(El, _extends({ is: 'textarea' }, props));
};
module.exports['FigCaption'] = function (props) {
	return _react2.default.createElement(El, _extends({ is: 'figcaption' }, props));
};