import sys
input = sys.stdin.readline
from itertools import combinations

N = int(input())
solution = list(map(int, input().split(' ')))

start = 0
end = N - 1

ans = abs(solution[start] + solution[end])
ans_left = start
ans_right = end

while start < end:
    tmp = solution[start] + solution[end]

    if abs(tmp) < ans:
        ans = abs(tmp)
        ans_left = start
        ans_right = end

        if ans == 0:
            break
    
    if tmp < 0:
        start += 1
    else:
        end -= 1

print(solution[ans_left], solution[ans_right])