import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**6)

N, M, R = map(int, input().split())

graph = [[] for _ in range(N+1)]
visited = [False] * (N+1)

for _ in range(M):
    u, v = map(int, input().split())
    graph[u].append(v)
    graph[v].append(u) 

for g in graph:
    g.sort(reverse=True)

t = [0] * (N+1)
d = [-1] * (N+1)

cnt = 1
def dfs(node, depth):
    global cnt
    t[node] = cnt
    cnt += 1
    visited[node] = True
    d[node] = depth 
    for next in graph[node]:
        if not visited[next]:
            dfs(next, depth+1)

dfs(R, 0)

rst = 0
for i in range(1, N+1):
    rst += (t[i] * d[i])
print(rst)