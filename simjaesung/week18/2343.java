import java.io.*;
import java.util.*;

class Main {
	public static int[] arr;
	public static int n,m;
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st1 = new StringTokenizer(br.readLine());
		n = Integer.parseInt(st1.nextToken());
		m = Integer.parseInt(st1.nextToken());

		arr = new int[n];
		StringTokenizer st2 = new StringTokenizer(br.readLine());

		long right = 0;
		long left = 0;
		for(int i = 0; i < n; i++){
			arr[i] = Integer.parseInt(st2.nextToken());
			right += arr[i];
			left = Math.max(left, arr[i]);
		}

		long ans = right;
		while(left <= right){
			long mid = (left + right) / 2;
			if(blue(mid) > m){
				left = mid + 1;
			}else{
				right = mid - 1;
				ans = Math.min(ans, mid);
			}
		}
		System.out.println(left);
	}

	public static long blue(long size){
		long cnt = 0;
		long tmp = 0;
		for(int i = 0; i < n; i++){
			if(tmp + arr[i] <= size){
				tmp += arr[i];
				if(tmp == size){
					cnt++;
					tmp = 0;
				}
			}else{
				cnt++;
				tmp = arr[i];
			}
		}
		if(tmp != 0) cnt++;
		return cnt;
	}
}