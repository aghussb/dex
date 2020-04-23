import { dew as _identityDewDew } from "./identity.dew.js";
import { dew as _metaMapDewDew } from "./_metaMap.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var identity = _identityDewDew(),
      metaMap = _metaMapDewDew();
  /**
   * The base implementation of `setData` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to associate metadata with.
   * @param {*} data The metadata.
   * @returns {Function} Returns `func`.
   */


  var baseSetData = !metaMap ? identity : function (func, data) {
    metaMap.set(func, data);
    return func;
  };
  exports = baseSetData;
  return exports;
}