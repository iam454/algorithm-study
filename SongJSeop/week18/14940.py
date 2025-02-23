import sys
from collections import deque

def isMovable(toX, toY):
    return (0 <= toX < n) and (0 <= toY < m) and landMap[toX][toY] == 1 and resultMap[toX][toY] == 0

n, m = map(int, sys.stdin.readline().split())
landMap = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]

goalPosition = (0, 0)
for i in range(len(landMap)):
    if 2 in landMap[i]:
        goalPosition = (i, landMap[i].index(2))
        break

moves = [(1, 0), (-1, 0), (0, 1), (0, -1)]
resultMap = [[0] * m for _ in range(n)]

q = deque([goalPosition])
while q:
    x, y = q.popleft()
    for (dx, dy) in moves:
        _x, _y = x + dx, y + dy
        if not isMovable(_x, _y):
            continue

        q.append((_x, _y))
        resultMap[_x][_y] = resultMap[x][y] + 1


for i in range(n):
    for j in range(m):
        if resultMap[i][j] == 0 and landMap[i][j] == 1:
            resultMap[i][j] = -1

for result in resultMap:
    print(" ".join(map(str, result)))