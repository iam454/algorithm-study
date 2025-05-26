import sys
input = sys.stdin.readline
import heapq

N, M = map(int, input().split(' '))
present = list(map(int, input().split(' ')))
pre_max_heap = []
for p in present:
    heapq.heappush(pre_max_heap, -1 * p)
children = list(map(int, input().split(' ')))

state = True

for child in children:
    max_pre = heapq.heappop(pre_max_heap) * (-1)
    if child <= max_pre:
        max_pre -= child
        heapq.heappush(pre_max_heap, -1 * max_pre)
    else:
        state = False
        break 

if state:
    print(1)
else:
    print(0)
