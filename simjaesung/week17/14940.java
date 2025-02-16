import java.io.*;
import java.util.*;

class Main {
	public static int n,m,sx,sy;
	public static int[][] arr;
	public static int[] dx = {-1,1,0,0};
	public static int[] dy = {0,0,-1,1};
	public static boolean inrange(int x, int y){
		return x >= 0 && x < n && y >= 0 && y < m;
	}
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());

		n = Integer.parseInt(st.nextToken());
		m = Integer.parseInt(st.nextToken());

		int[][] arr = new int[n][m];
		int[][] visit = new int[n][m];


		for(int i = 0; i < n; i++){
			StringTokenizer st2 = new StringTokenizer(br.readLine());
			for(int j = 0; j < m; j++){
				arr[i][j]= Integer.parseInt(st2.nextToken());
				if(arr[i][j] == 2) {
					sx = i;
					sy = j;
					visit[sx][sy] = 1;
				}
			}
		}

		Queue<Pair>queue = new LinkedList<>();
		queue.offer(new Pair(sx,sy,0));

		while(queue.size() > 0){
			Pair now = queue.poll();
			int cx = now.x;
			int cy = now.y;
			int d = now.d;

			for(int i = 0; i < 4; i++){
				int nx = cx + dx[i];
				int ny = cy + dy[i];
				if(!inrange(nx,ny)) continue;
				if(visit[nx][ny] != 0) continue;
				if(arr[nx][ny] == 0) continue;
				visit[nx][ny] = d + 1;
				queue.offer(new Pair(nx,ny,d+1));
			}
		}

		StringBuilder sb = new StringBuilder();
		visit[sx][sy] = 0;
		for(int i = 0; i<n; i++){
			for(int j = 0; j<m; j++){
				if(visit[i][j] == 0 && arr[i][j] == 1){
					sb.append(-1 + " ");
				}
				else sb.append(visit[i][j] + " ");
			}
			sb.append("\n");
		}

		System.out.println(sb.toString());
	}

	static class Pair{
		int x;
		int y;
		int d;

		public Pair(int x, int y, int d){
			this.x = x;
			this.y = y;
			this.d = d;
		}
	}
}