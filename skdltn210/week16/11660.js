const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let board = [];
let cnt = 0;
let prefixSum = [];

readline.on("line", (line) => {
  if (!n) {
    [n, m] = line.split(" ").map(Number);
    prefixSum = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  } else if (cnt < n) {
    board.push(line.split(" ").map(Number));
    if (cnt === n - 1) {
      for (let i = 0; i < n; i++) {
        for (let j = 1; j <= n; j++) {
          prefixSum[i + 1][j] = prefixSum[i + 1][j - 1] + board[i][j - 1];
        }
      }
      for (let j = 1; j <= n; j++) {
        for (let i = 1; i <= n; i++) {
          prefixSum[i][j] += prefixSum[i - 1][j];
        }
      }
    }
    cnt++;
  } else {
    const [x1, y1, x2, y2] = line.split(" ").map(Number);
    solution(x1, y1, x2, y2);

    if (cnt === n + m - 1) {
      readline.close();
    }
    cnt++;
  }
});

readline.on("close", () => {
  process.exit();
});

function solution(x1, y1, x2, y2) {
  console.log(
    prefixSum[x2][y2] -
      prefixSum[x1 - 1][y2] -
      prefixSum[x2][y1 - 1] +
      prefixSum[x1 - 1][y1 - 1]
  );
}
