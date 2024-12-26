# 문제

2075 | N번째 큰 수
https://www.acmicpc.net/problem/2075

## 문제 풀이

min-heap 구현 문제
힙만 구현한다면 쉽게 풀 수 있지만 힙을 구현하는데 아직 익숙치 않음
heapifyUp함수와 heapifyDown함수를 구현하기가 조금 어렵..

문제 풀이를 간략하게 설명하면 첫째 줄에 있는 n을 받아 queue의 크기가 n을 유지할 수 있도록 넣고 빼고를 반복해서 모든 값들을 돌아 최대값 n개의 값들만 queue에 보관하도록 구현
이후 제일 뒤에 있는 숫자를 빼내 반환한다.

## 참고 자료

Min-Heap 관련 자료
https://hyongti.tistory.com/67
