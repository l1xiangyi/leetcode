// Third way of invoking a function: invoke a function with
// a this keyword pointing at a whole new empty object.
// 1. workshop.ask();
// 2. ask.call({...})
// 3. new keyword === ask.call({})
// Does four things:
// 1. Create a brand new empty object
// *2. Link that object to another object
// 3. Call function with `this` set to the new object
// 4. If the function does not return an object assume
// return of this

function myNew(fn) {
  const newObj = Object.create(fn.prototype);
  result = fn.apply(newObj, [...arguments].slice(1));
  return typeof result === "object" ? result : newObj;
}

function Foo(a, b) {
  this.a = a;
  this.b = b;
  return this;
}

function Bar(x, y) {
  this.x = x;
  this.y = y;
  return {
    test: "bushi",
  };
}

let foo = myNew(Foo, 1, 2);
console.log(foo);

let bar = myNew(Bar, 1, 2);
console.log(bar);
console.log(Foo.prototype.constructor);
