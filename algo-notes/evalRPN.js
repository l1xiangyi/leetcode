function evalRPN(tokens) {
  let stack = [tokens[0]];

  const tokensMap = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };

  for (let i = 1; i < tokens.length; i++) {
    if (!tokensMap[tokens[i]]) {
      stack.push(tokens[i]);
    } else {
      let second = stack.pop();
      let first = stack.pop();
      let func = tokensMap[tokens[i]];
      stack.push(func(parseInt(first), parseInt(second)));
    }
  }

  return stack[0];
}

let tokens = ["2", "1", "+", "3", "*"];
