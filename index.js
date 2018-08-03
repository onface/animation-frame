;(function() {
    var request
    var cancel
    var lastTime = 0;
    var polyfill = {
        request: function(callback) {
            var now = new Date().getTime()
            var nextTime = Math.max(lastTime + 16, now)
            return setTimeout(function() { callback(lastTime = nextTime)}, nextTime - now);
        },
        cancel: clearTimeout
    }
    // old browsers module.exports
    if (typeof requestAnimationFrame === 'undefined') {
        request = polyfill.request
        cancel  = polyfill.cancel
    }
    else {
        request = requestAnimationFrame
        cancel = cancelAnimationFrame
    }
    // [fucking-weapp](https://github.com/onface/fucking-weapp#requestanimationframe)
    if (typeof wx !== 'undefined' && wx.request !== 'undefined') {
        request = polyfill.request
        cancel  = polyfill.cancel
    }
    if (typeof window !== 'undefined' && !window.requestAnimationFrame) {
        window.requestAnimationFrame = polyfill.request
        window.cancelAnimationFrame = polyfill.cancel
    }
    if (typeof module !== 'undefined') {
        module.exports = {
            request: request,
            cancel: cancel
        }
    }
})()
