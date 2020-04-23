import { dew as _castSliceDewDew } from "./_castSlice.dew.js";
import { dew as _hasUnicodeDewDew } from "./_hasUnicode.dew.js";
import { dew as _stringToArrayDewDew } from "./_stringToArray.dew.js";
import { dew as _toStringDewDew } from "./toString.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var castSlice = _castSliceDewDew(),
      hasUnicode = _hasUnicodeDewDew(),
      stringToArray = _stringToArrayDewDew(),
      toString = _toStringDewDew();
  /**
   * Creates a function like `_.lowerFirst`.
   *
   * @private
   * @param {string} methodName The name of the `String` case method to use.
   * @returns {Function} Returns the new case function.
   */


  function createCaseFirst(methodName) {
    return function (string) {
      string = toString(string);
      var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;
      var chr = strSymbols ? strSymbols[0] : string.charAt(0);
      var trailing = strSymbols ? castSlice(strSymbols, 1).join('') : string.slice(1);
      return chr[methodName]() + trailing;
    };
  }

  exports = createCaseFirst;
  return exports;
}