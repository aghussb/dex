import { dew as _arrayMapDewDew } from "./_arrayMap.dew.js";
import { dew as _copyArrayDewDew } from "./_copyArray.dew.js";
import { dew as _isArrayDewDew } from "./isArray.dew.js";
import { dew as _isSymbolDewDew } from "./isSymbol.dew.js";
import { dew as _stringToPathDewDew } from "./_stringToPath.dew.js";
import { dew as _toKeyDewDew } from "./_toKey.dew.js";
import { dew as _toStringDewDew } from "./toString.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arrayMap = _arrayMapDewDew(),
      copyArray = _copyArrayDewDew(),
      isArray = _isArrayDewDew(),
      isSymbol = _isSymbolDewDew(),
      stringToPath = _stringToPathDewDew(),
      toKey = _toKeyDewDew(),
      toString = _toStringDewDew();
  /**
   * Converts `value` to a property path array.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Util
   * @param {*} value The value to convert.
   * @returns {Array} Returns the new property path array.
   * @example
   *
   * _.toPath('a.b.c');
   * // => ['a', 'b', 'c']
   *
   * _.toPath('a[0].b.c');
   * // => ['a', '0', 'b', 'c']
   */


  function toPath(value) {
    if (isArray(value)) {
      return arrayMap(value, toKey);
    }

    return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
  }

  exports = toPath;
  return exports;
}