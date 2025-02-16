let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync(0).toString().split("\n");

const [N, M, K, X] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));

const graph = [...Array(N + 1)].map(() => []);
const distance = Array(N + 1).fill(0);
const answer = [];

arr.map(([from, to]) => graph[from].push(to));

function bfs(start) {
  const queue = [start];
  distance[start] = 1;

  while (queue.length) {
    const current = queue.shift();
    if (distance[current] === K + 1) {
      answer.push(current);
      continue;
    }

    for (let i = 0; i < graph[current].length; i++) {
      const next = graph[current][i];
      if (!distance[next]) {
        queue.push(next);
        distance[next] = distance[current] + 1;
      }
    }
  }
}

bfs(X);

if (answer.length) {
  console.log(answer.sort((a, b) => a - b).join("\n"));
} else console.log(-1);
