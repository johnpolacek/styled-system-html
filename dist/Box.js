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

var Box = (0, _styledComponents2.default)(_gridStyled.Box)([], _styledSystem.fontSize, _styledSystem.color, _styledSystem.textAlign, _styledSystem.borderColor, _styledSystem.borderWidth, _styledSystem.boxShadow, _styles.height, _styles.maxWidth, _styles.overflow);
exports.default = Box;