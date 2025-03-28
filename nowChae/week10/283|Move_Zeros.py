class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        for i, n in enumerate(nums):
            if 0 in nums:
                zero_idx = nums.index(0)
                if i > zero_idx:
                    nums[zero_idx], nums[i] = nums[i], nums[zero_idx]
