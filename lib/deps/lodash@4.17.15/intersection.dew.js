import { dew as _arrayMapDewDew } from "./_arrayMap.dew.js";
import { dew as _baseIntersectionDewDew } from "./_baseIntersection.dew.js";
import { dew as _baseRestDewDew } from "./_baseRest.dew.js";
import { dew as _castArrayLikeObjectDewDew } from "./_castArrayLikeObject.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arrayMap = _arrayMapDewDew(),
      baseIntersection = _baseIntersectionDewDew(),
      baseRest = _baseRestDewDew(),
      castArrayLikeObject = _castArrayLikeObjectDewDew();
  /**
   * Creates an array of unique values that are included in all given arrays
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons. The order and references of result values are
   * determined by the first array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @returns {Array} Returns the new array of intersecting values.
   * @example
   *
   * _.intersection([2, 1], [2, 3]);
   * // => [2]
   */


  var intersection = baseRest(function (arrays) {
    var mapped = arrayMap(arrays, castArrayLikeObject);
    return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
  });
  exports = intersection;
  return exports;
}