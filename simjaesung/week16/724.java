class Solution {
	public int pivotIndex(int[] nums) {
		int n = nums.length;
		int[] arr = new int[n];
		arr[0] = nums[0];
		for(int i = 1; i < n; i++){
			arr[i] = arr[i - 1] + nums[i];
		}

		for(int i = 0; i < n; i++){
			if(arr[i] - nums[i] == arr[n-1] - arr[i]){
				return i;
			}
		}

		return -1;
	}
}