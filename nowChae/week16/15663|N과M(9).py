import sys
input = sys.stdin.readline
from itertools import permutations

N, M = map(int,input().split(' '))
numbers = sorted(list(map(int,input().split(' '))))

pers = list(permutations(numbers, M))
for p in sorted(set(pers)):
    print(*p)
