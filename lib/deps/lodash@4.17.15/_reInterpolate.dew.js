var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /** Used to match template delimiters. */
  var reInterpolate = /<%=([\s\S]+?)%>/g;
  exports = reInterpolate;
  return exports;
}