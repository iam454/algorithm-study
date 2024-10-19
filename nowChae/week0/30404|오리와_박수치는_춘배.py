import sys
input = sys.stdin.readline

N, K = map(int,input().split(" "))
startTimes = list(map(int,input().split(" ")))
endTimes = list(map(lambda x:x+K, startTimes))

last = endTimes[0]
count = 1

for i in range(len(startTimes)-1):
    if(startTimes[i+1] <= last and last <= endTimes[i+1]):
        continue
    else:
        last = endTimes[i+1]
        count += 1
print(count)