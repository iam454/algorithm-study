import sys
input = sys.stdin.readline

T = int(input())
for _ in range(T):
    N = int(input())
    for i in range(N):
        a, b = (map(int, input().split(' ')))
        print(i+1, a+1, b+900000000)