import { dew as _applyDewDew } from "./_apply.dew.js";
import { dew as _arrayMapDewDew } from "./_arrayMap.dew.js";
import { dew as _baseIterateeDewDew } from "./_baseIteratee.dew.js";
import { dew as _baseRestDewDew } from "./_baseRest.dew.js";
import { dew as _baseUnaryDewDew } from "./_baseUnary.dew.js";
import { dew as _flatRestDewDew } from "./_flatRest.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var apply = _applyDewDew(),
      arrayMap = _arrayMapDewDew(),
      baseIteratee = _baseIterateeDewDew(),
      baseRest = _baseRestDewDew(),
      baseUnary = _baseUnaryDewDew(),
      flatRest = _flatRestDewDew();
  /**
   * Creates a function like `_.over`.
   *
   * @private
   * @param {Function} arrayFunc The function to iterate over iteratees.
   * @returns {Function} Returns the new over function.
   */


  function createOver(arrayFunc) {
    return flatRest(function (iteratees) {
      iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
      return baseRest(function (args) {
        var thisArg = this || _global;
        return arrayFunc(iteratees, function (iteratee) {
          return apply(iteratee, thisArg, args);
        });
      });
    });
  }

  exports = createOver;
  return exports;
}