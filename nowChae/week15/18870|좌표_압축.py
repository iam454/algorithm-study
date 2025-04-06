import sys
input = sys.stdin.readline

N = int(input())
numbers = list(map(int, input().split()))

numbers_dict = dict()

idx = 0
for n in sorted(numbers):
    if n not in numbers_dict:
        numbers_dict[n] = idx
        idx += 1

for n in numbers:
    print(numbers_dict[n], end=' ')
