class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        stack = []
        result = 0

        for p in range(len(prices)):
            if len(stack) == 0:
                stack.append(prices[p])
            else:
                if stack[-1] > prices[p]:
                    if len(stack) == 1:
                        stack.pop()
                    else:
                        opr1 = stack.pop()
                        opr2 = stack.pop()
                        result += (opr1 - opr2)
                    stack.append(prices[p])
                else:
                    if len(stack) > 1:
                        stack.pop()
                    stack.append(prices[p])

        if len(stack) > 1:
            opr1 = stack.pop()
            opr2 = stack.pop()
            result += (opr1 - opr2)

        return result