# 문제

1760 | Minimum Limit of Balls in a Bag
https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/description/?envType=daily-question&envId=2024-12-08

## 문제 풀이

이진탐색 문제
8을 3으로 나눌때 총 3/3/2이렇게 나눠지고 나누는데 2번이 걸림 이때는 8을 3으로 나눠도 몫이 2이기 때문에 상관이 없는데 9를 3으로 나눌 때는 몫이 3인데 나누는데는 2번밖에 안걸림 그래서 (9 - 1)/3을 통해 cnt를 구할 수 있음
이런식으로 이진 탐색을 사용해 좀 더 잘 나눌 수 있는 방법을 찾아가도록 구현

## 참고 자료

어떻게 풀어야 할지 아예 감이 잡히지 않아 답을 보고 공부한 후 비슷하게 구현해 보았습니다.
https://velog.io/@ilov1112/Leetcode-1760.-Minimum-Limit-of-Balls-in-a-Bag
