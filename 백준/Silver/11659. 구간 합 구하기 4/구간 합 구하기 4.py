import sys
input=sys.stdin.readline

def solution(N, M, numbers) :
    prefix_sum = [0]
    current_total = 0

    for num in numbers:
        current_total += num
        prefix_sum.append(current_total)

    for i in range(M):
        index_1, index_2 = map(int, input().split())
        print(prefix_sum[index_2] - prefix_sum[index_1 - 1])
        
if __name__ == "__main__" :
    N, M = map(int, input().split())
    numbers = list(map(int, input().split()))
    solution(N, M, numbers)