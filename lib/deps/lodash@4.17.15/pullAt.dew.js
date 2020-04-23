import { dew as _arrayMapDewDew } from "./_arrayMap.dew.js";
import { dew as _baseAtDewDew } from "./_baseAt.dew.js";
import { dew as _basePullAtDewDew } from "./_basePullAt.dew.js";
import { dew as _compareAscendingDewDew } from "./_compareAscending.dew.js";
import { dew as _flatRestDewDew } from "./_flatRest.dew.js";
import { dew as _isIndexDewDew } from "./_isIndex.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arrayMap = _arrayMapDewDew(),
      baseAt = _baseAtDewDew(),
      basePullAt = _basePullAtDewDew(),
      compareAscending = _compareAscendingDewDew(),
      flatRest = _flatRestDewDew(),
      isIndex = _isIndexDewDew();
  /**
   * Removes elements from `array` corresponding to `indexes` and returns an
   * array of removed elements.
   *
   * **Note:** Unlike `_.at`, this method mutates `array`.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Array
   * @param {Array} array The array to modify.
   * @param {...(number|number[])} [indexes] The indexes of elements to remove.
   * @returns {Array} Returns the new array of removed elements.
   * @example
   *
   * var array = ['a', 'b', 'c', 'd'];
   * var pulled = _.pullAt(array, [1, 3]);
   *
   * console.log(array);
   * // => ['a', 'c']
   *
   * console.log(pulled);
   * // => ['b', 'd']
   */


  var pullAt = flatRest(function (array, indexes) {
    var length = array == null ? 0 : array.length,
        result = baseAt(array, indexes);
    basePullAt(array, arrayMap(indexes, function (index) {
      return isIndex(index, length) ? +index : index;
    }).sort(compareAscending));
    return result;
  });
  exports = pullAt;
  return exports;
}