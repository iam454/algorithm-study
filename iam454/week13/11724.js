const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const visited = new Array(N + 1).fill(false);

input.forEach((line) => {
  const [from, to] = line.split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
});

let answer = 0;

for (let i = 1; i <= N; i++) {
  if (visited[i] === false) {
    bfs(i);
    answer += 1;
  }
}

console.log(answer);

function bfs(node) {
  const queue = [];
  queue.push(node);

  while (queue.length) {
    const current = queue.shift();
    for (const v of graph[current]) {
      if (visited[v] === false) {
        visited[v] = true;
        queue.push(v);
      }
    }
  }
}
