import sys
input = sys.stdin.readline

N = int(input())
house = sorted(list(map(int, input().split())), reverse=True)


result = 0

while sum(house) > 0:
    cnt = 0
    for i in range(len(house)):
        if cnt == 2:
            cnt = 0
            break
        if house[i] > 0:
            house[i] -= 1
            cnt +=1
    result += 1
    house = sorted(house, reverse= True)

if result > 1440:
    print(-1)
else:
    print(result)