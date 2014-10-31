module.exports = function preventDefault(listener) {
  return function(ev) {
    ev.preventDefault();
    return listener.apply(null, arguments);
  };
}
