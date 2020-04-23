import { dew as _assignInDewDew } from "./assignIn.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _assignInDewDew();
  return exports;
}