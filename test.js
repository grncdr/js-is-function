var test = require('tape')
var isFunction = require('./index.js')

test('isFunction', function (t) {
    t.ok(!isFunction(), 'undefined is not a function')
    t.ok(!isFunction(null), 'null is not a function')
    t.ok(!isFunction(''), 'string is not a function')
    t.ok(!isFunction(/a/), 'regex is not a function')
    t.ok(!isFunction(true), 'true is not a function')
    t.ok(!isFunction(false), 'false is not a function')
    t.ok(!isFunction(NaN), 'NaN is not a function')
    t.ok(!isFunction(42), '42 is not a function')
    t.ok(isFunction(function () {}), 'function is a function')
    t.ok(isFunction(setTimeout), 'setTimeout is a function')
    if (typeof window !== 'undefined') {
        t.ok(isFunction(window.alert), 'alert is a function')
    }
    t.end()
})
