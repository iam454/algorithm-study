import sys
input = sys.stdin.readline

N, K = map(int,input().split(' '))
weight = list(map(int, input().split(' ')))
weight.sort()

answer = 0

start = 0
end = N-1

while start < end:
    if weight[start] + weight[end] <= K:
        answer += 1
        start += 1
        end -= 1
    else:
        end -= 1
    
print(answer)