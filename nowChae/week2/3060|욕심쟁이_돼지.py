import sys
input = sys.stdin.readline

T = int(input())

for _ in range(T):
    food = int(input().strip())
    eat = sum(list(map(int,input().split(' '))))
    result = 1
    while True:
        if food < eat:
            print(result)
            break
        result += 1
        eat *= 4
    
