def solution(s):
    sArr = s.split(" ")
    newArr = []
    
    for str in sArr:
        newStr = ''
        for i in range(len(str)):
            if i == 0 or i % 2 == 0:
                newStr += str[i].upper()
            else:
                newStr += str[i].lower()
        newArr.append(newStr)
    
    return ' '.join(newArr)