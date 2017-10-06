'use strict';

// theme getter
var _require = require('./util'),
    get = _require.get;

module.exports = function (keys, fallback) {
  return function (props) {
    return get(props.theme, keys, fallback);
  };
};