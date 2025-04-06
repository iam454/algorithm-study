const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];

readline
  .on("line", (line) => {
    if (!n) {
      n = Number(line);
    } else {
      arr = line.split(" ").map(Number);
      readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let dp = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    dp[arr[i]] = dp[arr[i] - 1] + 1;
  }
  console.log(n - Math.max(...dp));
};
