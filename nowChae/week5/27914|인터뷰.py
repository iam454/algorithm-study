import sys
input = sys.stdin.readline

N, K, Q = map(int,input().split(' '))
grades = list(map(int,input().split(' ')))
questions = list(map(int, input().split(' ')))

result = [0 for _ in range(N)]

first = 0
last = 0

for i in range(N):
    if K != grades[i]:
        last = i
        if i == 0:
            result[i] = 1
        else:
            result[i] = result[i-1] + 1 + (last - first)
    else:
        first = i+1
        if i == 0:
            result[i] = 0
        else:
            result[i] = result[i-1]

for q in questions:
    print(result[q-1])