import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int n = Integer.parseInt(br.readLine());
		StringTokenizer st = new StringTokenizer(br.readLine());
		int[] arr = new int[n];
		long[] dp = new long[n];

		for(int i = 0; i < n; i++){
			arr[i] = Integer.parseInt(st.nextToken());
		}

		for(int i = 1; i < n; i++){
			dp[i] = Math.max(dp[i-1],Math.abs(arr[i] - arr[i-1]) + 1);
			for(int j = i - 1; j >= 0; j--){
				long k = (long) (i - j) * (Math.abs(arr[i] - arr[j]) + 1);
				dp[i] = Math.min(dp[i], Math.max(dp[j],k));
			}
		}
		System.out.println(dp[n-1]);
	}
}