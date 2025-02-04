const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const indegree = Array(N + 1).fill(0);
const queue = [];
const result = [];

for (let i = 0; i < M; i++) {
  const [len, ...singers] = input[i].split(" ").map(Number);
  for (let j = 0; j < len - 1; j++) {
    graph[singers[j]].push(singers[j + 1]);
    indegree[singers[j + 1]] += 1;
  }
}

for (let i = 1; i <= N; i++) {
  if (indegree[i] === 0) {
    queue.push(i);
  }
}

while (queue.length > 0) {
  const cur = queue.shift();
  result.push(cur);

  for (let i = 0; i < graph[cur].length; i++) {
    const next = graph[cur][i];
    indegree[next] -= 1;

    if (indegree[next] === 0) {
      queue.push(next);
    }
  }
}

console.log(result.length === N ? result.join("\n") : 0);
