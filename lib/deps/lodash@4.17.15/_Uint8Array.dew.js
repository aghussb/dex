import { dew as _rootDewDew } from "./_root.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var root = _rootDewDew();
  /** Built-in value references. */


  var Uint8Array = root.Uint8Array;
  exports = Uint8Array;
  return exports;
}