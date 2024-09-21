import sys
input=sys.stdin.readline
import heapq


V, E = map(int, input().split())
start = int(input())
graph = [[] for _ in range(V+1)]
distance = [float('inf') for i in range(V+1)]

for _ in range(E):
    u, v, w = map(int, input().split())
    # 그래프 만들기
    graph[u].append([w, v])

def dijkstra(start):
    q = []
    # 우선순위 큐에 [0, 시작점] 추가
    heapq.heappush(q, [0, start])
    # 시작점과의 거리는 0이므로
    distance[start] = 0

    while q:
        current_weight, current_node = heapq.heappop(q)
        # 이전에 지난 정점이랑 같은 곳인데, 그때 계산한 거리값이랑 일치하지 않으면 건너뛰기
        if distance[current_node] != current_weight:
            continue
        # 지금 위치한 정점에서 갈 수 있는 모든 정점에 대해 반복하여 최단 거리 찾고 기록
        for nxt in graph[current_node]:
            nxt_weight = distance[current_node] + nxt[0]
            # 이전에 계산한 거리가 더 작으면 의미 X -> 건너뛰기
            if distance[nxt[1]] <= nxt_weight:
                continue
            # 지금 구한 거리가 더 작다면 갱신
            distance[nxt[1]] = nxt_weight
            # 갱신한 거리와 정점을 다시 힙에 삽입
            heapq.heappush(q, [distance[nxt[1]], nxt[1]])


dijkstra(start)

for i in range(1, V+1):
    if distance[i] == float('inf'):
        print('INF')
    else:
        print(distance[i])