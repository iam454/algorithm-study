const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, k;

readline
  .on("line", (line) => {
    if (n === undefined) {
      n = Number(line);
    } else {
      k = Number(line);
      readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let dp = Array(n + 1)
    .fill(null)
    .map(() => Array(k + 1).fill(0));

  dp[2][0] = 1;
  dp[2][1] = 2;
  dp[3][0] = 1;
  dp[3][1] = 3;

  for (let i = 4; i <= n; i++) {
    for (let j = 0; j <= k; j++) {
      dp[i][j] = dp[i - 1][j] % 1000000003;
      if (j > 0) {
        dp[i][j] = (dp[i][j] + dp[i - 2][j - 1]) % 1000000003;
      }
    }
  }

  console.log(dp[n][k]);
};
