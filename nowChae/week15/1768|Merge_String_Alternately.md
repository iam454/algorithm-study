## 문제

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

### 문제 링크

https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75

---

## 해결 방법

두 단어 중 더 긴 길이를 기준으로 반복하도록 했습니다.
만약 추가할 단어의 인덱스가 원본 단어의 길이보다 큰 수라면 추가로 더해주지 않고 넘어가고, 작은 수라면 결과에 해당 알파벳을 추가해준다.

++ 복습은 아니고 리트코드 75개 문제 순서대로 풀고 있습니다 ^,^
