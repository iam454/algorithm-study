class Solution {
	public int largestAltitude(int[] gain) {
		int ans = 0;
		int n = gain.length;
		int[] arr = new int[n + 1];

		for(int i = 1; i <= n; i++){
			arr[i] = arr[i - 1] + gain[i - 1];
			ans = Math.max(ans, arr[i]);
		}

		return ans;
	}
}