import { dew as _basePropertyDewDew } from "./_baseProperty.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseProperty = _basePropertyDewDew();
  /**
   * Gets the size of an ASCII `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */


  var asciiSize = baseProperty('length');
  exports = asciiSize;
  return exports;
}