import sys
input=sys.stdin.readline

def solution(S) :
    alpha = [0] * 26

    for a in S:
        alpha[ord(a) - 97] += 1
        
    print(*alpha)
        
if __name__ == "__main__" :
    S = input().rstrip()
    solution(S)