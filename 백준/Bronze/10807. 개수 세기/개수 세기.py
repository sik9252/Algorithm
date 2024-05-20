import sys
input=sys.stdin.readline
        
def solution(N, nums, v) :
    print(nums.count(v))
        
if __name__ == "__main__" :
    N = int(input())
    nums = list(map(int, input().split()))
    v = int(input())
    solution(N, nums, v)