const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);

function solve(M, N, positions) {
  const board = Array.from({ length: N }, () => Array(M).fill(0));
  const visited = Array.from({ length: N }, () => Array(M).fill(0));
  positions.forEach(([x, y]) => {
    board[y][x] = 1;
  });

  let count = 0;
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const q = [];

  function bfs(startX, startY) {
    q.push([startX, startY]);
    visited[startX][startY] = 1;

    while (q.length) {
      const [x, y] = q.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < M &&
          board[nx][ny] === 1 &&
          visited[nx][ny] === 0
        ) {
          visited[nx][ny] = 1;
          q.push([nx, ny]);
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 1 && visited[i][j] === 0) {
        bfs(i, j);
        count++;
      }
    }
  }

  return count;
}

const result = [];
let line = 1;
for (let t = 0; t < T; t++) {
  const [M, N, K] = input[line++].split(" ").map(Number);
  const positions = [];

  for (let i = 0; i < K; i++) {
    const [x, y] = input[line++].split(" ").map(Number);
    positions.push([x, y]);
  }

  const res = solve(M, N, positions);
  result.push(res);
}

console.log(result.join("\n"));
