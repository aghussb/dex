import { dew as _overDewDew } from "./over.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _overDewDew();
  return exports;
}