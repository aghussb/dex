var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /** Used to lookup unminified function names. */
  var realNames = {};
  exports = realNames;
  return exports;
}