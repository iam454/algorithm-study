const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = "";

const MOD = 1000000;

readline
  .on("line", (line) => {
    n = line.trim();
    readline.close();
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let dp = Array(n.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  if (n[0] === "0" || n.length === 0) {
    console.log(0);
    return;
  }

  for (let i = 2; i <= n.length; i++) {
    if (parseInt(n[i - 1]) >= 1 && parseInt(n[i - 1]) <= 9) {
      dp[i] = (dp[i] + dp[i - 1]) % MOD;
    }

    if (
      parseInt(n[i - 2] + n[i - 1]) >= 10 &&
      parseInt(n[i - 2] + n[i - 1]) <= 26
    ) {
      dp[i] = (dp[i] + dp[i - 2]) % MOD;
    }

    if (dp[i] === 0) {
      console.log(0);
      return;
    }
  }

  console.log(dp[n.length]);
};
