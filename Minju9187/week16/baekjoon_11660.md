# 문제

11660 | 구간 합 구하기 5
https://www.acmicpc.net/problem/11660

## 문제 풀이

DP
1 1부터 x y 지점까지의 총 합들을 DP에 저장
n(A∪B) = n(A) + n(B) - n(A∩B)를 이용
반대로 (x1,y1)에서 (x2,y2)까지의 합은 아래와 같음
n(x2,y2) - n(x2,y1) - n(x1,y2) + n(x1,y1)
저장해 놓은 값들을 꺼내 계산하고 출력
