import sys
input = sys.stdin.readline

N, M = map(int,input().split(' '))

chapter = []

for _ in range(M):
    chapter.append(tuple(map(int,input().split(' '))))

dp = [0] * (N+1)

for day, page in chapter:
    for i in range(N, day - 1, -1):
        dp[i] = max(dp[i], dp[i - day] + page)

print(dp[N])
