import { dew as _createMathOperationDewDew } from "./_createMathOperation.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var createMathOperation = _createMathOperationDewDew();
  /**
   * Multiply two numbers.
   *
   * @static
   * @memberOf _
   * @since 4.7.0
   * @category Math
   * @param {number} multiplier The first number in a multiplication.
   * @param {number} multiplicand The second number in a multiplication.
   * @returns {number} Returns the product.
   * @example
   *
   * _.multiply(6, 4);
   * // => 24
   */


  var multiply = createMathOperation(function (multiplier, multiplicand) {
    return multiplier * multiplicand;
  }, 1);
  exports = multiply;
  return exports;
}