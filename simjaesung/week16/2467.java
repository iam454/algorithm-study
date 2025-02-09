import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int n = Integer.parseInt(br.readLine());
		long[] arr = new long[n];
		StringTokenizer st = new StringTokenizer(br.readLine());

		for(int i = 0; i < n; i++){
			arr[i] = Long.parseLong(st.nextToken());
		}

		Arrays.sort(arr);
		int s = 0;
		int e = n - 1;
		long ans1, ans2 = arr[e];
		long fusion = Math.abs(ans1 + ans2);

		while(s < e){
			if(fusion > Math.abs(arr[s] + arr[e])){
				ans1 = arr[s];
				ans2 = arr[e];
				fusion = Math.abs(arr[s] + arr[e]);
			}
			if(arr[s] + arr[e] >= 0) e--;
			else s++;
		}

		System.out.println(ans1 + " " + ans2);
	}
}