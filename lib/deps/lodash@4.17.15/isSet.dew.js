import { dew as _baseIsSetDewDew } from "./_baseIsSet.dew.js";
import { dew as _baseUnaryDewDew } from "./_baseUnary.dew.js";
import { dew as _nodeUtilDewDew } from "./_nodeUtil.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseIsSet = _baseIsSetDewDew(),
      baseUnary = _baseUnaryDewDew(),
      nodeUtil = _nodeUtilDewDew();
  /* Node.js helper references. */


  var nodeIsSet = nodeUtil && nodeUtil.isSet;
  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */

  var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
  exports = isSet;
  return exports;
}