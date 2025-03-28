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
      arr.push(Number(line));
      if (arr.length === n) readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let dp = Array(k + 1).fill(100001);
  dp[0] = 0;
  for (let i = 0; i < n; i++) {
    for (let j = arr[i]; j <= k; j++) {
      dp[j] = Math.min(dp[j], dp[j - arr[i]] + 1);
    }
  }
  console.log(dp[k] === 100001 ? -1 : dp[k]);
};
