let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("1.txt").toString().split("\n");

const N = Number(input.shift());
const levelArr = input.shift().split(" ").map(Number);
const Q = Number(input.shift());
const dp = new Array(N + 1).fill(0);

for (let i = 1; i < N; i++) {
  if (levelArr[i - 1] > levelArr[i]) {
    dp[i + 1] = dp[i] + 1;
  } else {
    dp[i + 1] = dp[i];
  }
}

const results = [];
for (let i = 0; i < Q; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  results.push(dp[end] - dp[start]);
}

console.log(results.join("\n"));
