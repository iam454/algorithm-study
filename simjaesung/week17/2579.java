import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int n = Integer.parseInt(br.readLine());
		int[] arr = new int[305];

		for(int i = 1; i <= n; i++){
			arr[i] = Integer.parseInt(br.readLine());
		}

		int[] dp = new int[305];
		dp[1] = arr[1];
		dp[2] = arr[1] + arr[2];
		for(int i = 3; i <= n; i++){
			//한칸을 올라왔을 때 vs 두칸을 올라왔을 때
			dp[i] = Math.max(dp[i-3] + arr[i-1] + arr[i], dp[i-2] + arr[i]);
		}

		System.out.println(dp[n]);
	}
}