import sys
input = sys.stdin.readline

N = int(input())
stone = list(map(int,input().split(' ')))

dp = [0]+[float('inf')]*(N-1)

for i in range(N):
    for j in range(i+1, N):
        dp[j] = min(max(dp[i], (j-i)*(1+abs(stone[i]-stone[j]))),dp[j])

print(dp[N-1])