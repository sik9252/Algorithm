import sys
input=sys.stdin.readline

def dfs(arr):
    if len(s) == M:
        print(' '.join(map(str, s)))
        return

    for i in range(0, N):
        if not visited[i]:
            visited[i] = True
            s.append(arr[i])
            dfs(arr)
            s.pop()
            visited[i] = False

N, M = map(int, input().split())
arr = sorted(list(map(int, input().split())))
s = []
visited = [False] * (N+1)

dfs(arr)