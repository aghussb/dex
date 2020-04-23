import { dew as _xorWithDewDew } from "./xorWith.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _xorWithDewDew();
  return exports;
}