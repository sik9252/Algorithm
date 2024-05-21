import sys
input=sys.stdin.readline

N = int(input())

for _ in range(N):
    fir, sec = map(sorted, list(input().split()))
    if fir == sec:
        print('Possible')
    else:
        print('Impossible')