import { dew as _LazyWrapperDewDew } from "./_LazyWrapper.dew.js";
import { dew as _LodashWrapperDewDew } from "./_LodashWrapper.dew.js";
import { dew as _baseAtDewDew } from "./_baseAt.dew.js";
import { dew as _flatRestDewDew } from "./_flatRest.dew.js";
import { dew as _isIndexDewDew } from "./_isIndex.dew.js";
import { dew as _thruDewDew } from "./thru.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var LazyWrapper = _LazyWrapperDewDew(),
      LodashWrapper = _LodashWrapperDewDew(),
      baseAt = _baseAtDewDew(),
      flatRest = _flatRestDewDew(),
      isIndex = _isIndexDewDew(),
      thru = _thruDewDew();
  /**
   * This method is the wrapper version of `_.at`.
   *
   * @name at
   * @memberOf _
   * @since 1.0.0
   * @category Seq
   * @param {...(string|string[])} [paths] The property paths to pick.
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
   *
   * _(object).at(['a[0].b.c', 'a[1]']).value();
   * // => [3, 4]
   */


  var wrapperAt = flatRest(function (paths) {
    var length = paths.length,
        start = length ? paths[0] : 0,
        value = (this || _global).__wrapped__,
        interceptor = function (object) {
      return baseAt(object, paths);
    };

    if (length > 1 || (this || _global).__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
      return this.thru(interceptor);
    }

    value = value.slice(start, +start + (length ? 1 : 0));

    value.__actions__.push({
      'func': thru,
      'args': [interceptor],
      'thisArg': undefined
    });

    return new LodashWrapper(value, (this || _global).__chain__).thru(function (array) {
      if (length && !array.length) {
        array.push(undefined);
      }

      return array;
    });
  });
  exports = wrapperAt;
  return exports;
}