import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());
		int k = Integer.parseInt(st.nextToken());
		int x = Integer.parseInt(st.nextToken());

		List<Integer> arr[] = new ArrayList[n + 1];
		for(int i = 1 ; i <= n; i++){
			arr[i] = new ArrayList<>();
		}

		int[] visit = new int[n + 1];

		for(int i = 0; i < m; i++){
			StringTokenizer st2 = new StringTokenizer(br.readLine());
			int a = Integer.parseInt(st2.nextToken());
			int b = Integer.parseInt(st2.nextToken());
			arr[a].add(b);
		}

		Queue<Pair> queue = new LinkedList<>();
		queue.offer(new Pair(x,0));

		while(queue.size() > 0){
			Pair first = queue.poll();
			int nx = first.nx;
			int d = first.d;

			for(int i = 0; i < arr[nx].size(); i++){
				int nxt = arr[nx].get(i);
				if(visit[nxt] != 0 || nxt == x) continue;
				visit[nxt] = d + 1;
				queue.offer(new Pair(nxt, d + 1));
			}
		}

		boolean check = false;
		StringBuilder sb = new StringBuilder();
		for(int i = 1 ; i <= n; i++){
			if(visit[i] == k) {
				check = true;
				sb.append(i + "\n");
			}
		}
		if(check) System.out.println(sb.toString());
		else System.out.println(-1);
	}

	public static class Pair{
		public int nx;
		public int d;

		public Pair(int nx, int d){
			this.nx = nx;
			this.d = d;
		}
	}
}