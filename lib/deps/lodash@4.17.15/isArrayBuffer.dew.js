import { dew as _baseIsArrayBufferDewDew } from "./_baseIsArrayBuffer.dew.js";
import { dew as _baseUnaryDewDew } from "./_baseUnary.dew.js";
import { dew as _nodeUtilDewDew } from "./_nodeUtil.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseIsArrayBuffer = _baseIsArrayBufferDewDew(),
      baseUnary = _baseUnaryDewDew(),
      nodeUtil = _nodeUtilDewDew();
  /* Node.js helper references. */


  var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer;
  /**
   * Checks if `value` is classified as an `ArrayBuffer` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
   * @example
   *
   * _.isArrayBuffer(new ArrayBuffer(2));
   * // => true
   *
   * _.isArrayBuffer(new Array(2));
   * // => false
   */

  var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
  exports = isArrayBuffer;
  return exports;
}