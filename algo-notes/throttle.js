// 节流
// 高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行效率。

function throttle(fn, timing) {
  let trigger;
  return function() {
    if (trigger) return;
    trigger = true;
    fn();
    setTimeout(() => {
      trigger = false;
    }, timing);
  }
}