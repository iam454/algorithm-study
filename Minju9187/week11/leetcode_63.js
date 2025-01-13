var uniquePathsWithObstacles = function (obstacleGrid) {
  const rows = obstacleGrid.length;
  const columns = obstacleGrid[0].length;

  const dp = Array.from({ length: rows }, () => Array(columns).fill(0));

  if (obstacleGrid[0][0] === 1) return 0;

  dp[0][0] = 1;

  for (let i = 1; i < columns; i++) {
    if (obstacleGrid[0][i] === 0) {
      dp[0][i] = dp[0][i - 1];
    }
  }

  for (let i = 1; i < rows; i++) {
    if (obstacleGrid[i][0] === 0) {
      dp[i][0] = dp[i - 1][0];
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      if (obstacleGrid[i][j] === 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[rows - 1][columns - 1];
};
