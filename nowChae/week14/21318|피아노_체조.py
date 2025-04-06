import sys
input = sys.stdin.readline

N = int(input())
level = list(map(int, input().split(' ')))

fault = [0]
f = 0
for i in range(N-1):
    if level[i] > level[i+1]:
        f += 1
    fault.append(f)

Q = int(input())
for _ in range(Q):
    x, y = map(int, input().split(' '))
    print(fault[y-1] - fault[x-1])
print(fault)