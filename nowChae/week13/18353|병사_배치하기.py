import sys
input = sys.stdin.readline

N = int(input())
soldier = list(map(int,input().split(' ')))

lis = []
for s in soldier:
    if len(lis) == 0:
        lis.append(s)
    else:
        if lis[-1] > s:
            lis.append(s)
        elif lis[-1] < s:
            # 이분 탐색해서 자기 자리에 넣기 
            left = 0
            right = len(lis) - 1

            while left < right:
                mid = (left + right) // 2
                if lis[mid] == s:
                    right = mid
                    break
                elif lis[mid] > s:
                    left = mid + 1
                else:
                    right = mid
            if lis[right - 1] != s:
                lis[right] = s

print(N - len(lis))
    
