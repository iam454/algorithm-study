from itertools import permutations

N, M = map(int, input().split())
numbers = list(map(int, input().split()))

numbers.sort()

visited = set()
for perm in permutations(numbers, M):
    if perm not in visited:
        visited.add(perm)
        print(*perm)
