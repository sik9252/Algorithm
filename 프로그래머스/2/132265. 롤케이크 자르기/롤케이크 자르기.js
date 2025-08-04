function solution(topping) {
    var answer = 0;
    
    // 일단 오른쪽 조각에 모두 다 넣음
    const rightCount = new Map();
    
    for (const t of topping) {
        rightCount.set(t, (rightCount.get(t) || 0) + 1);
    }
    
    let rightUnique = rightCount.size;
    
    // 다 오른쪽에 있던것을 왼쪽 조각에 하나씩 추가하고, 오른쪽에서는 지워가며 개수 비교
    const leftCount = new Map();
    let leftUnique = 0;
    
    for (let i = 0; i < topping.length; i++) {
        const t = topping[i];
        
        // 왼쪽 조각에 추가
        leftCount.set(t, (leftCount.get(t) || 0) + 1);
        
        if (leftCount.get(t) === 1) {
            leftUnique++;
        }
        
        // 오른쪽 조각에서 제거
        rightCount.set(t, rightCount.get(t) - 1);
        
        if (rightCount.get(t) === 0) {
            rightCount.delete(t);
            rightUnique--;
        }
        
        if (leftUnique === rightUnique) {
            answer++;
        }
    }
    
    return answer;
}