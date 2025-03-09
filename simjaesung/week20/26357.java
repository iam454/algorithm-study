import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st1 = new StringTokenizer(br.readLine());
		StringTokenizer st2 = new StringTokenizer(br.readLine());

		int n = Integer.parseInt(st1.nextToken());
		long k = Long.parseLong(st1.nextToken());

		long[] arr = new long[n];
		for(int i = 0; i < n; i++){
			arr[i] = Long.parseLong(st2.nextToken());
		}
		Arrays.sort(arr);

		long l = 0;
		long r = arr[n - 1];
		long ans = arr[n - 1];

		while(l <= r){
			long m = (l + r) / 2; //기준 점수
			long candy = 0; //주는 사탕 수
			for(int i = 0; i < n; i++){
				if(arr[i] > m) candy += arr[i] - m;
			}

			if(candy > k) l = m + 1;
			else {
				ans = Math.min(ans, m);
				r = m - 1;
			}
		}
		System.out.println(ans);
	}
}