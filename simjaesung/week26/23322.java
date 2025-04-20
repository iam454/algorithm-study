import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int n = Integer.parseInt(st.nextToken());
		int k = Integer.parseInt(st.nextToken());

		int arr[] = new int[n];

		st = new StringTokenizer(br.readLine());
		for(int i = 0; i < n; i++){
			arr[i] = Integer.parseInt(st.nextToken());
		}

		int day = 0;
		int ans = 0;

		for(int i = 1; i < n; i++){
			if(arr[i] > arr[0]){
				day++;
				ans += arr[i] - arr[0];
			}
		}

		System.out.println(ans + " " + day);
	}
}