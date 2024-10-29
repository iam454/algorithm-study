import sys
input = sys.stdin.readline

N, X = map(int,input().split(" "))
visitor = list(map(int,input().split(" ")))

maxVisitor = 0
count = 0

i, j = 0, 0
visitorSum = visitor[0]

while True:
    if i - j == X - 1:
        if maxVisitor < visitorSum:
            count = 1
            maxVisitor = visitorSum
        elif maxVisitor == visitorSum:
            count += 1

        if i == len(visitor) -1 :
            break
        
        i += 1
        visitorSum += visitor[i]

    elif i - j < X - 1:
        i += 1
        visitorSum += visitor[i]
    else:
        visitorSum -= visitor[j]
        j += 1  


if maxVisitor == 0:
    print("SAD")
else:
    print(maxVisitor)
    print(count)