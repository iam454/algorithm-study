## 문제

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

### 문제 링크

https://leetcode.com/problems/trapping-rain-water/description/

---

## 해결 방법

높이가 내려갔다가 올라갈 때 그 사이의 범위를 구해주면 되는 문제였습니다.
내려가기 시작할 때의 높이를 저장해두고, 높이가 저장해둔 높이와 같거나 더 높아지면 그 사이동안 고인 물을 더해줍니다.

```python
        start = 0
        water = 0

        reverse_idx = len(height) - 1
        for i,h in enumerate(height):
            if start <= h:
                result += water
                water = 0
                start = h
                reverse_idx = i
            else:
                water += (start - h)
```

추가로 고려해주어야하는 부분이 있는데, 만약 내려갔다가 올라간 경우이지만 저장해둔 높이보다는 낮은 경우입니다. 이 경우에는 배열 상태를 뒤집어서 위와 같이 계산해주었습니다.
ex) [3, 2, 1, 2, 1] => [1, 2, 1, 2, 3]

```python
        start = 0
        water = 0
        for i in range(len(height)-1, reverse_idx - 1, -1):
            h = height[i]
            if start <= h:
                result += water
                water = 0
                start = h
            else:
                water += (start - h)
```

위와 같이 구현하다보니 반복하는 범위만 다르고 판단하는 부분 코드가 같아서 함수로 빼서 리팩토링 할 수 있을 것 같습니다.

```python
class Solution:
    def trap(self, height: List[int]) -> int:
        result = 0

        def accumulate(start, water, s_idx, e_idx, state, result):
            for i in range(s_idx, e_idx, state):
                h = height[i]
                if start <= h:
                    result += water
                    water = 0
                    start = h
                    reverse_idx = i
                else:
                    water += (start - h)
            return (reverse_idx, result)

        (reverse_idx, result) = accumulate(0, 0, 0, len(height), 1, 0)

        (_, result) = accumulate(0, 0, len(height)-1, reverse_idx -1, -1, result)


        return result

```
