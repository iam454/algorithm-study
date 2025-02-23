import sys
input = sys.stdin.readline

N, M = map(int, input().split())
course = list(map(int, input().split(' ')))

start = max(course)
end = sum(course)

while start < end: 
    middle = (start + end) // 2

    group = 1
    
    group_sum = 0

    for c in course:
        group_sum += c

        if group_sum > middle:
            group_sum = c
            group += 1
    
    if group > M:
        start = middle + 1
    else:
        end = middle 
print(end)