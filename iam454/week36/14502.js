const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((line) => line.split(" ").map(Number));

const candidates = [];
const viruses = [];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (board[i][j] === 0) {
      candidates.push([i, j]);
    } else if (board[i][j] === 2) {
      viruses.push([i, j]);
    }
  }
}

const getAllCombs = (arr, n) => {
  const res = [];

  const helper = (start, path) => {
    if (path.length === n) {
      res.push([...path]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      helper(i + 1, path);
      path.pop();
    }
  };

  helper(0, []);

  return res;
};

const bfs = (board) => {
  const visited = Array.from({ length: N }, () => new Array(M).fill(0));
  const q = [];

  let safeArea = 0;
  for (const [x, y] of viruses) {
    q.push([x, y]);
    visited[x][y] = 1;
  }

  while (q.length > 0) {
    const [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
        if (board[nx][ny] === 0 && visited[nx][ny] === 0) {
          visited[nx][ny] = 1;
          board[nx][ny] = 2;
          q.push([nx, ny]);
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 0) {
        safeArea += 1;
      }
    }
  }

  return safeArea;
};

const combs = getAllCombs(candidates, 3);

let maxSafeArea = 0;

for (const comb of combs) {
  const tempBoard = board.map((row) => [...row]);

  for (const [x, y] of comb) {
    tempBoard[x][y] = 1;
  }

  const safeArea = bfs(tempBoard);
  maxSafeArea = Math.max(maxSafeArea, safeArea);
}

console.log(maxSafeArea);
