class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        result = 0
        current = 0
        for point in gain:
            current = current + point
            result = max(current, result)
        
        return result