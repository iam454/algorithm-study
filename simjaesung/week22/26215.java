import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int n = Integer.parseInt(br.readLine());
		StringTokenizer st = new StringTokenizer(br.readLine());
		PriorityQueue<Integer> pq = new PriorityQueue<>((a,b) -> b - a );
		for(int i = 0; i < n; i++){
			pq.add(Integer.parseInt(st.nextToken()));
		}

		int ans = 0;
		while(ans <= 1440 && !pq.isEmpty()){
			if(pq.size() > 1){
				int h1 = pq.poll() - 1;
				int h2 = pq.poll() - 1;
				if(h1 > 0) pq.add(h1);
				if(h2 > 0) pq.add(h2);
			}else{
				int h1 = pq.poll() - 1;
				if(h1 > 0) pq.add(h1);
			}
			ans++;
		}
		if(ans > 1440) System.out.println(-1);
		else System.out.println(ans);
	}
}