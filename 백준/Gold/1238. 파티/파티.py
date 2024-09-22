import sys
input=sys.stdin.readline
import heapq

# N: 정점(마을), M: 간선, X: 모임 가질 정점(마을)
N, M, X = map(int, input().split())
graph = [[] for _ in range(N+1)]

for _ in range(M):
    u, v, w = map(int, input().split())
    graph[u].append([w, v])

def dijkstra(start):
    distance = [float('inf') for _ in range(N+1)]
    q = []
    heapq.heappush(q, [0, start])
    distance[start] = 0

    while q:
        current_weight, current_node = heapq.heappop(q)

        if distance[current_node] != current_weight:
            continue

        for nxt in graph[current_node]:
            nxt_weight = distance[current_node] + nxt[0]

            if distance[nxt[1]] <= nxt_weight:
                continue

            distance[nxt[1]] = nxt_weight
            heapq.heappush(q, [distance[nxt[1]], nxt[1]])

    return distance

back_dist = dijkstra(X)

result = []
for i in range(1, N+1):
    go_dist = dijkstra(i)
    result.append(go_dist[X] + back_dist[i])

print(max(result))