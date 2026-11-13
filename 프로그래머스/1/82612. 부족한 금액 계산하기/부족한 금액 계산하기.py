def solution(price, money, count):
    currentMoney = money
    
    for c in range(1, count+1):
        currentMoney -= price * c

    return 0 if currentMoney >= 0 else abs(currentMoney)