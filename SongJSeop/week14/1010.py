def combination(n, r):
    top = n
    under = 1
    for num in range(1, r):
        top *= (n - num)
        under *= (num + 1)
    return top // under

T = int(input())
for i in range(T):
    n, m = map(int, input().split())
    print(combination(m, n))