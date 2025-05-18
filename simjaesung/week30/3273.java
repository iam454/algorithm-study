import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int n = Integer.parseInt(br.readLine());
		StringTokenizer st = new StringTokenizer(br.readLine());
		int x = Integer.parseInt(br.readLine());

		int[] arr = new int[n];
		for(int i = 0; i < n; i++){
			arr[i] = Integer.parseInt(st.nextToken());
		}

		Arrays.sort(arr);

		int s = 0;
		int e = n - 1;
		int ans = 0;

		while(s < e){
			int val = arr[s] + arr[e];
			if(val == x){
				ans++;
				s++;
			}else if(val < x){
				s++;
			}else {
				e--;
			}
		}
		System.out.print(ans);
	}
}