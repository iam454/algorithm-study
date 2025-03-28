import sys
input = sys.stdin.readline

N, K, A, B = map(int,input().split(' '))
plants = [K] * N

answer = 1
while True:
    min_idx = plants.index(min(plants))
    if min_idx + A < N:
        for i in range(min_idx, min_idx + A , 1):
            plants[i] += B
    else:
        for i in range(min_idx, N, 1):
            plants[i] += B
        for i in range(min_idx-1, 2*N - A - min_idx, -1):
            plants[i] += B
    for i in range(N):
        plants[i] -= 1

    if 0 in plants:
        break
    else:
        answer += 1

print(answer)
