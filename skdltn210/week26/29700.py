[n, m, k] = list(map(int, input().split()))
cnt = 0
for i in range(n):
    seat = input()
    seq = 0
    for j in range(len(seat)):
        if seat[j] == "1":
            seq = 0
        else:
            seq += 1
            if seq >= k:
                cnt += 1

print(cnt)
