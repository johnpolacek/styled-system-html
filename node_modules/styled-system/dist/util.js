'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _require = require('./constants'),
    breakpoints = _require.breakpoints;

var is = function is(n) {
  return n !== undefined && n !== null;
};
var num = function num(n) {
  return typeof n === 'number' && !isNaN(n);
};
var px = function px(n) {
  return num(n) ? n + 'px' : n;
};
var em = function em(n) {
  return num(n) ? n + 'em' : n;
};
var neg = function neg(n) {
  return n < 0;
};
var arr = function arr(n) {
  return Array.isArray(n) ? n : [n];
};

var get = function get(obj, path, fallback) {
  return path.split('.').reduce(function (a, b) {
    return a && a[b] ? a[b] : null;
  }, obj) || fallback;
};

var mq = function mq(n) {
  return '@media screen and (min-width: ' + em(n) + ')';
};

var breaks = function breaks(props) {
  return [null].concat(_toConsumableArray(get(props, 'theme.breakpoints', breakpoints).map(mq)));
};

var dec = function dec(props) {
  return function (val) {
    return arr(props).reduce(function (acc, prop) {
      return acc[prop] = val, acc;
    }, {});
  };
};

var media = function media(bp) {
  return function (d, i) {
    return is(d) ? bp[i] ? _defineProperty({}, bp[i], d) : d : null;
  };
};

var merge = function merge(a, b) {
  return Object.assign({}, a, b, Object.keys(b).reduce(function (obj, key) {
    return Object.assign(obj, _defineProperty({}, key, a[key] !== null && _typeof(a[key]) === 'object' ? merge(a[key], b[key]) : b[key]));
  }, {}));
};

// keeping for backwards-compatibility only
var idx = function idx(keys, obj) {
  return get(obj, keys.join('.')) || null;
};

module.exports = {
  get: get,
  is: is,
  px: px,
  em: em,
  neg: neg,
  num: num,
  arr: arr,
  idx: idx,
  breaks: breaks,
  media: media,
  dec: dec,
  merge: merge,
  mq: mq
};