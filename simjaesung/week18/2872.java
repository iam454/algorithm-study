import java.io.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int n = Integer.parseInt(br.readLine());
		int[] arr = new int[n];
		int maxIdx = 0;
		for(int i = 0; i < n; i++){
			arr[i] = Integer.parseInt(br.readLine());
			if(arr[i] == n) maxIdx = i;
		}

		int k = 1;
		int max = n;
		while(maxIdx -- > 0){
			if(arr[maxIdx] == max - 1){
				max--;
				k++;
			}
		}

		System.out.print(n - k);
	}
}