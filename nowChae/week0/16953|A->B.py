import sys
input = sys.stdin.readline

A, B = map(int,input().split())

result = []
def recursive(num, idx):

    if num == B:
        result.append(idx+1)
        return
    elif num > B:
        return -1
    recursive(num*10 + 1, idx+1)
    recursive(num*2, idx+1)

recursive(A,0)

if result: 
    print(min(result))
else:
    print(-1)
