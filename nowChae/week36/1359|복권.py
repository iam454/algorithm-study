import sys
input = sys.stdin.readline

N, M, K = map(int, input().split(' '))

# 조합 계산 함수
def combination(n, r):
    if n < r:
        return 0
    if n == r or r == 0:
        return 1
    r = min(r, n - r)
    
    numerator = 1  # 분자
    denominator = 1 # 분모
    for i in range(r):
        numerator *= (n-i)
        denominator *= (i+1)
    return numerator // denominator

rst_numerator = 0
for i in range(K, M+1):
    rst_numerator += combination(N - M, M - i) * combination(M, i)
rst_denomiator = combination(N, M)
result = rst_numerator / rst_denomiator
print(result)