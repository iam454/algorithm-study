import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st1 = new StringTokenizer(br.readLine());
		int n = Integer.parseInt(st1.nextToken());
		int k = Integer.parseInt(st1.nextToken());

		int[] arr = new int[n];
		StringTokenizer st2 = new StringTokenizer(br.readLine());
		for(int i = 0; i < n; i++){
			arr[i] = Integer.parseInt(st2.nextToken());
		}

		Arrays.sort(arr);

		int ans = 0;
		int st = 0, en = n-1;
		while(st < en){
			if(arr[st] + arr[en] > k) en--;
			else{
				st++;
				en--;
				ans++;
			}
		}

		System.out.println(ans);
	}
}