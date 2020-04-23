import { dew as _baseConvertDewDew } from "./_baseConvert.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  var _;

  if (_dewExec) return exports;
  _dewExec = true;

  var baseConvert = _baseConvertDewDew();
  /**
   * Converts `lodash` to an immutable auto-curried iteratee-first data-last
   * version with conversion `options` applied.
   *
   * @param {Function} lodash The lodash function to convert.
   * @param {Object} [options] The options object. See `baseConvert` for more details.
   * @returns {Function} Returns the converted `lodash`.
   */


  function browserConvert(lodash, options) {
    return baseConvert(lodash, lodash, options);
  }

  if (typeof _global._ == 'function' && typeof _.runInContext == 'function') {
    _global._ = _ = browserConvert(_.runInContext());
  }

  exports = browserConvert;
  return exports;
}