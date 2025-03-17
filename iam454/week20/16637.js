const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const exp = input[1];
let max = -Infinity;

function dfs(index, curSum) {
  if (index >= N) {
    max = Math.max(max, curSum);
    return;
  }

  const op = index > 0 ? exp[index - 1] : "+";
  const num = Number(exp[index]);

  dfs(index + 2, calc(curSum, num, op));

  if (index + 2 < N) {
    const nextNum = Number(exp[index + 2]);
    const bracketSum = calc(num, nextNum, exp[index + 1]);
    dfs(index + 4, calc(curSum, bracketSum, op));
  }
}

function calc(a, b, op) {
  if (op === "+") {
    return a + b;
  }
  if (op === "-") {
    return a - b;
  }
  if (op === "*") {
    return a * b;
  }
}

dfs(0, 0);

console.log(max);
