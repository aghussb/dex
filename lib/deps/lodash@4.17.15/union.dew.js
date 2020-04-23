import { dew as _baseFlattenDewDew } from "./_baseFlatten.dew.js";
import { dew as _baseRestDewDew } from "./_baseRest.dew.js";
import { dew as _baseUniqDewDew } from "./_baseUniq.dew.js";
import { dew as _isArrayLikeObjectDewDew } from "./isArrayLikeObject.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseFlatten = _baseFlattenDewDew(),
      baseRest = _baseRestDewDew(),
      baseUniq = _baseUniqDewDew(),
      isArrayLikeObject = _isArrayLikeObjectDewDew();
  /**
   * Creates an array of unique values, in order, from all given arrays using
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @returns {Array} Returns the new array of combined values.
   * @example
   *
   * _.union([2], [1, 2]);
   * // => [2, 1]
   */


  var union = baseRest(function (arrays) {
    return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
  });
  exports = union;
  return exports;
}