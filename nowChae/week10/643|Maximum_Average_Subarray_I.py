class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        max_sum = sum(nums[:k])
        before_sum = max_sum
        for i in range(k,len(nums)):
            new_sum = before_sum + nums[i] - nums[i - k]
            before_sum = new_sum

            if new_sum > max_sum:
                max_sum = new_sum

        return max_sum / k
        