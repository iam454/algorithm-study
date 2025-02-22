import java.io.*;

class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int n = Integer.parseInt(br.readLine());
		for(int i = 0; i < n; i++){
			String s = br.readLine();
			char[] arr = s.toCharArray();
			System.out.println(sol(arr));
		}
	}

	public static int[] dx = {-1,0,1,0};
	public static int[] dy = {0,1,0,-1};

	public static int sol(char[] arr){
		int loc = 0;
		int a = 0; int b = 0;
		int maxA = 0; int maxB = 0;
		int minA = 0; int minB = 0;

		for(int j = 0; j < arr.length; j++){
			if(arr[j] == 'F'){
				a += dx[loc];
				b += dy[loc];
			} else if(arr[j] == 'B'){
				a -= dx[loc];
				b -= dy[loc];
			} else if(arr[j] == 'R'){
				loc++;
				loc %= 4;
			} else{
				loc--;
				if(loc < 0) loc = 3;
			}
			maxA = Math.max(maxA, a);
			maxB = Math.max(maxB, b);
			minA = Math.min(minA, a);
			minB = Math.min(minB, b);
		}

		return (maxA - minA) * (maxB - minB);
	}
}