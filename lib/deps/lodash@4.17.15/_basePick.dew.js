import { dew as _basePickByDewDew } from "./_basePickBy.dew.js";
import { dew as _hasInDewDew } from "./hasIn.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var basePickBy = _basePickByDewDew(),
      hasIn = _hasInDewDew();
  /**
   * The base implementation of `_.pick` without support for individual
   * property identifiers.
   *
   * @private
   * @param {Object} object The source object.
   * @param {string[]} paths The property paths to pick.
   * @returns {Object} Returns the new object.
   */


  function basePick(object, paths) {
    return basePickBy(object, paths, function (value, path) {
      return hasIn(object, path);
    });
  }

  exports = basePick;
  return exports;
}