import { dew as _asciiToArrayDewDew } from "./_asciiToArray.dew.js";
import { dew as _hasUnicodeDewDew } from "./_hasUnicode.dew.js";
import { dew as _unicodeToArrayDewDew } from "./_unicodeToArray.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var asciiToArray = _asciiToArrayDewDew(),
      hasUnicode = _hasUnicodeDewDew(),
      unicodeToArray = _unicodeToArrayDewDew();
  /**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */


  function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
  }

  exports = stringToArray;
  return exports;
}