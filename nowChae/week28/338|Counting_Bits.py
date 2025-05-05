class Solution:
    def countBits(self, n: int) -> List[int]:
        result = [0]*(n+1)

        def count(num):
            rst = 0
            while num > 1:
                if num % 2:
                    rst += 1
                
                num //= 2
            
            if num == 1:
                rst += 1
            
            return rst

        for i in range(n+1):
            result[i] = count(i)
    
        return result

        