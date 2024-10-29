import sys
input = sys.stdin.readline

N, M = map(int,input().split())

noListen = set()
result = []

for i in range(N+M):
    name = input().strip()
    if i < N:
        noListen.add(name)
    elif name in noListen:
        result.append(name)

result.sort()
print(len(result))
for r in result:
    print(r)
