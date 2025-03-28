const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let power = [];

readline
  .on("line", (line) => {
    if (!n) {
      n = +line;
    } else {
      power = line.split(" ").map(Number);
      readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

function solution() {
  const dp = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (power[j] > power[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  console.log(n - Math.max(...dp));
}
