module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  return toString.call(fn) === '[object Function]' || (
    typeof fn === 'function' && !(fn instanceof RegExp)
  )
};
