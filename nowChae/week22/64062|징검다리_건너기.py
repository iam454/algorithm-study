def solution(stones, k):
    left = 0
    right = max(stones)
    
    while left <= right:
        middle = (left + right) // 2
    
        
        cnt = 0
        for t in stones:
            if t >= middle:
                cnt = 0
            else:
                cnt += 1
            
            if cnt >= k:
                break
        
        if cnt >= k:
            right = middle - 1
        else:
            left = middle + 1
        
    
    return right