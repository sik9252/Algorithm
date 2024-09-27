# 할인율 조합 만들기
def makeDiscountType(l, depth, discountType):
    percent = [10, 20, 30, 40]
    
    if depth == len(l):
        discountType.append(l[:])
        return
    
    for p in percent:
        l[depth] += p
        makeDiscountType(l, depth + 1, discountType)
        l[depth] -= p

def solution(users, emoticons):
    answer = [0, 0]
    discountType = []
    emoticonLength = len(emoticons)
    
    makeDiscountType([0] * emoticonLength, 0, discountType)
    
    for i in range(len(discountType)):
        plus_user = 0
        total_purchase = 0
        
        for user in users:
            stand_percent = user[0]
            stand_total_price = user[1]
            user_purchase = 0

            for j in range(emoticonLength):
                if stand_percent <= discountType[i][j]:
                    user_purchase += emoticons[j] * (1 - discountType[i][j]/100)

            if user_purchase >= stand_total_price:
                plus_user += 1
            else:
                total_purchase += user_purchase
                
        if plus_user > answer[0]:
            answer = [plus_user, total_purchase]
        elif plus_user == answer[0]:
            if total_purchase > answer[1]:
                answer = [plus_user, total_purchase]
            
    return answer