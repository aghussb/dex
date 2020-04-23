import { dew as _constantDewDew } from "./constant.dew.js";
import { dew as _createInverterDewDew } from "./_createInverter.dew.js";
import { dew as _identityDewDew } from "./identity.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var constant = _constantDewDew(),
      createInverter = _createInverterDewDew(),
      identity = _identityDewDew();
  /** Used for built-in method references. */


  var objectProto = Object.prototype;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var nativeObjectToString = objectProto.toString;
  /**
   * Creates an object composed of the inverted keys and values of `object`.
   * If `object` contains duplicate values, subsequent values overwrite
   * property assignments of previous values.
   *
   * @static
   * @memberOf _
   * @since 0.7.0
   * @category Object
   * @param {Object} object The object to invert.
   * @returns {Object} Returns the new inverted object.
   * @example
   *
   * var object = { 'a': 1, 'b': 2, 'c': 1 };
   *
   * _.invert(object);
   * // => { '1': 'c', '2': 'b' }
   */

  var invert = createInverter(function (result, value, key) {
    if (value != null && typeof value.toString != 'function') {
      value = nativeObjectToString.call(value);
    }

    result[value] = key;
  }, constant(identity));
  exports = invert;
  return exports;
}