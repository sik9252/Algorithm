def solution(s, n):
    answer = ''
    
    for c in s:
        if c == " ":
            answer += " "
            continue
        if c.isupper():
            base = ord('A')
        else:
            base = ord('a')
        
        result = (ord(c) - base + n) % 26 + base
        answer += chr(result)

    return answer