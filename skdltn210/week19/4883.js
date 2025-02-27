const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let arr = [];
let cnt = 1;

readline
  .on("line", (line) => {
    if (!n) {
      n = parseInt(line);
      if (n === 0) {
        readline.close();
      }
    } else {
      arr.push(line.split(" ").map(Number));
      if (arr.length === n) {
        solution();
        cnt++;
        n = undefined;
        arr = [];
      }
    }
  })
  .on("close", () => {
    process.exit();
  });

const solution = () => {
  let dp = [[1000000, arr[0][1], arr[0][1] + arr[0][2]]];
  for (let i = 1; i < n; i++) {
    let temp = [];
    temp.push(Math.min(dp[i - 1][0], dp[i - 1][1]) + arr[i][0]);
    temp.push(
      Math.min(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2], temp[0]) + arr[i][1]
    );
    temp.push(Math.min(dp[i - 1][1], dp[i - 1][2], temp[1]) + arr[i][2]);
    dp.push(temp);
  }
  console.log(`${cnt}. ${dp[n - 1][1]}`);
};
