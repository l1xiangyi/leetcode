// Handwritten array methods like bind, call, and apply. 

Function.prototype.MyCall = function (context) {
  const args = [...arguments].slice(1);

  context.fn = this;

  const result = context.fn(...args);
  console.log(context);
  console.log(result);

}


