import heapq
import sys

n = int(input())
pq = [] 
cnt = 0

while cnt < n:
    line = input().strip()
    
    if line == "0":
        if not pq: 
            print(-1)
        else:
            print(-heapq.heappop(pq))
        cnt += 1
    else:
        presents = list(map(int, line.split()))
        k = presents[0] 
        
        for i in range(1, len(presents)):
            heapq.heappush(pq, -presents[i])
        
        cnt += 1