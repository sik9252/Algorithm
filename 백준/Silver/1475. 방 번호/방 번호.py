import sys
input=sys.stdin.readline
        
def solution(N) :
    used = [0]* 10

    for n in N:
        num = int(n)
        if num == 6 or num == 9:
            if used[6] <= used[9]:
                used[6] += 1
            else:
                used[9] += 1
        else:
            used[num] += 1

    print(max(used))
        
if __name__ == "__main__" :
    N = input().rstrip()
    solution(N)