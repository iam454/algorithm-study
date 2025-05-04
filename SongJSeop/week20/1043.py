import sys

peopleCount, partyCount = map(int, sys.stdin.readline().split())
knowTruth = list(map(int, sys.stdin.readline().split()))

if len(knowTruth) == 1:  # 진실을 아는 사람이 없는 경우
    knowTruth = set()
else:
    knowTruth = set(knowTruth[1:])  # 첫 번째 숫자는 인원수이므로 제외

parties = []
for _ in range(partyCount):
    party = list(map(int, sys.stdin.readline().split()))
    parties.append(set(party[1:]))  # 첫 번째 숫자는 인원수이므로 제외

# 진실을 아는 사람들 집합이 더 이상 변하지 않을 때까지 반복
changed = True
while changed:
    changed = False
    for party in parties:
        # 파티에 진실을 아는 사람이 한 명이라도 있다면
        if party & knowTruth:  # 교집합이 존재하는지 확인
            # 파티의 모든 사람을 진실을 아는 집합에 추가
            beforeSize = len(knowTruth)
            knowTruth.update(party)
            if len(knowTruth) > beforeSize:
                changed = True  # 집합이 변경되었으면 다시 반복

# 거짓말을 할 수 있는 파티 수 계산
result = 0
for party in parties:
    if not party & knowTruth:  # 파티에 진실을 아는 사람이 없다면
        result += 1

print(result)