import { dew as _metaMapDewDew } from "./_metaMap.dew.js";
import { dew as _noopDewDew } from "./noop.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var metaMap = _metaMapDewDew(),
      noop = _noopDewDew();
  /**
   * Gets metadata for `func`.
   *
   * @private
   * @param {Function} func The function to query.
   * @returns {*} Returns the metadata for `func`.
   */


  var getData = !metaMap ? noop : function (func) {
    return metaMap.get(func);
  };
  exports = getData;
  return exports;
}