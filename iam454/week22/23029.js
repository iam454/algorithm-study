const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const corners = [0, ...input.map(Number)];
const dp = new Array(N + 1).fill(0);

dp[1] = corners[1];
dp[2] = Math.max(corners[1] + Math.floor(corners[2] / 2), corners[2]);

for (let i = 3; i < N + 1; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    dp[i - 2] + corners[i],
    dp[i - 3] + corners[i - 1] + Math.floor(corners[i] / 2)
  );
}

console.log(dp[N]);
