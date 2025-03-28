N = int(input())  # 빌딩 수
heights = list(map(int, input().split()))  # 빌딩 높이들

def countVisibleBuildings(inclinations):  # 기울기 배열을 보고 보이는 빌딩 수를 계산하는 함수
    if len(inclinations) == 0:
        return 0

    count = 1
    tmp = inclinations[0]
    for inclination in inclinations[1:]:
        if inclination > tmp:
            count += 1
            tmp = inclination

    return count

result = []
for i in range(N):
    leftInclinations = []  # 좌측 건물들 기울기 배열
    rightInclinations = []  # 우측 건물들 기울기 배열

    for left in range(i - 1, -1, -1):
        leftInclinations.append((heights[left] - heights[i]) / (i - left))  # 좌측 건물들 기울기 추가

    for right in range(i + 1, N):
        rightInclinations.append((heights[right] - heights[i]) / (right - i))  # 우측 건물들 기울기 추가

    visibleCount = countVisibleBuildings(leftInclinations) + countVisibleBuildings(rightInclinations)
    result.append(visibleCount)

print(max(result))  # 최대 카운트 수 출력