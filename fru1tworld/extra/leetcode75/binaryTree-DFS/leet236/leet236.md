## 문제

[236](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/?envType=study-plan-v2&envId=leetcode-75)

## 해결 방법

- LCA를 재귀적 탐색으로 해결해보았습니다.
- 현재 root가 p,q 값이라면 현재 root를 반환합니다.
- 왼쪽과 오른쪽 노드가 null 이 아니라면 root를 반환합니다.
- 이 알고리즘이 성립하는 이유는 다음과 같습니다.
- tree는 subtree들로 구성되어있습니다.
- subtree가 null이라는 값은 해당 subtree 전체에 p 혹은 q가 없음을 의미합니다.
- left, right 자식 노드 즉 양 쪽 subtree가 nullptr이 아니라면 p와 q가 모두 있음을 의미합니다.
