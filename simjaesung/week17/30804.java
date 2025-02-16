import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int n = Integer.parseInt(br.readLine());
		StringTokenizer st = new StringTokenizer(br.readLine());
		int[] arr = new int[n];
		int[] cnt = new int[10]; //과일 개수
		for(int i = 0; i < n; i++){
			arr[i] = Integer.parseInt(st.nextToken());
		}
		int start = 0;
		int end = 0;
		int ans = 0;

		while(start < n){
			cnt[arr[start++]]++;
			while(checkF(cnt) > 2){
				cnt[arr[end++]]--;
			}
			ans = Math.max(ans, start - end);
		}

		System.out.println(ans);
	}

	public static int checkF(int[] cnt){
		int c = 0;
		for(int f : cnt){
			if(f > 0) c++;
		}
		return c;
	}
}