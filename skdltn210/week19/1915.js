const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let arr = [];

readline
  .on("line", (line) => {
    if (!n) {
      [n, m] = line.split(" ").map(Number);
    } else {
      arr.push(line.split("").map(Number));
      if (arr.length === n) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let dp = Array(n + 1)
    .fill(0)
    .map(() => Array(m + 1).fill(0));

  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] === 1) {
        dp[i + 1][j + 1] = Math.min(dp[i][j], dp[i + 1][j], dp[i][j + 1]) + 1;
        max = Math.max(max, dp[i + 1][j + 1]);
      }
    }
  }
  console.log(max * max);
};
