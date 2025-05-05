# 문제

338 | Counting Bits
https://leetcode.com/problems/counting-bits/description/

## 문제 풀이

DP

i = 5 (2진수 : 101), sub = 4(2진수 : 100)
5 - 4 = 1 (2진수 : 001)
dp[5] = dp[1] + 1
이런식으로 반복
