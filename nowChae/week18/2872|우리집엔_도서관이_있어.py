import sys
input = sys.stdin.readline


N = int(input())
books = []

for _ in range(N):
    books.append(int(input()))

max_idx = books.index(N)

cnt = 0
cur = N-1
for i in range(max_idx-1, -1, -1):
    if books[i] == cur:
        cur -= 1
    else:
        cnt += 1

print((N-1) - (max_idx) + cnt)
