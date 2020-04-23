import { dew as _everyDewDew } from "./every.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _everyDewDew();
  return exports;
}