## 문제

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

### 문제 링크

https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75

---

## 해결 방법

word1과 word2의 길이 중 더 긴 단어만큼 단어 잇기를 반복하면 된다. idx 값을 하나씩 늘려주면서 단어를 연결하고 word1, word2에 모든 단어에 대해서 연결할 단어가 끝나면 반복을 종료한다.
