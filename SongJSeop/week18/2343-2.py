import sys

# 블루레이 크기가 mid일 때 묶음 수 계산
def process():
    count = 0
    now = 0
    for i in range(N-1):
        now += lectures[i]
        if now + lectures[i+1] > mid:
            count += 1
            now = 0

    return count + 1

N, M = map(int, sys.stdin.readline().split())
lectures = list(map(int, sys.stdin.readline().split()))

low = max(lectures)
high = sum(lectures)
result = high
while low <= high:
    mid = (low + high) // 2
    if process() <= M:  # 묶음 수가 M보다 작거나 같을 때, 일단 result 값을 넣어주고 좀 더 낮춰도 되는지 검사가 필요
        result = mid
        high = mid - 1
    else:  # 묶음 수가 M보다 크면 result는 정답이 될 수 없으며 더 높여야 함
        low = mid + 1

print(result)