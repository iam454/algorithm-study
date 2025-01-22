T = int(input())

for i in range(T):
    x, y = map(int, input().split())
    distance = y - x  # 거리

    increaseCount = 1  # 이동 거리의 증가 횟수 (감소 횟수는 increaseCount - 1)
    while True:
        tmpSum = (increaseCount * (increaseCount + 1)) / 2  # 증가 횟수로 등차가 1인 등차수열 합
        tmpSum += ((increaseCount - 1) * increaseCount) / 2  # 감소 횟수로 등차가 1인 등차수열 합
        restDistance = distance - tmpSum  # 거리에서 위의 합을 빼주고 남은 거리

        if restDistance > increaseCount:  # 그 거리가 최대 증가한 거리보다 크면
            if restDistance < increaseCount * 2 + 1:  # 만약 증가 횟수를 늘린다고 해도 해결하지 못한다면
                print(increaseCount + (increaseCount - 1) + 2)  # 2회를 유지하면 무조건 해결 가능함
                break
            increaseCount += 1 # 아니라면 증가 횟수 늘리기
            continue

        if restDistance == 0:
            print(increaseCount + (increaseCount - 1))  # 증가와 감소만 이뤄지고 끝난 상황
            break

        if restDistance <= increaseCount:
            print(increaseCount + (increaseCount - 1) + 1)  # 증가와 감소 및 유지 1회가 이뤄지고 끝난 상황
            break
