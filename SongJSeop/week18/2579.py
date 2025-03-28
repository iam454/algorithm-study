import sys

N = int(sys.stdin.readline())
stairs = [int(sys.stdin.readline()) for i in range(N)]

if N == 1:
    print(stairs[0])
    sys.exit()
elif N == 2:
    print(stairs[0] + stairs[1])
    sys.exit()
elif N == 3:
    print(max(stairs[0] + stairs[2], stairs[1] + stairs[2]))
    sys.exit()

maxPoints = [stairs[0], stairs[0] + stairs[1], max(stairs[0] + stairs[2], stairs[1] + stairs[2])]  # 3번째 계단까지는 고정

for i in range(3, N):
    maxPoint = max(maxPoints[i-2] + stairs[i], maxPoints[i-3] + stairs[i-1] + stairs[i])
    maxPoints.append(maxPoint)

print(maxPoints[-1])