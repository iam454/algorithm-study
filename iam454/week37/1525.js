const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const board = input.join(" ").split(" ").join("");
const goal = "123456780";

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const q = [];
q.push(board);

const visited = new Map();
visited.set(board, 0);

let ans = -1;
let index = 0;

while (index < q.length) {
  const curBoard = q[index++];
  const moves = visited.get(curBoard);

  if (curBoard === goal) {
    ans = moves;
    break;
  }

  const zeroIndex = curBoard.indexOf("0");
  const cx = Math.floor(zeroIndex / 3);
  const cy = zeroIndex % 3;

  for (let i = 0; i < 4; i++) {
    const nx = cx + dx[i];
    const ny = cy + dy[i];

    if (nx >= 0 && nx < 3 && ny >= 0 && ny < 3) {
      const nextIndex = nx * 3 + ny;
      const nextBoard = curBoard.split("");
      [nextBoard[zeroIndex], nextBoard[nextIndex]] = [
        nextBoard[nextIndex],
        nextBoard[zeroIndex],
      ];
      const nextState = nextBoard.join("");

      if (!visited.has(nextState)) {
        visited.set(nextState, moves + 1);
        q.push(nextState);
      }
    }
  }
}

console.log(ans);
