const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t, w;
let arr = [];

readline
  .on("line", (line) => {
    if (!t) {
      [t, w] = line.split(" ").map(Number);
    } else {
      arr.push(Number(line));
      if (arr.length === t) readline.close();
    }
  })
  .on("close", () => {
    solution();
    process.exit();
  });

const solution = () => {
  let dp = Array(t)
    .fill()
    .map(() =>
      Array(w + 1)
        .fill()
        .map(() => Array(3).fill(0))
    );
  dp[0][0][1] = arr[0] === 1 ? 1 : 0;
  if (w > 0) dp[0][1][2] = arr[0] === 2 ? 1 : 0;
  for (let time = 1; time < t; time++) {
    for (let moves = 0; moves <= w; moves++) {
      //현재 1번 나무, 이전에도 1번 나무
      dp[time][moves][1] = Math.max(
        dp[time][moves][1],
        dp[time - 1][moves][1] + (arr[time] === 1 ? 1 : 0)
      );
      //현재 1번 나무, 이전에 2번 나무
      if (moves > 0) {
        dp[time][moves][1] = Math.max(
          dp[time][moves][1],
          dp[time - 1][moves - 1][2] + (arr[time] === 1 ? 1 : 0)
        );
      }
      // 현재 2번 나무, 이전에도 2번 나무
      dp[time][moves][2] = Math.max(
        dp[time][moves][2],
        dp[time - 1][moves][2] + (arr[time] === 2 ? 1 : 0)
      );
      // 현재 2번 나무, 이전에 1번 나무
      if (moves > 0) {
        dp[time][moves][2] = Math.max(
          dp[time][moves][2],
          dp[time - 1][moves - 1][1] + (arr[time] === 2 ? 1 : 0)
        );
      }
    }
  }
  let ans = 0;
  for (let moves = 0; moves <= w; moves++) {
    ans = Math.max(ans, dp[t - 1][moves][1], dp[t - 1][moves][2]);
  }
  console.log(ans);
};
