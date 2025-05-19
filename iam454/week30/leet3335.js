/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function (s, t) {
  const dp = new Array(t + 1).fill(0).map(() => new Array(26).fill(0));
  const MOD = 1e9 + 7;

  for (let j = 0; j < 26; j++) {
    dp[0][j] = 1;
  }

  for (let i = 1; i <= t; i++) {
    for (let j = 0; j < 26; j++) {
      if (j === 25) {
        dp[i][j] = (dp[i - 1][0] + dp[i - 1][1]) % MOD;
      } else {
        dp[i][j] = dp[i - 1][j + 1];
      }
    }
  }

  let result = 0;
  for (let char of s) {
    const index = char.charCodeAt(0) - "a".charCodeAt(0);
    result = (result + dp[t][index]) % MOD;
  }

  return result;
};
