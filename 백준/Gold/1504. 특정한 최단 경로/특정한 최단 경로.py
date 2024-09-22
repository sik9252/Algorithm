import sys
input=sys.stdin.readline
import heapq

N, E = map(int, input().split())
graph = [[] for _ in range(N+1)]

for _ in range(E):
    u, v, w = map(int, input().split())
    # 주의: 단방향 그래프 아님
    graph[u].append([w, v])
    graph[v].append([w, u])

v1, v2 = map(int, input().split())

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

original_dist = dijkstra(1)
v1_dist = dijkstra(v1)
v2_dist = dijkstra(v2)

v1_result = original_dist[v1] + v1_dist[v2] + v2_dist[N]
v2_result = original_dist[v2] + v2_dist[v1] + v1_dist[N]

result = min(v1_result, v2_result)

print(result if result < float('inf') else -1)