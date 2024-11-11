import sys
input = sys.stdin.readline

T = int(input())

able =  {1:[1], 2:[1,2], 3:[1],4:[1,2],6:[1,2,3],8:[1,2],9:[1,3],12:[1,2,3,4],16:[1,2,4]}

def test(x, r, c):
    if x in able[r*c]:
        return "GABRIEL"
    return "RICHARD"

for i in range(T):
    X, R, C = map(int,input().split())
    print(f"Case #{i + 1}: {test(X, R, C)}")