class Solution {
	public int findDuplicate(int[] nums) {
		Arrays.sort(nums);
		for(int i : nums){
			if(lowerBound(nums, i) < upperBound(nums,i) - 1){
				return i;
			}
		}
		return 0;
	}

	public int lowerBound(int[] nums, int k){
		int left = 0;
		int right = nums.length;

		while(left < right){
			int mid = (left + right) / 2;
			if(nums[mid] < k){
				left = mid + 1;
			}else{
				right = mid;
			}
		}

		return left;
	}

	public int upperBound(int[] nums, int k){
		int left = 0;
		int right = nums.length;

		while(left < right){
			int mid = (left + right) / 2;
			if(nums[mid] <= k){
				left = mid + 1;
			}else{
				right = mid;
			}
		}

		return left;
	}
}