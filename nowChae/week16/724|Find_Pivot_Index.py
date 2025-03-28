class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        pivot = -1
        for i in range(len(nums)):
            if sum(nums[:i]) == sum(nums[i+1:]):
                pivot = i
                break
        return pivot

