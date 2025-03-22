import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int n = Integer.parseInt(br.readLine());
		int[] arr = new int[100005];
		for(int i = 1; i <= n; i++){
			arr[i] = Integer.parseInt(br.readLine());
		}

		int[][] dp = new int[3][100005];
		//0은 모두 먹었을 경우, 1은 먹지 않았을 경우, 2는 절반만 먹었을 경우
		dp[0][1] = arr[1];
		dp[2][1] = arr[1];

		dp[0][2] = arr[2];
		dp[1][2] = arr[1];
		dp[2][2] = arr[1] + arr[2] / 2;

		int ans = Math.max(dp[0][2], dp[2][2]);

		for(int i = 3; i <= n; i++){
			dp[0][i] = dp[1][i-1] + arr[i];
			dp[1][i] = Math.max(dp[0][i-1], Math.max(dp[1][i-1],dp[2][i-1]));
			dp[2][i] = dp[0][i-1] + arr[i] / 2;
			ans = Math.max(dp[0][i], Math.max(dp[1][i],dp[2][i]));
		}

		System.out.print(ans);
	}
}