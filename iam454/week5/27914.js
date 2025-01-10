const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K, Q] = input[0].split(" ").map(Number);
const students = input[1].split(" ").map(Number);
const questions = input[2].split(" ").map(Number);

const dp = new Array(N + 1).fill(0);
let start = 0;

for (let i = 0; i < N; i++) {
  if (students[i] === K) {
    start = i + 1;
  }
  const len = i - start + 1;
  dp[i + 1] = dp[i] + len;
}

const res = questions.map((q) => dp[q]);
console.log(res.join("\n"));
