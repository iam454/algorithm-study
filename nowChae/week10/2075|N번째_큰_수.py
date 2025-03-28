import sys
import heapq
input = sys.stdin.readline

N = int(input())

heap = []
for _ in range(N):
    nums = list(map(int,input().split(' ')))
    if len(heap) < N:
        for n in nums:
            heapq.heappush(heap, n)
    else:
        for n in nums:
            if heap[0] < n:
                heapq.heappop(heap)
                heapq.heappush(heap, n)
        
print(heapq.heappop(heap))

