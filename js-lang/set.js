var s = new Set([1, 2, 3, 4, 5, 6, undefined, null, false]);
s.delete(6);
console.log(s.size);
