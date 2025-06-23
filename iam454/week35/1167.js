const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const V = Number(input.shift());
const info = input.map((line) => line.split(" ").map(Number));

const graph = Array.from({ length: V + 1 }, () => []);

for (let i = 0; i < V; i++) {
  const [from, ...to] = info[i];

  for (let j = 0; j < to.length - 1; j += 2) {
    graph[from].push([to[j], to[j + 1]]);
  }
}

function dfs(node) {
  const stack = [];
  stack.push([node, 0]);
  const visited = Array(V + 1).fill(false);
  visited[node] = true;
  let maxDistance = 0;
  let farthestNode = node;

  while (stack.length) {
    const [current, distance] = stack.pop();

    if (distance > maxDistance) {
      maxDistance = distance;
      farthestNode = current;
    }

    for (const [next, weight] of graph[current]) {
      if (!visited[next]) {
        visited[next] = true;
        stack.push([next, distance + weight]);
      }
    }
  }

  return { farthestNode, maxDistance };
}

const { farthestNode } = dfs(1);
const { maxDistance } = dfs(farthestNode);

console.log(maxDistance);
