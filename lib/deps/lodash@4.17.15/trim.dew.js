import { dew as _baseToStringDewDew } from "./_baseToString.dew.js";
import { dew as _castSliceDewDew } from "./_castSlice.dew.js";
import { dew as _charsEndIndexDewDew } from "./_charsEndIndex.dew.js";
import { dew as _charsStartIndexDewDew } from "./_charsStartIndex.dew.js";
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
      charsStartIndex = _charsStartIndexDewDew(),
      stringToArray = _stringToArrayDewDew(),
      toString = _toStringDewDew();
  /** Used to match leading and trailing whitespace. */


  var reTrim = /^\s+|\s+$/g;
  /**
   * Removes leading and trailing whitespace or specified characters from `string`.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category String
   * @param {string} [string=''] The string to trim.
   * @param {string} [chars=whitespace] The characters to trim.
   * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
   * @returns {string} Returns the trimmed string.
   * @example
   *
   * _.trim('  abc  ');
   * // => 'abc'
   *
   * _.trim('-_-abc-_-', '_-');
   * // => 'abc'
   *
   * _.map(['  foo  ', '  bar  '], _.trim);
   * // => ['foo', 'bar']
   */

  function trim(string, chars, guard) {
    string = toString(string);

    if (string && (guard || chars === undefined)) {
      return string.replace(reTrim, '');
    }

    if (!string || !(chars = baseToString(chars))) {
      return string;
    }

    var strSymbols = stringToArray(string),
        chrSymbols = stringToArray(chars),
        start = charsStartIndex(strSymbols, chrSymbols),
        end = charsEndIndex(strSymbols, chrSymbols) + 1;
    return castSlice(strSymbols, start, end).join('');
  }

  exports = trim;
  return exports;
}