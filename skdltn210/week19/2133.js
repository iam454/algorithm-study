const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;

readline
  .on("line", (line) => {
    n = Number(line);
    readline.close();
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[2] = 3;
  dp[4] = 11;
  if (n % 2 === 1) {
    console.log(0);
    return;
  } else {
    for (let i = 6; i <= n; i += 2) {
      dp[i] = dp[i - 2] * 3;
      for (let j = 4; j <= i; j += 2) {
        dp[i] += dp[i - j] * 2;
      }
    }
    console.log(dp[n]);
  }
};
