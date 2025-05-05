## 문제

[338](https://leetcode.com/problems/counting-bits/)

## 해결 방법

- x & (x - 1)은 뒤에서 켜진 비트를 하나 제거하는 트릭이다.
- 따라서 x의 켜진 비트 갯수는 (x & x - 1) 에서 1개를 더한 것과 동일하다.
