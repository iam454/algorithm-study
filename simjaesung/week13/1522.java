import java.io.*;

class Main {
	public static int aCnt;
	public static int ans;
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String s = br.readLine();
		char[] arr = s.toCharArray();
		for(char c : arr) if(c == 'a') aCnt++;

		s += s;
		char[] arr2 = s.toCharArray();

		for(int i = 0; i < arr.length; i++){
			int tmpCntA = 0;
			for(int j = i; j < i + aCnt; j++){
				if(arr2[j] == 'a') tmpCntA++;
			}
			ans = Math.max(ans, tmpCntA);
		}
		System.out.println(aCnt - ans);
	}
}