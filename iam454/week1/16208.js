const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const sticks = input[1].split(" ").map(Number);
let total = sticks.reduce((acc, cur) => acc + cur, 0);
let ans = 0;

for (let i = 0; i < N; i++) {
  total -= sticks[i];
  ans += sticks[i] * total;
}

console.log(ans);
