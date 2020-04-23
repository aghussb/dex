import { dew as _baseGetDewDew } from "./_baseGet.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseGet = _baseGetDewDew();
  /**
   * A specialized version of `baseProperty` which supports deep paths.
   *
   * @private
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   */


  function basePropertyDeep(path) {
    return function (object) {
      return baseGet(object, path);
    };
  }

  exports = basePropertyDeep;
  return exports;
}