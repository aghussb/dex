import { dew as _DataViewDewDew } from "./_DataView.dew.js";
import { dew as _MapDewDew } from "./_Map.dew.js";
import { dew as _PromiseDewDew } from "./_Promise.dew.js";
import { dew as _SetDewDew } from "./_Set.dew.js";
import { dew as _WeakMapDewDew } from "./_WeakMap.dew.js";
import { dew as _baseGetTagDewDew } from "./_baseGetTag.dew.js";
import { dew as _toSourceDewDew } from "./_toSource.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var DataView = _DataViewDewDew(),
      Map = _MapDewDew(),
      Promise = _PromiseDewDew(),
      Set = _SetDewDew(),
      WeakMap = _WeakMapDewDew(),
      baseGetTag = _baseGetTagDewDew(),
      toSource = _toSourceDewDew();
  /** `Object#toString` result references. */


  var mapTag = '[object Map]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      setTag = '[object Set]',
      weakMapTag = '[object WeakMap]';
  var dataViewTag = '[object DataView]';
  /** Used to detect maps, sets, and weakmaps. */

  var dataViewCtorString = toSource(DataView),
      mapCtorString = toSource(Map),
      promiseCtorString = toSource(Promise),
      setCtorString = toSource(Set),
      weakMapCtorString = toSource(WeakMap);
  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */

  var getTag = baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

  if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
    getTag = function (value) {
      var result = baseGetTag(value),
          Ctor = result == objectTag ? value.constructor : undefined,
          ctorString = Ctor ? toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;

          case mapCtorString:
            return mapTag;

          case promiseCtorString:
            return promiseTag;

          case setCtorString:
            return setTag;

          case weakMapCtorString:
            return weakMapTag;
        }
      }

      return result;
    };
  }

  exports = getTag;
  return exports;
}