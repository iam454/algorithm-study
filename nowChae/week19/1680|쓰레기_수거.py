import sys
input = sys.stdin.readline

T = int(input())

for _ in range(T):
    W, N = map(int,input().split(' '))
    x, w = [], []
    for _ in range(N):
        x_i, w_i = map(int, input().split(' '))
        x.append(x_i)
        w.append(w_i)

    result = 0
    i = 0
    car = 0
    while i < N:
        if car + w[i] < W:
            car += w[i]
            i += 1
        elif car + w[i] == W:
            result += 2*x[i]
            car = 0
            i += 1
        elif car + w[i] > W:
            result += 2*x[i]
            car = 0
    
    if car > 0:
        result += 2*x[i-1]
    
    print(result)

        