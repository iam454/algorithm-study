import sys
from heapq import heappush, heappop

input = sys.stdin.readline

N = int(input())
min_heap = []

for _ in range(N):
   line = map(int,input().split(' '))

   for num in line:
      if len(min_heap) < N:
         heappush(min_heap, num)
      else:
         if min_heap[0] < num:
            heappop(min_heap)
            heappush(min_heap, num)

print(min_heap[0])