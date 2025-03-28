const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t;
let cnt = 0;
let inputs = [];

readline
  .on("line", (line) => {
    if (!t) {
      t = parseInt(line);
    } else if (cnt % 2 === 0) {
      inputs.push(line);
      if (inputs.length === t) {
        readline.close();
      }
    }
    cnt++;
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const isABB = (stack) => {
  return (
    stack.length >= 3 &&
    stack[stack.length - 3] === "A" &&
    stack[stack.length - 2] === "B" &&
    stack[stack.length - 1] === "B"
  );
};

const processStacks = (stack1, stack2) => {
  if (isABB(stack1)) {
    stack1.pop();
    stack1.pop();
    stack1.pop();

    stack2.push("A");
    stack2.push("B");

    stack1.push(stack2.pop());

    if (isABB(stack1)) {
      return processStacks(stack1, stack2);
    } else {
      while (stack2.length > 0) {
        stack1.push(stack2.pop());
        if (isABB(stack1)) {
          return processStacks(stack1, stack2);
        }
      }
    }
  }
  return stack1;
};

const solution = () => {
  for (let i = 0; i < inputs.length; i++) {
    let stack1 = [];
    let stack2 = [];
    const str = inputs[i];

    for (let j = 0; j < str.length; j++) {
      stack1.push(str[j]);
      stack1 = processStacks(stack1, stack2);
    }

    console.log(stack1.join(""));
  }
};
