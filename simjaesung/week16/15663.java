import java.io.*;
import java.util.*;

class Main {
	public static int[] arr,c;
	public static int n, m;
	public static Set<String> set = new LinkedHashSet<>();
	public static StringBuffer sb = new StringBuffer();
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st1 = new StringTokenizer(br.readLine());
		StringTokenizer st2 = new StringTokenizer(br.readLine());
		n = Integer.parseInt(st1.nextToken());
		m = Integer.parseInt(st1.nextToken());
		arr = new int[n];
		c = new int[n];
		for(int i = 0; i < n; i++){
			arr[i] = Integer.parseInt(st2.nextToken());
		}
		Arrays.sort(arr);
		go(0,"");
		for(String str : set){
			sb.append(str + "\n");
		}

		System.out.print(sb.toString());
	}

	public static void go(int k, String tmp){
		if(k == m){
			set.add(tmp.trim());
			return;
		}

		for(int i = 0; i < n; i++){
			if(c[i] == 1) continue;
			c[i] = 1;
			go(k + 1, tmp + " " + arr[i]);
			c[i] = 0;
		}
	}
}