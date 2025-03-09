import java.io.*;
import java.util.*;

class Main {
	public static int ans = Integer.MIN_VALUE;
	public static int n;
	public static char[] arr;

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		n = Integer.parseInt(br.readLine());
		arr = br.readLine().toCharArray();
		go(2, arr[0] - '0');
		System.out.print(ans);
	}

	public static void go(int idx, int sum){
		if(idx >= n){
			ans = Math.max(ans, sum);
			return;
		}

		//괄호를 안치는 경우
		go(idx + 2, cal(sum, arr[idx] - '0', arr[idx - 1]));

		if(idx + 2 < n){
			//괄호를 치는 경우
			go(idx + 4, cal(sum, cal(arr[idx] - '0', arr[idx + 2] - '0', arr[idx + 1]), arr[idx - 1]));
		}
	}

	public static int cal(int a, int b, char o){
		if(o == '+'){
			return a + b;
		}else if(o == '-'){
			return a - b;
		}else return a * b;
	}
}