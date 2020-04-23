import { dew as _getDewDew } from "./get.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _getDewDew();
  return exports;
}