import java.io.*;
import java.util.*;

class Main {

	static class State{

		int screen;
		int clipboard;
		int time;

		State(int screen, int clipboard, int time) {
			this.screen = screen;
			this.clipboard = clipboard;
			this.time = time;
		}
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int s = Integer.parseInt(br.readLine());

		boolean[][] visited = new boolean[2001][2001];
		Queue<State> q = new LinkedList<>();
		q.add(new State(1, 0, 0));
		visited[1][0] = true;

		while(!q.isEmpty()){
			State cur = q.poll();

			if (cur.screen == s) {
				System.out.println(cur.time);
				return;
			}

			//화면 복사
			if(!visited[cur.screen][cur.screen]){
				visited[cur.screen][cur.screen] = true;
				q.add(new State(cur.screen, cur.screen, cur.time + 1));
			}

			//붙여넣기
			if (cur.clipboard > 0 && cur.screen + cur.clipboard <= 2000 && !visited[cur.screen + cur.clipboard][cur.clipboard]) {
				visited[cur.screen + cur.clipboard][cur.clipboard] = true;
				q.add(new State(cur.screen + cur.clipboard, cur.clipboard, cur.time + 1));
			}

			//삭제
			if (cur.screen > 0 && !visited[cur.screen - 1][cur.clipboard]) {
				visited[cur.screen - 1][cur.clipboard] = true;
				q.add(new State(cur.screen - 1, cur.clipboard, cur.time + 1));
			}
		}
	}
}