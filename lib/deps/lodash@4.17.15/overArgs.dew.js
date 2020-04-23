import { dew as _applyDewDew } from "./_apply.dew.js";
import { dew as _arrayMapDewDew } from "./_arrayMap.dew.js";
import { dew as _baseFlattenDewDew } from "./_baseFlatten.dew.js";
import { dew as _baseIterateeDewDew } from "./_baseIteratee.dew.js";
import { dew as _baseRestDewDew } from "./_baseRest.dew.js";
import { dew as _baseUnaryDewDew } from "./_baseUnary.dew.js";
import { dew as _castRestDewDew } from "./_castRest.dew.js";
import { dew as _isArrayDewDew } from "./isArray.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var apply = _applyDewDew(),
      arrayMap = _arrayMapDewDew(),
      baseFlatten = _baseFlattenDewDew(),
      baseIteratee = _baseIterateeDewDew(),
      baseRest = _baseRestDewDew(),
      baseUnary = _baseUnaryDewDew(),
      castRest = _castRestDewDew(),
      isArray = _isArrayDewDew();
  /* Built-in method references for those with the same name as other `lodash` methods. */


  var nativeMin = Math.min;
  /**
   * Creates a function that invokes `func` with its arguments transformed.
   *
   * @static
   * @since 4.0.0
   * @memberOf _
   * @category Function
   * @param {Function} func The function to wrap.
   * @param {...(Function|Function[])} [transforms=[_.identity]]
   *  The argument transforms.
   * @returns {Function} Returns the new function.
   * @example
   *
   * function doubled(n) {
   *   return n * 2;
   * }
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * var func = _.overArgs(function(x, y) {
   *   return [x, y];
   * }, [square, doubled]);
   *
   * func(9, 3);
   * // => [81, 6]
   *
   * func(10, 5);
   * // => [100, 10]
   */

  var overArgs = castRest(function (func, transforms) {
    transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(baseIteratee)) : arrayMap(baseFlatten(transforms, 1), baseUnary(baseIteratee));
    var funcsLength = transforms.length;
    return baseRest(function (args) {
      var index = -1,
          length = nativeMin(args.length, funcsLength);

      while (++index < length) {
        args[index] = transforms[index].call(this || _global, args[index]);
      }

      return apply(func, this || _global, args);
    });
  });
  exports = overArgs;
  return exports;
}