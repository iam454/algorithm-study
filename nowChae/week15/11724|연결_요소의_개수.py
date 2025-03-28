import sys
input = sys.stdin.readline
sys.setrecursionlimit(10**6)

N, M =  map(int,input().split(' '))

visited = [False] * N

components = {i+1:list() for i in range(N)}

for _ in range(M):
    u, v = map(int,input().split(' '))
    components[u].append(v)
    components[v].append(u)

def dfs(node):
    visited[node-1] = True

    for c in components[node]:
        if not visited[c - 1]:
            dfs(c)

cnt = 0
for i in range(N):
    if not visited[i]:
        cnt += 1
        dfs(i+1)
print(cnt)