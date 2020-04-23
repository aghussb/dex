import { dew as _createMathOperationDewDew } from "./_createMathOperation.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var createMathOperation = _createMathOperationDewDew();
  /**
   * Adds two numbers.
   *
   * @static
   * @memberOf _
   * @since 3.4.0
   * @category Math
   * @param {number} augend The first number in an addition.
   * @param {number} addend The second number in an addition.
   * @returns {number} Returns the total.
   * @example
   *
   * _.add(6, 4);
   * // => 10
   */


  var add = createMathOperation(function (augend, addend) {
    return augend + addend;
  }, 0);
  exports = add;
  return exports;
}