import { dew as _LazyWrapperDewDew } from "./_LazyWrapper.dew.js";
import { dew as _getDataDewDew } from "./_getData.dew.js";
import { dew as _getFuncNameDewDew } from "./_getFuncName.dew.js";
import { dew as _wrapperLodashDewDew } from "./wrapperLodash.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var LazyWrapper = _LazyWrapperDewDew(),
      getData = _getDataDewDew(),
      getFuncName = _getFuncNameDewDew(),
      lodash = _wrapperLodashDewDew();
  /**
   * Checks if `func` has a lazy counterpart.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
   *  else `false`.
   */


  function isLaziable(func) {
    var funcName = getFuncName(func),
        other = lodash[funcName];

    if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
      return false;
    }

    if (func === other) {
      return true;
    }

    var data = getData(other);
    return !!data && func === data[0];
  }

  exports = isLaziable;
  return exports;
}