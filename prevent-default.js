module.exports = function preventDefault(listener) {
  return function(ev) {
    ev.preventDefault();
    return listener.apply(this, arguments) === true;
  };
};
