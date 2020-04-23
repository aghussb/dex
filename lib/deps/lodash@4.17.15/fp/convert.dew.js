import { dew as _baseConvertDewDew } from "./_baseConvert.dew.js";
import { dew as _utilDewDew } from "./_util.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseConvert = _baseConvertDewDew(),
      util = _utilDewDew();
  /**
   * Converts `func` of `name` to an immutable auto-curried iteratee-first data-last
   * version with conversion `options` applied. If `name` is an object its methods
   * will be converted.
   *
   * @param {string} name The name of the function to wrap.
   * @param {Function} [func] The function to wrap.
   * @param {Object} [options] The options object. See `baseConvert` for more details.
   * @returns {Function|Object} Returns the converted function or object.
   */


  function convert(name, func, options) {
    return baseConvert(util, name, func, options);
  }

  exports = convert;
  return exports;
}