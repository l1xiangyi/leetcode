// recursive
function isObject(item) {
  return (typeof obj === "object" || typeof obj === "function") && obj !== null;
}

function deepCopy(obj) {
  let tempObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    tempObj[key] = isObject(obj[key]) ? deepCopy(obj[key]) : obj[key];
  }
  return tempObj;
}

// change filed name in js objects:
// obj = {name: 'Bobo'};
// obj.newName = obj.name;
// delete obj.name;
