## 문제

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

### 문제 링크

https://leetcode.com/problems/top-k-frequent-elements/description/?envType=problem-list-v2&envId=sorting

---

## 해결 방법

각 숫자별 개수를 숫자: 개수 형식으로 딕셔너리에 저장해주었다.
그리고 개수를 기준으로 내림차순 정렬을 해준 후 k 번째까지의 숫자를 저장하도록 했다.
