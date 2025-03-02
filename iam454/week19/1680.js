const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let index = 0;
const T = Number(input[index++]);
const answer = [];

for (let t = 0; t < T; t++) {
  const [W, N] = input[index++].split(" ").map(Number);
  const graph = [];

  for (let i = 0; i < N; i++) {
    const [xi, wi] = input[index++].split(" ").map(Number);
    graph.push([xi, wi]);
  }

  const result = solution(W, N, graph);
  answer.push(result);
}

function solution(W, N, graph) {
  let cur = 0;
  let sum = 0;

  for (let i = 0; i < N; i++) {
    const [dist, weight] = graph[i];

    if (cur + weight > W) {
      cur = 0;
      sum += 2 * dist;
      i--;
    } else if (cur + weight === W) {
      cur = 0;
      sum += 2 * dist;
    } else {
      cur += weight;
    }
  }

  if (cur > 0) {
    sum += 2 * graph[N - 1][0];
  }

  return sum;
}

console.log(answer.join("\n"));
