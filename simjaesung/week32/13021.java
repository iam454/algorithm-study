import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());

		int[] lastPainted = new int[n];

		for(int i = 1; i <= m; i++){
			st = new StringTokenizer(br.readLine());
			int l = Integer.parseInt(st.nextToken()) - 1;
			int r = Integer.parseInt(st.nextToken()) - 1;

			for(int j = l; j <=r; j++)
				lastPainted[j] = i;
		}

		Set<Integer> set = new HashSet<>();
		for (int value : lastPainted)
			if(value != 0) set.add(value);

		System.out.println((long)Math.pow(2, set.size()));
	}
}