## 문제

[42](https://leetcode.com/problems/trapping-rain-water/solutions/127551/trapping-rain-water/)

## 해결 방법

- 왼쪽 혹은 오른쪽 최대값을 갱신하면서 값을 업데이트한다.
- `height[l] < height[r]` 이러한 로직을 통해 반대편이 더 크다는 것을 보장할 수 있다.
