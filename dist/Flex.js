'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _styles = require('./styles');

var _gridStyled = require('grid-styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flex = (0, _styledComponents2.default)(_gridStyled.Flex)([], _styles.height, _styles.maxWidth, _styles.overflow, _styledSystem.fontSize, _styledSystem.color, _styles.maxWidth, _styledSystem.boxShadow, _styledSystem.borderColor, _styledSystem.borderWidth);
exports.default = Flex;