import { dew as _convertDewDew } from "./convert.dew.js";
import { dew as _collectionDewDew } from "../collection.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var convert = _convertDewDew();

  exports = convert(_collectionDewDew());
  return exports;
}