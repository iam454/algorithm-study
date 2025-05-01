## 문제

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and using only constant extra space.

### 문제 링크

https://leetcode.com/problems/find-the-duplicate-number/description/

---

## 해결 방법

입력받은 array nums를 수정하지 않고 반복되는 숫자 하나를 찾기 위해서 임시로 집합 하나를 사용했습니다.
nums 속 값 들을 하나씩 반복하면서 만약 arr set에 존재하지 않으면 set에 추가해주고, 만약 존재하는 값이 한 번 더 나오면 바로 그 숫자를 리턴하도록 해주었습니다.
