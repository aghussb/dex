import { dew as _applyDewDew } from "./_apply.dew.js";
import { dew as _arrayPushDewDew } from "./_arrayPush.dew.js";
import { dew as _baseRestDewDew } from "./_baseRest.dew.js";
import { dew as _castSliceDewDew } from "./_castSlice.dew.js";
import { dew as _toIntegerDewDew } from "./toInteger.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var apply = _applyDewDew(),
      arrayPush = _arrayPushDewDew(),
      baseRest = _baseRestDewDew(),
      castSlice = _castSliceDewDew(),
      toInteger = _toIntegerDewDew();
  /** Error message constants. */


  var FUNC_ERROR_TEXT = 'Expected a function';
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeMax = Math.max;
  /**
   * Creates a function that invokes `func` with the `this` binding of the
   * create function and an array of arguments much like
   * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
   *
   * **Note:** This method is based on the
   * [spread operator](https://mdn.io/spread_operator).
   *
   * @static
   * @memberOf _
   * @since 3.2.0
   * @category Function
   * @param {Function} func The function to spread arguments over.
   * @param {number} [start=0] The start position of the spread.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var say = _.spread(function(who, what) {
   *   return who + ' says ' + what;
   * });
   *
   * say(['fred', 'hello']);
   * // => 'fred says hello'
   *
   * var numbers = Promise.all([
   *   Promise.resolve(40),
   *   Promise.resolve(36)
   * ]);
   *
   * numbers.then(_.spread(function(x, y) {
   *   return x + y;
   * }));
   * // => a Promise of 76
   */

  function spread(func, start) {
    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }

    start = start == null ? 0 : nativeMax(toInteger(start), 0);
    return baseRest(function (args) {
      var array = args[start],
          otherArgs = castSlice(args, 0, start);

      if (array) {
        arrayPush(otherArgs, array);
      }

      return apply(func, this || _global, otherArgs);
    });
  }

  exports = spread;
  return exports;
}