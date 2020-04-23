import { dew as _SymbolDewDew } from "./_Symbol.dew.js";
import { dew as _copyArrayDewDew } from "./_copyArray.dew.js";
import { dew as _getTagDewDew } from "./_getTag.dew.js";
import { dew as _isArrayLikeDewDew } from "./isArrayLike.dew.js";
import { dew as _isStringDewDew } from "./isString.dew.js";
import { dew as _iteratorToArrayDewDew } from "./_iteratorToArray.dew.js";
import { dew as _mapToArrayDewDew } from "./_mapToArray.dew.js";
import { dew as _setToArrayDewDew } from "./_setToArray.dew.js";
import { dew as _stringToArrayDewDew } from "./_stringToArray.dew.js";
import { dew as _valuesDewDew } from "./values.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var Symbol = _SymbolDewDew(),
      copyArray = _copyArrayDewDew(),
      getTag = _getTagDewDew(),
      isArrayLike = _isArrayLikeDewDew(),
      isString = _isStringDewDew(),
      iteratorToArray = _iteratorToArrayDewDew(),
      mapToArray = _mapToArrayDewDew(),
      setToArray = _setToArrayDewDew(),
      stringToArray = _stringToArrayDewDew(),
      values = _valuesDewDew();
  /** `Object#toString` result references. */


  var mapTag = '[object Map]',
      setTag = '[object Set]';
  /** Built-in value references. */

  var symIterator = Symbol ? Symbol.iterator : undefined;
  /**
   * Converts `value` to an array.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {Array} Returns the converted array.
   * @example
   *
   * _.toArray({ 'a': 1, 'b': 2 });
   * // => [1, 2]
   *
   * _.toArray('abc');
   * // => ['a', 'b', 'c']
   *
   * _.toArray(1);
   * // => []
   *
   * _.toArray(null);
   * // => []
   */

  function toArray(value) {
    if (!value) {
      return [];
    }

    if (isArrayLike(value)) {
      return isString(value) ? stringToArray(value) : copyArray(value);
    }

    if (symIterator && value[symIterator]) {
      return iteratorToArray(value[symIterator]());
    }

    var tag = getTag(value),
        func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
    return func(value);
  }

  exports = toArray;
  return exports;
}