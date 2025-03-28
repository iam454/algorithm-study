const fs = require("fs");
const { type } = require("os");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const stack = [];
let isValid = true;

for (let i = 0; i < input.length; i++) {
  const char = input[i];

  if (char === "(" || char === "[") {
    stack.push(char);
  } else {
    let temp = 0;
    while (stack.length) {
      const top = stack.pop();

      if (typeof top === "number") {
        temp += top;
      } else {
        if (top === "(" && char === ")") {
          stack.push(temp === 0 ? 2 : 2 * temp);
          break;
        } else if (top === "[" && char === "]") {
          stack.push(temp === 0 ? 3 : 3 * temp);
          break;
        } else {
          isValid = false;
          break;
        }
      }
    }
    if (!isValid || (stack.length === 0 && (char === ")" || char === "]"))) {
      isValid = false;
      break;
    }
  }
}

let ans = 0;

while (stack.length) {
  const top = stack.pop();
  if (typeof top === "number") {
    ans += top;
  } else {
    isValid = false;
    break;
  }
}

console.log(isValid ? ans : 0);
