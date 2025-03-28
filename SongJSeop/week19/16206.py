import sys

cakeCount, cutCount = map(int, sys.stdin.readline().split())
cakes = list(map(int, sys.stdin.readline().split()))

fitCakes = []
notFitCakes = []
for cake in cakes:
    if cake % 10 == 0:
        fitCakes.append(cake // 10)
        continue

    notFitCakes.append(cake // 10)

result = 0
fitCakes.sort()
for fitCake in fitCakes:
    if fitCake == 1:
        result += 1
        continue

    if cutCount < fitCake - 1:
        result += cutCount
        cutCount = 0
        continue

    result += fitCake
    cutCount -= (fitCake - 1)

for notFitCake in notFitCakes:
    if cutCount == 0:
        break

    canGetCount = min(cutCount, notFitCake)
    result += canGetCount
    cutCount -= canGetCount

print(result)