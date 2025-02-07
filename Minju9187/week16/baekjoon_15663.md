# 문제

15663 | N과 M (9)
https://www.acmicpc.net/problem/15663

## 문제 풀이

DFS
모든 요소를 탐색해야하기 때문에 DFS로 구현
preNumber를 둬 전 숫자와 동일하면 넘어가도록함
즉 [1,3,3,7]일때 preNumber가 3이고 index가 2일때는 중복되기 때문에 넘어가도록 함
