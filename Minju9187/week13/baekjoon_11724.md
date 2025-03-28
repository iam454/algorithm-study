# 문제

11724 | 연결 요소의 개수
https://www.acmicpc.net/problem/11724

## 문제 풀이

DFS or BFS
DFS로 구현
각 점들에 직접적으로 연결되어 있는 점들을 저장
visited배열을 두고 한 점에 대해 DFS로 확인을 하며 탐색 ( 지난 점들은 visited true )
visited가 false라는 것은 연결 요소가 독립적으로 있다는 뜻이므로 answer를 추가해줌
위의 방식으로 구현
