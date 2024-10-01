const Stack = () => {
  let length = 0;
  const storage = {};

  const push = (value) => {
    storage[length] = value;
    length++;
  };

  const pop = () => {
    if (isEmpty()) {
      return undefined;
    }
    const value = storage[length - 1];
    delete storage[length - 1];
    length--;
    return value;
  };

  const peek = () => {
    return storage[length - 1];
  };

  const print = () => {
    const values = Object.values(storage);
    console.log(values);
  };

  const isEmpty = () => {
    return length === 0;
  };

  return {
    size: () => length,
    isEmpty,
    pop,
    push,
    peek,
    print
  };
};

export default Stack;

export const postFixEvaluation = (exps) => {
  const stack = new Stack();
  if (exps.length === 0) return undefined;
  for (var i = 0; i < exps.length; i++) {
    const c = exps[i];
    if (!isNaN(c)) {
      stack.push(c - "0");
    } else {
      var val1 = stack.pop();
      var val2 = stack.pop();
      if (val1 === undefined || val2 === undefined)
        return "Can't perform postfix evaluation";
      switch (c) {
        case "+":
          stack.push(val2 + val1);
          break;

        case "-":
          stack.push(val2 - val1);
          break;

        case "/":
          stack.push(val2 / val1);
          break;

        case "*":
          stack.push(val2 * val1);
          break;
      }
    }
  }
  return stack;
};
