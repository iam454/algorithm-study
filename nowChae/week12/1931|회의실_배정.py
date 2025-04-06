import sys
input = sys.stdin.readline

N = int(input())
rooms = []
for _ in range(N):
    rooms.append(tuple(map(int, input().split(' '))))
rooms.sort(key=lambda x :(x[1], x[0]))

answer = 0
start = 0
for r in rooms:
    if r[0] >= start:
        start = r[1]
        answer += 1

print(answer)
