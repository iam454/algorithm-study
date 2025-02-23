import sys
input = sys.stdin.readline

N = int(input())
word = []
for _ in range(N):
    word.append(input().rstrip())

word.sort(key=len)

result = N
for i in range(N):
    for j in range(i+1, N, 1):
        if word[j].startswith(word[i]):
            result -= 1
            break

print(result)
