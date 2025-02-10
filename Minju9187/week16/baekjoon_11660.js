let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("1.txt").toString().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const dp = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
const arr = [];
const point = [];

for (let i = 0; i < N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    dp[i + 1][j + 1] = arr[i][j];
  }
}

for (let i = N; i < N + M; i++) {
  point.push(input[i].split(" ").map(Number));
}

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    dp[i][j] += dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
  }
}

const answer = [];

for (i = 0; i < M; i++) {
  const [x1, y1, x2, y2] = point[i];
  answer.push(
    dp[x2][y2] - dp[x2][y1 - 1] - dp[x1 - 1][y2] + dp[x1 - 1][y1 - 1]
  );
}

console.log(answer.join("\n"));
