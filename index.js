module.exports = function isFunction (fn) {
  return toString.call(fn) === '[object Function]' || (
    typeof fn === 'function' && !(fn instanceof RegExp)
  )
};
