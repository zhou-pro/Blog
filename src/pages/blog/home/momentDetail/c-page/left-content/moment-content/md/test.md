### Hell

~~~js
function debounce(fn, delay) {
  var timer = null;
  return function() {
    if (timer) clearTimeout(timer);
    // 获取this和argument
    var _this = this;
    var _arguments = arguments;
    timer = setTimeout(function() {
      // 在执行时，通过apply来使用_this和_arguments
      fn.apply(_this, _arguments);
    }, delay);
  }
}\n
~~~