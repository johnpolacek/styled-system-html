'use strict';

var glamorous = require('glamorous').default;
var fontSize = require('../font-size');
var width = require('../width');
var space = require('../space');
var color = require('../color');

module.exports = function (Component) {
  var SystemComponent = glamorous(Component)(fontSize, width, space, color);
  return SystemComponent;
};