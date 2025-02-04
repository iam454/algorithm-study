import sys
input = sys.stdin.readline

N, M = map(int,input().split(' '))
table = []


for _ in range(N):
    table.append(list(map(int,input().split(' '))))

sum_table = [[0]*(N+1) for _ in range(N+1)]

for i in range(1, N+1):
    for j in range(1, N+1):
        sum_table[i][j] = sum_table[i-1][j] + sum_table[i][j-1] + table[i-1][j-1] - sum_table[i-1][j-1]

for _ in range(M):
    x1, y1, x2, y2 = map(int, input().split(' '))
    ans = sum_table[x2][y2] - sum_table[x1-1][y2] - sum_table[x2][y1-1] + sum_table[x1-1][y1-1]

    print(ans)