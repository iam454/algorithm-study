import java.io.*;
import java.util.*;

class Main {
	public static int[] arr;
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int n = Integer.parseInt(st.nextToken());
		int k = Integer.parseInt(st.nextToken());

		arr = new int[n];
		for(int i = 0; i < n; i++){
			arr[i] = Integer.parseInt(br.readLine());
		}
		Arrays.sort(arr);

		long l = 1, r = arr[n - 1];
		long ans = 0;
		while(l <= r){
			long m = (l + r) / 2;
			long cnt = getCnt(m);
			if(cnt >= k){
				l = m + 1;
				ans = Math.max(m,ans);
			} else r = m - 1;
		}
		System.out.println(ans);
	}

	public static long getCnt(long s){
		long cnt = 0;
		for(int k : arr){
			cnt += k / s;
		}
		return cnt;
	}
}