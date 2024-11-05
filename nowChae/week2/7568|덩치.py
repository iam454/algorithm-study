import sys
input = sys.stdin.readline

N = int(input())
people = []
for i in range(N):
    people.append(list(map(int,input().split(' '))))

result = [N for _ in range(N)]

for i,p in enumerate(people):
    cnt = 0
    for j in range(N):
        if p[0] < people[j][0] and p[1] < people[j][1]:
            cnt += 1
    
    result[i] = cnt+1

print(*result)

