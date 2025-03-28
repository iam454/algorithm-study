let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync(0).toString().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const arr = input.map((v) => v.split(" ").map(Number));

const visited = Array.from({ length: N }, () => Array(M).fill(false));
const answer = Array.from({ length: N }, () => Array(M).fill(0));

let start = [];

const dist = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 2) {
      start = [i, j];
    }
  }
}

function bfs(start) {
  const queue = [];
  const [x, y] = start;

  visited[x][y] = true;
  queue.push(start);

  while (queue.length) {
    const current = queue.shift();
    const [x, y] = current;

    for (let i = 0; i < dist.length; i++) {
      const [dx, dy] = dist[i];
      const cx = x + dx;
      const cy = y + dy;
      if (checkOutLine(cx, cy) && arr[cx][cy] !== 0 && !visited[cx][cy]) {
        answer[cx][cy] = answer[x][y] + 1;
        queue.push([cx, cy]);
        visited[cx][cy] = 1;
      }
    }
  }
}

bfs(start);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!visited[i][j] && arr[i][j] === 1) {
      answer[i][j] = -1;
    }
  }
}

console.log(answer.map((row) => row.join(" ")).join("\n"));

function checkOutLine(x, y) {
  if (x >= 0 && x < N && y >= 0 && y < M) {
    return true;
  }
  return false;
}
