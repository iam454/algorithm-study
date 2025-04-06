## 문제

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

### 문제 링크

https://leetcode.com/problems/move-zeroes/?envType=study-plan-v2&envId=leetcode-75

---

## 해결 방법

리스트 내에서 가장 처음 위치한 0과 0이 아닌 숫자의 값을 바꿔주는 것을 반복하면 풀 수 있었다.

for문으로 nums 리스트 속 숫자들을 하나씩 읽으면서 현재 위치하는 인덱스가 0의 인덱스보다 크다면 위치를 변경해준다.
