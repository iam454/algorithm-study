const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m, s, e;
let arr = [];
let cnt = 0;

let dp;

readline
  .on("line", (line) => {
    if (!n) {
      n = Number(line);
      dp = Array.from(Array(n), () => Array(n).fill(0));
    } else if (arr.length === 0) {
      arr = line.split(" ").map(Number);
      for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
      }
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] === arr[i + 1]) {
          dp[i][i + 1] = 1;
        }
      }
      for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
          let j = i + len - 1;
          //양 끝이 같고 사이가 팰린드롬이면 팰린드롬임
          if (arr[i] === arr[j] && dp[i + 1][j - 1] === 1) {
            dp[i][j] = 1;
          }
        }
      }
    } else if (!m) {
      m = Number(line);
    } else {
      [s, e] = line.split(" ").map(Number);
      solution();
      cnt++;
      if (cnt === m) {
        readline.close();
      }
    }
  })
  .on("close", () => {
    process.exit();
  });

const solution = () => {
  console.log(dp[s - 1][e - 1]);
};
