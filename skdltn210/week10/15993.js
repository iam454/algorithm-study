const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t = 0;
let n = [];

readline
  .on("line", (line) => {
    if (t === 0) {
      t = parseInt(line);
    } else {
      n.push(parseInt(line));
      if (n.length === t) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  const dp = Array.from({ length: 100001 }, () => [0, 0]);

  dp[1][1] = 1;
  dp[2][0] = 1;
  dp[2][1] = 1;
  dp[3][0] = 2;
  dp[3][1] = 2;

  for (let i = 4; i <= 100000; i++) {
    dp[i][0] = (dp[i - 1][1] + dp[i - 2][1] + dp[i - 3][1]) % 1000000009;
    dp[i][1] = (dp[i - 1][0] + dp[i - 2][0] + dp[i - 3][0]) % 1000000009;
  }

  for (let i = 0; i < n.length; i++) {
    console.log(`${dp[n[i]][1]} ${dp[n[i]][0]}`);
  }
};
