import java.io.*;
import java.util.*;

class Main {
	public static int n,m;
	public static int ans = 64; //정답 최대값
	public static int[][] arr;
	public static int[] dx = {-1,1,0,0}; //북남서동
	public static int[] dy = {0,0,-1,1};
	public static boolean inrange(int x, int y){
		return x >= 0 && x < n && y >=0 && y < m;
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		n = Integer.parseInt(st.nextToken());
		m = Integer.parseInt(st.nextToken());
		arr = new int[n][m];
		for(int i = 0; i < n; i++){
			StringTokenizer st2 = new StringTokenizer(br.readLine());
			for(int j = 0; j < m; j++){
				arr[i][j] = Integer.parseInt(st2.nextToken());
			}
		}
		go(0,0);
		System.out.println(ans);
	}

	public static void go(int i, int j){
		if (i == n) {
			cnt0();
			return;
		}

		int nextX = (j + 1 == m) ? i + 1 : i;
		int nextY = (j + 1 == m) ? 0 : j + 1;

		if (arr[i][j] >= 1 && arr[i][j] <= 5){
			int[][] backup = new int[n][m];
			for (int k = 0; k < n; k++) backup[k] = arr[k].clone();
			int type = arr[i][j];

			if(type == 1){
				up1(i,j); go(nextX, nextY); restore(backup);
				left1(i,j); go(nextX, nextY); restore(backup);
				down1(i,j); go(nextX, nextY); restore(backup);
				right1(i,j); go(nextX, nextY); restore(backup);
			}

			if(type == 2){
				left1(i,j); right1(i,j); go(nextX, nextY); restore(backup);
				up1(i,j); down1(i,j); go(nextX, nextY); restore(backup);
			}

			if(type == 3){
				up1(i,j); right1(i,j); go(nextX, nextY); restore(backup);
				right1(i,j); down1(i,j); go(nextX, nextY); restore(backup);
				down1(i,j); left1(i,j); go(nextX, nextY); restore(backup);
				left1(i,j); up1(i,j); go(nextX, nextY); restore(backup);
			}

			if(type == 4){
				up1(i,j); right1(i,j); left1(i,j); go(nextX, nextY); restore(backup);
				up1(i,j); right1(i,j); down1(i,j); go(nextX, nextY); restore(backup);
				right1(i,j); down1(i,j); left1(i,j); go(nextX, nextY); restore(backup);
				down1(i,j); left1(i,j); up1(i,j); go(nextX, nextY); restore(backup);
			}

			if(type == 5){
				up1(i,j); right1(i,j); left1(i,j); down1(i,j);
				go(nextX, nextY); restore(backup);
			}
		}else {
			go(nextX, nextY);
		}
	}

	///-1은 cctv가 감지 가능한 구역
	public static void up1(int x, int y){
		while(inrange(x,y)){
			if(arr[x][y] == 6) break;
			if(arr[x][y] <= 0) arr[x][y] = -1;
			x += dx[0];
			y += dy[0];
		}
	}

	public static void down1(int x, int y){
		while(inrange(x,y)){
			if(arr[x][y] == 6) break;
			if(arr[x][y] <= 0) arr[x][y] = -1;
			x += dx[1];
			y += dy[1];
		}
	}

	public static void left1(int x, int y){
		while(inrange(x,y)){
			if(arr[x][y] == 6) break;
			if(arr[x][y] <= 0) arr[x][y] = -1;
			x += dx[2];
			y += dy[2];
		}
	}

	public static void right1(int x, int y){
		while(inrange(x,y)){
			if(arr[x][y] == 6) break;
			if(arr[x][y] <= 0) arr[x][y] = -1;
			x += dx[3];
			y += dy[3];
		}
	}

	public static void restore(int[][] backup) {
		for (int i = 0; i < n; i++) arr[i] = backup[i].clone();
	}

	public static void cnt0(){
		int cnt = 0;
		for(int i = 0; i < n; i++){
			for(int j = 0; j < m; j++){
				if(arr[i][j] == 0) cnt++;
			}
		}
		ans = Math.min(cnt,ans);
	}
}