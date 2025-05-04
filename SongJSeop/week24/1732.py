class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        now = 0
        results = [0]
        for altitude in gain:
            now += altitude
            results.append(now)

        return max(results)
