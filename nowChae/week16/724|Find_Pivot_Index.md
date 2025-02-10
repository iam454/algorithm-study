## 문제

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

### 문제 링크

https://leetcode.com/problems/find-pivot-index/description/

---

## 해결 방법

nums 리스트 속 값을 하나씩 피봇으로 지정해주면서 피봇을 기준으로 양 쪽의 합을 구해 비교한다.

만약 두 합의 값이 같으면 그때의 피봇값을 리턴하고, 반복이 끝날 때까지 같은 걸 찾지 못하면 -1을 리턴한다.
