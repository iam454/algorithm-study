const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, R] = input.shift().split(" ").map(Number);
const info = input.map((line) => line.split(" ").map(Number));
const graph = Array.from({ length: N + 1 }, () => []);

for (const [u, v] of info) {
  graph[u].push(v);
  graph[v].push(u);
}

graph.forEach((edges) => edges.sort((a, b) => b - a));

const visited = new Array(N + 1).fill(0);
const depths = new Array(N + 1).fill(-1);

let order = 1;

function dfs(node, depth) {
  visited[node] = order++;
  depths[node] = depth;
  for (const next of graph[node]) {
    if (visited[next] === 0) {
      dfs(next, depth + 1);
    }
  }
}

dfs(R, 0);

let ans = 0;

for (let i = 1; i <= N; i++) {
  ans += visited[i] * depths[i];
}

console.log(ans);
