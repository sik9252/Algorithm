def solution(food):
    left = ''
    
    for i in range(1, len(food)):
        currentFood = food[i]
        left += str(i) * (food[i] // 2)
    
    return left + "0" + left[::-1]