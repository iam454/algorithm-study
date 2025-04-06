import sys

testCaseCount = int(sys.stdin.readline())

for _ in range(testCaseCount):
    carTotalVolumn, spotCount = map(int, sys.stdin.readline().split())
    spots = [list(map(int, sys.stdin.readline().split())) for _ in range(spotCount)]

    tmp = 0
    distances = []
    for i in range(spotCount - 1):
        distance, volumn = spots[i]

        tmp += volumn
        if tmp == carTotalVolumn:
            distances.append(distance)
            tmp = 0
            continue

        nextDistance, nextVolumn = spots[i+1]
        if tmp + nextVolumn > carTotalVolumn:
            distances.append(nextDistance)
            tmp = 0
            continue

    distances.append(spots[spotCount - 1][0])

    print(sum(distances) * 2)