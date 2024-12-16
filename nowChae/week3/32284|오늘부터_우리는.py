import sys
input = sys.stdin.readline

N, M = map(int,input().split())
a, b = map(int,input().split())

for i in range(N):
    for j in range(M):
        if i < a:
            print("S",end="")
        elif i > a:
            print("N",end="")
        else:
            if j > b:
                print("W",end="")
            else:
                print("E",end="")
    print("")
