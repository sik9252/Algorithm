import sys
input=sys.stdin.readline

def dfs(start):
    st = start + 1
    if len(s) == M:
        print(' '.join(map(str, s)))
        return

    for i in range(st, N+1):
        s.append(i)
        dfs(i)
        s.pop()

N, M = map(int, input().split())
s = []

dfs(0)