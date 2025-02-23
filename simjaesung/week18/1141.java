import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int n = Integer.parseInt(br.readLine());
		String[] arr = new String[n];

		for(int i = 0; i < n; i++){
			arr[i] = br.readLine();
		}

		Arrays.sort(arr, new Comparator<String>(){
			public int compare(String s1, String s2){
				return s1.length() - s2.length();
			}
		});

		int ans = n;

		for(int i = 0; i < n; i++){
			for(int j = i + 1; j < n; j++){
				if(arr[j].startsWith(arr[i])){
					ans --;
					break;
				}
			}
		}

		System.out.println(ans);
	}
}