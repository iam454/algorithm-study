class Solution:
    def trap(self, height: List[int]) -> int:
        result = 0

        start = 0
        water = 0

        reverse_idx = len(height) - 1
        for i,h in enumerate(height):
            if start <= h:
                result += water
                water = 0
                start = h
                reverse_idx = i
            else:
                water += (start - h)
        
        start = 0
        water = 0
        for i in range(len(height)-1, reverse_idx - 1, -1):
            h = height[i]
            if start <= h:
                result += water
                water = 0
                start = h
            else:
                water += (start - h)

        return result