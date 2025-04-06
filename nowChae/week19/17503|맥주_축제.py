import sys
input = sys.stdin.readline

N, M, K = map(int, input().split(' '))
beer = []
for _ in range(K):
    beer.append(tuple(map(int,input().split(' '))))

beer = sorted(beer, key=lambda x:(x[0], -x[-1]), reverse=True)

start = 1
end = 2**31

while start < end:
    middle = (start + end) // 2

    beer_cnt = 0
    total = 0

    for b in beer:
        if b[1] <= middle:
            beer_cnt += 1
            total += b[0]
        if beer_cnt == N:
            break

    if total >= M and beer_cnt == N:
        end = middle
    else:
        start = middle + 1

if end == 2**31:
    print(-1)
else:
    print(end)