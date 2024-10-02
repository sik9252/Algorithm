def solution(k, tangerine):
    answer = 0
    count = {}
    
    for i in tangerine:
        if i in count:
            count[i] += 1
        else:
            count[i] = 1
    
    count = dict(sorted(count.items(), key=lambda x : x[1], reverse=True))
    
    for value in count.values():
        k -= value
        answer += 1
        if k <= 0:
            break
        
    return answer
