const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t,
  n,
  m,
  lineCnt = 0;
let arr = [];

readline
  .on("line", (line) => {
    if (!t) {
      t = parseInt(line);
    } else if (!n) {
      n = parseInt(line);
    } else if (arr.length === 0) {
      arr = line.split(" ").map(Number);
    } else {
      m = parseInt(line);
      solution();
      lineCnt++;
      if (lineCnt === t) {
        readline.close();
      }
      n = m = 0;
      arr = [];
    }
  })
  .on("close", () => {
    process.exit();
  });

const solution = () => {
  let dp = Array(m + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < n; i++) {
    for (let j = arr[i]; j <= m; j++) {
      dp[j] += dp[j - arr[i]];
    }
  }

  console.log(dp[m]);
};
