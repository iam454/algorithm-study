import sys
import math

X, Y = map(int, sys.stdin.readline().split())

diff = Y - X
if diff == 0:
    print(0)
    sys.exit()

increaseCount = 1  # 키 증가 횟수 (감소 횟수는 increaseCount - 1)
while True:
    tmpSum = (increaseCount * (increaseCount + 1)) / 2  # 증가 횟수로 등차가 1인 등차수열 합
    tmpSum += ((increaseCount - 1) * increaseCount) / 2  # 감소 횟수로 등차가 1인 등차수열 합
    restDistance = diff - tmpSum  # 키차이에서 위의 두 합을 빼주고 남은 차이

    if restDistance > increaseCount:  # 남은 차이가 키를 늘린 횟수보다 크면
        if restDistance < increaseCount * 2 + 1:  # 만약 키 증가 횟수를 늘린 경우에는 남은 차이를 초과한다면
            print(increaseCount + (increaseCount - 1) + 2)  # 어느 키에서든 2회를 유지하면 무조건 해결 가능함
            break
        increaseCount += 1  # 아니라면 증가 횟수 늘리기
        continue

    if restDistance == 0:
        print(increaseCount + (increaseCount - 1))  # 증가와 감소만 이뤄지고 끝난 상황
        break

    if restDistance <= increaseCount:
        print(increaseCount + (increaseCount - 1) + 1)  # 증가와 감소 및 유지 1회가 이뤄지고 끝난 상황
        break
