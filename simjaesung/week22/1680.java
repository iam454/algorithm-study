import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		int t = Integer.parseInt(br.readLine());
		while(t -- > 0){
			StringTokenizer st = new StringTokenizer(br.readLine());
			int maxW = Integer.parseInt(st.nextToken()); //최대 용량
			int n = Integer.parseInt(st.nextToken()); //지점 개수

			int[] x = new int[n]; //거리
			int[] w = new int[n]; //쓰레기 양

			for(int i = 0; i < n; i++){
				StringTokenizer st1 = new StringTokenizer(br.readLine());
				x[i] = Integer.parseInt(st1.nextToken());
				w[i] = Integer.parseInt(st1.nextToken());
			}

			int idx = 0, nowW = 0;
			int move = x[n-1] * 2; //최소 거리
			while(idx < n){
				if(nowW + w[idx] >= maxW){
					if(nowW + w[idx] == maxW && idx == n-1) break;

					move += x[idx] * 2;
					if(nowW + w[idx] == maxW) nowW = 0;
					else nowW = w[idx];
				} else nowW += w[idx];
				idx++;
			}
			sb.append(move + "\n");
		}
		System.out.println(sb.toString());
	}
}