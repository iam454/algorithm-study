import sys
input = sys.stdin.readline

n = int(input().strip())
planet = list(map(int,input().split(' ')))

for i in range(len(planet)-1, 0, -1):
    if planet[i-1] < planet[i]:
        mul = planet[i] // planet[i-1]
        if planet[i] % planet[i-1] == 0:
            planet[i-1] = planet[i-1] * (mul)
        else:
            planet[i-1] = planet[i-1] * (mul+1)
print(planet[0])
    
