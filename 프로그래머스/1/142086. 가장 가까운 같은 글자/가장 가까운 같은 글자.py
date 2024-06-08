def solution(s):
    wordLength = len(s)
    alphaPos = [[0 for j in range(2)] for i in range(26)]
    answer = [-1] * wordLength

    for i in range(wordLength):
        alphaPos[ord(s[i])-97][0] += 1
        
        if alphaPos[ord(s[i])-97][0] > 1:
            answer[i] = i - alphaPos[ord(s[i])-97][1]
        
        alphaPos[ord(s[i])-97][1] = i
    
    return answer