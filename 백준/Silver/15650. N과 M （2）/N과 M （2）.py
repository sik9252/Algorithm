import sys
input=sys.stdin.readline

def dfs(start):
    st = start + 1
    
    if len(s) == M:
        print(' '.join(map(str, s)))
        return

    for i in range(st, N+1):
        if not visited[i]:
            visited[i] = True
            s.append(i)
            dfs(i)
            s.pop()
            visited[i] = False

N, M = map(int, input().split())
s = []
visited = [False] * (N+1)

dfs(0)