import sys
input=sys.stdin.readline
import heapq

N = int(input())
M = int(input())
graph = [[] for _ in range(N+1)]
distance = [float('inf') for _ in range(N+1)]

for _ in range(M):
    s, d, w = map(int, input().split())
    graph[s].append([w, d])

start, end = map(int, input().split())

def dijkstra(start):
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

dijkstra(start)

print(distance[end])