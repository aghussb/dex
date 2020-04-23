import { dew as _basePropertyOfDewDew } from "./_basePropertyOf.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var basePropertyOf = _basePropertyOfDewDew();
  /** Used to map characters to HTML entities. */


  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  /**
   * Used by `_.escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */

  var escapeHtmlChar = basePropertyOf(htmlEscapes);
  exports = escapeHtmlChar;
  return exports;
}