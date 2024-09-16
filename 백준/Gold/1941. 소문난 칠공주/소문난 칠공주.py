import sys
input=sys.stdin.readline
from collections import deque

# 인접한지 확인하는 용도 (가로, 세로 연결되어있는지)
def isPossible(princessPos):
    l = [i for i in princessPos]
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]

    q = deque([l[0]])
    l.remove(l[0])

    while q:
        x, y = q.popleft()
        for d in range(4):
            nx = x + dx[d]
            ny = y + dy[d]

            if (nx, ny) in l:
                q.append((nx, ny))
                l.remove((nx, ny))

    # 리스트 비어있으면 모두 인접해있어서 제거된 것이므로 True
    if len(l) == 0:
        return True
    return False
                    

# 7공주 조합 만드는 용도
def dfs(start):
    global count

    if len(princessPos) == 7:
        if princessName.count('S') >= 4 and isPossible(princessPos):
            count += 1
        return

    for i in range(start, 5*5):
        x, y = idx[i]
        princessPos.append((x, y))
        princessName.append(girls[x][y])
        dfs(i + 1)
        princessPos.pop()
        princessName.pop()


girls = [list(input()) for _ in range(5)]
idx = [(i, j) for i in range(5) for j in range(5)]
princessPos = []
princessName = []
count = 0

dfs(0)
print(count)