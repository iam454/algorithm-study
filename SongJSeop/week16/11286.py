import heapq
import sys

N = int(sys.stdin.readline().strip())

minusDict = dict()
nums = []
for i in range(N):
    x = int(sys.stdin.readline().strip())
    if x != 0:
        if x < 0:
            minusDict[abs(x)] = minusDict.get(abs(x), 0) + 1
        heapq.heappush(nums, abs(x))
        continue

    if len(nums) == 0:
        print(0)
        continue

    popNum = heapq.heappop(nums)
    if minusDict.get(popNum, 0) > 0:
        print(-popNum)
        minusDict[popNum] -= 1
    else:
        print(popNum)