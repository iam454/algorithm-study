import java.io.*;
import java.util.*;

class Main {
	static final int INF = 1000;

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		int n = Integer.parseInt(br.readLine());

		int[][] dist = new int[n][n];

		for (int i = 0; i < n; i++) {
			String line = br.readLine();
			for (int j = 0; j < n; j++) {
				if (i == j) dist[i][j] = 0;
				else if (line.charAt(j) == 'Y') dist[i][j] = 1;
				else dist[i][j] = INF;
			}
		}

		for (int k = 0; k < n; k++) {
			for (int i = 0; i < n; i++) {
				for (int j = 0; j < n; j++) {
					if (dist[i][j] > dist[i][k] + dist[k][j]) {
						dist[i][j] = dist[i][k] + dist[k][j];
					}
				}
			}
		}

		int ans = 0;
		for (int i = 0; i < n; i++) {
			int count = 0;
			for (int j = 0; j < n; j++) {
				if (i != j && dist[i][j] <= 2) {
					count++;
				}
			}
			ans = Math.max(ans, count);
		}

		System.out.println(ans);
	}
}