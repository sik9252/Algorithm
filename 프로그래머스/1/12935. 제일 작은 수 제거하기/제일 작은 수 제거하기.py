def solution(arr):
    answer = []
    minNum = min(arr)
    
    for num in arr:
        if num != minNum:
            answer.append(num)
    
    return [-1] if len(answer) == 0 else answer