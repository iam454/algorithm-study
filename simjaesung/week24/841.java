class Solution {
	public boolean canVisitAllRooms(List<List<Integer>> rooms) {
		int n = rooms.size();
		boolean[] visited = new boolean[n + 1];
		visited[0] = true;
		Queue<Integer> queue = new ArrayDeque<>();
		List<Integer> room_0 = rooms.get(0);
		for(int i = 0; i < room_0.size(); i++){
			queue.offer(room_0.get(i));
		}

		while(!queue.isEmpty()){
			int newKey = queue.poll();
			if(visited[newKey]) continue;
			visited[newKey] = true;

			List<Integer> newRoom = rooms.get(newKey);
			for(int key : newRoom){
				if(visited[key]) continue;
				queue.offer(key);
			}
		}

		for(int i = 0; i < n; i++){
			if(!visited[i]) return false;
		}

		return true;
	}
}