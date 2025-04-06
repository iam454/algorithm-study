let fs = require("fs");
const input = fs
  .readFileSync(fs.existsSync("/dev/stdin") ? "/dev/stdin" : "1.txt")
  .toString()
  .trim()
  .split("\n");

const [N, R, Q] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

const arr = [];

const subtreeSizes = Array(N + 1).fill(0);
const visited = Array(N + 1).fill(false);

const answer = [];

for (let i = 0; i < N + Q - 1; i++) {
  if (i < N - 1) {
    const [u, v] = input[i].split(" ").map(Number);
    graph[u].push(v);
    graph[v].push(u);
  } else {
    arr.push(Number(input[i]));
  }
}

function dfs(node) {
  visited[node] = true;
  subtreeSizes[node] = 1;

  for (const neighbor of graph[node]) {
    if (!visited[neighbor]) {
      subtreeSizes[node] += dfs(neighbor);
    }
  }

  return subtreeSizes[node];
}

dfs(R);

arr.forEach((query) => answer.push(subtreeSizes[query]));
console.log(answer.join("\n"));
