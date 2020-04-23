import { dew as _arrayFilterDewDew } from "./_arrayFilter.dew.js";
import { dew as _isFunctionDewDew } from "./isFunction.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arrayFilter = _arrayFilterDewDew(),
      isFunction = _isFunctionDewDew();
  /**
   * The base implementation of `_.functions` which creates an array of
   * `object` function property names filtered from `props`.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Array} props The property names to filter.
   * @returns {Array} Returns the function names.
   */


  function baseFunctions(object, props) {
    return arrayFilter(props, function (key) {
      return isFunction(object[key]);
    });
  }

  exports = baseFunctions;
  return exports;
}