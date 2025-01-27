import sys
input = sys.stdin.readline

N = int(input())
computers = list(list(map(int,input().split(' ')))for _ in range(N))

total = 0
max_height = 0
for c in computers:
    total += sum(c)
    max_height = max(max_height, max(c))

start = 0
end = max_height

while start < end:
    cold = 0
    mid = (start + end) // 2
    for com in computers:
        for c in com:
            if c > mid:
                cold += mid
            else:
                cold += c
    
    if cold >= (total / 2):
        end = mid
    else:
        start = mid + 1
    
print(end)