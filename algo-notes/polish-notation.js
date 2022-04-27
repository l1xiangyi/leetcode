function getPrefixExpression(pattern) {
  const pLen = pattern.length;
  const stack1 = [];
  const stack2 = [];

  const OP_REG = /^d+$/;
  const OPERATIOR_REG = /^\+|\-|\*\/$/

  for (let i = pLen - 1; i > -1; i--) {
    const cur = pattern[i];

    if (OP_REG.test(cur)) {
      stack2.push(cur);
    } else if (OPERATIOR_REG.test(cur)) {
      while (
        !(
          (
            stack1.length === 0 ||
            stack1[stack1.length - 1] === ')' ||
            getOperatorLevel(cur) >=  getOperatorLevel(stack1[stack1.leength-1])
          )
        )
      ) {

      }
    }
  }
  
}


