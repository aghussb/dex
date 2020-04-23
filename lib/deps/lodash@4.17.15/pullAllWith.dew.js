import { dew as _basePullAllDewDew } from "./_basePullAll.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var basePullAll = _basePullAllDewDew();
  /**
   * This method is like `_.pullAll` except that it accepts `comparator` which
   * is invoked to compare elements of `array` to `values`. The comparator is
   * invoked with two arguments: (arrVal, othVal).
   *
   * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
   *
   * @static
   * @memberOf _
   * @since 4.6.0
   * @category Array
   * @param {Array} array The array to modify.
   * @param {Array} values The values to remove.
   * @param {Function} [comparator] The comparator invoked per element.
   * @returns {Array} Returns `array`.
   * @example
   *
   * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
   *
   * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
   * console.log(array);
   * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
   */


  function pullAllWith(array, values, comparator) {
    return array && array.length && values && values.length ? basePullAll(array, values, undefined, comparator) : array;
  }

  exports = pullAllWith;
  return exports;
}