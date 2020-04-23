import { dew as _negateDewDew } from "./negate.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _negateDewDew();
  return exports;
}