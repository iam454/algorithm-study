from collections import deque

N, M, F = map(int,input().split(' '))
floor = [list(map(int, input().split(' '))) for _ in range(N)]
# 동:0, 서:1, 남 :2, 북:3, 위:4
walls = [[list(map(int, input().split(' '))) for _ in range(M)] for _ in range(5)]
odd_time = [ list(map(int, input().split(' '))) for _ in range(F)]

# 탈출구, 시간의 벽 끝 찾기
dst_i, dst_j, i_end, j_end = 0, 0, 0, 0
for i in range(N):
    for j in range(N):
        if floor[i][j] == 4:
            dst_i = i
            dst_j = j
        if floor[i][j] == 3:
            i_end = i
            j_end = j
i_start = i_end - M + 1 # 시간의 벽 행 시작
j_start = j_end - M + 1 # 시간의 벽 열 시작

# 타임머신 위치 찾기
machine_i, machine_j = 0, 0
for i in range(M):
    for j in range(M):
        if walls[4][i][j] == 2:
            machine_i = i
            machine_j = j

# 시간 이상 현상을 floor에 미리 적용하기
# 초기 위치, 방향, 배수를 하나씩 받아서 floor에 반영하는 함수 만들기

# d 방향으로 한 칸씩 이동
def d_move(r, c, d):
    if d == 0: # 동
        c += 1
    elif d == 1: # 서
        c -= 1
    elif d == 2: # 남
        r += 1
    else: # 북
        r -= 1
    return (r, c)

# 주어진 값이 올바른 범위인지 확인
def range_state(r, c, rng):
    # rng는 M이나 N 값 일 듯 0~rng-1 값이면 True
    if 0 <= r and r < rng and 0 <= c and c < rng:
        return True
    return False

# 시간 이상 현상을 바닥에 미리 반영
def odd_time_save(odd_list):
    start_r = odd_list[0]
    start_c = odd_list[1]
    direction = odd_list[2]
    floor[start_r][start_c] = 1

    cnt = 1
    while True:
        new_r, new_c = d_move(start_r, start_c, direction)

        # 올바른 범위이고 값이 0 일 때만 업데이트(배수만큼을 floor에 저장)
        if range_state(new_r, new_c, N) and floor[new_r][new_c] == 0:
            floor[new_r][new_c] = cnt * odd_list[3]
            cnt += 1
            start_r, start_c = new_r, new_c
        # 그 외의 경우 발생시 break(or return)
        else:
            return floor

for i in range(F):
    odd_time_save(odd_time[i])

# 이제 타임머신 움직이기 
# 범위 내의 방문하지 않은, 적힌 수보다 횟수가 작은 경우만 가능
# bfs 사용

# 이동한 결과대로 벽, r, c 올바르게 갱신
def renewal(wall, r, c):
    new_wall = wall
    new_r = r
    new_c = c

    # 동
    if wall == 0:
        if r < 0:
            new_r = M - 1 - c
            new_c = M - 1 
            new_wall = 4 
        if r >= M:
            new_r = i_end - c
            new_c = j_end + 1
            new_wall = 5
        if c < 0:
            new_r = r
            new_c = M - 1
            new_wall = 2
        if c >= M:
            new_r = r
            new_c = 0
            new_wall = 3

    # 서
    elif wall == 1:
        if r < 0:
            new_r = c
            new_c = 0
            new_wall = 4
        if r >= M:
            new_r = i_start + c
            new_c = j_start - 1
            new_wall = 5
        if c < 0:
            new_r = r
            new_c = M - 1
            new_wall = 3
        if c >= M:
            new_r = r
            new_c = 0
            new_wall = 2
    # 남
    elif wall == 2:
        if r < 0:
            new_r = M - 1
            new_c = c
            new_wall = 4
        if r >= M:
            new_r = i_end + 1
            new_c = j_start + c
            new_wall = 5
        if c < 0:
            new_r = r
            new_c = M - 1
            new_wall = 1
        if c >= M:
            new_r = r
            new_c = 0
            new_wall = 0 

    # 북 
    elif wall == 3:
        if r < 0:
            new_r = 0
            new_c = M - 1 - c
            new_wall = 4
        if r >= M:
            new_r = i_start - 1
            new_c = j_end - c
            new_wall = 5
        if c < 0:
            new_r = r
            new_c = M - 1
            new_wall = 0
        if c >= M:
            new_r = r
            new_c = 0 
            new_wall = 1

    # 위
    elif wall == 4:
        if r < 0:
            new_r = 0
            new_c = M - 1 - c
            new_wall = 3
        if r >= M:
            new_r = 0
            new_c = c
            new_wall = 2 
        if c < 0:
            new_r = 0
            new_c = r
            new_wall = 1
        if c >= M:
            new_r = 0
            new_c = M - 1 - r
            new_wall = 0

    return (new_wall, new_r, new_c)

# 방문 기록
visited = {(4, machine_i, machine_j)} # (벽, r, c) 순으로 넣기 

def bfs():
    result = -1
    queue = deque([[4, machine_i, machine_j, 0]])

    while queue:

        cur_w, cur_r, cur_c, turn = queue.popleft()

        for i in range(4):
            new_r, new_c = d_move(cur_r, cur_c, i)
            new_wall, new_r, new_c = renewal(cur_w, new_r, new_c)

            position = (new_wall, new_r, new_c)
            queue_data = [new_wall, new_r, new_c, turn + 1]

            # 바닥일 경우
            if new_wall == 5:
                # 탈출구를 찾은 경우 result 갱신 및 break
                if new_r == dst_i and new_c == dst_j:
                    result = turn + 1
                    return result

                # 방문도 안했고, 범위도 맞고, 값도 기록된 것보다 turn + 1이 작거나 0인 경우 queue에 넣기
                if (position not in visited) and (range_state(new_r, new_c, N)) and ( ((turn + 1) < floor[new_r][new_c]) or (floor[new_r][new_c] == 0) ):
                    visited.add(position)
                    queue.append(queue_data)

            # 벽일 경우
            else:
                # 방문도 안했고 그 위치의 값이 0인 경우 queue에 넣기
                if (position not in visited) and (range_state(new_r, new_c, M)) and ((walls[new_wall][new_r][new_c] == 0)):
                    visited.add(position)
                    queue.append(queue_data)

    return result

print(bfs())


