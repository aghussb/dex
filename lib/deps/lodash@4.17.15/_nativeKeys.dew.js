import { dew as _overArgDewDew } from "./_overArg.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var overArg = _overArgDewDew();
  /* Built-in method references for those with the same name as other `lodash` methods. */


  var nativeKeys = overArg(Object.keys, Object);
  exports = nativeKeys;
  return exports;
}