## 문제

[198](https://leetcode.com/problems/house-robber/?envType=study-plan-v2&envId=leetcode-75)

## 해결 방법

- 점화식 dp[i] = max(cost[i] + dp[i-2] | cost[i] + dp[i-3] | dp[i-1]) 에 대해서 정당성을 증명해보겠습니다.
- 사실 연속된 2개만 아니면 모든 경우의 수가 가능합니다.
- 따라서 이러한 경우의 수를 모두 만족하는 점화식을 고려해볼 수 있습니다.
- 1번 경우 현재 위치한 집을 털지 않음. 이때는 자명하게 dp[i-1]이 됩니다.
- 2번의 경우 현재 위치한 집을 터는 경우. 이때는 dp[i-2] 혹은 dp[i-3]을 고려해볼 수 있습니다.
- 왜냐면 dp[i-2]의 값보다 dp[i-3]의 값이 더 큰 경우가 있을 수 있고 예를 들어
- 2,1,1,2와 같은 경우가 그렇습니다.
