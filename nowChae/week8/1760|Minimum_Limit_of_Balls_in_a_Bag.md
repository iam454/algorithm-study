## 문제

You are given an integer array nums where the ith bag contains nums[i] balls. You are also given an integer maxOperations.

You can perform the following operation at most maxOperations times:

Take any bag of balls and divide it into two new bags with a positive number of balls.
For example, a bag of 5 balls can become two new bags of 1 and 4 balls, or two new bags of 2 and 3 balls.
Your penalty is the maximum number of balls in a bag. You want to minimize your penalty after the operations.

Return the minimum possible penalty after performing the operations.

### 문제 링크

https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/description/?envType=daily-question&envId=2024-12-08

---

## 해결 방법

이진 탐색을 활용해서 이 문제를 풀 수 있었다. 한 가방에 넣을 수 있는 최고 공의 개수에 대해서 operation 값을 계산해가며 만약 주어진 것 보다 많은 연산이 필요할 경우 공의 개수를 늘려주고
주어진 값보다 적거나 같은 연산이 필요할 경우 공의 개수를 줄여주는 방식으로 구현했다.

어떤 상황에서 이진 탐색을 사용해야하는 지 아직 잘 모르겟어서 ㅜ 이 부분 학습이 필요할 것 같다.

처음에는 단순히 총 합을 구해서 나눠야하는 것 만큼 나눈 후 그 값을 출력하면 되지 않을까 생각해서 풀어보았는데, 테스트 코드만 우연히 맞았을 뿐 올바른 풀이가 아니었다. 만약 2개씩 나누는 것이 제일 좋은 것이지만 2보다 적게 들어있는 경우가 있을 수도 있다는 것을 간과한 풀이였다.

틀린 풀이

```python
class Solution:
    def minimumSize(self, nums: List[int], maxOperations: int) -> int:
        divide_count = len(nums) + maxOperations
        nums_sum = sum(nums)
        result = nums_sum // divide_count

        return result

```
