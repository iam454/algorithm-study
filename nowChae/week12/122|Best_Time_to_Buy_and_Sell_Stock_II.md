## 문제

You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

### 문제 링크

https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/?envType=study-plan-v2&envId=top-interview-150

---

## 해결 방법

스택을 사용해 문제를 풀었습니다. 저번주에 풀었던 문제와 비슷한 맥락으로 풀 수 있을 것 같다고 생각했습니다.

스택의 가장 위에 있는 값과 현재 값을 비교하는 방식을 사용했습니다.

- stack이 비어있는 경우
  - push
- 비어있지 않은 경우 가장 위 값과 비교
  - 작은 수
    - len(stack) > 1 인 경우 pop 2번 + 계산, push
    - len(stack) == 1 인 경우 pop, push
  - 큰 수
    - len(stack) > 1 인 경우 push
    - len(stack) == 1 인 경우 pop 후 push
