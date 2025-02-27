const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];
let tot = 0;

readline
  .on("line", (line) => {
    if (!n) {
      n = parseInt(line);
    } else {
      arr.push(parseInt(line));
      if (arr.length === n) readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  for (let i = 0; i < n; i++) {
    tot += arr[i];
  }
  if (n <= 2) {
    console.log(tot);
    return;
  }
  dp = [0, arr[0], arr[1], arr[2]];
  for (let i = 4; i <= n - 1; i++) {
    dp.push(Math.min(dp[i - 2], dp[i - 3]) + arr[i - 1]);
  }
  console.log(tot - Math.min(dp[n - 1], dp[n - 2]));
};
