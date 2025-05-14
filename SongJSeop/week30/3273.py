import sys

n = int(sys.stdin.readline())
numbers = list(map(int, sys.stdin.readline().split()))
x = int(sys.stdin.readline())

numbers.sort()
left = 0
right = n - 1
count = 0

while left < right:
    tmpSum = numbers[left] + numbers[right]
    if tmpSum <= x:
        left += 1

        if tmpSum == x:
            count += 1
            right -= 1
    else:
        right -= 1

print(count)