const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [R, C] = input.shift().split(" ").map(Number);
const board = input.map((line) => line.split(""));

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

let max = 0;

function dfs(x, y, visited, count) {
  max = Math.max(max, count);

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < R && ny >= 0 && ny < C) {
      const char = board[nx][ny];
      if (!visited.has(char)) {
        visited.add(char);
        dfs(nx, ny, visited, count + 1);
        visited.delete(char);
      }
    }
  }
}

const visited = new Set();
visited.add(board[0][0]);
dfs(0, 0, visited, 1);

console.log(max);
