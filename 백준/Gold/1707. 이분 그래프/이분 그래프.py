import sys
input=sys.stdin.readline
from collections import deque

# 1, -1을 이용해 정점의 그룹을 나누어야함
def bfs(start, group):
    q = deque([start])
    visited[start] = group

    while q:
        node = q.popleft()
        for nxt in graph[node]:

            if visited[nxt] == 0:
                # 아직 방문하지 않은 곳이라면, 상위 정점과 다른 그룹으로 편성
                visited[nxt] = visited[node] * -1
                q.append(nxt)
            else:
                # 이미 방문한 곳 중에서 상위 정점과 같은 그룹이라면 이분 그래프 탈락
                if visited[nxt] == visited[node]:
                    return False
    return True


K = int(input())
for _ in range(K):
    V, E = map(int, input().split())
    graph = [[] for _ in range(V+1)]
    visited = [0] * (V+1)

    for _ in range(E):
        u, v = map(int, input().split())
        graph[u].append(v)
        graph[v].append(u)

    for i in range(1, V+1):
        if visited[i] == 0:
            result = bfs(i, 1)
            if not result:
                break
    if result:
        print("YES")
    else:
        print("NO")