const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const children = input[1].split(" ").map(Number);
const dp = new Array(n + 1).fill(0);

for (const child of children) {
  dp[child] = dp[child - 1] + 1;
}

console.log(n - Math.max(...dp));
