const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
let cnt = 0;

input.forEach((line) => {
  solution(line);
});

function solution(line) {
  const stack = [];

  for (let i = 0; i < line.length; i++) {
    if (stack[stack.length - 1] === line[i]) {
      stack.pop();
    } else {
      stack.push(line[i]);
    }
  }

  if (stack.length === 0) {
    cnt += 1;
  }
}

console.log(cnt);
