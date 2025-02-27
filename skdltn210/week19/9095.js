const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t, n;

readline
  .on("line", (line) => {
    if (!t) {
      t = parseInt(line);
    } else {
      n = parseInt(line);
      solution(n);
      t--;
      if (t === 0) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    process.exit();
  });

const solution = (n) => {
  let dp = [0, 1, 2, 4];
  for (let i = 4; i <= n; i++) {
    dp.push(dp[i - 1] + dp[i - 2] + dp[i - 3]);
  }
  console.log(dp[n]);
};
