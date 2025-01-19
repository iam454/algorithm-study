import java.io.*;
import java.util.*;

class Main {
	public static int n,m,ans;
	public static List<Integer>[] node;
	public static boolean[] check;

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		n = Integer.parseInt(st.nextToken());
		m = Integer.parseInt(st.nextToken());
		init(br);

		Queue<Integer>queue = new ArrayDeque<>();

		for(int i = 1; i <=n; i++){
			if(!check[i]) {
				ans++;
				queue.offer(i);
				check[i] = true;
				while(!queue.isEmpty()){
					int front = queue.poll();
					for(int k = 0; k < node[front].size(); k++){
						if(!check[node[front].get(k)]) {
							check[node[front].get(k)] = true;
							queue.offer(node[front].get(k));
						}
					}
				}
			}
		}
		System.out.print(ans);
	}

	public static void init(BufferedReader br) throws IOException{
		check = new boolean[n+1];
		node = new List[n + 1];
		for(int i = 1; i <= n; i++){
			node[i] = new ArrayList<>();
		}

		for(int i = 0; i < m; i++){
			StringTokenizer st2 = new StringTokenizer(br.readLine());
			int u = Integer.parseInt(st2.nextToken());
			int v = Integer.parseInt(st2.nextToken());
			node[u].add(v);
			node[v].add(u);
		}
	}
}