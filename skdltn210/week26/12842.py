import heapq

n, s = map(int, input().split())
m = int(input())
times = [int(input()) for i in range(m)]

cnt = n - s

pq = [(0, i + 1) for i in range(m)]
heapq.heapify(pq)

last_person = 0

for i in range(cnt):
    time, person = heapq.heappop(pq)

    next_available_time = time + times[person - 1]

    heapq.heappush(pq, (next_available_time, person))

    last_person = person

print(last_person)
