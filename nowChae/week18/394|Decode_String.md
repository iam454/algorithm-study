## 문제

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

### 문제 링크

https://leetcode.com/problems/decode-string/description/?envType=study-plan-v2&envId=leetcode-75

---

## 해결 방법

> 다시 풀어보기
> 너무 어려워요 ,, ㅠㅠ

스택으로 풀어야겠다고 감만 오고 어떻게 사용해야할 지 모르겠었네여 ..

'[' 를 만나면 지금까지 만든 문자열과 곱해야하는 수를 같이 stack에 저장하고,
']' 를 만나게 되면 stack에서 값을 꺼내 그떄의 숫자와 현재의 문자열을 곱한 후 지금까지 만든 문자열에 더해줍니다.

위의 문자열 수만큼 반복하여 구해줍니다.

너무 어려워서 풀이 보고 푼거라서 아직도 알쏭달쏭하네요
다음번 복습 시간에 다시 풀어보겠습니다.
