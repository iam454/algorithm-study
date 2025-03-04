import sys
input = sys.stdin.readline
import heapq

n = int(input())
present = []

for _ in range(n):
    position = list(map(int,input().strip().split(' ')))

    if position[0] == 0:
        if len(present) > 0:
            print(-1 * heapq.heappop(present))
        else:
            print(-1)
    else:
        for i in range(1, len(position)):
            heapq.heappush(present, -1*position[i])

