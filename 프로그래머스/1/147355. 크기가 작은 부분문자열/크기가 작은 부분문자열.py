def solution(t, p):
    answer = 0
    
    slicing = len(p)
    arr = []
    
    for i in range(len(t)-(slicing-1)):
        arr.append(t[i:i+slicing])
        
    arr = sorted(arr)
    
    for num in arr:
        if int(p) >= int(num):
            answer += 1
    
    return answer