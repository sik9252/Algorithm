import sys
input=sys.stdin.readline
import heapq

N = int(input())
M = int(input())
graph = [[] for _ in range(N+1)]
distance = [float('inf') for _ in range(N+1)]
# 최소 비용을 갖는 경로를 방문하는 순서를 저장하기 위한 배열
record = [0 for _ in range(N+1)]

for _ in range(M):
    u, v, w = map(int, input().split())
    graph[u].append([w, v])

start, end = map(int, input().split())

def dijkstra(start):
    q = []
    heapq.heappush(q, [0, start])
    distance[start] = 0

    while q:
        current_weight, current_node = heapq.heappop(q)

        if distance[current_node] != current_weight:
            continue

        # nxt = [next_weight, next_node]
        for nxt in graph[current_node]:
            nxt_weight = distance[current_node] + nxt[0]
            if distance[nxt[1]] <= nxt_weight:
                continue

            distance[nxt[1]] = nxt_weight
            heapq.heappush(q, [distance[nxt[1]], nxt[1]])
            # 값 갱신시 어디를 거쳐간건지 record 배열에 남기기
            record[nxt[1]] = current_node

dijkstra(start)

print(distance[end])

# 경로 복원: record 배열을 기반으로 시작점 == 끝점이 될때까지 추적
path = []
while end != start:
    path.append(end)
    end = record[end]
    
path.append(start)
path.reverse()

print(len(path))
print(*path)