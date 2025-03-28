class Solution:
    def minimumSize(self, nums: List[int], maxOperations: int) -> int:
        left = 1
        right = max(nums)+1

        result = 0
        while left < right:
            totalOperations = 0
            middle = (left + right) // 2

            for num in nums:
                if (num % middle)  == 0:
                    totalOperations += (num // middle) -1
                else:
                    totalOperations += (num // middle)
            
            if totalOperations > maxOperations:
                left = middle + 1
            else:
                right = middle
                result = middle

        return result
            