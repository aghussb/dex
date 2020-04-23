import { dew as _baseSetDewDew } from "./_baseSet.dew.js";
import { dew as _baseZipObjectDewDew } from "./_baseZipObject.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseSet = _baseSetDewDew(),
      baseZipObject = _baseZipObjectDewDew();
  /**
   * This method is like `_.zipObject` except that it supports property paths.
   *
   * @static
   * @memberOf _
   * @since 4.1.0
   * @category Array
   * @param {Array} [props=[]] The property identifiers.
   * @param {Array} [values=[]] The property values.
   * @returns {Object} Returns the new object.
   * @example
   *
   * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
   * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
   */


  function zipObjectDeep(props, values) {
    return baseZipObject(props || [], values || [], baseSet);
  }

  exports = zipObjectDeep;
  return exports;
}