import { dew as _mapDewDew } from "./map.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _mapDewDew();
  return exports;
}