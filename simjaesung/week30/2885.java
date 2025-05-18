import java.io.*;
import java.util.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int k = Integer.parseInt(br.readLine());

		//최소 초콜릿 크기
		int minC = 1;
		while(minC < k){
			minC *= 2;
		}

		int ans = 0; //쪼개는 횟수
		int remainC = minC; //남은 초콜릿 크기

		while(remainC > 0){
			if(remainC <= k) k -= remainC;
			if(k == 0) break;
			remainC /= 2;
			ans++;
		}

		System.out.print(minC + " " + ans);

	}
}