import { dew as _arrayPushDewDew } from "./_arrayPush.dew.js";
import { dew as _baseFlattenDewDew } from "./_baseFlatten.dew.js";
import { dew as _copyArrayDewDew } from "./_copyArray.dew.js";
import { dew as _isArrayDewDew } from "./isArray.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arrayPush = _arrayPushDewDew(),
      baseFlatten = _baseFlattenDewDew(),
      copyArray = _copyArrayDewDew(),
      isArray = _isArrayDewDew();
  /**
   * Creates a new array concatenating `array` with any additional arrays
   * and/or values.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Array
   * @param {Array} array The array to concatenate.
   * @param {...*} [values] The values to concatenate.
   * @returns {Array} Returns the new concatenated array.
   * @example
   *
   * var array = [1];
   * var other = _.concat(array, 2, [3], [[4]]);
   *
   * console.log(other);
   * // => [1, 2, 3, [4]]
   *
   * console.log(array);
   * // => [1]
   */


  function concat() {
    var length = arguments.length;

    if (!length) {
      return [];
    }

    var args = Array(length - 1),
        array = arguments[0],
        index = length;

    while (index--) {
      args[index - 1] = arguments[index];
    }

    return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
  }

  exports = concat;
  return exports;
}