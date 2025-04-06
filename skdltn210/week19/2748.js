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
  let dp = [0n, 1n];

  for (let i = 2; i <= n; i++) {
    dp.push(dp[i - 1] + dp[i - 2]);
  }
  console.log(dp[n].toString());
};
