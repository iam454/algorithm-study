# 문제

8911 | 거북이
https://www.acmicpc.net/problem/8911

## 문제 풀이

구현 문제

dir를 idx 순서대로 윗 방향, 왼쪽 방향, 아래 방향, 오른쪽 방향 이렇게 둠 -> 그러면 L은 idx + 1, R는 idx - 1해서 dir을 옮길 수 있음

구현 방식은 그냥 F,B,L,R에 맞게 위치를 옮기고 maxX, minX, maxY, minY를 구해 직사각형 크기를 구하면 됨
