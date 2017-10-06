'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('./util'),
    get = _require.get,
    breaks = _require.breaks,
    merge = _require.merge,
    arr = _require.arr,
    dec = _require.dec,
    media = _require.media;

var REG = /^color|bg$/;

module.exports = function (props) {
  var keys = Object.keys(props).filter(function (key) {
    return REG.test(key);
  });
  var bp = breaks(props);
  var palette = get(props, 'theme.colors', {});

  return keys.map(function (key) {
    var val = props[key];
    var prop = properties[key] || key;

    if (!Array.isArray(val)) {
      return _defineProperty({}, prop, cx(palette)(val));
    }

    return val.map(cx(palette)).map(dec(prop)).map(media(bp)).reduce(merge, {});
  }).reduce(merge, {});
};

var cx = function cx(obj) {
  return function (n) {
    return get(obj, n + '', n);
  };
};

var properties = {
  bg: 'backgroundColor'
};