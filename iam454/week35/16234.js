const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, L, R] = input.shift().split(" ").map(Number);
const A = input.map((line) => line.split(" ").map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let days = 0;

while (true) {
  const visited = Array.from({ length: N }, () => new Array(N).fill(0));
  let isMoved = false;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j]) {
        continue;
      }

      const q = [];
      q.push([i, j]);
      visited[i][j] = 1;

      const group = [];
      group.push([i, j]);
      let sum = A[i][j];

      while (q.length) {
        const [cx, cy] = q.shift();

        for (let d = 0; d < 4; d++) {
          const nx = cx + dx[d];
          const ny = cy + dy[d];

          if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
            const diff = Math.abs(A[cx][cy] - A[nx][ny]);
            if (diff >= L && diff <= R) {
              visited[nx][ny] = 1;
              q.push([nx, ny]);
              group.push([nx, ny]);
              sum += A[nx][ny];
            }
          }
        }
      }

      if (group.length > 1) {
        isMoved = true;
        const avg = Math.floor(sum / group.length);
        for (const [x, y] of group) {
          A[x][y] = avg;
        }
      }
    }
  }

  if (!isMoved) {
    break;
  }

  days += 1;
}

console.log(days);
