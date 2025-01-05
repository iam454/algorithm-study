class Solution {
    public int[][] dp;
    public int n, m;

    public boolean inRange(int x, int y){
        return x >= 0 && x < m && y >= 0 && y < n;
    }

    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        if(obstacleGrid[0][0] == 1) return 0;
        m = obstacleGrid.length;
        n = obstacleGrid[0].length;
        dp = new int[m][n];
        dp[0][0] = 1;

        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
                if(obstacleGrid[i][j] == 1) continue;
                if(inRange(i-1,j)) dp[i][j] += dp[i-1][j];
                if(inRange(i,j-1)) dp[i][j] += dp[i][j-1];
            }
        }

        return dp[m-1][n-1];
    }
}