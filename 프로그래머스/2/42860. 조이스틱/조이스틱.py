def solution(name):
    alpha_move = 0
    cursor_move = len(name) - 1
    
    for i in range(len(name)):
        alpha_move += min(ord(name[i]) - ord('A'), ord('Z') - ord(name[i]) + 1)
        
        next = i + 1
        while next < len(name) and name[next] == 'A':
            next += 1
            
        cursor_move = min([cursor_move, 2 * i + len(name) - next, i + 2 * (len(name) - next)])
    
    return alpha_move + cursor_move