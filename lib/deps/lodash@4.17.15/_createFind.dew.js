import { dew as _baseIterateeDewDew } from "./_baseIteratee.dew.js";
import { dew as _isArrayLikeDewDew } from "./isArrayLike.dew.js";
import { dew as _keysDewDew } from "./keys.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var baseIteratee = _baseIterateeDewDew(),
      isArrayLike = _isArrayLikeDewDew(),
      keys = _keysDewDew();
  /**
   * Creates a `_.find` or `_.findLast` function.
   *
   * @private
   * @param {Function} findIndexFunc The function to find the collection index.
   * @returns {Function} Returns the new find function.
   */


  function createFind(findIndexFunc) {
    return function (collection, predicate, fromIndex) {
      var iterable = Object(collection);

      if (!isArrayLike(collection)) {
        var iteratee = baseIteratee(predicate, 3);
        collection = keys(collection);

        predicate = function (key) {
          return iteratee(iterable[key], key, iterable);
        };
      }

      var index = findIndexFunc(collection, predicate, fromIndex);
      return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
    };
  }

  exports = createFind;
  return exports;
}