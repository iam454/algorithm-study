## 문제

[328](https://leetcode.com/problems/odd-even-linked-list/?envType=study-plan-v2&envId=leetcode-75)

## 해결 방법

- evenList, oddList를 생성하고 반복문을 수행합니다.
- 반복문을 수행하기 전 cnt 변수를 생성하여 cnt가 홀수, 짝수 여부에 따라 로직을 수행하면 됩니다.
- 홀수 및 짝수 연결리스트를 분리하고 마지막에 서로를 연결만 시켜주면 짝수와 홀수를 분리할 수 있습니다.
