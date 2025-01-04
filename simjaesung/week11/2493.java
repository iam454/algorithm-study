import java.io.*;
import java.util.*;

class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        int[] arr = new int[n];
        for(int i = 0; i < n; i++){
            arr[i] = Integer.parseInt(st.nextToken());
        }

        Deque<Integer>stack = new ArrayDeque<>();
        for(int i = 0; i<n; i++){
            if(stack.isEmpty()){
                System.out.print(0 + " ");
            }else if(arr[stack.peek() - 1] <= arr[i]){
                while(!stack.isEmpty()){
                    if(arr[stack.peek() - 1] > arr[i]) break;
                    stack.pop();
                }
                if(!stack.isEmpty()) System.out.print(stack.peek() + " ");
                else System.out.print(0 + " ");
            }else if(arr[stack.peek() - 1] > arr[i]){
                System.out.print(stack.peek() + " ");
            }
            stack.push(i+1);
        }
    }
}