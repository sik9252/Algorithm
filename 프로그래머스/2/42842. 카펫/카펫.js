function solution(brown, yellow) {
    let answer = [];
    const area = brown + yellow;
    
    for (let w = 3; w <= area; w++) {
        if (area % w !== 0) continue;
        
        const h = area / w;
        
        if (w < h) continue;
        
        if((w - 2) * (h - 2) === yellow) {
            answer = [w, h];
        }
    }
    
    return answer;
}