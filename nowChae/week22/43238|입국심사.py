def solution(n, times):
    left = 0
    right = min(times)*n
    
    result = 0
    
    while left <= right:
        middle = (left + right) // 2
        
        people = 0
        
        for t in times:
            people += (middle//t)
        
        if people >= n:
            right = middle - 1
            result = middle
        else:
            left = middle + 1
        
    return result