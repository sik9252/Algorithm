import sys
input=sys.stdin.readline
from collections import deque

N, M = map(int, input().split())
board = [list(input().rstrip()) for _ in range(N)]
visited = []

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

# R, B 초기 위치 찾기
def getRBPos():
    rx, ry, bx, by = 0, 0, 0, 0
    for x in range(N):
        for y in range(M):
            if board[x][y] == 'R':
                rx, ry = x, y
            if board[x][y] == 'B':
                bx, by = x, y

    return rx, ry, bx, by

# R, B 이동시키기
def move(x, y, dx, dy):
    # 나중에 겹쳤을때 더 많이 이동한 구슬 판단 위한 변수
    count = 0

    # 다음에 갈 곳이 벽이 아니고, 현재 좌표가 구멍이 아니면 계속 반복
    while board[x+dx][y+dy] != '#' and board[x][y] != 'O':
        x += dx
        y += dy
        count += 1

    return x, y, count

# 탐색
def bfs():
    rx, ry, bx, by = getRBPos()

    q = deque()
    q.append((rx, ry, bx, by, 1))
    visited.append((rx, ry, bx, by))

    while q:
        rx, ry, bx, by, total_count = q.popleft()

        # 10회 넘어가면 -1
        if total_count > 10:
            break

        for i in range(4):
            n_rx, n_ry, r_count = move(rx, ry, dx[i], dy[i])
            n_bx, n_by, b_count = move(bx, by, dx[i], dy[i])

            # B가 구멍에 들어가면 안되니까 이 경우는 PASS
            # R, B가 일렬로 있을때 B가 구멍에 들어가면 실패이므로 B를 항상 먼저 확인
            if board[n_bx][n_by] == 'O':
                continue

            # R이 구멍에 들어가면 성공
            if board[n_rx][n_ry] == 'O':
                return total_count

            # 둘이 겹쳐있을 경우, 더 많이 이동한 구슬을 1칸 뒤로 보냄
            if n_rx == n_bx and n_ry == n_by:
                if r_count > b_count:
                    n_rx -= dx[i]
                    n_ry -= dy[i]
                else:
                    n_bx -= dx[i]
                    n_by -= dy[i]

            if (n_rx, n_ry, n_bx, n_by) not in visited:
                visited.append((n_rx, n_ry, n_bx, n_by))
                q.append((n_rx, n_ry, n_bx, n_by, total_count+1))

    return -1

result = bfs()
print(result)