import { dew as _baseFlattenDewDew } from "./_baseFlatten.dew.js";
import { dew as _mapDewDew } from "./map.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseFlatten = _baseFlattenDewDew(),
      map = _mapDewDew();
  /**
   * Creates a flattened array of values by running each element in `collection`
   * thru `iteratee` and flattening the mapped results. The iteratee is invoked
   * with three arguments: (value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * function duplicate(n) {
   *   return [n, n];
   * }
   *
   * _.flatMap([1, 2], duplicate);
   * // => [1, 1, 2, 2]
   */


  function flatMap(collection, iteratee) {
    return baseFlatten(map(collection, iteratee), 1);
  }

  exports = flatMap;
  return exports;
}