import { dew as _pickDewDew } from "./pick.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _pickDewDew();
  return exports;
}