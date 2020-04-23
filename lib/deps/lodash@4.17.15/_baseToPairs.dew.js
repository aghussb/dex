import { dew as _arrayMapDewDew } from "./_arrayMap.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arrayMap = _arrayMapDewDew();
  /**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */


  function baseToPairs(object, props) {
    return arrayMap(props, function (key) {
      return [key, object[key]];
    });
  }

  exports = baseToPairs;
  return exports;
}