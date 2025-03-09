import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int n = Integer.parseInt(br.readLine());
		StringBuilder sb = new StringBuilder();
		Queue<Integer> pq = new PriorityQueue<>((a,b) -> b - a);

		for(int i = 0; i < n; i++){
			StringTokenizer st = new StringTokenizer(br.readLine());
			int a = Integer.parseInt(st.nextToken());
			if(a == 0){
				if(pq.isEmpty()) sb.append("-1\n");
				else sb.append(pq.poll() + "\n");
			}else{
				for(int k = 0; k < a; k++){
					pq.add(Integer.parseInt(st.nextToken()));
				}
			}
		}

		System.out.println(sb.toString());
	}
}