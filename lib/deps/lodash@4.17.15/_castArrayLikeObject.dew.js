import { dew as _isArrayLikeObjectDewDew } from "./isArrayLikeObject.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var isArrayLikeObject = _isArrayLikeObjectDewDew();
  /**
   * Casts `value` to an empty array if it's not an array like object.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Array|Object} Returns the cast array-like object.
   */


  function castArrayLikeObject(value) {
    return isArrayLikeObject(value) ? value : [];
  }

  exports = castArrayLikeObject;
  return exports;
}