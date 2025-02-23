import sys

N = int(sys.stdin.readline())
books = [int(sys.stdin.readline()) for _ in range(N)]

tmp = N
for i in range(N - 1, -1, -1):
    if books[i] == tmp:
        tmp -= 1

print(tmp)
