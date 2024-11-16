import sys
input = sys.stdin.readline

H, W = map(int,input().split())

for _ in range(H):
    cloud = input()
    isExist = False
    time = 0
    for c in cloud:
        if not isExist and c == '.':
            print('-1', end=" ")
        elif c == 'c':
            isExist = True
            print('0', end=" ")
            time = 0
        elif isExist and c == '.':
            time += 1
            print(str(time), end=' ')
    print()
