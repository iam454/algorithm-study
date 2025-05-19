def getMaxPieceSquare(size):  # size보다 작거나 같은 수 중 가장 큰 2의 제곱 수
    square = 0
    while True:
        tmpSize = 2 ** square
        if size > tmpSize:
            square += 1
            continue

        if size == tmpSize:
            return True, square  # 만약 나누어 떨어지면 true로 반환

        return False, (square - 1)  # 아니라면 false로 반환

import sys

k = int(sys.stdin.readline())

isEnd, maxPieceSquare = getMaxPieceSquare(k)
maxPieceSize = 2 ** maxPieceSquare
remainingSize = k - maxPieceSize

if isEnd:
    print(maxPieceSize, 0)

result = 1
while True:
    isEnd, tmpSquare = getMaxPieceSquare(remainingSize)
    result += (maxPieceSquare - tmpSquare)
    if isEnd: break

    remainingSize -= (2 ** tmpSquare)
    maxPieceSquare = tmpSquare

print(2 * maxPieceSize, result)