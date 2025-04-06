const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, k;
let arr = [];

readline
  .on("line", (line) => {
    if (!n) {
      [n, k] = line.split(" ").map(Number);
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
  let dp = Array(k + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < n; i++) {
    for (let j = arr[i]; j <= k; j++) {
      dp[j] += dp[j - arr[i]];
    }
  }
  console.log(dp[k]);
};
