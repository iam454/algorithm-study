const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const N = Number(input);
const MOD = 1_000_000;

const memo = Array.from({ length: N }, () =>
  Array.from({ length: 2 }, () => new Array(3).fill(-1))
);

const dfs = (day, lCnt, aStreak) => {
  if (lCnt >= 2 || aStreak >= 3) {
    return 0;
  }
  if (day === N) {
    return 1;
  }

  if (memo[day][lCnt][aStreak] !== -1) {
    return memo[day][lCnt][aStreak];
  }

  let result = 0;
  result += dfs(day + 1, lCnt, 0);
  result += dfs(day + 1, lCnt + 1, 0);
  result += dfs(day + 1, lCnt, aStreak + 1);

  memo[day][lCnt][aStreak] = result % MOD;

  return memo[day][lCnt][aStreak];
};

const result = dfs(0, 0, 0);
console.log(result);
