import { dew as _baseGetDewDew } from "./_baseGet.dew.js";
import { dew as _baseSliceDewDew } from "./_baseSlice.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseGet = _baseGetDewDew(),
      baseSlice = _baseSliceDewDew();
  /**
   * Gets the parent value at `path` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} path The path to get the parent value of.
   * @returns {*} Returns the parent value.
   */


  function parent(object, path) {
    return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
  }

  exports = parent;
  return exports;
}