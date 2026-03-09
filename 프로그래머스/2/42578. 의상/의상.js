function solution(clothes) {
    var answer = 1;
    const map = new Map();
    
    for (const [c, type] of clothes) {
        map.set(type, (map.get(type) || 0) + 1);
    }
    
    for (const v of map.values()) {
        answer *= (v + 1);
    }
    
    return answer - 1;
}