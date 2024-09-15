import sys
input=sys.stdin.readline

def dfs(row):
    global count

    if row == N:
        count += 1
        return

    # col은 열, y=x 는 row+col, y=-x는 row-col
    # 하지만 y=-x는 row-col시 음수 값이 나올 수 있고 +(N-1)을 해줘야 인덱스에 접근 가능
    for col in range(N):
        if not(l1[col] or l2[row+col] or l3[row-col+N-1]):
            l1[col] = l2[row+col] = l3[row-col+N-1] = True
            dfs(row + 1)
            l1[col] = l2[row+col] = l3[row-col+N-1] = False

N = int(input())
count = 0
# 열, y=x, y=-x 방향 점유 상태를 모두 확인
l1, l2, l3 = [False] * N, [False] * (2*N-1), [False] * (2*N-1)

dfs(0)
print(count)