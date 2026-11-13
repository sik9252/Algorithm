def div(num):
    return num / 2

def mul(num):
    return num * 3 + 1

def solution(num):
    answer = num
    count = 0
    
    while(answer != 1):
        if count >= 500:
            return -1
        if answer % 2 == 0:
            answer = div(answer)
        else:
            answer = mul(answer)
        count += 1
        
    return count