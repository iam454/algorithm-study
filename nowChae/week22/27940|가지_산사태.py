import sys
input = sys.stdin.readline

N, M, K = map(int,input().split(' '))
water = 0
state = False
day = -1

for i in range(M):
    t, r = map(int,input().split(' '))
    water += r
    
    if water > K and not state:
        day = i + 1
        state = True

if not state:
    print(-1)
else:
    print(day, 1)