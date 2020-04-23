import { dew as _arrayEachDewDew } from "./_arrayEach.dew.js";
import { dew as _arrayPushDewDew } from "./_arrayPush.dew.js";
import { dew as _baseFunctionsDewDew } from "./_baseFunctions.dew.js";
import { dew as _copyArrayDewDew } from "./_copyArray.dew.js";
import { dew as _isFunctionDewDew } from "./isFunction.dew.js";
import { dew as _isObjectDewDew } from "./isObject.dew.js";
import { dew as _keysDewDew } from "./keys.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arrayEach = _arrayEachDewDew(),
      arrayPush = _arrayPushDewDew(),
      baseFunctions = _baseFunctionsDewDew(),
      copyArray = _copyArrayDewDew(),
      isFunction = _isFunctionDewDew(),
      isObject = _isObjectDewDew(),
      keys = _keysDewDew();
  /**
   * Adds all own enumerable string keyed function properties of a source
   * object to the destination object. If `object` is a function, then methods
   * are added to its prototype as well.
   *
   * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
   * avoid conflicts caused by modifying the original.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {Function|Object} [object=lodash] The destination object.
   * @param {Object} source The object of functions to add.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
   * @returns {Function|Object} Returns `object`.
   * @example
   *
   * function vowels(string) {
   *   return _.filter(string, function(v) {
   *     return /[aeiou]/i.test(v);
   *   });
   * }
   *
   * _.mixin({ 'vowels': vowels });
   * _.vowels('fred');
   * // => ['e']
   *
   * _('fred').vowels().value();
   * // => ['e']
   *
   * _.mixin({ 'vowels': vowels }, { 'chain': false });
   * _('fred').vowels();
   * // => ['e']
   */


  function mixin(object, source, options) {
    var props = keys(source),
        methodNames = baseFunctions(source, props);
    var chain = !(isObject(options) && 'chain' in options) || !!options.chain,
        isFunc = isFunction(object);
    arrayEach(methodNames, function (methodName) {
      var func = source[methodName];
      object[methodName] = func;

      if (isFunc) {
        object.prototype[methodName] = function () {
          var chainAll = (this || _global).__chain__;

          if (chain || chainAll) {
            var result = object((this || _global).__wrapped__),
                actions = result.__actions__ = copyArray((this || _global).__actions__);
            actions.push({
              'func': func,
              'args': arguments,
              'thisArg': object
            });
            result.__chain__ = chainAll;
            return result;
          }

          return func.apply(object, arrayPush([this.value()], arguments));
        };
      }
    });
    return object;
  }

  exports = mixin;
  return exports;
}