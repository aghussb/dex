import { dew as _assignInAllDewDew } from "./assignInAll.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _assignInAllDewDew();
  return exports;
}