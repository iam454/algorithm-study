/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const dp = new Array(n + 1).fill(0);
  let sub = 1;

  for (let i = 1; i <= n; i++) {
    if (sub * 2 === i) {
      sub = i;
    }

    dp[i] = dp[i - sub] + 1;
    console.log(dp);
  }

  return dp;
};
