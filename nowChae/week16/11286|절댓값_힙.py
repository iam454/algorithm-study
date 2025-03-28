import sys
input = sys.stdin.readline
import heapq

N = int(input())

heap = []

for _ in range(N):
    x = int(input())

    if x == 0:
        if len(heap) == 0:
            print(0)
        else:
            abs_min = heapq.heappop(heap)
            print(abs_min[1])

    else:
        heapq.heappush(heap, (abs(x), x))

