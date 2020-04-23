import { dew as _baseIsMapDewDew } from "./_baseIsMap.dew.js";
import { dew as _baseUnaryDewDew } from "./_baseUnary.dew.js";
import { dew as _nodeUtilDewDew } from "./_nodeUtil.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseIsMap = _baseIsMapDewDew(),
      baseUnary = _baseUnaryDewDew(),
      nodeUtil = _nodeUtilDewDew();
  /* Node.js helper references. */


  var nodeIsMap = nodeUtil && nodeUtil.isMap;
  /**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */

  var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
  exports = isMap;
  return exports;
}