## 문제

You have a list arr of all integers in the range [1, n] sorted in a strictly increasing order. Apply the following algorithm on arr:

Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.
Keep repeating the steps again, alternating left to right and right to left, until a single number remains.
Given the integer n, return the last number that remains in arr.

### 문제 링크

https://leetcode.com/problems/elimination-game/description/

---

## 해결 방법

< 시간 초과 코드 >

```python
class Solution:
    def lastRemaining(self, n: int) -> int:
        arr = [i+1 for i in range(n)]

        cnt = 0
        while len(arr) > 1:
            if cnt % 2 == 0:
                # 앞에서 부터
                 arr = list(map(lambda x: x[1], filter(lambda x: x[0] % 2 == 1, enumerate(arr))))
            else:
                # 뒤에서 부터
                arr = list(map(lambda x: x[1], filter(lambda x: x[0] % 2 == 1, enumerate(arr[::-1]))))
            cnt += 1
            arr.sort()

        return arr[0]

```

리스트를 계속 변형하는 형식으로 구현하니 시간 초과가 발생했습니다.
리스트를 변형하지 않고, index의 규칙을 찾아서 마지막으로 하나 남는 값을 찾을 수 있도록 변경해주었습니다.
