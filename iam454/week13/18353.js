const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const soldiers = input[1].split(" ").map(Number);

const dp = Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (soldiers[i] < soldiers[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

const maxLength = Math.max(...dp);
console.log(N - maxLength);
