import { dew as _arrayEachDewDew } from "./_arrayEach.dew.js";
import { dew as _baseAssignValueDewDew } from "./_baseAssignValue.dew.js";
import { dew as _bindDewDew } from "./bind.dew.js";
import { dew as _flatRestDewDew } from "./_flatRest.dew.js";
import { dew as _toKeyDewDew } from "./_toKey.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arrayEach = _arrayEachDewDew(),
      baseAssignValue = _baseAssignValueDewDew(),
      bind = _bindDewDew(),
      flatRest = _flatRestDewDew(),
      toKey = _toKeyDewDew();
  /**
   * Binds methods of an object to the object itself, overwriting the existing
   * method.
   *
   * **Note:** This method doesn't set the "length" property of bound functions.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {Object} object The object to bind and assign the bound methods to.
   * @param {...(string|string[])} methodNames The object method names to bind.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var view = {
   *   'label': 'docs',
   *   'click': function() {
   *     console.log('clicked ' + this.label);
   *   }
   * };
   *
   * _.bindAll(view, ['click']);
   * jQuery(element).on('click', view.click);
   * // => Logs 'clicked docs' when clicked.
   */


  var bindAll = flatRest(function (object, methodNames) {
    arrayEach(methodNames, function (key) {
      key = toKey(key);
      baseAssignValue(object, key, bind(object[key], object));
    });
    return object;
  });
  exports = bindAll;
  return exports;
}