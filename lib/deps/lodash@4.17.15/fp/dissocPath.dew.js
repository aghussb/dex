import { dew as _unsetDewDew } from "./unset.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _unsetDewDew();
  return exports;
}