const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;

readline
  .on("line", (line) => {
    n = parseInt(line);
    readline.close();
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let dp = [0, 1, 2, 1, 1, 3, 3];
  for (let i = 7; i <= n; i++) {
    if ((dp[4] + dp[i - 4]) % 2 === 1) {
      dp[i] = dp[4] + dp[i - 4];
      continue;
    }
    if ((dp[3] + dp[i - 3]) % 2 === 1) {
      dp[i] = dp[3] + dp[i - 3];
      continue;
    }
    if ((dp[1] + dp[i - 1]) % 2 === 1) {
      dp[i] = dp[1] + dp[i - 1];
      continue;
    }
    dp[i] = dp[4] + dp[i - 4];
  }
  console.log(dp[n] % 2 === 1 ? "SK" : "CY");
};
