import { dew as _rootDewDew } from "./_root.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var root = _rootDewDew();
  /** Used to detect overreaching core-js shims. */


  var coreJsData = root['__core-js_shared__'];
  exports = coreJsData;
  return exports;
}