const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, D] = input.shift().split(" ").map(Number);
const shortcuts = input.map((item) => item.split(" ").map(Number));

const dp = new Array(D + 1).fill(Infinity);
dp[0] = 0;

const graph = Array.from({ length: D + 1 }, () => []);
for (const [start, end, cost] of shortcuts) {
  if (end > D) {
    continue;
  }
  if (end - start <= cost) {
    continue;
  }
  graph[start].push([end, cost]);
}

for (let i = 0; i < D + 1; i++) {
  if (i + 1 <= D) {
    dp[i + 1] = Math.min(dp[i + 1], dp[i] + 1);
  }

  for (const [end, cost] of graph[i]) {
    dp[end] = Math.min(dp[end], dp[i] + cost);
  }
}

console.log(dp[D]);
