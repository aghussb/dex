import { dew as _baseDifferenceDewDew } from "./_baseDifference.dew.js";
import { dew as _baseFlattenDewDew } from "./_baseFlatten.dew.js";
import { dew as _baseRestDewDew } from "./_baseRest.dew.js";
import { dew as _isArrayLikeObjectDewDew } from "./isArrayLikeObject.dew.js";
import { dew as _lastDewDew } from "./last.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseDifference = _baseDifferenceDewDew(),
      baseFlatten = _baseFlattenDewDew(),
      baseRest = _baseRestDewDew(),
      isArrayLikeObject = _isArrayLikeObjectDewDew(),
      last = _lastDewDew();
  /**
   * This method is like `_.difference` except that it accepts `comparator`
   * which is invoked to compare elements of `array` to `values`. The order and
   * references of result values are determined by the first array. The comparator
   * is invoked with two arguments: (arrVal, othVal).
   *
   * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to inspect.
   * @param {...Array} [values] The values to exclude.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
   *
   * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
   * // => [{ 'x': 2, 'y': 1 }]
   */


  var differenceWith = baseRest(function (array, values) {
    var comparator = last(values);

    if (isArrayLikeObject(comparator)) {
      comparator = undefined;
    }

    return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator) : [];
  });
  exports = differenceWith;
  return exports;
}