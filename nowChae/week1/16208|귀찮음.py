import sys
input = sys.stdin.readline

n = int(input())
sticks = list(map(int,input().split(" ")))

sticks.sort()
sticksSum = sum(sticks)

result = []

lastStick = sticksSum
for i in range(n-1):
    lastStick -= sticks[i]
    result.append(lastStick * sticks[i])

print(sum(result))