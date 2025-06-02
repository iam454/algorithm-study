import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int n = Integer.parseInt(br.readLine());
		StringTokenizer st = new StringTokenizer(br.readLine());
		Map<String, Integer>map = new HashMap<>();

		int ans = 0;

		for(int i = 0; i < n; i++){
			String s = st.nextToken();
			if(s.length() < 6) continue;
			if(!s.substring(s.length() - 6).equals("Cheese")) continue;
			if(map.containsKey(s)) continue;
			else{
				map.put(s,1);
				ans++;
			}
		}

		if(ans >= 4) System.out.println("yummy");
		else System.out.println("sad");
	}
}