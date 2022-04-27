Function.prototype.myBindOne = function () {
  var _this = this;
  var context = arugments[0];
  var arg = [].slice.call(arguments, 1);
  return function () {};
};
