import { dew as _restDewDew } from "./rest.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _restDewDew();
  return exports;
}