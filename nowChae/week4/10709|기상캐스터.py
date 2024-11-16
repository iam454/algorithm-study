import sys
input = sys.stdin.readline

H, W = map(int,input().split())

for _ in range(H):
    cloud = input().strip()
    isExist = False
    time = -1
    for c in cloud:
        if c == "c":
            isExist = True
            time = 0
        elif isExist and c == '.':
            time += 1
        print(str(time), end=' ')
    print()
