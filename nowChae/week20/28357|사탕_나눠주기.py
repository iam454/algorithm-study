import sys
input = sys.stdin.readline

N, K = map(int,input().split(' '))
points = list(map(int, input().split(' ')))

left = 0
right = 10**12

while left < right:
    middle = (left + right) // 2

    cnt = 0
    for p in points:
        if p > middle:
            cnt += (p-middle)
        
    if cnt > K:
        left = middle + 1
    else:
        right = middle

print(right)