import { dew as _baseToStringDewDew } from "./_baseToString.dew.js";
import { dew as _castSliceDewDew } from "./_castSlice.dew.js";
import { dew as _charsEndIndexDewDew } from "./_charsEndIndex.dew.js";
import { dew as _stringToArrayDewDew } from "./_stringToArray.dew.js";
import { dew as _toStringDewDew } from "./toString.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseToString = _baseToStringDewDew(),
      castSlice = _castSliceDewDew(),
      charsEndIndex = _charsEndIndexDewDew(),
      stringToArray = _stringToArrayDewDew(),
      toString = _toStringDewDew();
  /** Used to match leading and trailing whitespace. */


  var reTrimEnd = /\s+$/;
  /**
   * Removes trailing whitespace or specified characters from `string`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to trim.
   * @param {string} [chars=whitespace] The characters to trim.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {string} Returns the trimmed string.
   * @example
   *
   * _.trimEnd('  abc  ');
   * // => '  abc'
   *
   * _.trimEnd('-_-abc-_-', '_-');
   * // => '-_-abc'
   */

  function trimEnd(string, chars, guard) {
    string = toString(string);

    if (string && (guard || chars === undefined)) {
      return string.replace(reTrimEnd, '');
    }

    if (!string || !(chars = baseToString(chars))) {
      return string;
    }

    var strSymbols = stringToArray(string),
        end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
    return castSlice(strSymbols, 0, end).join('');
  }

  exports = trimEnd;
  return exports;
}