const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1, N + 1).map((line) => line.split(" ").map(Number));
const dp = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));
const ans = [];

for (let i = 1; i < N + 1; i++) {
  for (let j = 1; j < N + 1; j++) {
    dp[i][j] =
      board[i - 1][j - 1] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
  }
}

for (let i = N + 1; i < N + 1 + M; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  ans.push(dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1]);
}

console.log(ans.join("\n"));
