import { dew as _arrayEachRightDewDew } from "./_arrayEachRight.dew.js";
import { dew as _baseEachRightDewDew } from "./_baseEachRight.dew.js";
import { dew as _castFunctionDewDew } from "./_castFunction.dew.js";
import { dew as _isArrayDewDew } from "./isArray.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arrayEachRight = _arrayEachRightDewDew(),
      baseEachRight = _baseEachRightDewDew(),
      castFunction = _castFunctionDewDew(),
      isArray = _isArrayDewDew();
  /**
   * This method is like `_.forEach` except that it iterates over elements of
   * `collection` from right to left.
   *
   * @static
   * @memberOf _
   * @since 2.0.0
   * @alias eachRight
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   * @see _.forEach
   * @example
   *
   * _.forEachRight([1, 2], function(value) {
   *   console.log(value);
   * });
   * // => Logs `2` then `1`.
   */


  function forEachRight(collection, iteratee) {
    var func = isArray(collection) ? arrayEachRight : baseEachRight;
    return func(collection, castFunction(iteratee));
  }

  exports = forEachRight;
  return exports;
}