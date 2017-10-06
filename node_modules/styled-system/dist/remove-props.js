'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var propTypes = require('./prop-types');

var blacklist = Object.keys(propTypes).reduce(function (a, key) {
  return [].concat(_toConsumableArray(a), _toConsumableArray(Object.keys(propTypes[key])));
}, []);

module.exports = function (props) {
  var next = {};

  for (var key in props) {
    if (blacklist.includes(key)) continue;
    next[key] = props[key];
  }

  return next;
};