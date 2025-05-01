class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        arr = set()

        for n in nums:
            if n not in arr:
                arr.add(n)
            else:
                return n
        