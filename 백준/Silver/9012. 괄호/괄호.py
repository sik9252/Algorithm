import sys
input=sys.stdin.readline

T = int(input())

for _ in range(T):
    stack = []
    S = input().rstrip()
    
    for i in S:
        if i == '(':
            stack.append(i)
        elif i == ')':
            if stack:
                stack.pop()
            else:
                print('NO')
                break

    # for-else문: for문에서 한번도 break 발생한적 없으면 실행
    else:        
        if not stack:
            print('YES')
        else:
            print('NO')