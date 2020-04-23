import { dew as _xorDewDew } from "./xor.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _xorDewDew();
  return exports;
}