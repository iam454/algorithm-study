import java.io.*;
import java.util.*;

class Main {
	public static StringBuffer sb = new StringBuffer();
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int n = Integer.parseInt(br.readLine());
		int[] arr = new int[n + 1];
		int[] memo = new int[n + 1];
		StringTokenizer st = new StringTokenizer(br.readLine());

		for(int i = 1; i <= n; i++){
			arr[i] = Integer.parseInt(st.nextToken());
		}

		for(int i = 1; i <= n; i++){
			if(arr[i] < arr[i-1]){
				memo[i] = memo[i-1] + 1;
			}else memo[i] = memo[i-1];
		}

		int q = Integer.parseInt(br.readLine());

		while(q-- > 0){
			StringTokenizer st2 = new StringTokenizer(br.readLine());
			int x = Integer.parseInt(st2.nextToken());
			int y = Integer.parseInt(st2.nextToken());
			sb.append((memo[y] - memo[x]) + "\n");
		}
		System.out.println(sb.toString());
	}
}