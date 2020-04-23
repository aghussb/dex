import { dew as _copyObjectDewDew } from "./_copyObject.dew.js";
import { dew as _keysInDewDew } from "./keysIn.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var copyObject = _copyObjectDewDew(),
      keysIn = _keysInDewDew();
  /**
   * The base implementation of `_.assignIn` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */


  function baseAssignIn(object, source) {
    return object && copyObject(source, keysIn(source), object);
  }

  exports = baseAssignIn;
  return exports;
}