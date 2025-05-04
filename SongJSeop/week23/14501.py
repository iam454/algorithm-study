import sys

N = int(sys.stdin.readline())

schedules = []
for i in range(N):
    schedules.append(list(map(int, sys.stdin.readline().split())))

results = [0] * N
for i in range(N-1, -1, -1):
    time, pay = schedules[i]

    nextDay = i + time # 상담이 끝나고 다음날
    if nextDay > N:
        continue

    if nextDay == N: # 마지막 날인 경우
        results[i] = pay
        continue

    result = pay + max(results[nextDay:]) # 딱 nextDay보다 더 높은 값을 가지는 날이 있을 수 있으므로
    results[i] = result

print(max(results))