import { dew as _arrayFilterDewDew } from "./_arrayFilter.dew.js";
import { dew as _baseRestDewDew } from "./_baseRest.dew.js";
import { dew as _baseXorDewDew } from "./_baseXor.dew.js";
import { dew as _isArrayLikeObjectDewDew } from "./isArrayLikeObject.dew.js";
import { dew as _lastDewDew } from "./last.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arrayFilter = _arrayFilterDewDew(),
      baseRest = _baseRestDewDew(),
      baseXor = _baseXorDewDew(),
      isArrayLikeObject = _isArrayLikeObjectDewDew(),
      last = _lastDewDew();
  /**
   * This method is like `_.xor` except that it accepts `comparator` which is
   * invoked to compare elements of `arrays`. The order of result values is
   * determined by the order they occur in the arrays. The comparator is invoked
   * with two arguments: (arrVal, othVal).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
   * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
   *
   * _.xorWith(objects, others, _.isEqual);
   * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
   */


  var xorWith = baseRest(function (arrays) {
    var comparator = last(arrays);
    comparator = typeof comparator == 'function' ? comparator : undefined;
    return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
  });
  exports = xorWith;
  return exports;
}