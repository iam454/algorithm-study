class Solution {
	public int trap(int[] height) {
		int ans = 0;
		Deque<Integer> stack = new ArrayDeque<>();

		for(int i = 0; i < height.length; i++){
			while(!stack.isEmpty() && height[i] > height[stack.peek()]){
				int h = stack.pop();
				if(stack.isEmpty()) break;

				int d = i - stack.peek() - 1;
				ans += d * (Math.min(height[stack.peek()], height[i]) - height[h]);
			}
			stack.push(i);
		}

		return ans;
	}
}