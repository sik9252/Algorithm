def solution(bandage, health, attacks):
    
    castingTime = bandage[0]
    recoveryPerSecond = bandage[1]
    additionalRecovery = bandage[2]
    currentTime = 0
    currentHealth = health
    successStreakTime = 0
    
    while attacks and currentHealth > 0:        
        currentTime += 1
        
        # 공격 당함
        if currentTime == attacks[0][0]:
            attack = attacks.pop(0)
            currentHealth -= attack[1]
            successStreakTime = 0
        else:
            currentHealth += recoveryPerSecond
            successStreakTime += 1
        
        # 연속 성공해서 추가 회복
        if successStreakTime == castingTime:
            currentHealth += additionalRecovery
            successStreakTime = 0
        
        # 최대 체력 넘는지 확인
        if currentHealth > health:
            currentHealth = health
        
    
    return currentHealth if currentHealth > 0 else -1