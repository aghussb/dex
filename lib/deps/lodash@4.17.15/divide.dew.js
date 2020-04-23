import { dew as _createMathOperationDewDew } from "./_createMathOperation.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var createMathOperation = _createMathOperationDewDew();
  /**
   * Divide two numbers.
   *
   * @static
   * @memberOf _
   * @since 4.7.0
   * @category Math
   * @param {number} dividend The first number in a division.
   * @param {number} divisor The second number in a division.
   * @returns {number} Returns the quotient.
   * @example
   *
   * _.divide(6, 4);
   * // => 1.5
   */


  var divide = createMathOperation(function (dividend, divisor) {
    return dividend / divisor;
  }, 1);
  exports = divide;
  return exports;
}