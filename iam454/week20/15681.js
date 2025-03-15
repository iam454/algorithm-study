const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, R, Q] = input.shift().split(" ").map(Number);
const info = input.slice(0, N - 1).map((item) => item.split(" ").map(Number));
const query = input.slice(N - 1).map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (let item of info) {
  const [u, v] = item;
  graph[u].push(v);
  graph[v].push(u);
}

const size = new Array(N + 1).fill(0);
const visited = new Array(N + 1).fill(false);

function dfs(node) {
  visited[node] = true;
  size[node] = 1;

  for (let next of graph[node]) {
    if (visited[next] === false) {
      size[node] += dfs(next);
    }
  }

  return size[node];
}

dfs(R);

const result = [];
for (let q of query) {
  result.push(size[q]);
}

console.log(result.join("\n"));
