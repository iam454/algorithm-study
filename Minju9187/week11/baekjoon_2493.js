let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("2.txt").toString().split("\n");

const N = Number(input.shift());

const tops = input[0].split(" ").map(Number);

const stack = [];
const result = new Array(N).fill(0);

for (let i = 0; i < N; i++) {
  while (stack.length > 0 && stack[stack.length - 1].top < tops[i]) {
    stack.pop();
  }

  if (stack.length > 0) {
    result[i] = stack[stack.length - 1].idx;
  }

  stack.push({ idx: i + 1, top: tops[i] });
}

console.log(result.join(" "));
