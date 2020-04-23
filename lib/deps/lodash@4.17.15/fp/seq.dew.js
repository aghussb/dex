import { dew as _convertDewDew } from "./convert.dew.js";
import { dew as _seqDewDew } from "../seq.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var convert = _convertDewDew();

  exports = convert(_seqDewDew());
  return exports;
}