import sys
input = sys.stdin.readline

T = int(input())

def area(move):
    curX, minX, maxX = 0, 0, 0
    curY, minY, maxY = 0, 0, 0

    dir = ["N", "E", "S", "W", "N", "E", "S", "W"]
    dir_idx = 0

    for m in move:
        if m == "F" or m == "B":
            if (m == "F" and dir[dir_idx] == "N") or (m == "B" and dir[dir_idx] == "S"):
                curY += 1
                if curY > maxY:
                    maxY = curY
            elif (m == "F" and dir[dir_idx] == "E") or (m == "B" and dir[dir_idx] == "W"):
                curX += 1
                if curX > maxX:
                    maxX = curX
            elif (m == "F" and dir[dir_idx] == "S") or (m == "B" and dir[dir_idx] == "N"):
                curY -= 1
                if curY < minY:
                    minY = curY
            elif (m == "F" and dir[dir_idx] == "W") or (m == "B" and dir[dir_idx] == "E"):
                curX -= 1
                if curX < minX:
                    minX = curX

        elif m == "L":
            dir_idx -= 1
            dir_idx %= 8
        
        elif m == "R":
            dir_idx += 1
            dir_idx %= 8
    return (maxX - minX)*(maxY - minY)


for _ in range(T):
    print(area(input().strip()))