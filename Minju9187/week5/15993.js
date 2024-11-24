let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("예제1.txt").toString().split("\n");

const T = Number(input.shift());
const MOD = 1000000009;
const n = 100000;
const arr = [];

const dp = Array.from({ length: n + 1 }, () => [0, 0]);

dp[1] = [1, 0];
dp[2] = [1, 1];
dp[3] = [2, 2];

for (let i = 4; i <= n; i++) {
  dp[i][0] = (dp[i - 1][1] + dp[i - 2][1] + dp[i - 3][1]) % MOD;
  dp[i][1] = (dp[i - 1][0] + dp[i - 2][0] + dp[i - 3][0]) % MOD;
}

const result = [];
for (let i = 0; i < T; i++) {
  const number = parseInt(input[i]);
  result.push(dp[number].join(" "));
}

console.log(result.join("\n"));
