import { dew as _getNativeDewDew } from "./_getNative.dew.js";
import { dew as _rootDewDew } from "./_root.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var getNative = _getNativeDewDew(),
      root = _rootDewDew();
  /* Built-in method references that are verified to be native. */


  var Set = getNative(root, 'Set');
  exports = Set;
  return exports;
}