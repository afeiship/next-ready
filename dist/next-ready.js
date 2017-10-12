(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var readyRE = /complete|loaded|interactive/;

  nx.ready = function (inCallback) {
    if (readyRE.test(document.readyState) && document.body) {
      inCallback();
    } else {
      document.addEventListener('DOMContentLoaded', function () {
        inCallback();
      }, false);
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.ready;
  }

}());
