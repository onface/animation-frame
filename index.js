;(function() {
    var request = requestAnimationFrame
    var cencel = cancelAnimationFrame
    var lastTime = 0;
    var polyfill = {
        request: function(callback) {
            var now = new Date().getTime()
            var nextTime = Math.max(lastTime + 16, now)
            return setTimeout(function() { callback(lastTime = nextTime)}, nextTime - now);
        },
        cancel: clearTimeout
    }
    // [fucking-weapp](https://github.com/onface/fucking-weapp#requestanimationframe)
    if (typeof wx !== 'undefined' && wx.request !== 'undefined') {
        request = requestAnimationFrame = polyfill.request
        cencel = cancelAnimationFrame = polyfill.cancel
    }
    // Source: https://gist.github.com/paulirish/1579671
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    if (typeof window !== 'undefined') {
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame']
            window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                       || window[vendors[x]+'CancelRequestAnimationFrame']
        }
    }
    if (typeof window !== 'undefined' && !window.requestAnimationFrame) {
        window.requestAnimationFrame = polyfill.request
        window.cancelAnimationFrame = polyfill.cancel
    }
    if (typeof module !== 'undefined') {
        module.exports = {
            request: request,
            cencel: cencel
        }
    }
})()
