import { dew as _asciiSizeDewDew } from "./_asciiSize.dew.js";
import { dew as _hasUnicodeDewDew } from "./_hasUnicode.dew.js";
import { dew as _unicodeSizeDewDew } from "./_unicodeSize.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var asciiSize = _asciiSizeDewDew(),
      hasUnicode = _hasUnicodeDewDew(),
      unicodeSize = _unicodeSizeDewDew();
  /**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */


  function stringSize(string) {
    return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
  }

  exports = stringSize;
  return exports;
}