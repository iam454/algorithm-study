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
  let dp = [0, 0];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
  console.log(dp[n]);
};
