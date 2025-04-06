import sys
input = sys.stdin.readline

K, N = map(int,input().split(' '))
lines = []
for _ in range(K):
    lines.append(int(input()))

left = 1
right = 2**31 - 1

cnt = 0


while left <= right:
    middle = (left + right) // 2

    cnt = 0

    for l in lines:
        cnt += (l//middle)
    
    if cnt >= N:
        left = middle + 1
    else:
        right = middle - 1

print(right)
