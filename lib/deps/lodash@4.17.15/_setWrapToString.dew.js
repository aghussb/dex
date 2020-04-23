import { dew as _getWrapDetailsDewDew } from "./_getWrapDetails.dew.js";
import { dew as _insertWrapDetailsDewDew } from "./_insertWrapDetails.dew.js";
import { dew as _setToStringDewDew } from "./_setToString.dew.js";
import { dew as _updateWrapDetailsDewDew } from "./_updateWrapDetails.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var getWrapDetails = _getWrapDetailsDewDew(),
      insertWrapDetails = _insertWrapDetailsDewDew(),
      setToString = _setToStringDewDew(),
      updateWrapDetails = _updateWrapDetailsDewDew();
  /**
   * Sets the `toString` method of `wrapper` to mimic the source of `reference`
   * with wrapper details in a comment at the top of the source body.
   *
   * @private
   * @param {Function} wrapper The function to modify.
   * @param {Function} reference The reference function.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @returns {Function} Returns `wrapper`.
   */


  function setWrapToString(wrapper, reference, bitmask) {
    var source = reference + '';
    return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
  }

  exports = setWrapToString;
  return exports;
}