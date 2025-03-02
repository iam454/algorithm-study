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
  let dp = Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  let max = Math.max(...dp);
  let ans = [];
  let len = max;
  let idx = dp.lastIndexOf(max);
  ans.push(arr[idx]);
  for (let i = idx - 1; i >= 0; i--) {
    if (dp[i] === len - 1 && arr[i] < ans[ans.length - 1]) {
      ans.push(arr[i]);
      len--;
      idx = i;
    }
  }
  console.log(max);
  console.log(ans.reverse().join(" "));
};
