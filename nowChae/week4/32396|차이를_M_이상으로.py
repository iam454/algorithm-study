import sys
import math
input = sys.stdin.readline

N, M = map(int,input().split(' '))
nList = list(map(int,input().split(' ')))

count = 0

for i in range(len(nList)-1):
    if abs(nList[i]-nList[i+1]) < M:
        nList[i+1] = math.inf
        count += 1
print(count)
