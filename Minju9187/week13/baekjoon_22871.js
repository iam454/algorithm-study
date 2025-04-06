let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("1.txt").toString().split("\n");

const N = Number(input.shift());

const arr = input[0].split(" ").map(Number);
const dp = new Array(arr.length).fill(Infinity);
dp[0] = 0;

for (let j = 1; j < N; j++) {
  for (let i = 0; i < j; i++) {
    power = Math.max(dp[i], (j - i) * (1 + Math.abs(arr[i] - arr[j])));
    dp[j] = Math.min(dp[j], power);
  }
}

console.log(dp[arr.length - 1]);
