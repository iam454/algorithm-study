let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("2.txt").toString().split("\n");

const N = Number(input.shift());

const arr = input.map((v) => Number(v));

const dp = new Array(N + 1);

dp[1] = arr[0];
dp[2] = arr[0] + arr[1];
dp[3] = Math.max(arr[0], arr[1]) + arr[2];

for (let i = 4; i <= N; i++) {
  dp[i] = Math.max(dp[i - 3] + arr[i - 2] + arr[i - 1], dp[i - 2] + arr[i - 1]);
}

console.log(dp[N]);
