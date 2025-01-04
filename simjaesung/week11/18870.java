import java.io.*;
import java.util.*;

class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        Integer[] arr = new Integer[n];
        for(int i = 0; i < n; i++){
            arr[i] = Integer.parseInt(st.nextToken());
        }

        Set<Integer>set = new HashSet<>(Arrays.asList(arr));
        Integer[] setArr = set.toArray(new Integer[0]);
        Arrays.sort(setArr);

        StringBuilder sb = new StringBuilder();

        for(int i = 0; i < n; i++){
            sb.append(lowerbound(setArr,arr[i]) + " ");
        }
        System.out.println(sb.toString());
    }

    public static int lowerbound(Integer[] arr, int val){
        int left = 0;
        int right = arr.length;
        while(left < right){
            int mid = (left + right) / 2;
            if(arr[mid] < val) left = mid + 1;
            else right = mid;
        }
        return left;
    }
}