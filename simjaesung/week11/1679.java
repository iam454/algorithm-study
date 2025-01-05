import java.io.*;
import java.util.*;

class Main {
    public static int[] visited = new int[200005];
    public static boolean inRange(int x){
        return x >= 0 && x < 200005;
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int k = Integer.parseInt(st.nextToken());
        bfs(n,k);
    }

    public static void bfs(int st, int k){
        Deque<Integer> queue = new ArrayDeque<>();
        queue.offerLast(st);
        while(!queue.isEmpty()){
            int front = queue.pollFirst();

            if(front == k){
                System.out.println(visited[front]);
                System.exit(0);
            }

            if(front + 1 == k || front - 1 == k || front * 2 == k){
                System.out.println(visited[front] + 1);
                System.exit(0);
            }

            if(inRange(front + 1) && visited[front + 1] == 0) {
                visited[front + 1] = visited[front] + 1;
                queue.offerLast(front + 1);
            }

            if(inRange(front - 1) && visited[front - 1] == 0) {
                visited[front - 1] = visited[front] + 1;
                queue.offerLast(front - 1);
            }

            if(inRange(front * 2) && visited[front * 2] == 0) {
                visited[front * 2] = visited[front] + 1;
                queue.offerLast(front * 2);
            }
        }
    }
}