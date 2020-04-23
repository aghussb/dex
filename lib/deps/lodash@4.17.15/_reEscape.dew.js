var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /** Used to match template delimiters. */
  var reEscape = /<%-([\s\S]+?)%>/g;
  exports = reEscape;
  return exports;
}