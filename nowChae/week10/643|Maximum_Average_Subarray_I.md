## 문제

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

### 문제 링크

https://leetcode.com/problems/maximum-average-subarray-i/?envType=study-plan-v2&envId=leetcode-75

---

## 해결 방법

처음에 문제를 풀었을 때는 리스트의 범위를 계속 잘라서 합을 구하다보니 시간 초과가 발생했다. 그래서 시간을 줄이기 위해서 최대 배열 합을 구하는 알고리즘을 변경해주었다.

배열 합의 초기 값을 구한 이후에 범위를 리스트 오른쪽으로 하나씩 이동시켜야 하기 때문에 가장 왼쪽 값을 빼주고 새로 범위에 포함되는 값은 더해주는 식으로 합을 구해주었다. 그리고 배열의 합이 기존 max_sum 보다 커지면 max_sum의 값을 갱신해주는 식으로 변경해주었다.

< 시간 초과 코드 >

```python
class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        start = 0
        end = k
        num_sum = sum(nums[start: end])

        while end < len(nums):
            start += 1
            end += 1

            new_sum = sum(nums[start: end])
            if new_sum > num_sum:
                num_sum = new_sum

        result = num_sum / k
        return result
```
