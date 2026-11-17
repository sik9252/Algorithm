def toTernary(n):
    if n == 0:
        return "0"
    
    result = ""
    
    while n > 0:
        result = str(n % 3) + result
        n //= 3
        
    return result

def solution(n):
    reversedTernary = toTernary(n)[::-1]
    return int(reversedTernary, 3)