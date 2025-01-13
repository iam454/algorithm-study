## 문제

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

### 문제 링크

https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/?envType=study-plan-v2&envId=top-interview-150

---

## 해결 방법

재귀를 통해 문제를 풀었습니다.

처음에 입력하는 숫자의 길이와 변환한 문자열의 길이가 같은 경우에 결과 리스트에 push하도록 해주었습니다. 숫자별로 어떤 문자를 추가해야할 지 case를 나누고, 같은 함수를 호출하도록 해주었습니다.
