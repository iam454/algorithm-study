# 문제

12842 | 튀김 소보로
https://www.acmicpc.net/problem/12842

## 문제 풀이

이분 탐색

우선 없어진 소보로의 개수가 없어지기까지 몇초가 걸렸는지를 알아야 한다.
second를 기준으로 이분탐색을 함
second를 찾으면 second - 1초까지 사라진 소보로의 개수를 구해 뺀 뒤 나머지 개수들을 하나씩 없애면서 마지막 집은 사람을 찾으면 됨
