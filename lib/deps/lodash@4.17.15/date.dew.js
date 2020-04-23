import { dew as _nowDewDew } from "./now.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = {
    'now': _nowDewDew()
  };
  return exports;
}