## 문제

Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

### 문제 링크

https://leetcode.com/problems/counting-bits/

---

## 해결 방법

n+1만큼 반복을 하면서 각 숫자별로 2로 나누었을 때, 나머지의 값을 판단해 결과를 리턴하는 함수를 생성했습니다.
