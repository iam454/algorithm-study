import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int n = Integer.parseInt(st.nextToken());
		int k = Integer.parseInt(st.nextToken());
		int a = Integer.parseInt(st.nextToken());
		int b = Integer.parseInt(st.nextToken());
		int ans = 0;

		int[] arr = new int[n];
		Arrays.fill(arr,k);
		boolean dead = false;

		int idx = 0;
		while(!dead){
			for(int i = 0; i < a; i++){
				arr[idx++] += b;
				idx %= n;
			}

			for(int i = 0; i < n; i++){
				arr[i]--;
				if(arr[i] == 0) {
					dead = true;
					break;
				}
			}
			ans++;
		}

		System.out.println(ans);
	}
}