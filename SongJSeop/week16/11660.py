import sys

N, M = map(int, sys.stdin.readline().strip().split())

numbers = [list(map(int, sys.stdin.readline().strip().split())) for _ in range(N)]
prefix = [[0] * (N + 1) for _ in range(N + 1)]

for i in range(1, N + 1):
    for j in range(1, N + 1):
        prefix[i][j] = numbers[i - 1][j - 1] + prefix[i - 1][j] + prefix[i][j - 1] - prefix[i - 1][j - 1]

for _ in range(M):
    x1, y1, x2, y2 = map(int, sys.stdin.readline().strip().split())

    result = (prefix[x2][y2]
              - prefix[x1 - 1][y2]
              - prefix[x2][y1 - 1]
              + prefix[x1 - 1][y1 - 1])

    print(result)
