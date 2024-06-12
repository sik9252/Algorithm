def solution(babbling):
    answer = 0
    
    for b in babbling:
        aya, ye, woo, ma = 0, 0, 0, 0
        
        aya = b.count('aya') * 3
        ye = b.count('ye') * 2
        woo = b.count('woo') * 3
        ma = b.count('ma') * 2
        
        if aya + ye + woo + ma == len(b):
            if 'ayaaya' not in b and 'yeye' not in b and 'woowoo' not in b and 'mama' not in b:
                answer += 1
                
    return answer