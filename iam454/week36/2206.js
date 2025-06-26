const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((line) => line.split("").map(Number));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => [false, false])
);

let ans = -1;

const q = [];
q.push([0, 0, 0, 1]);
visited[0][0][0] = true;

let index = 0;

while (index < q.length) {
  const [cx, cy, isWallBroken, dist] = q[index++];

  if (cx === N - 1 && cy === M - 1) {
    ans = dist;
    break;
  }

  for (let i = 0; i < 4; i++) {
    const nx = cx + dx[i];
    const ny = cy + dy[i];

    if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
      if (board[nx][ny] === 0 && visited[nx][ny][isWallBroken] === false) {
        visited[nx][ny][isWallBroken] = true;
        q.push([nx, ny, isWallBroken, dist + 1]);
      }

      if (
        board[nx][ny] === 1 &&
        isWallBroken === 0 &&
        visited[nx][ny][1] === false
      ) {
        visited[nx][ny][1] = true;
        q.push([nx, ny, 1, dist + 1]);
      }
    }
  }
}

console.log(ans);
