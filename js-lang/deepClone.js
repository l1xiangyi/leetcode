function getType(v) {
  switch (Object.prototype.toString.call(v)) {
    case "[object Object]":
      return "Object";
    case "[object Array]":
      return "Array";
      return false;
  }
}

function deepCloneRecursive(source) {
  const _cp = (source) => {
    let dest;
    const type = getType(source);
    if (type === "Array") {
      dest = [];
      source.forEach((item, index) => {
        dest[index] = _cp(item);
      });
      return dest;
    } else if (type === "object") {
      dest = {};
      for (let [k, v] of Object.entries(source)) {
        dest[k] = _cp(v);
      }
      return dest;
    } else {
      return source;
    }
  };

  return _cp(source);
}

function deepCloneNonrecurive(source) {}
