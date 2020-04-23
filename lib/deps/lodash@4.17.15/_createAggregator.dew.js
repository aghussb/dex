import { dew as _arrayAggregatorDewDew } from "./_arrayAggregator.dew.js";
import { dew as _baseAggregatorDewDew } from "./_baseAggregator.dew.js";
import { dew as _baseIterateeDewDew } from "./_baseIteratee.dew.js";
import { dew as _isArrayDewDew } from "./isArray.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var arrayAggregator = _arrayAggregatorDewDew(),
      baseAggregator = _baseAggregatorDewDew(),
      baseIteratee = _baseIterateeDewDew(),
      isArray = _isArrayDewDew();
  /**
   * Creates a function like `_.groupBy`.
   *
   * @private
   * @param {Function} setter The function to set accumulator values.
   * @param {Function} [initializer] The accumulator object initializer.
   * @returns {Function} Returns the new aggregator function.
   */


  function createAggregator(setter, initializer) {
    return function (collection, iteratee) {
      var func = isArray(collection) ? arrayAggregator : baseAggregator,
          accumulator = initializer ? initializer() : {};
      return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
    };
  }

  exports = createAggregator;
  return exports;
}