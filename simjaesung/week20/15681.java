import java.io.*;
import java.util.*;

class Main {
	public static boolean[] visited;
	public static int[] point;
	public static List<List<Integer>> arr = new ArrayList<>();
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int n = Integer.parseInt(st.nextToken());
		int r = Integer.parseInt(st.nextToken());
		int q = Integer.parseInt(st.nextToken());

		visited = new boolean[n + 1];
		point = new int[n + 1];
		for(int i = 0; i < n + 1; i++){
			arr.add(new ArrayList<Integer>());
		}

		for(int i = 0; i < n - 1; i++){
			StringTokenizer st2 = new StringTokenizer(br.readLine());
			int u = Integer.parseInt(st2.nextToken());
			int v = Integer.parseInt(st2.nextToken());
			arr.get(u).add(v);
			arr.get(v).add(u);
		}

		setPoint(r);

		StringBuilder sb = new StringBuilder();
		for(int i = 0; i < q; i++){
			int U = Integer.parseInt(br.readLine());
			sb.append(point[U] + "\n");
		}
		System.out.print(sb.toString());
	}

	public static void setPoint(int r){
		point[r] = 1;
		visited[r] = true;
		for(int k : arr.get(r)){
			if(!visited[k]) {
				setPoint(k);
				point[r] += point[k];
			}
		}
	}
}