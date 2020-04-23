import { dew as _stubFalseDewDew } from "./stubFalse.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _stubFalseDewDew();
  return exports;
}