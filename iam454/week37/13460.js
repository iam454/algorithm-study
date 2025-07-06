const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((line) => line.split(""));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const red = [0, 0];
const blue = [0, 0];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === "R") {
      red[0] = i;
      red[1] = j;
    } else if (board[i][j] === "B") {
      blue[0] = i;
      blue[1] = j;
    }
  }
}

const move = (x, y, dx, dy) => {
  let dist = 0;

  while (true) {
    const nx = x + dx;
    const ny = y + dy;

    if (board[nx][ny] == "#") {
      break;
    }

    x = nx;
    y = ny;
    dist += 1;

    if (board[nx][ny] === "O") {
      break;
    }
  }

  return [x, y, dist];
};

const bfs = () => {
  const q = [];
  q.push([red[0], red[1], blue[0], blue[1], 0]);

  const visited = new Set();
  visited.add(`${red[0]},${red[1]}-${blue[0]},${blue[1]}`);

  while (q.length) {
    const [curRedX, curRedY, curBlueX, curBlueY, moves] = q.shift();

    if (moves >= 10) {
      return -1;
    }

    for (let i = 0; i < 4; i++) {
      let [nextRedX, nextRedY, redDist] = move(curRedX, curRedY, dx[i], dy[i]);
      let [nextBlueX, nextBlueY, blueDist] = move(
        curBlueX,
        curBlueY,
        dx[i],
        dy[i]
      );

      if (board[nextBlueX][nextBlueY] === "O") {
        continue;
      }

      if (board[nextRedX][nextRedY] === "O") {
        return moves + 1;
      }

      if (nextRedX === nextBlueX && nextRedY === nextBlueY) {
        if (redDist > blueDist) {
          nextRedX -= dx[i];
          nextRedY -= dy[i];
        } else {
          nextBlueX -= dx[i];
          nextBlueY -= dy[i];
        }
      }

      const key = `${nextRedX},${nextRedY}-${nextBlueX},${nextBlueY}`;
      if (!visited.has(key)) {
        visited.add(key);
        q.push([nextRedX, nextRedY, nextBlueX, nextBlueY, moves + 1]);
      }
    }
  }

  return -1;
};

console.log(bfs());
