import { dew as _baseSetToStringDewDew } from "./_baseSetToString.dew.js";
import { dew as _shortOutDewDew } from "./_shortOut.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseSetToString = _baseSetToStringDewDew(),
      shortOut = _shortOutDewDew();
  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */


  var setToString = shortOut(baseSetToString);
  exports = setToString;
  return exports;
}