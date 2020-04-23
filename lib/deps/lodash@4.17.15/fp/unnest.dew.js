import { dew as _flattenDewDew } from "./flatten.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _flattenDewDew();
  return exports;
}