import { dew as _baseRepeatDewDew } from "./_baseRepeat.dew.js";
import { dew as _baseToStringDewDew } from "./_baseToString.dew.js";
import { dew as _castSliceDewDew } from "./_castSlice.dew.js";
import { dew as _hasUnicodeDewDew } from "./_hasUnicode.dew.js";
import { dew as _stringSizeDewDew } from "./_stringSize.dew.js";
import { dew as _stringToArrayDewDew } from "./_stringToArray.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseRepeat = _baseRepeatDewDew(),
      baseToString = _baseToStringDewDew(),
      castSlice = _castSliceDewDew(),
      hasUnicode = _hasUnicodeDewDew(),
      stringSize = _stringSizeDewDew(),
      stringToArray = _stringToArrayDewDew();
  /* Built-in method references for those with the same name as other `lodash` methods. */


  var nativeCeil = Math.ceil;
  /**
   * Creates the padding for `string` based on `length`. The `chars` string
   * is truncated if the number of characters exceeds `length`.
   *
   * @private
   * @param {number} length The padding length.
   * @param {string} [chars=' '] The string used as padding.
   * @returns {string} Returns the padding for `string`.
   */

  function createPadding(length, chars) {
    chars = chars === undefined ? ' ' : baseToString(chars);
    var charsLength = chars.length;

    if (charsLength < 2) {
      return charsLength ? baseRepeat(chars, length) : chars;
    }

    var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
    return hasUnicode(chars) ? castSlice(stringToArray(result), 0, length).join('') : result.slice(0, length);
  }

  exports = createPadding;
  return exports;
}