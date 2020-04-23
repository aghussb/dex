import { dew as _baseRangeDewDew } from "./_baseRange.dew.js";
import { dew as _isIterateeCallDewDew } from "./_isIterateeCall.dew.js";
import { dew as _toFiniteDewDew } from "./toFinite.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseRange = _baseRangeDewDew(),
      isIterateeCall = _isIterateeCallDewDew(),
      toFinite = _toFiniteDewDew();
  /**
   * Creates a `_.range` or `_.rangeRight` function.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new range function.
   */


  function createRange(fromRight) {
    return function (start, end, step) {
      if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
        end = step = undefined;
      } // Ensure the sign of `-0` is preserved.


      start = toFinite(start);

      if (end === undefined) {
        end = start;
        start = 0;
      } else {
        end = toFinite(end);
      }

      step = step === undefined ? start < end ? 1 : -1 : toFinite(step);
      return baseRange(start, end, step, fromRight);
    };
  }

  exports = createRange;
  return exports;
}