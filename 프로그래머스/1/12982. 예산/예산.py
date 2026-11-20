def solution(d, budget):
    answer = 0
    d.sort()
    
    for price in d:
        if budget >= price:
            budget -= price
            answer += 1
        else:
            break
        
    return answer