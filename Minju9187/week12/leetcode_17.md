# 문제

17 | Letter Combinations of a Phone Number
https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/?envType=study-plan-v2&envId=top-interview-150

## 문제 풀이

DFS or 뺵트래킹

digits 각 단어들을 모두 돌며 단어들을 생성해야 함
for문 중첩도 잠깐 생각해봤지만 digits의 길이도 정해져 있지 않아 별로임을 판단
전부 다 확인을 하는 DFS를 떠올리고 재귀함수로 구현
단어들을 추가하다가 length와 index가 같아지면 추가하는 방식으로 구현
