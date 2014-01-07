module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  return toString.call(fn) === '[object Function]' ||
    (typeof fn === 'function' && !(fn instanceof RegExp)) ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};
