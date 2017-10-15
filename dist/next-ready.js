(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var readyRE = /complete|loaded|interactive/;
  var DOM_LOADED = 'DOMContentLoaded';

  nx.ready = function (inCallback) {
    var callback = inCallback || nx.noop;
    if (readyRE.test(document.readyState) && document.body) {
      callback();
    } else {
      document.addEventListener(DOM_LOADED, function () {
        callback();
      }, false);
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.ready;
  }

}());
