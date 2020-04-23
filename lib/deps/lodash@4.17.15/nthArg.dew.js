import { dew as _baseNthDewDew } from "./_baseNth.dew.js";
import { dew as _baseRestDewDew } from "./_baseRest.dew.js";
import { dew as _toIntegerDewDew } from "./toInteger.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseNth = _baseNthDewDew(),
      baseRest = _baseRestDewDew(),
      toInteger = _toIntegerDewDew();
  /**
   * Creates a function that gets the argument at index `n`. If `n` is negative,
   * the nth argument from the end is returned.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Util
   * @param {number} [n=0] The index of the argument to return.
   * @returns {Function} Returns the new pass-thru function.
   * @example
   *
   * var func = _.nthArg(1);
   * func('a', 'b', 'c', 'd');
   * // => 'b'
   *
   * var func = _.nthArg(-2);
   * func('a', 'b', 'c', 'd');
   * // => 'c'
   */


  function nthArg(n) {
    n = toInteger(n);
    return baseRest(function (args) {
      return baseNth(args, n);
    });
  }

  exports = nthArg;
  return exports;
}