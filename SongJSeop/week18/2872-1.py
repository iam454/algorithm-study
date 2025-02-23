import sys

N = int(sys.stdin.readline())
books = [int(sys.stdin.readline()) for _ in range(N)]

result = 0
while True:
    maxIndex = books.index(max(books))
    result += (len(books) - maxIndex - 1)
    if maxIndex == 0:
        break

    books = sorted(books[maxIndex+1:]) + books[:maxIndex]

print(result)