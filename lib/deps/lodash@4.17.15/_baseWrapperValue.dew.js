import { dew as _LazyWrapperDewDew } from "./_LazyWrapper.dew.js";
import { dew as _arrayPushDewDew } from "./_arrayPush.dew.js";
import { dew as _arrayReduceDewDew } from "./_arrayReduce.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var LazyWrapper = _LazyWrapperDewDew(),
      arrayPush = _arrayPushDewDew(),
      arrayReduce = _arrayReduceDewDew();
  /**
   * The base implementation of `wrapperValue` which returns the result of
   * performing a sequence of actions on the unwrapped `value`, where each
   * successive action is supplied the return value of the previous.
   *
   * @private
   * @param {*} value The unwrapped value.
   * @param {Array} actions Actions to perform to resolve the unwrapped value.
   * @returns {*} Returns the resolved value.
   */


  function baseWrapperValue(value, actions) {
    var result = value;

    if (result instanceof LazyWrapper) {
      result = result.value();
    }

    return arrayReduce(actions, function (result, action) {
      return action.func.apply(action.thisArg, arrayPush([result], action.args));
    }, result);
  }

  exports = baseWrapperValue;
  return exports;
}