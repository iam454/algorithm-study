const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, q;
let arr = [];
let music = [];
let inputCount = 0;

readline
  .on("line", (line) => {
    if (inputCount === 0) {
      n = parseInt(line);
    } else if (inputCount === 1) {
      arr = line.split(" ").map(Number);
    } else if (inputCount === 2) {
      q = parseInt(line);
    } else {
      const [x, y] = line.split(" ").map(Number);
      music.push([x, y]);
      if (music.length === q) {
        readline.close();
      }
    }
    inputCount++;
  })
  .on("close", () => {
    solution();
    process.exit();
  });

function solution() {
  const desc = new Array(n).fill(0);
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      desc[i] = 1;
    }
  }

  const prefixSum = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    prefixSum[i] = prefixSum[i - 1] + desc[i - 1];
  }

  for (const [x, y] of music) {
    console.log(prefixSum[y - 1] - prefixSum[x - 1]);
  }
}
