import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuffer sb = new StringBuffer();
		StringTokenizer st = new StringTokenizer(br.readLine());
		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());

		int[][] dp = new int[n + 1][n + 1];
		for(int i = 1; i <= n; i++){
			StringTokenizer st2 = new StringTokenizer(br.readLine());
			for(int j = 1; j <= n; j++){
				int k = Integer.parseInt(st2.nextToken());
				if(i == 1) dp[i][j] = dp[i][j-1] + k;
				else if(j == 1) dp[i][j] = dp[i-1][j] + k;
				else dp[i][j] = dp[i-1][j] + dp[i][j-1] + k - dp[i-1][j-1];
			}
		}

		while(m-- > 0){
			StringTokenizer st3 = new StringTokenizer(br.readLine());
			int x1 = Integer.parseInt(st3.nextToken());
			int y1 = Integer.parseInt(st3.nextToken());
			int x2 = Integer.parseInt(st3.nextToken());
			int y2 = Integer.parseInt(st3.nextToken());
			sb.append(dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1-1] + dp[x1-1][y1-1] + "\n");
		}

		System.out.println(sb.toString());
	}
}