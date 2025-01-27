import java.io.*;

class Main {
	public static boolean[] isNotPrime = new boolean[2000001];

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		checkPrime();
		int n = Integer.parseInt(br.readLine());
		while(true){
			if(!isNotPrime[n] && isPalindrome(n)) {
				System.out.println(n);
				break;
			}
			n++;
		}
	}

	public static void checkPrime(){
		isNotPrime[0] = true;
		isNotPrime[1] = true;
		for(int i = 2; i < 2000001; i++){
			if(!isNotPrime[i]){
				for(int j = i * 2; j < 2000001; j += i){
					isNotPrime[j] = true;
				}
			}
		}
	}

	public static boolean isPalindrome(int num){
		String sNum = num + "";
		int len = sNum.length();
		for(int i = 0; i < len / 2; i++){
			if(sNum.charAt(i) != sNum.charAt(len - i - 1)) return false;
		}
		return true;
	}
}