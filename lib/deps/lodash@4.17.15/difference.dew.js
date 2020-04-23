import { dew as _baseDifferenceDewDew } from "./_baseDifference.dew.js";
import { dew as _baseFlattenDewDew } from "./_baseFlatten.dew.js";
import { dew as _baseRestDewDew } from "./_baseRest.dew.js";
import { dew as _isArrayLikeObjectDewDew } from "./isArrayLikeObject.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseDifference = _baseDifferenceDewDew(),
      baseFlatten = _baseFlattenDewDew(),
      baseRest = _baseRestDewDew(),
      isArrayLikeObject = _isArrayLikeObjectDewDew();
  /**
   * Creates an array of `array` values not included in the other given arrays
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons. The order and references of result values are
   * determined by the first array.
   *
   * **Note:** Unlike `_.pullAll`, this method returns a new array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {...Array} [values] The values to exclude.
   * @returns {Array} Returns the new array of filtered values.
   * @see _.without, _.xor
   * @example
   *
   * _.difference([2, 1], [2, 3]);
   * // => [1]
   */


  var difference = baseRest(function (array, values) {
    return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : [];
  });
  exports = difference;
  return exports;
}