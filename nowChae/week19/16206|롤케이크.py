import sys
input = sys.stdin.readline

N, M = map(int,input().split(' '))
cakes = list(map(int,input().split(' ')))
sorted_cakes = sorted(cakes, key=lambda x: (x%10, x))

result = 0

def slice_cake(cake):
    slice_cnt = 0
    cake_cnt = cake // 10

    if cake % 10 == 0:
        slice_cnt = cake_cnt - 1
    else:
        slice_cnt = cake_cnt

    return (slice_cnt, cake_cnt)

for cake in sorted_cakes:
    if cake == 10:
        result += 1
    elif cake > 10:
        slice_cnt, cake_cnt = slice_cake(cake)
        
        if M >= slice_cnt:
            result += cake_cnt
            M -= slice_cnt
        else:
            result += M
            M = 0

print(result)
    