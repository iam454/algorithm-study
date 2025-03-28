let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("1.txt").toString().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = new Array(N + 1);
for (let i = 0; i < N + 1; i++) {
  arr[i] = [];
}
const visited = new Array(N + 1).fill(false);
let answer = 0;

for (let i = 0; i < M; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  arr[from].push(to);
  arr[to].push(from);
}

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    DFS(i);
    answer++;
  }
}

function DFS(v) {
  if (visited[v]) return;
  visited[v] = true;
  for (let i = 0; i < arr[v].length; i++) {
    if (!visited[arr[v][i]]) {
      DFS(arr[v][i]);
    }
  }
}

console.log(answer);
