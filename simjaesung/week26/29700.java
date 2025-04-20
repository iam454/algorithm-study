import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine());
		int n = Integer.parseInt(st.nextToken());
		int m = Integer.parseInt(st.nextToken());
		int k = Integer.parseInt(st.nextToken());

		int arr[][] = new int[n][m];

		for(int i = 0; i < n; i++){
			String s = br.readLine();
			for(int j = 0; j < m; j++){
				arr[i][j] = s.charAt(j) - '0';
			}
		}

		int ans = 0;

		for(int i = 0; i < n; i++){
			int [] tmpArr = new int[m];
			tmpArr[0] = (arr[i][0] == 0) ? 1 : 0;
			for(int j = 1; j < m; j++){
				if(arr[i][j] == 1) tmpArr[j] = 0;
				else tmpArr[j] = tmpArr[j - 1] + 1;
			}

			for(int j = 0; j < m; j++){
				if(tmpArr[j] >= k) ans++;
			}
		}

		System.out.println(ans);
	}
}