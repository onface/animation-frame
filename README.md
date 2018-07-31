# face-animation-frame


## polyfill

```html
<script src="https://unpkg.com/face-animation-frame"></script>
<script>
var some = requestAnimationFrame(function () {
    console.log("do something")
})
cancelAnimationFrame(some)
</script>
```

## npm

```js
require('face-animation-frame')
var some = requestAnimationFrame(function () {
    console.log("do something")
})
cancelAnimationFrame(some)
```

## fucking-weapp

[🖕 weapp](https://github.com/onface/fucking-weapp#requestanimationframe)

```js
var animationFrame = require('face-animation-frame')
var some = animationFrame.request(function () {
    console.log("do something")
})
animationFrame.cancel(some)
```
