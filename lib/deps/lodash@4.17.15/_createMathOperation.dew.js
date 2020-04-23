import { dew as _baseToNumberDewDew } from "./_baseToNumber.dew.js";
import { dew as _baseToStringDewDew } from "./_baseToString.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseToNumber = _baseToNumberDewDew(),
      baseToString = _baseToStringDewDew();
  /**
   * Creates a function that performs a mathematical operation on two values.
   *
   * @private
   * @param {Function} operator The function to perform the operation.
   * @param {number} [defaultValue] The value used for `undefined` arguments.
   * @returns {Function} Returns the new mathematical operation function.
   */


  function createMathOperation(operator, defaultValue) {
    return function (value, other) {
      var result;

      if (value === undefined && other === undefined) {
        return defaultValue;
      }

      if (value !== undefined) {
        result = value;
      }

      if (other !== undefined) {
        if (result === undefined) {
          return other;
        }

        if (typeof value == 'string' || typeof other == 'string') {
          value = baseToString(value);
          other = baseToString(other);
        } else {
          value = baseToNumber(value);
          other = baseToNumber(other);
        }

        result = operator(value, other);
      }

      return result;
    };
  }

  exports = createMathOperation;
  return exports;
}