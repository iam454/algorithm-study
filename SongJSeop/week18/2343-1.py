import sys

def process():
    tmpBNum = 0  # 임시 블루레이 개수
    tmp = 0  # 임시 강의 길이 합
    for i in range(N - 1):
        tmp += lectures[i]
        if tmp + lectures[i + 1] > B:
            tmpBNum += 1
            tmp = 0

    return tmpBNum + 1

N, M = map(int, sys.stdin.readline().split())
lectures = list(map(int, sys.stdin.readline().split()))

B = int(sum(lectures) / M)  # 블루레이 크기

b = process()

if b > M:
    while True:
        B += 1

        b = process()
        if b == M:
            break
else:
    while True:
        B -= 1

        b = process()
        if b > M:
            B += 1
            break

print(B)