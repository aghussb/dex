import { dew as _arrayFilterDewDew } from "./_arrayFilter.dew.js";
import { dew as _arrayMapDewDew } from "./_arrayMap.dew.js";
import { dew as _basePropertyDewDew } from "./_baseProperty.dew.js";
import { dew as _baseTimesDewDew } from "./_baseTimes.dew.js";
import { dew as _isArrayLikeObjectDewDew } from "./isArrayLikeObject.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arrayFilter = _arrayFilterDewDew(),
      arrayMap = _arrayMapDewDew(),
      baseProperty = _basePropertyDewDew(),
      baseTimes = _baseTimesDewDew(),
      isArrayLikeObject = _isArrayLikeObjectDewDew();
  /* Built-in method references for those with the same name as other `lodash` methods. */


  var nativeMax = Math.max;
  /**
   * This method is like `_.zip` except that it accepts an array of grouped
   * elements and creates an array regrouping the elements to their pre-zip
   * configuration.
   *
   * @static
   * @memberOf _
   * @since 1.2.0
   * @category Array
   * @param {Array} array The array of grouped elements to process.
   * @returns {Array} Returns the new array of regrouped elements.
   * @example
   *
   * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
   * // => [['a', 1, true], ['b', 2, false]]
   *
   * _.unzip(zipped);
   * // => [['a', 'b'], [1, 2], [true, false]]
   */

  function unzip(array) {
    if (!(array && array.length)) {
      return [];
    }

    var length = 0;
    array = arrayFilter(array, function (group) {
      if (isArrayLikeObject(group)) {
        length = nativeMax(group.length, length);
        return true;
      }
    });
    return baseTimes(length, function (index) {
      return arrayMap(array, baseProperty(index));
    });
  }

  exports = unzip;
  return exports;
}