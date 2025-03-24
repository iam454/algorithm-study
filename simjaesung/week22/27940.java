import java.io.*;
import java.util.*;

class Main {
	public static int[] arr;
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());
		int k = Integer.parseInt(st.nextToken());
		int rain = 0;
		for(int i = 0; i < m; i++){
			StringTokenizer st2 = new StringTokenizer(br.readLine());
			int t = Integer.parseInt(st2.nextToken());
			int r = Integer.parseInt(st2.nextToken());
			rain += r;
			if(rain > k){
				System.out.println((i + 1) + " " + 1);
				return;
			}
		}
		System.out.println(-1);
	}
}