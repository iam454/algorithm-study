const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const sheets = input.shift().split(" ").map(Number);
const Q = Number(input.shift());
const ans = [];

const dp = new Array(N).fill(0);

for (let i = 1; i < N; i++) {
  if (sheets[i - 1] > sheets[i]) {
    dp[i] = dp[i - 1] + 1;
  } else {
    dp[i] = dp[i - 1];
  }
}

input.forEach((line) => {
  const [x, y] = line.split(" ").map(Number);
  ans.push(dp[y - 1] - dp[x - 1]);
});

console.log(ans.join("\n"));
