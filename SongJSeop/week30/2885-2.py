from time import sleep


def getMaxSquare(num):
    square = 0
    while True:
        tmp = 2 ** square
        if num > tmp:
            square += 1
            continue

        if num == tmp:
            return True, square

        return False, square - 1

import sys

k = int(sys.stdin.readline())

isEnd, maxSquare = getMaxSquare(k)
if isEnd:
    print(k, 0)
    sys.exit()

minSize = 2 ** (maxSquare + 1)
remain = k - (2 ** maxSquare)
result = 1
while True:
    tmpIsEnd, tmpMaxSquare = getMaxSquare(remain)
    result += (maxSquare - tmpMaxSquare)
    if tmpIsEnd:
        print(minSize, result)
        sys.exit()

    maxSquare = tmpMaxSquare
    remain -= 2 ** tmpMaxSquare
