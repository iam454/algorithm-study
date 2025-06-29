import sys
input = sys.stdin.readline

N, K = map(int, input().split())
A = list(map(int, input().split()))

def heapify(A, i, N, cnt, K):
    left = 2 * i + 1
    right = 2 * i + 2
    smallest = i
    rst = None

    if left <= N and A[left] < A[smallest]:
        smallest = left
    if right <= N and A[right] < A[smallest]:
        smallest = right

    if smallest != i:
        A[i], A[smallest] = A[smallest], A[i]
        cnt += 1
        if cnt == K:
            rst = [A[i], A[smallest]]
            return cnt, rst
        cnt, rst = heapify(A, smallest, N, cnt, K)
    return cnt, rst

def heap_sort(A, N, K):
    cnt = 0
    rst = None

    for i in range(N // 2, -1, -1):
        cnt, rst = heapify(A, i, N, cnt, K)
        if rst:
            print(*rst)
            return

    for i in range(N, 0, -1):
        A[0], A[i] = A[i], A[0]
        cnt += 1
        if cnt == K:
            print(A[i], A[0])
            return
        cnt, rst = heapify(A, 0, i - 1, cnt, K)
        if rst:
            print(*rst)
            return

    print(-1)

heap_sort(A, N - 1, K)