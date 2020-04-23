import { dew as _arrayFilterDewDew } from "./_arrayFilter.dew.js";
import { dew as _baseRestDewDew } from "./_baseRest.dew.js";
import { dew as _baseXorDewDew } from "./_baseXor.dew.js";
import { dew as _isArrayLikeObjectDewDew } from "./isArrayLikeObject.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arrayFilter = _arrayFilterDewDew(),
      baseRest = _baseRestDewDew(),
      baseXor = _baseXorDewDew(),
      isArrayLikeObject = _isArrayLikeObjectDewDew();
  /**
   * Creates an array of unique values that is the
   * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
   * of the given arrays. The order of result values is determined by the order
   * they occur in the arrays.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @returns {Array} Returns the new array of filtered values.
   * @see _.difference, _.without
   * @example
   *
   * _.xor([2, 1], [2, 3]);
   * // => [1, 3]
   */


  var xor = baseRest(function (arrays) {
    return baseXor(arrayFilter(arrays, isArrayLikeObject));
  });
  exports = xor;
  return exports;
}