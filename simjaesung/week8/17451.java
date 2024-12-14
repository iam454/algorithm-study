import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int n = Integer.parseInt(br.readLine());
		int arr[] = new int[n];

		StringTokenizer st = new StringTokenizer(br.readLine());
		for(int i = 0; i < n; i++){
			arr[i] = Integer.parseInt(st.nextToken());
		}

        //오랜만에 long 에 당했습니다 ..
		long ans = 0;

		for(int i = n-1; i >= 0; i--){
			if(arr[i] > ans) ans = arr[i];
			else if(ans % arr[i] != 0){
				long tmp = ans / arr[i];
				ans = arr[i] * (tmp + 1);
			}
		}
		System.out.println(ans);
	}
}