# 문제

394 | Decode String
https://leetcode.com/problems/decode-string/description/?envType=study-plan-v2&envId=leetcode-75

## 관련문제

리트코드 394번 Decode String 문제

## 문제 풀이

stack 활용 문제

"["를 만나면 지금까지 지금까지 들고있는 데이터들 ( string, cnt )을 stack에 push해서 보관 후 str와 cnt를 초기화
"]"를 만날때까지 str와 cnt를 저장 후 만나면 그 전 string과 cnt를 빼서 새로운 string을 생성
