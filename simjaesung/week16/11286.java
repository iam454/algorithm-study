import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuffer sb = new StringBuffer();
		Queue<Integer> pq = new PriorityQueue<>();
		Map<Integer, Integer> map = new HashMap<>();
		int n = Integer.parseInt(br.readLine());

		for(int i = 0; i < n; i++){
			int k = Integer.parseInt(br.readLine());

			if(k == 0){
				if(pq.isEmpty()) sb.append(0 + "\n");
				else{
					int top = pq.poll();
					if(map.containsKey(-1 * top) && map.get(-1 * top) > 0){
						sb.append((-1 * top) + "\n");
						map.put(-1 * top, map.get(-1 * top) - 1);
					}else{
						sb.append(top + "\n");
						map.put(top, map.get(top) - 1);
					}
				}
			} else {
				map.put(k, map.getOrDefault(k, 0) + 1);
				pq.add(Math.abs(k));
			}
		}

		System.out.println(sb.toString());
	}
}