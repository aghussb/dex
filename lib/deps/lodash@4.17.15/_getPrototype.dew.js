import { dew as _overArgDewDew } from "./_overArg.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var overArg = _overArgDewDew();
  /** Built-in value references. */


  var getPrototype = overArg(Object.getPrototypeOf, Object);
  exports = getPrototype;
  return exports;
}