class Solution:
    def minCostClimbingStairs(self, costs):
        if len(costs) == 2:
            return min(costs[0], costs[1])

        minCosts = [costs[0], costs[1]]

        for i in range(2, len(costs)):
            beforeMinCost = min(minCosts[i-2], minCosts[i-1])
            minCosts.append(beforeMinCost + costs[i])

        return min(minCosts[-2], minCosts[-1])

solution = Solution()
print(solution.minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]))