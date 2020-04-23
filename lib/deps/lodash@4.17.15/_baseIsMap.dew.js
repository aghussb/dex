import { dew as _getTagDewDew } from "./_getTag.dew.js";
import { dew as _isObjectLikeDewDew } from "./isObjectLike.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var getTag = _getTagDewDew(),
      isObjectLike = _isObjectLikeDewDew();
  /** `Object#toString` result references. */


  var mapTag = '[object Map]';
  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */

  function baseIsMap(value) {
    return isObjectLike(value) && getTag(value) == mapTag;
  }

  exports = baseIsMap;
  return exports;
}