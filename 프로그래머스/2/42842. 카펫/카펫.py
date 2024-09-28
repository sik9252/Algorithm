def div(n):
    divisor = []
    for i in range(1, int(n**(1/2))+1):
        temp = []
        if n%i == 0:
            temp.append(i)
            if i**2 != n:
                temp.append(n//i)
        if len(temp) > 0:
            if len(temp) == 1:
                temp.append(temp[0])
            divisor.append(temp)
    return divisor

def solution(brown, yellow):
    
    answer = []
    
    divisor = div(brown + yellow)
    
    for d in divisor:
        width = d[1]
        height = d[0]
        
        if (width-2) * (height-2) == yellow:
            answer = [width, height]
    
    return answer