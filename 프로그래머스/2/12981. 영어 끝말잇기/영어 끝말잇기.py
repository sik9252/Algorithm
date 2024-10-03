import math

def solution(n, words):
    answer = []
    record = {}
    record[words[0]] = 1
    prev = words[0][-1]

    for i in range(1, len(words)):
        
        if words[i] in record or prev != words[i][0]:
            return [i%n+1, i//n+1]
        
        record[words[i]] = 1
        prev = words[i][-1]
        
    return [0, 0]