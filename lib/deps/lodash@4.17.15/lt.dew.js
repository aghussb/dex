import { dew as _baseLtDewDew } from "./_baseLt.dew.js";
import { dew as _createRelationalOperationDewDew } from "./_createRelationalOperation.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseLt = _baseLtDewDew(),
      createRelationalOperation = _createRelationalOperationDewDew();
  /**
   * Checks if `value` is less than `other`.
   *
   * @static
   * @memberOf _
   * @since 3.9.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if `value` is less than `other`,
   *  else `false`.
   * @see _.gt
   * @example
   *
   * _.lt(1, 3);
   * // => true
   *
   * _.lt(3, 3);
   * // => false
   *
   * _.lt(3, 1);
   * // => false
   */


  var lt = createRelationalOperation(baseLt);
  exports = lt;
  return exports;
}