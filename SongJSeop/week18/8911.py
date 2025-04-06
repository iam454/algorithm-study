import sys

T = int(sys.stdin.readline())
tests = [list(sys.stdin.readline().strip()) for _ in range(T)]

# 방향에 따른 F와 B의 이동 표현 (인덱스별로 현재 방향이 0: 북쪽, 1: 서쪽, 2: 남쪽, 3: 동쪽)
fMoves = [(0, 1), (-1, 0), (0, -1), (1, 0)]
bMoves = [(0, -1), (1, 0), (0, 1), (-1, 0)]

for test in tests:
    nowPosition = (0, 0)
    xList = [0]
    yList = [0]
    nowDirection = 0

    for t in test:
        x, y = nowPosition
        if t == 'F':
            dx, dy = fMoves[nowDirection]
            _x, _y = x + dx, y + dy
            xList.append(_x)
            yList.append(_y)
            nowPosition = (_x, _y)
        elif t == 'B':
            dx, dy = bMoves[nowDirection]
            _x, _y = x + dx, y + dy
            xList.append(_x)
            yList.append(_y)
            nowPosition = (_x, _y)
        elif t == 'L':
            nowDirection = (nowDirection + 1) % 4
        elif t == 'R':
            nowDirection = (nowDirection - 1) % 4

    minX, maxX = min(xList), max(xList)
    minY, maxY = min(yList), max(yList)

    print((maxX - minX) * (maxY - minY))