import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		StringTokenizer st2 = new StringTokenizer(br.readLine());
		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());

		int ans = 0;
		PriorityQueue<Integer> pq = new PriorityQueue<>(); //10인것만
		List<Integer> list = new ArrayList<>();

		for(int i = 0; i < n; i++){
			int cake = Integer.parseInt(st2.nextToken());
			if(cake >= 10 && cake % 10 == 0) pq.add(cake);
			else list.add(cake);
		}

		while(!pq.isEmpty()){
			int c = pq.poll();
			if((c / 10) - 1 <= m){
				ans += c / 10;
				m -= (c / 10) - 1;
			}else{
				ans += m;
				m = 0;
				break;
			}
		}

		if(m == 0){
			System.out.print(ans);
			return;
		}

		for(int cake : list){
			if(cake < 10) continue;
			if(cake / 10 <= m){
				ans += cake / 10;
				m -= cake / 10;
			} else{
				ans += m;
				break;
			}
		}
		System.out.print(ans);
	}
}