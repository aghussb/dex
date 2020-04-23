import { dew as _isArrayDewDew } from "./isArray.dew.js";
import { dew as _isKeyDewDew } from "./_isKey.dew.js";
import { dew as _stringToPathDewDew } from "./_stringToPath.dew.js";
import { dew as _toStringDewDew } from "./toString.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var isArray = _isArrayDewDew(),
      isKey = _isKeyDewDew(),
      stringToPath = _stringToPathDewDew(),
      toString = _toStringDewDew();
  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */


  function castPath(value, object) {
    if (isArray(value)) {
      return value;
    }

    return isKey(value, object) ? [value] : stringToPath(toString(value));
  }

  exports = castPath;
  return exports;
}