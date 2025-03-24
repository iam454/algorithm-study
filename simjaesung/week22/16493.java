import java.io.*;
import java.util.*;

class Main {
	public static int n,m,ans;
	public static boolean[] c;
	public static Pair[] pairs;
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		n = Integer.parseInt(st.nextToken());
		m = Integer.parseInt(st.nextToken());
		c = new boolean[m];
		pairs = new Pair[m];
		for(int i = 0; i < m; i++){
			StringTokenizer st2 = new StringTokenizer(br.readLine());
			int c = Integer.parseInt(st2.nextToken());
			int p = Integer.parseInt(st2.nextToken());
			pairs[i] = new Pair(c,p);
		}
		go(0,n,0);
		System.out.print(ans);
	}

	public static void go(int k, int date, int sum){
		if(date == 0 || k == m) {
			ans = Math.max(ans, sum);
			return;
		}
		if(date >= pairs[k].c){
			go(k + 1, date - pairs[k].c, sum + pairs[k].p);
		}
		go(k + 1, date, sum);
	}

	static class Pair{
		public int c;
		public int p;

		Pair(int c, int p){
			this.c = c;
			this.p = p;
		}
	}
}