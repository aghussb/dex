import { dew as _baseToStringDewDew } from "./_baseToString.dew.js";
import { dew as _castSliceDewDew } from "./_castSlice.dew.js";
import { dew as _hasUnicodeDewDew } from "./_hasUnicode.dew.js";
import { dew as _isIterateeCallDewDew } from "./_isIterateeCall.dew.js";
import { dew as _isRegExpDewDew } from "./isRegExp.dew.js";
import { dew as _stringToArrayDewDew } from "./_stringToArray.dew.js";
import { dew as _toStringDewDew } from "./toString.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseToString = _baseToStringDewDew(),
      castSlice = _castSliceDewDew(),
      hasUnicode = _hasUnicodeDewDew(),
      isIterateeCall = _isIterateeCallDewDew(),
      isRegExp = _isRegExpDewDew(),
      stringToArray = _stringToArrayDewDew(),
      toString = _toStringDewDew();
  /** Used as references for the maximum length and index of an array. */


  var MAX_ARRAY_LENGTH = 4294967295;
  /**
   * Splits `string` by `separator`.
   *
   * **Note:** This method is based on
   * [`String#split`](https://mdn.io/String/split).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to split.
   * @param {RegExp|string} separator The separator pattern to split by.
   * @param {number} [limit] The length to truncate results to.
   * @returns {Array} Returns the string segments.
   * @example
   *
   * _.split('a-b-c', '-', 2);
   * // => ['a', 'b']
   */

  function split(string, separator, limit) {
    if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
      separator = limit = undefined;
    }

    limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;

    if (!limit) {
      return [];
    }

    string = toString(string);

    if (string && (typeof separator == 'string' || separator != null && !isRegExp(separator))) {
      separator = baseToString(separator);

      if (!separator && hasUnicode(string)) {
        return castSlice(stringToArray(string), 0, limit);
      }
    }

    return string.split(separator, limit);
  }

  exports = split;
  return exports;
}