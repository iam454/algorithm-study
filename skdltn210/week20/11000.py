import heapq

n = int(input())
lectures = []

for _ in range(n):
    start, end = map(int, input().split())
    lectures.append((start, end))

lectures.sort(key=lambda x: x[0])

priority_queue = []

for start, end in lectures:
    if priority_queue and priority_queue[0] <= start:
        heapq.heappop(priority_queue)
    
    heapq.heappush(priority_queue, end)

print(len(priority_queue))