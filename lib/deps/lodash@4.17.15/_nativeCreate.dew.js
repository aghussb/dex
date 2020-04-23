import { dew as _getNativeDewDew } from "./_getNative.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var getNative = _getNativeDewDew();
  /* Built-in method references that are verified to be native. */


  var nativeCreate = getNative(Object, 'create');
  exports = nativeCreate;
  return exports;
}