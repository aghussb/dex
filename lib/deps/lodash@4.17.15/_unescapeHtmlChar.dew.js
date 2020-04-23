import { dew as _basePropertyOfDewDew } from "./_basePropertyOf.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var basePropertyOf = _basePropertyOfDewDew();
  /** Used to map HTML entities to characters. */


  var htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };
  /**
   * Used by `_.unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} chr The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */

  var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
  exports = unescapeHtmlChar;
  return exports;
}