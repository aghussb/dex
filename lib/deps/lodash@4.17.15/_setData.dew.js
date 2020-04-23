import { dew as _baseSetDataDewDew } from "./_baseSetData.dew.js";
import { dew as _shortOutDewDew } from "./_shortOut.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseSetData = _baseSetDataDewDew(),
      shortOut = _shortOutDewDew();
  /**
   * Sets metadata for `func`.
   *
   * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
   * period of time, it will trip its breaker and transition to an identity
   * function to avoid garbage collection pauses in V8. See
   * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
   * for more details.
   *
   * @private
   * @param {Function} func The function to associate metadata with.
   * @param {*} data The metadata.
   * @returns {Function} Returns `func`.
   */


  var setData = shortOut(baseSetData);
  exports = setData;
  return exports;
}