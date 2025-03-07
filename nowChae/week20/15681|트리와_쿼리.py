import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**6)
from collections import deque

N, R, Q = map(int, input().split(' '))

graph = [[] for _ in range(N+1)]

for _ in range(N-1):
    U, V = map(int, input().split(' '))
    graph[U].append(V)
    graph[V].append(U)

tree = [[] for _ in range(N+1)]
size = [0]*(N+1)
visited = [False] * (N+1)

queue = deque([R])
visited[R] = True

while queue:
    node = queue.popleft()

    for n in graph[node]:
        if not visited[n]:
            visited[n] = True
            tree[node].append(n)
            queue.append(n)

def cntSubTree(cur):
    size[cur] = 1

    for g in tree[cur]:
        cntSubTree(g)
        size[cur] += size[g]

cntSubTree(R)

for _ in range(Q):
    U = int(input())
    print(size[U])
