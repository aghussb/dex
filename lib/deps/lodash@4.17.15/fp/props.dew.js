import { dew as _atDewDew } from "./at.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _atDewDew();
  return exports;
}