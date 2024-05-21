import sys
input=sys.stdin.readline
import math

boys = [0] * 6
girls = [0] * 6

N, K = map(int, input().split())
for _ in range(N):
    S, Y = map(int, input().split())
    if S == 0:
        girls[Y-1] += 1
    else:
        boys[Y-1] += 1

girlsRoom = 0
boysRoom = 0

for total in girls:
    girlsRoom += math.ceil(total / K)

for total in boys:
    boysRoom += math.ceil(total / K)

print(girlsRoom + boysRoom)