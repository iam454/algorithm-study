import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());

		//상자에 담긴 선물 개수, 항상 많이 담긴 걸 골라야함
		PriorityQueue<Integer> pq = new PriorityQueue<>((a,b) -> b - a);
		st = new StringTokenizer(br.readLine());
		for(int i = 0; i < n; i++){
			pq.add(Integer.parseInt(st.nextToken()));
		}

		st = new StringTokenizer(br.readLine());
		for(int i = 0; i < m; i++){
			int p = Integer.parseInt(st.nextToken());
			int maxP = pq.poll();
			//원하는 만큼 선물을 가져가는 경우
			if(maxP >= p) pq.add(maxP - p);
			else {
				//원하는 만큼의 선물이 없는 경우
				System.out.println(0);
				return;
			}
		}

		System.out.println(1);
	}
}