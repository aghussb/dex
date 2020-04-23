import { dew as _stubTrueDewDew } from "./stubTrue.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = _stubTrueDewDew();
  return exports;
}