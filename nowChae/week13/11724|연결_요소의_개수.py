import sys
from collections import deque
input = sys.stdin.readline

N, M = map(int,input().split(' '))
visited = [False] * (N+1)

link = dict()

for _ in range(M):
    u, v = map(int,input().split(' '))
    link[u] = link.get(u, []) + [v]
    link[v] = link.get(v, []) + [u]

answer = 0
for i in range(1, N+1):
    if not visited[i]:
        answer += 1
        queue = deque([i])
        visited[i] = True

        while queue:
            q = queue.popleft()

            for c in link.get(q,[]):
                if not visited[c]:
                    visited[c] = True
                    queue.append(c)

print(answer)