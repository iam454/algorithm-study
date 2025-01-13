const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let stone = [];

readline
  .on("line", (line) => {
    if (!n) {
      n = parseInt(line);
    } else {
      stone = line.split(" ").map((el) => parseInt(el));
      readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const canGo = (k) => {
  let dp = Array(n).fill(0);
  dp[0] = 1;
  for (let i = 0; i < n; i++) {
    if (dp[i] === 0) continue;

    for (let j = i + 1; j < n; j++) {
      const force = (j - i) * (1 + Math.abs(stone[i] - stone[j]));
      if (force <= k) {
        dp[j] = 1;
      }
    }
  }
  return dp[n - 1];
};

const solution = () => {
  let left = 0;
  let right = (n - 1) * (1 + Math.abs(Math.max(...stone) - Math.min(...stone)));
  let ans = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (canGo(mid)) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  console.log(ans);
};
