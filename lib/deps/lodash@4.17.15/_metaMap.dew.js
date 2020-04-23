import { dew as _WeakMapDewDew } from "./_WeakMap.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var WeakMap = _WeakMapDewDew();
  /** Used to store function metadata. */


  var metaMap = WeakMap && new WeakMap();
  exports = metaMap;
  return exports;
}