const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const stones = input[1].split(" ").map(Number);

const dp = new Array(N).fill(Infinity);
dp[0] = 0;
dp[1] = Math.abs(stones[1] - stones[0]) + 1;

for (let i = 2; i < N; i++) {
  for (let j = 0; j < i; j++) {
    const power = (i - j) * (1 + Math.abs(stones[i] - stones[j]));
    dp[i] = Math.min(dp[i], Math.max(power, dp[j]));
  }
}

console.log(dp[N - 1]);
