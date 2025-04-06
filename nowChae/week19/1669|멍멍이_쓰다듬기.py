import sys
input = sys.stdin.readline

X, Y = map(int, input().split())

diff = Y - X

if diff == 0:
    print(0)
else:
    cum = 0
    start = 1
    cnt = 0

    while cum < diff:
        cum += start 
        cnt += 1

        if cnt == 2:
            start += 1
            cnt = 0

    if cnt == 1:
        print(2*(start - 1) + 1)

    else:
        print(2 * (start - 1))