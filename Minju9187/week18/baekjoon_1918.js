let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
let input = fs.readFileSync("1.txt").toString().trim();

const stack = [];
let answer = "";

input.split("").forEach((el) => {
  if (el === "(") {
    stack.push(el);
  } else if (el === ")") {
    while (stack.length && stack[stack.length - 1] !== "(") {
      answer += stack.pop();
    }
    stack.pop();
  } else if (el === "*" || el === "/") {
    while (
      stack.length &&
      (stack[stack.length - 1] === "*" || stack[stack.length - 1] === "/")
    ) {
      answer += stack.pop();
    }
    stack.push(el);
  } else if (el === "+" || el === "-") {
    while (stack.length && stack[stack.length - 1] !== "(") {
      answer += stack.pop();
    }
    stack.push(el);
  } else {
    answer += el;
  }
  console.log(el, stack);
});

while (stack.length) {
  answer += stack.pop();
}

console.log(answer);
