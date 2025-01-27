import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int n = Integer.parseInt(br.readLine());
		int[][] arr = new int[n][n];
		double totalCom = 0;
		int left = 0, right = 0;
		for(int i = 0; i < n; i++){
			StringTokenizer st = new StringTokenizer(br.readLine());
			for(int j = 0; j < n; j++){
				arr[i][j] = Integer.parseInt(st.nextToken());
				totalCom += arr[i][j];
				right = Math.max(right, arr[i][j]);
			}
		}

		long ans = right;
		while(left <= right){
			int mid = (left + right) / 2;
			long tmpSum = 0;

			for(int i = 0; i < n; i++){
				for(int j = 0; j < n; j++){
					tmpSum += Math.min(arr[i][j], mid);
				}
			}

			if(totalCom / 2 <= tmpSum) {
				right = mid - 1;
				ans = Math.min(ans,mid);
			}
			else{
				left = mid + 1;
			}
		}

		System.out.println(ans);
	}
}