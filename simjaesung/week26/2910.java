import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int n = Integer.parseInt(st.nextToken());
		int c = Integer.parseInt(st.nextToken());

		List<Integer> list = new ArrayList<>();
		List<Integer> order = new ArrayList<>();
		Map<Integer,Integer> map = new HashMap<>();
		st = new StringTokenizer(br.readLine());

		for(int i = 0; i < n; i++){
			int val = Integer.parseInt(st.nextToken());
			list.add(val);
			order.add(val);
			map.put(val, map.getOrDefault(val, 0) + 1);
		}

		Collections.sort(list, (a,b) -> {
			if(map.get(a) == map.get(b)){
				return order.indexOf(a) - order.indexOf(b);
			} else{
				return Integer.compare(map.get(b), map.get(a));
			}
		});

		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < n; i++)
			sb.append(list.get(i) + " ");
		System.out.println(sb.toString());
	}
}