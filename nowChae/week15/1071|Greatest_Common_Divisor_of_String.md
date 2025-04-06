## 문제

For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

### 문제 링크

https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75

---

## 해결 방법

가장 긴 공통 문자를 찾는 문제였습니다.
길이가 더 작은 단어를 기준으로 했습니다. 기준 단어로 str1, str2가 모두 나누어지면 해당 값을 return하고, 나누어떨어지지 않으면 기준 단어의 마지막 문자를 없애고 다시 반복합니다.
