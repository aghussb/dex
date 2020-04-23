import { dew as _createCaseFirstDewDew } from "./_createCaseFirst.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var createCaseFirst = _createCaseFirstDewDew();
  /**
   * Converts the first character of `string` to lower case.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.lowerFirst('Fred');
   * // => 'fred'
   *
   * _.lowerFirst('FRED');
   * // => 'fRED'
   */


  var lowerFirst = createCaseFirst('toLowerCase');
  exports = lowerFirst;
  return exports;
}