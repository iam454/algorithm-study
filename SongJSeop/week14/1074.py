def find(N, r, c):
    if N == 0:
        return 0

    halfLineCount = 2 ** (N - 1)
    quaterCount = halfLineCount ** 2
    if r >= halfLineCount and c >= halfLineCount:
        return find(N - 1, r - halfLineCount, c - halfLineCount) + (quaterCount * 3)
    elif r >= halfLineCount > c:
        return find(N - 1, r - halfLineCount, c) + (quaterCount * 2)
    elif r < halfLineCount <= c:
        return find(N - 1, r, c - halfLineCount) + quaterCount
    else:
        return find(N - 1, r, c)

n, R, C = map(int, input().split())
print(find(n, R, C))