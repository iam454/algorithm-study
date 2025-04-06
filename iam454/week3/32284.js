const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const [a, b] = input[1].split(" ").map(Number);

const board = Array.from({ length: N }, () => Array(M).fill(0));
board[a][b] = "E";

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (i < a) {
      board[i][j] = "S";
    } else if (i === a && j < b) {
      board[i][j] = "E";
    } else if (i === a && j > b) {
      board[i][j] = "W";
    } else if (i > a) {
      board[i][j] = "N";
    }
  }
}

let ans = [];

for (let i = 0; i < N; i++) {
  ans.push(board[i].join(""));
}

console.log(ans.join("\n"));
