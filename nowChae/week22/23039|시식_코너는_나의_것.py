import sys
input = sys.stdin.readline

N = int(input())
corner = []

for _ in range(N):
    corner.append(int(input()))

dp = [[0, 0, 0] for _ in range(N)]

dp[0][1] = corner[0] // 2
dp[0][2] = corner[0]


for i in range(1, N):
    for j in range(3):
        if j == 0:
            dp[i][j] = max(dp[i-1][0], dp[i-1][1], dp[i-1][2])
        elif j == 1:
            dp[i][j] = dp[i-1][2] + (corner[i] // 2)
        else:
            dp[i][j] = dp[i-1][0] + corner[i]

print(max(dp[N-1]))


# 최대한 많은 양의 음식을 먹고싶다
# 3번 연속으로 시식 코너를 방문할 수 없음
# 연속된 시식 코너 중 두번째는 양 // 2 만큼만 먹을 수 있음
# 음식이 0인 상황이 있을 수 있다. 

# 최대의 상황을 판단하는것 -> DP

#dp[i][j] = 상황별 음식 먹은 상태 max값 저장
# j = 0 먹지 않기
# j = 1 1/2 먹기
# j = 2 먹기