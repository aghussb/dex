import { dew as _baseGtDewDew } from "./_baseGt.dew.js";
import { dew as _createRelationalOperationDewDew } from "./_createRelationalOperation.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseGt = _baseGtDewDew(),
      createRelationalOperation = _createRelationalOperationDewDew();
  /**
   * Checks if `value` is greater than `other`.
   *
   * @static
   * @memberOf _
   * @since 3.9.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if `value` is greater than `other`,
   *  else `false`.
   * @see _.lt
   * @example
   *
   * _.gt(3, 1);
   * // => true
   *
   * _.gt(3, 3);
   * // => false
   *
   * _.gt(1, 3);
   * // => false
   */


  var gt = createRelationalOperation(baseGt);
  exports = gt;
  return exports;
}