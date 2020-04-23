import { dew as _initialDewDew } from "./initial.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _initialDewDew();
  return exports;
}