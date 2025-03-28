function solution(triangle) {
  let dp = Array(triangle.length).fill(0);
  for (let i = 0; i < triangle.length; i++) {
    dp[i] = Array(triangle[i].length).fill(0);
  }
  dp[0][0] = triangle[0][0];
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) dp[i][j] = triangle[i][j] + dp[i - 1][j];
      else if (j === triangle[i].length - 1)
        dp[i][j] = triangle[i][j] + dp[i - 1][j - 1];
      else dp[i][j] = triangle[i][j] + Math.max(dp[i - 1][j], dp[i - 1][j - 1]);
    }
  }
  let max = dp[dp.length - 1][0];
  for (let i = 0; i < dp[dp.length - 1].length; i++) {
    max = Math.max(max, dp[dp.length - 1][i]);
  }
  return max;
}
