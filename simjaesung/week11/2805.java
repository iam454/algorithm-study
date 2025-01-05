import java.io.*;
import java.util.*;

class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        StringTokenizer st2 = new StringTokenizer(br.readLine());

        int n = Integer.parseInt(st.nextToken());
        long m = Long.parseLong(st.nextToken());

        long[] arr = new long[n];
        long left = 0, right = 0, ans = 0;

        for(int i = 0; i < n; i++){
            arr[i] = Long.parseLong(st2.nextToken());
            right = Math.max(right, arr[i]);
        }

        while(left <= right){
            long mid = (left + right) / 2;
            long cutedTree = 0;

            for(int i = 0; i < n; i++){
                if(arr[i] - mid >= 0)
                    cutedTree += arr[i] - mid;
            }

            if(cutedTree >= m){
                left = mid + 1;
                ans = Math.max(ans,mid);
            }else{
                right = mid - 1;
            }
        }

        System.out.println(ans);
    }
}