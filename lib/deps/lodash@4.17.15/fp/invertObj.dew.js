import { dew as _invertDewDew } from "./invert.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _invertDewDew();
  return exports;
}